'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, ArrowRight } from 'lucide-react';

export default function AcademyCtaSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <GraduationCap size={28} className="text-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Learn AI with Finkfold
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Practical, beginner-friendly AI courses — from tools and prompts to workflows, automation, and business implementation. Start learning today.
          </p>

          <Link
            href="/academy"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-medium hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-200 text-base"
          >
            Finkfold Academy
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
