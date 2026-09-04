'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to deploy the system?',
    answer: 'We deploy your WhatsApp AI qualification and CRM automation within 7–14 days. Google Business Profile fixes show results within the first 7–10 days.',
  },
  {
    question: 'Do I need to replace my existing CRM or software?',
    answer: "No. We integrate with your existing tools. If you don't have a CRM, we set one up for you as part of the build.",
  },
  {
    question: 'What happens during the free audit?',
    answer: 'We spend 30 minutes analysing your current setup — Google presence, WhatsApp response rate, ad spend efficiency, and lead follow-up process. We show you exactly where buyer leads are leaking before you commit to anything.',
  },
  {
    question: 'Will the AI chatbot sound robotic to buyers?',
    answer: "No. Our AI WhatsApp chatbot is trained to sound natural and conversational. It qualifies buyers on budget, location preference, and timeline — then books site visits automatically.",
  },
  {
    question: 'Is this suitable for builders or agents?',
    answer: 'Both. We work with real estate builders launching new projects and property agents/brokers looking to automate lead qualification and follow-up.',
  },
  {
    question: 'What kind of support do you provide after launch?',
    answer: 'Every Monday you receive a performance report. We monitor all systems, respond to issues within 24 hours, and optimise weekly based on live data.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Questions We Get Asked.</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border-light rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-sm font-medium text-black pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-text-muted flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    initial={shouldReduceMotion ? { height: 'auto' } : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
