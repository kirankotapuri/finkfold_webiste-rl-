'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (isHome) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const goHome = () => {
    setMobileOpen(false);
    if (isHome) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={goHome}>
            <Image
              src="/logo.png"
              alt="Finkfold"
              width={180}
              height={50}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button onClick={() => scrollTo('hero')} className="nav-link text-text-secondary hover:text-white transition-colors text-sm">
              Home
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="nav-link text-text-secondary hover:text-white transition-colors text-sm">
              How it works
            </button>
            <button onClick={() => scrollTo('case-study')} className="nav-link text-text-secondary hover:text-white transition-colors text-sm">
              Results
            </button>
            <button onClick={() => scrollTo('contact')} className="nav-link text-text-secondary hover:text-white transition-colors text-sm">
              Contact
            </button>
            <Link href="/academy" className="nav-link text-accent hover:text-white transition-colors text-sm font-medium">
              Academy
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.finkfold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-accent/40 transition-all duration-200"
            >
              Client Login
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Book a free audit
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-black border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
            <button onClick={() => scrollTo('hero')} className="block w-full text-left text-text-secondary hover:text-white text-sm py-3">
              Home
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left text-text-secondary hover:text-white text-sm py-3">
              How it works
            </button>
            <button onClick={() => scrollTo('case-study')} className="block w-full text-left text-text-secondary hover:text-white text-sm py-3">
              Results
            </button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left text-text-secondary hover:text-white text-sm py-3">
              Contact
            </button>
            <Link href="/academy" onClick={() => setMobileOpen(false)} className="block w-full text-left text-accent hover:text-white text-sm font-medium py-3">
              Academy
            </Link>
            <a
              href="https://app.finkfold.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left text-text-secondary hover:text-white text-sm py-3"
            >
              Client Login
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full bg-white text-black px-5 py-3 rounded-full text-sm font-medium mt-3"
            >
              Book a free audit
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
