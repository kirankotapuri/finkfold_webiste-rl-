'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare, MapPin, Image, Database } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI WhatsApp Chatbot',
    description: 'Qualifies buyer budget, location, timeline; books site visits.',
  },
  {
    icon: Database,
    title: 'CRM + Automation',
    description: 'Every lead tracked and followed up automatically.',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile Automation',
    description: 'Optimises listings, responds to reviews.',
  },
  {
    icon: Image,
    title: 'Meta Ads + AI Creative',
    description: 'AI-generated creatives targeting exact audiences.',
  },
];

export default function ServicesSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-black">One System. Every Lead Captured.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border-light rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <service.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
