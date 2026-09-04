import { getAllCourses, getCourseBySlug } from '@/lib/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CourseDetailContent from './CourseDetailContent';

export const revalidate = 3600;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);
  if (!course) return {};

  const title = `${course.title} - Finkfold Academy`;

  return {
    title,
    description: course.description,
    keywords: `${course.title}, Finkfold Academy, AI course, ${course.title} course`,
    openGraph: {
      title,
      description: course.description,
      type: 'website',
      url: `https://finkfold.com/academy/${course.slug}`,
      siteName: 'Finkfold',
      images: [
        {
          url: 'https://finkfold.com/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: course.description,
      images: ['https://finkfold.com/og-image.png'],
    },
    alternates: {
      canonical: `https://finkfold.com/academy/${course.slug}`,
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
}

export default async function CoursePage({ params }: Props) {
  const course = await getCourseBySlug(params.slug);
  if (!course) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: `https://finkfold.com/academy/${course.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Finkfold Academy',
      url: 'https://finkfold.com/academy',
    },
    offers: {
      '@type': 'Offer',
      price: course.price.replace(/[^0-9.]/g, ''),
      priceCurrency: 'INR',
      availability: course.tag === 'Coming Soon'
        ? 'https://schema.org/PreOrder'
        : 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      reviewCount: course.students.replace(/[^0-9]/g, '') || '1',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: course.duration,
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://finkfold.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Academy',
        item: 'https://finkfold.com/academy',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: course.title,
        item: `https://finkfold.com/academy/${course.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <CourseDetailContent course={course} />
    </>
  );
}
