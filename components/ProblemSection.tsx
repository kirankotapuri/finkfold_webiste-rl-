'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';

const problems = [
  {
    title: 'Site visit no-shows',
    description: 'Buyers ghost without confirmation systems.',
  },
  {
    title: 'Calls missed during showings',
    description: 'Agents can\'t answer while showing property.',
  },
  {
    title: 'Ad spend wasted on unqualified buyers',
    description: 'Paid leads with no budget or intent filtering.',
  },
];

export default function ProblemSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
            Your offer is great.<br />Your pipeline is broken.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-light-bg rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <X size={16} className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{problem.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
