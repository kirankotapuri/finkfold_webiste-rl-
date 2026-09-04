'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import type { ApiResponse } from '@/types/lead';

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    full_name: '',
    whatsapp: '',
    business_name: '',
    country: '',
    currency: '₹',
    monthly_revenue: '',
    biggest_challenge: '',
    referral_source: '',
    extra_details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [utmParams, setUtmParams] = useState({ utm_source: '', utm_medium: '', utm_campaign: '' });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    });
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.full_name || formData.full_name.trim().length < 2) {
      newErrors.full_name = 'Full name is required (minimum 2 characters)';
    }
    if (!formData.whatsapp || !formData.whatsapp.trim().startsWith('+')) {
      newErrors.whatsapp = 'WhatsApp number must start with + (country code)';
    } else {
      const digits = formData.whatsapp.replace(/\D/g, '');
      if (digits.length < 10) {
        newErrors.whatsapp = 'Please enter a valid WhatsApp number (min 10 digits)';
      }
    }
    if (!formData.business_name || formData.business_name.trim().length < 1) {
      newErrors.business_name = 'Business name is required';
    }
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...utmParams,
          page_url: window.location.href,
        }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setSubmitError('Too many requests. Please try again later.');
        } else if (data.errors) {
          setErrors(data.errors);
        } else {
          setSubmitError(data.message || 'Something went wrong. Please try again.');
        }
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError('Something went wrong. Please WhatsApp us directly or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const firstName = formData.full_name.trim().split(' ')[0] || '';

  if (isSuccess) {
    return (
      <section id="contact" className="bg-black py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={shouldReduceMotion ? undefined : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6"
          >
            <Check size={32} className="text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Thank you, {firstName}!
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Your audit request is received.<br />
            Kiran will WhatsApp you within 2 hours.<br />
            Please check your WhatsApp.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Ready to install your growth system?
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Book a free 30-minute pipeline audit. We&apos;ll map every leak in your current system and show you exactly what a fully automated capture engine looks like for your business.
            </p>
            <ul className="space-y-3">
              {[
                'Zero commitment required',
                'Every channel tracked and captured',
                'Personalized automated engine guide',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-xl p-6 sm:p-8 border border-border"
          >
            {submitError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6">
                <p className="text-red-400 text-sm">{submitError}</p>
              </div>
            )}

            <noscript>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6">
                <p className="text-yellow-400 text-sm">Please enable JavaScript to submit this form.</p>
              </div>
            </noscript>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label htmlFor="full_name" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  Full Name *
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.full_name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
                {errors.full_name && <p className="text-red-400 text-xs mt-1">{errors.full_name}</p>}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  WhatsApp Number *
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+65 9123 4567"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
                {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>}
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="business_name" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  Business Name *
                </label>
                <input
                  id="business_name"
                  name="business_name"
                  type="text"
                  placeholder="Acme Pte Ltd"
                  value={formData.business_name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
                {errors.business_name && <p className="text-red-400 text-xs mt-1">{errors.business_name}</p>}
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                >
                  <option value="">Select country</option>
                  <option value="Singapore">Singapore</option>
                  <option value="India">India</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Other">Other</option>
                </select>
                {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
              </div>

              {/* Monthly Revenue */}
              <div>
                <label htmlFor="monthly_revenue" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  Monthly Revenue *
                </label>
                <div className="flex flex-col xs:flex-row gap-2">
                  <select
                    id="currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full xs:w-20 bg-black border border-border rounded-lg px-2 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                  >
                    <option value="₹">₹ INR</option>
                    <option value="$">$ USD</option>
                    <option value="SGD">SGD</option>
                    <option value="AED">AED</option>
                  </select>
                  <select
                    id="monthly_revenue"
                    name="monthly_revenue"
                    value={formData.monthly_revenue}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="flex-1 bg-black border border-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                  >
                    <option value="">Select range</option>
                    <option value="Just starting out">Just starting out</option>
                    <option value="Below 5,00,000/month">Below 5,00,000/month</option>
                    <option value="5,00,000 to 20,00,000/month">5,00,000 to 20,00,000/month</option>
                    <option value="Above 20,00,000/month">Above 20,00,000/month</option>
                  </select>
                </div>
              </div>

              {/* Biggest Challenge */}
              <div>
                <label htmlFor="biggest_challenge" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  What is your biggest challenge in getting leads? *
                </label>
                <input
                  id="biggest_challenge"
                  name="biggest_challenge"
                  type="text"
                  placeholder="e.g. Not enough site visits, leads don't respond, ads not working..."
                  value={formData.biggest_challenge}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
              </div>

              {/* Referral Source */}
              <div>
                <label htmlFor="referral_source" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  How did you hear about us?
                </label>
                <input
                  id="referral_source"
                  name="referral_source"
                  type="text"
                  placeholder="Referral, Google, LinkedIn..."
                  value={formData.referral_source}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
              </div>

              {/* Extra Details */}
              <div>
                <label htmlFor="extra_details" className="block text-xs uppercase tracking-wider text-text-muted mb-1.5">
                  Tell us more about your business
                </label>
                <textarea
                  id="extra_details"
                  name="extra_details"
                  rows={3}
                  placeholder="Anything else we should know..."
                  value={formData.extra_details}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-saffron text-white py-3 rounded-lg font-medium hover:bg-saffron/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Request Free Audit →'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
