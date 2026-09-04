'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Hide on mobile when near contact section
  const [hideOnMobile, setHideOnMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setHideOnMobile(false);
        return;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setHideOnMobile(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || hideOnMobile) return null;

  return (
    <motion.a
      href="https://wa.me/REPLACE_WITH_REAL_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={shouldReduceMotion ? undefined : { scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <MessageCircle size={22} fill="white" className="sm:w-6 sm:h-6" />
      </div>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          className="pr-4 text-sm font-medium whitespace-nowrap"
        >
          Chat with us
        </motion.span>
      )}
    </motion.a>
  );
}
