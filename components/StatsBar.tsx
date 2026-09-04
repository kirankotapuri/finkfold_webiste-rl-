'use client';

import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '72hrs', label: 'To your first leads' },
];

export default function StatsBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-light-bg py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
