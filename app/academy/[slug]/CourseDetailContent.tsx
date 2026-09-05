'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Check,
  ChevronDown,
  Play,
} from 'lucide-react';
import { useState } from 'react';
import type { CourseData, CourseSection } from '@/lib/courses';
import Navbar from '@/components/Navbar';
import CourseEnrollment from '@/components/CourseEnrollment';

function SectionAccordion({
  section,
  index,
}: {
  section: CourseSection;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
      >
        <div className="flex-1 pr-4">
          <h3 className="text-base font-semibold text-white">{section.title}</h3>
          <p className="text-text-muted text-xs mt-1">
            {section.lessons} lessons
          </p>
        </div>
        <ChevronDown
          size={18}
          className={`text-text-muted flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-border pt-4">
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {section.description}
          </p>
          <div className="space-y-2">
            {section.topics.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-3 text-sm text-text-muted"
              >
                <Play size={12} className="text-accent flex-shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CourseDetailContent({ course }: { course: CourseData }) {
  const shouldReduceMotion = useReducedMotion();
  const isComingSoon = course.tag === 'Coming Soon';

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left — Course info */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                <Link
                  href="/academy"
                  className="hover:text-white transition-colors"
                >
                  Finkfold Academy
                </Link>
                <span>/</span>
                <span className="text-text-secondary">Courses</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {course.title}
              </h1>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-text-muted mb-6">
                <span className="flex items-center gap-1.5">
                  <BookOpen size={15} />
                  {course.lessons} lessons
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={15} />
                  {course.students} students
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={15} className="text-yellow-500" />
                  {course.rating}
                </span>
              </div>

              {/* CTA */}
              {isComingSoon ? (
                <div className="inline-flex items-center gap-2 bg-card border border-border text-text-muted px-6 py-3 rounded-full text-base">
                  Coming Soon
                </div>
              ) : (
                <CourseEnrollment course={course} />
              )}
            </motion.div>

            {/* Right — Course preview card */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <GraduationCap size={56} className="text-accent/40" />
                </div>
                <div className="p-5">
                  {course.tag && (
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
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
                  <div className="mt-4 text-2xl font-bold text-white">
                    {course.price}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About this course */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl border border-border p-6 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              About this course
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {course.about}
            </p>

            {/* Learning objectives */}
            <h3 className="text-lg font-semibold text-white mb-3">
              Learning objectives
            </h3>
            <p className="text-text-muted text-sm mb-4">
              By the end of this course, you&apos;ll be able to:
            </p>
            <ul className="space-y-2.5 mb-8">
              {course.learning_objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="text-green-500 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>

            {/* Prerequisites */}
            <h3 className="text-lg font-semibold text-white mb-3">
              Prerequisites
            </h3>
            <ul className="space-y-2 mb-8">
              {course.prerequisites.map((prereq) => (
                <li key={prereq} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2 flex-shrink-0" />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {prereq}
                  </span>
                </li>
              ))}
            </ul>

            {/* Who is this for */}
            <h3 className="text-lg font-semibold text-white mb-3">
              Who this course is for
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {course.who_is_this_for}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course sections */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Course sections
            </h2>
            <p className="text-text-muted text-sm mb-8">
              {course.sections.length} sections • {course.lessons} lessons •{' '}
              {course.duration} total
            </p>

            <div className="space-y-3">
              {course.sections.map((section, i) => (
                <SectionAccordion key={section.title} section={section} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to start learning?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Enroll now and get instant access to all lessons, resources, and
            future updates.
          </p>
          {isComingSoon ? (
            <span className="inline-flex items-center gap-2 bg-card border border-border text-text-muted px-8 py-3.5 rounded-full text-base">
              Coming Soon — We&apos;ll notify you when it&apos;s ready
            </span>
          ) : (
            <CourseEnrollment course={course} />
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2026 Finkfold Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              target="_blank"
              className="text-text-muted text-xs hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-text-muted text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              target="_blank"
              className="text-text-muted text-xs hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
