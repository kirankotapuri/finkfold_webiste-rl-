import { NextRequest, NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { slug, customer } = await request.json();
    if (!slug || !customer?.name || !customer?.email || !customer?.whatsapp) {
      return NextResponse.json({ message: 'Name, email, and WhatsApp are required.' }, { status: 400 });
    }

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!razorpayKeyId || !razorpayKeySecret) {
      return NextResponse.json({ message: 'Payment is not configured yet.' }, { status: 503 });
    }

    const supabase = getServiceClient();
    const { data: course, error: courseError } = await supabase
      .from('academy_courses')
      .select('slug, title, price, published')
      .eq('slug', slug)
      .eq('published', true)
      .single();
    if (courseError || !course) return NextResponse.json({ message: 'Course is unavailable.' }, { status: 404 });

    const amountInr = Number(process.env.ACADEMY_COURSE_PRICE_INR || course.price.replace(/[^0-9.]/g, ''));
    if (!Number.isFinite(amountInr) || amountInr <= 0) {
      return NextResponse.json({ message: 'Course price is not configured.' }, { status: 500 });
    }

    const auth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString('base64');
    const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: Math.round(amountInr * 100), currency: 'INR', receipt: `academy_${Date.now()}`, notes: { slug, email: customer.email } }),
    });
    const order = await razorpayResponse.json();
    if (!razorpayResponse.ok) return NextResponse.json({ message: 'Unable to create payment order.' }, { status: 502 });

    const { error: enrollmentError } = await supabase.from('academy_enrollments').insert({
      course_slug: slug,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_whatsapp: customer.whatsapp,
      razorpay_order_id: order.id,
      status: 'pending',
    });
    if (enrollmentError) {
      console.error('Academy enrollment insert error:', enrollmentError);
      return NextResponse.json({ message: 'Unable to save enrollment details.' }, { status: 500 });
    }

    return NextResponse.json({ key: razorpayKeyId, orderId: order.id, amount: order.amount, currency: order.currency });
  } catch {
    return NextResponse.json({ message: 'Unable to start payment.' }, { status: 500 });
  }
}