import { NextRequest, NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import { validateLeadForm, sanitizeInput } from '@/lib/validations';

export const dynamic = 'force-dynamic';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return false;
  }

  if (entry.count >= 3) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate required fields
    const validationErrors = validateLeadForm(body);
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validationErrors },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      full_name: sanitizeInput(body.full_name || ''),
      whatsapp: sanitizeInput(body.whatsapp || ''),
      business_name: sanitizeInput(body.business_name || ''),
      country: sanitizeInput(body.country || ''),
      monthly_revenue: sanitizeInput(body.monthly_revenue || ''),
      biggest_challenge: sanitizeInput(body.biggest_challenge || ''),
      referral_source: sanitizeInput(body.referral_source || ''),
      extra_details: sanitizeInput(body.extra_details || ''),
      utm_source: sanitizeInput(body.utm_source || ''),
      utm_medium: sanitizeInput(body.utm_medium || ''),
      utm_campaign: sanitizeInput(body.utm_campaign || ''),
      page_url: sanitizeInput(body.page_url || ''),
      status: 'new',
    };

    // Insert into Supabase
    const supabase = getServiceClient();
    const { data, error } = await supabase
      .from('leads')
      .insert(sanitizedData)
      .select('id')
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { success: false, message: 'Unable to process your request. Please try again.' },
        { status: 500 }
      );
    }

    // Trigger n8n webhook (fire and forget)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      const firstName = sanitizedData.full_name.split(' ')[0] || sanitizedData.full_name;

      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: data.id,
          full_name: sanitizedData.full_name,
          first_name: firstName,
          whatsapp: sanitizedData.whatsapp,
          business_name: sanitizedData.business_name,
          country: sanitizedData.country,
          monthly_revenue: sanitizedData.monthly_revenue,
          biggest_challenge: sanitizedData.biggest_challenge,
          referral_source: sanitizedData.referral_source,
          extra_details: sanitizedData.extra_details,
          utm_source: sanitizedData.utm_source,
          utm_medium: sanitizedData.utm_medium,
          utm_campaign: sanitizedData.utm_campaign,
          submitted_at: new Date().toISOString(),
          source: 'finkfold.com',
        }),
      }).catch(() => {
        // Silently fail — n8n webhook errors should not affect user experience
      });
    }

    return NextResponse.json(
      { success: true, message: 'Audit request received', lead_id: data.id },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
