'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function CaseStudySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="case-study" className="bg-light-bg py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Real Business. Real Results.</h2>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-accent text-center">
            <p className="text-sm text-text-muted leading-relaxed">
              Our client is being onboarded. Results will be published here.
            </p>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
