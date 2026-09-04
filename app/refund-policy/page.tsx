import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy - Finkfold',
  description: 'Refund and Cancellation Policy for Finkfold Academy courses.',
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link href="/" className="text-accent text-sm hover:underline mb-8 inline-block">← Back to Home</Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Refund &amp; Cancellation Policy</h1>
        <p className="text-text-muted text-sm mb-10">Last Updated: July 6, 2026</p>

        <div className="prose prose-sm max-w-none text-black space-y-8">
          <p className="text-text-muted leading-relaxed">At Finkfold Academy, we want you to be confident in your decision to enroll in our courses. This policy outlines the terms for refunds and cancellations for all purchases made through finkfold.com and learn.finkfold.com.</p>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">1. Digital Product Nature</h2>
            <p className="text-text-muted leading-relaxed">Our courses are digital educational products delivered instantly upon payment confirmation, granting immediate access to video lessons, materials, and resources. Please review course descriptions, curriculum, and previews carefully before purchasing.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">2. Refund Eligibility</h2>
            <p className="text-text-muted leading-relaxed mb-2">We offer a <strong className="text-black">7-day money-back guarantee</strong> on all course purchases, subject to the following conditions:</p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>The refund request must be made within 7 calendar days of the original purchase date</li>
              <li>You must not have completed more than 20% of the course content at the time of the refund request</li>
              <li>The refund request must be submitted via email to <strong className="text-black">academy@finkfold.com</strong> with your order details (name, email used for purchase, and transaction ID)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">3. Non-Refundable Circumstances</h2>
            <p className="text-text-muted leading-relaxed mb-2">Refunds will <strong className="text-black">not</strong> be granted in the following situations:</p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>Requests made after 7 days from the date of purchase</li>
              <li>Course completion exceeding 20% at the time of request</li>
              <li>Change of mind after substantial course consumption</li>
              <li>Issues arising from the student&apos;s own technical setup (e.g., internet connectivity, device incompatibility) rather than a fault in our course delivery</li>
              <li>Any promotional, discounted, or bundled course offers explicitly marked as &ldquo;final sale&rdquo; or &ldquo;non-refundable&rdquo; at the time of purchase</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">4. Refund Process</h2>
            <p className="text-text-muted leading-relaxed mb-2">Once a refund request is approved:</p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>Refunds will be processed within <strong className="text-black">7–10 business days</strong> to the original payment method used during purchase</li>
              <li>Refunds are processed via Razorpay and may take additional time to reflect in your bank account or card statement depending on your bank&apos;s processing timelines</li>
              <li>Upon refund approval, your access to the course content will be revoked</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">5. Cancellation of Enrollment</h2>
            <p className="text-text-muted leading-relaxed">Since our courses provide immediate digital access upon purchase, there is no separate &ldquo;cancellation&rdquo; process distinct from the refund process outlined above. To cancel your enrollment and request a refund, follow the process in Section 2.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">6. Technical Issues and Support</h2>
            <p className="text-text-muted leading-relaxed">If you experience technical difficulties accessing your course (e.g., broken video links, login issues), please contact us at <strong className="text-black">academy@finkfold.com</strong> before requesting a refund. We are committed to resolving technical issues promptly, and most access problems can be fixed without needing a refund.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">7. Duplicate or Erroneous Payments</h2>
            <p className="text-text-muted leading-relaxed">If you were accidentally charged more than once for the same course, or charged in error, please contact us immediately at <strong className="text-black">academy@finkfold.com</strong> with your transaction details. Verified duplicate or erroneous charges will be refunded in full within 7–10 business days, regardless of the 7-day window stated in Section 2.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">8. Chargebacks</h2>
            <p className="text-text-muted leading-relaxed">We encourage students to contact us directly to resolve any payment or access disputes before initiating a chargeback with your bank or card issuer. Unauthorized chargebacks filed without first contacting us may result in suspension of access to purchased content while the matter is investigated.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">9. Contact Us</h2>
            <p className="text-text-muted leading-relaxed">For all refund, cancellation, or payment-related queries, please contact:</p>
            <p className="text-text-muted leading-relaxed mt-2"><strong className="text-black">Finkfold Academy</strong><br />Email: academy@finkfold.com<br />Website: https://finkfold.com/academy</p>
            <p className="text-text-muted leading-relaxed mt-2">We aim to respond to all refund and support inquiries within 24–48 hours.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
