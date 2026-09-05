'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Loader2, X } from 'lucide-react';
import type { CourseData } from '@/lib/courses';

type CourseEnrollmentProps = {
  course: CourseData;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

export default function CourseEnrollment({ course }: CourseEnrollmentProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadRazorpay = () => new Promise<boolean>((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

  const startPayment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const customer = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      whatsapp: String(formData.get('whatsapp') || '').trim(),
    };

    try {
      const checkoutLoaded = await loadRazorpay();
      if (!checkoutLoaded) throw new Error('Unable to load payment checkout. Please try again.');

      const orderResponse = await fetch('/api/academy/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: course.slug, customer }),
      });
      const order = await orderResponse.json();
      if (!orderResponse.ok) throw new Error(order.message || 'Unable to start payment.');

      const Razorpay = window.Razorpay;
      if (!Razorpay) throw new Error('Payment checkout is unavailable. Please try again.');
      const razorpay = new Razorpay({
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: 'Finkfold Academy',
        description: course.title,
        order_id: order.orderId,
        prefill: customer,
        theme: { color: '#635bff' },
        handler: async (response: Record<string, string>) => {
          const verifyResponse = await fetch('/api/academy/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...response, slug: course.slug }),
          });
          const result = await verifyResponse.json();
          if (!verifyResponse.ok) throw new Error(result.message || 'Payment verification failed.');
          window.location.href = result.accessUrl;
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      razorpay.open();
    } catch (paymentError) {
      setError(paymentError instanceof Error ? paymentError.message : 'Payment could not be started.');
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-medium hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-200 text-base"
      >
        Enroll in Course — {course.price}
        <ArrowRight size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white">Enroll securely</h2>
                <p className="text-sm text-text-secondary mt-1">Enter your details before payment.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="text-text-muted hover:text-white" aria-label="Close enrollment form">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={startPayment} className="space-y-4">
              <input name="name" required placeholder="Full name" className="w-full rounded-lg border border-border bg-black px-4 py-3 text-white outline-none focus:border-accent" />
              <input name="email" required type="email" placeholder="Email address" className="w-full rounded-lg border border-border bg-black px-4 py-3 text-white outline-none focus:border-accent" />
              <input name="whatsapp" required placeholder="WhatsApp number" className="w-full rounded-lg border border-border bg-black px-4 py-3 text-white outline-none focus:border-accent" />
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button disabled={loading} type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-medium text-white disabled:opacity-60">
                {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                {loading ? 'Opening payment...' : `Continue to payment — ${course.price}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}