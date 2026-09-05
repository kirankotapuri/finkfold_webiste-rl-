import { getSupabase } from './supabase';

export interface CourseSection {
  title: string;
  lessons: number;
  description: string;
  topics: string[];
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  lessons: number;
  price: string;
  tag: string;
  link: string;
  published: boolean;
  sort_order: number;
  about: string;
  learning_objectives: string[];
  prerequisites: string[];
  who_is_this_for: string;
  sections: CourseSection[];
}

export async function getAllCourses(): Promise<CourseData[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('academy_courses')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true });

  if (error || !data) return [];
  return data as CourseData[];
}

export async function getCourseBySlug(slug: string): Promise<CourseData | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('academy_courses')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !data) return null;
  return data as CourseData;
}
