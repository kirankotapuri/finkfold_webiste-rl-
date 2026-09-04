import type { MetadataRoute } from 'next';
import { getAllCourses } from '@/lib/courses';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = await getAllCourses();

  const courseUrls: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `https://finkfold.com/academy/${course.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    {
      url: 'https://finkfold.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://finkfold.com/academy',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...courseUrls,
    {
      url: 'https://finkfold.com/terms',
      lastModified: '2026-07-06',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: 'https://finkfold.com/privacy-policy',
      lastModified: '2026-07-06',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: 'https://finkfold.com/refund-policy',
      lastModified: '2026-07-06',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
