import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import ServicesSection from '@/components/ServicesSection';
import CaseStudySection from '@/components/CaseStudySection';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import ComparisonSection from '@/components/ComparisonSection';
import AcademyCtaSection from '@/components/AcademyCtaSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Finkfold',
  url: 'https://finkfold.com',
  logo: 'https://finkfold.com/logo.png',
  description:
    'Finkfold builds done-for-you lead generation systems for real estate builders and agents in India. WhatsApp qualification and CRM automation.',
  foundingDate: '2026',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <HowItWorks />
      <ServicesSection />
      <CaseStudySection />
      <WhoWeWorkWith />
      <ComparisonSection />
      <AcademyCtaSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
