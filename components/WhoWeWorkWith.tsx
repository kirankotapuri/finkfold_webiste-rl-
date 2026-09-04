'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const forItems = [
  'Real estate builders & developers',
  'Property agents & brokers',
  'New project launch teams',
];

const notForItems = [
  'Early-stage businesses still finding product-market fit',
  'Businesses not ready to invest in lead infrastructure',
];

export default function WhoWeWorkWith() {
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
            We Work With Businesses<br />That Are Ready to Grow.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Who this is for */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-light-bg rounded-xl p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-4">WHO THIS IS FOR</h3>
            <ul className="space-y-3">
              {forItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who this is not for */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-light-bg rounded-xl p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-4">WHO THIS IS NOT FOR</h3>
            <ul className="space-y-3">
              {notForItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
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
