'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Search, Zap, Calendar } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: 'STEP 1',
    title: 'Free Revenue Audit',
    description: 'We analyse your setup and show you exactly where revenue is leaking.',
  },
  {
    icon: Zap,
    step: 'STEP 2',
    title: 'We Build the System',
    description: 'WhatsApp AI qualification + CRM automation deployed in 7–14 days.',
  },
  {
    icon: Calendar,
    step: 'STEP 3',
    title: 'Leads Flow. We Optimise.',
    description: 'Every Monday you receive a performance report.',
  },
];

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-text-muted text-xs uppercase tracking-widest mb-3">THE PROCESS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How Finkfold Works</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-accent" />
              </div>
              <p className="text-text-muted text-xs uppercase tracking-wider mb-2">{item.step}</p>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
