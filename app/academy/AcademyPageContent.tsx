'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Star, ArrowRight, GraduationCap } from 'lucide-react';
import type { CourseData } from '@/lib/courses';
import Navbar from '@/components/Navbar';

function CourseCard({ course, index }: { course: CourseData; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const isComingSoon = course.tag === 'Coming Soon';

  return (
    <Link href={`/academy/${course.slug}`}>
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-card rounded-xl border border-border overflow-hidden hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 flex flex-col h-full cursor-pointer"
      >
      {/* Course image placeholder */}
      <div className="h-44 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative">
        <GraduationCap size={48} className="text-accent/40" />
        {course.tag && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
              course.tag === 'Flagship'
                ? 'bg-saffron text-white'
                : course.tag === 'Bestseller'
                ? 'bg-saffron text-white'
                : course.tag === 'New'
                ? 'bg-green-500 text-white'
                : course.tag === 'Popular'
                ? 'bg-accent text-white'
                : 'bg-white/10 text-text-secondary'
            }`}
          >
            {course.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white mb-2">{course.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} />
            {course.students}
          </span>
          <span className="flex items-center gap-1">
            <Star size={13} className="text-yellow-500" />
            {course.rating}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-lg font-bold text-white">{course.price}</span>
          {isComingSoon ? (
            <span className="text-text-muted text-sm">Coming Soon</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-all duration-200">
              View Course
              <ArrowRight size={14} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
    </Link>
  );
}

export default function AcademyPageContent({ courses }: { courses: CourseData[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-6">
              <GraduationCap size={16} className="text-accent" />
              <span className="text-text-secondary text-sm">Finkfold Academy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Learn AI. Build Systems.<br />
              <span className="text-accent">Grow Business.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Practical, no-fluff courses on AI automation, lead generation, and business growth — built by people who actually run these systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">All Courses</h2>
            <p className="text-text-secondary text-sm">
              Choose a course and start building real-world AI systems today.
            </p>
          </motion.div>

          <div className="grid xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">© 2026 Finkfold Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" target="_blank" className="text-text-muted text-xs hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" target="_blank" className="text-text-muted text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" target="_blank" className="text-text-muted text-xs hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
