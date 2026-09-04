import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Finkfold',
  description: 'Terms and Conditions for Finkfold and Finkfold Academy.',
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link href="/" className="text-accent text-sm hover:underline mb-8 inline-block">← Back to Home</Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Terms &amp; Conditions</h1>
        <p className="text-text-muted text-sm mb-10">Last Updated: July 6, 2026</p>

        <div className="prose prose-sm max-w-none text-black space-y-8">
          <p>Welcome to Finkfold. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of finkfold.com, Finkfold Academy (learn.finkfold.com), and any courses, content, or services provided by Finkfold (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By accessing our website or purchasing our courses, you agree to be bound by these Terms.</p>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">1. About Finkfold</h2>
            <p className="text-text-muted leading-relaxed">Finkfold is an AI automation and lead generation agency operating as a Sole Proprietorship registered under Udyam Registration Number UDYAM-AP-08-0120994, based in Nellore, Andhra Pradesh, India. Finkfold Academy is our educational division, offering courses on AI automation, lead generation, and related digital marketing topics.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">2. Eligibility</h2>
            <p className="text-text-muted leading-relaxed">By using our services, you confirm that you are at least 18 years of age or are using our services under the supervision of a parent or guardian. Our courses are intended for individuals seeking to learn business and technical skills and are not directed at children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">3. Course Enrollment and Access</h2>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>Upon successful payment, you will receive access credentials to the purchased course via email</li>
              <li>Course access is granted for personal, non-commercial use only</li>
              <li>You may not share, resell, distribute, or publicly post course content, videos, or materials without our written permission</li>
              <li>We reserve the right to revoke access if these Terms are violated, including unauthorized sharing of course materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">4. Payments</h2>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>All payments are processed securely through our payment partner, Razorpay</li>
              <li>Prices for courses are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise</li>
              <li>We reserve the right to change course pricing at any time; changes will not affect already-completed purchases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">5. Refund and Cancellation Policy</h2>
            <p className="text-text-muted leading-relaxed">Please refer to our separate <Link href="/refund-policy" className="text-accent hover:underline">Refund &amp; Cancellation Policy</Link> for detailed terms regarding refunds and cancellations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">6. Intellectual Property</h2>
            <p className="text-text-muted leading-relaxed">All course content, including videos, text, graphics, logos, and materials, is the intellectual property of Finkfold and is protected under applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">7. User Conduct</h2>
            <p className="text-text-muted leading-relaxed mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems, other users&apos; accounts, or course content beyond your purchased access</li>
              <li>Upload or transmit any harmful code, viruses, or malicious content</li>
              <li>Harass, abuse, or harm other students or staff in any community or discussion features associated with our courses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">8. Disclaimer of Warranties</h2>
            <p className="text-text-muted leading-relaxed">Our courses and content are provided for educational purposes. While we strive to provide accurate, high-quality, and practical information, we make no guarantees regarding specific business outcomes, income, or results from applying the concepts taught. Your success depends on your own effort, market conditions, and other factors beyond our control.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">9. Limitation of Liability</h2>
            <p className="text-text-muted leading-relaxed">To the maximum extent permitted by law, Finkfold shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website, courses, or services, including but not limited to loss of profits, data, or business opportunities.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">10. Third-Party Services</h2>
            <p className="text-text-muted leading-relaxed">Our courses may reference or integrate with third-party tools and platforms (such as n8n, Meta Ads, WhatsApp Business, Google, and others). We are not responsible for the availability, functionality, pricing, or policies of these third-party services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">11. Modifications to Services</h2>
            <p className="text-text-muted leading-relaxed">We reserve the right to modify, suspend, or discontinue any part of our website or course offerings at any time without prior notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">12. Governing Law</h2>
            <p className="text-text-muted leading-relaxed">These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Nellore, Andhra Pradesh, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">13. Changes to These Terms</h2>
            <p className="text-text-muted leading-relaxed">We may update these Terms from time to time. Continued use of our website or courses after changes are posted constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">14. Contact Us</h2>
            <p className="text-text-muted leading-relaxed">For questions regarding these Terms, please contact:</p>
            <p className="text-text-muted leading-relaxed mt-2"><strong className="text-black">Finkfold</strong><br />Email: admin@finkfold.com<br />Website: https://finkfold.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
