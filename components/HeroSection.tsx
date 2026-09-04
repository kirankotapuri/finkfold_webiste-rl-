'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-black min-h-[100dvh] flex items-center justify-center pt-14 sm:pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20">
        {/* Headline */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Stop Losing Buyer Leads.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We Build AI Systems That Capture, Qualify, and Convert Real Estate Buyers — 24 Hours a Day.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 text-base"
          >
            Book My Free Audit →
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="text-white px-8 py-3 text-base hover:text-text-secondary transition-colors"
          >
            See how it works
          </button>
        </motion.div>
      </div>
    </section>
  );
}
