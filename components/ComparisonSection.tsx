'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const oldWay = [
  'Manual call handling',
  'Leads going cold',
  'Zero ad follow-up infrastructure',
];

const finkfoldWay = [
  'AI infrastructure live in 30 days',
  '100% automated capture',
  '24/7/365 zero manual load operation',
];

export default function ComparisonSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 border border-border-light hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-6">THE OLD WAY</h3>
            <ul className="space-y-4">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Finkfold Way */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-accent/30 hover:shadow-md hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-6">THE FINKFOLD WAY</h3>
            <ul className="space-y-4">
              {finkfoldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
