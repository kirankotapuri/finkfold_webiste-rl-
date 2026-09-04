import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Finkfold',
  description: 'Privacy Policy for Finkfold and Finkfold Academy.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link href="/" className="text-accent text-sm hover:underline mb-8 inline-block">← Back to Home</Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-10">Last Updated: July 6, 2026</p>

        <div className="prose prose-sm max-w-none text-black space-y-8">
          <p className="text-text-muted leading-relaxed">Finkfold (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates finkfold.com and Finkfold Academy (learn.finkfold.com), providing AI automation services and educational courses. This Privacy Policy explains how we collect, use, and protect your information when you use our website, purchase our courses, or interact with our services.</p>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">1. Information We Collect</h2>
            <p className="text-text-muted leading-relaxed mb-2"><strong className="text-black">Personal Information you provide to us:</strong></p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed mb-4">
              <li>Name, email address, and phone number when you fill out a contact form, enroll in a course, or subscribe to updates</li>
              <li>Payment information processed securely through our payment partner, Razorpay (we do not store your card, UPI, or banking details on our own servers)</li>
              <li>Course progress, quiz responses, and communication history when you use Finkfold Academy</li>
            </ul>
            <p className="text-text-muted leading-relaxed mb-2"><strong className="text-black">Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>IP address, browser type, device information, and pages visited, collected via standard analytics tools</li>
              <li>Cookies used to improve site functionality and remember your preferences (see Section 6)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">2. How We Use Your Information</h2>
            <p className="text-text-muted leading-relaxed mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>Process course enrollments and deliver purchased content</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send transactional emails (enrollment confirmations, course updates, receipts)</li>
              <li>Send promotional communications about new courses or services, which you may opt out of at any time</li>
              <li>Improve our website, courses, and services based on usage patterns</li>
              <li>Comply with legal and tax obligations under Indian law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">3. How We Share Your Information</h2>
            <p className="text-text-muted leading-relaxed mb-2">We do not sell your personal information to third parties. We share information only with:</p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li><strong className="text-black">Payment processors</strong> (Razorpay) to complete transactions securely</li>
              <li><strong className="text-black">Service providers</strong> (such as email delivery, hosting, and course platform providers) who help us operate our business, bound by confidentiality obligations</li>
              <li><strong className="text-black">Legal authorities</strong> where required by law, court order, or to protect our legal rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">4. Data Storage and Security</h2>
            <p className="text-text-muted leading-relaxed">Your data is stored using industry-standard security practices, including encrypted connections (HTTPS) and access-controlled databases. While we take reasonable steps to protect your information, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">5. Data Retention</h2>
            <p className="text-text-muted leading-relaxed">We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Course-related data is retained for the duration of your access period plus a reasonable period thereafter for support purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">6. Cookies</h2>
            <p className="text-text-muted leading-relaxed">Our website uses cookies to enhance your browsing experience, remember login sessions, and analyze site traffic. You can disable cookies through your browser settings, though this may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">7. Your Rights</h2>
            <p className="text-text-muted leading-relaxed mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 text-text-muted space-y-2 leading-relaxed">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information, subject to legal and contractual retention requirements</li>
              <li>Opt out of marketing communications at any time via the unsubscribe link in our emails</li>
            </ul>
            <p className="text-text-muted leading-relaxed mt-2">To exercise these rights, contact us at <strong className="text-black">admin@finkfold.com</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">8. Third-Party Links</h2>
            <p className="text-text-muted leading-relaxed">Our website and courses may contain links to third-party websites (such as YouTube for course video content). We are not responsible for the privacy practices of these third-party sites and encourage you to review their respective privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">9. Children&apos;s Privacy</h2>
            <p className="text-text-muted leading-relaxed">Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">10. Changes to This Policy</h2>
            <p className="text-text-muted leading-relaxed">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of our services after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">11. Contact Us</h2>
            <p className="text-text-muted leading-relaxed">For any questions or concerns regarding this Privacy Policy, please contact:</p>
            <p className="text-text-muted leading-relaxed mt-2"><strong className="text-black">Finkfold</strong><br />Email: admin@finkfold.com<br />Website: https://finkfold.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
