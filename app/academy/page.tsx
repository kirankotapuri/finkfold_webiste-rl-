import type { Metadata } from 'next';
import AcademyPageContent from './AcademyPageContent';
import { getAllCourses } from '@/lib/courses';

export const revalidate = 3600; // revalidate every hour

export const metadata: Metadata = {
  title: 'Finkfold Academy - Learn AI Automation & Lead Generation',
  description:
    'Master AI automation, lead generation, and business growth with practical courses from Finkfold Academy. Learn WhatsApp AI, CRM automation, and more.',
  keywords:
    'Finkfold Academy, AI automation course, lead generation course, WhatsApp AI course, CRM automation training, finkfold academy courses',
  openGraph: {
    title: 'Finkfold Academy - Learn AI Automation & Lead Generation',
    description:
      'Master AI automation, lead generation, and business growth with practical courses from Finkfold Academy.',
    type: 'website',
    url: 'https://finkfold.com/academy',
    siteName: 'Finkfold',
    images: [
      {
        url: 'https://finkfold.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Finkfold Academy - AI Automation Courses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finkfold Academy - Learn AI Automation & Lead Generation',
    description:
      'Master AI automation, lead generation, and business growth with practical courses from Finkfold Academy.',
    images: ['https://finkfold.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://finkfold.com/academy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default async function AcademyPage() {
  const courses = await getAllCourses();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Finkfold Academy',
    description:
      'Master AI automation, lead generation, and business growth with practical courses from Finkfold Academy.',
    url: 'https://finkfold.com/academy',
    sameAs: [],
    provider: {
      '@type': 'Organization',
      name: 'Finkfold',
      url: 'https://finkfold.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademyPageContent courses={courses} />
    </>
  );
}
