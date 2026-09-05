import { NextRequest, NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import crypto from 'node:crypto';

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, slug } = await request.json();
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret || !razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !slug) {
      return NextResponse.json({ message: 'Invalid payment verification request.' }, { status: 400 });
    }

    const expectedSignature = crypto.createHmac('sha256', secret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
    if (expectedSignature !== razorpay_signature) return NextResponse.json({ message: 'Payment verification failed.' }, { status: 400 });

    const supabase = getServiceClient();
    const { data: enrollment } = await supabase.from('academy_enrollments').update({ razorpay_payment_id, status: 'paid', paid_at: new Date().toISOString() }).eq('razorpay_order_id', razorpay_order_id).select('id').single();
    if (!enrollment) return NextResponse.json({ message: 'Enrollment record not found.' }, { status: 404 });

    const { data: course } = await supabase.from('academy_courses').select('link').eq('slug', slug).eq('published', true).single();
    if (!course?.link) return NextResponse.json({ message: 'Course access link is unavailable.' }, { status: 500 });
    return NextResponse.json({ accessUrl: course.link });
  } catch {
    return NextResponse.json({ message: 'Payment verification failed.' }, { status: 500 });
  }
}