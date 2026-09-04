'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-16 pb-8 relative overflow-hidden">
      {/* Large watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-bold text-[#1A1A1A] leading-none whitespace-nowrap">
          Finkfold
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Finkfold"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              AI-powered lead generation, WhatsApp qualification, and CRM automation — Stop chasing leads, start closing them.
            </p>
          </div>

          {/* Company */}
          <div className="lg:justify-self-center">
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-text-secondary text-sm hover:text-white transition-colors cursor-pointer">About</button></li>
              <li><button onClick={() => scrollTo('how-it-works')} className="text-text-secondary text-sm hover:text-white transition-colors cursor-pointer">Services</button></li>
              <li><button onClick={() => scrollTo('contact')} className="text-text-secondary text-sm hover:text-white transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:justify-self-end">
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('how-it-works')} className="text-text-secondary text-sm hover:text-white transition-colors cursor-pointer">Strategy</button></li>
              <li><button onClick={() => scrollTo('case-study')} className="text-text-secondary text-sm hover:text-white transition-colors cursor-pointer">Growth</button></li>
              <li><button onClick={() => scrollTo('contact')} className="text-text-secondary text-sm hover:text-white transition-colors cursor-pointer">Audit</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-text-muted text-xs">© 2026 Finkfold. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/terms" target="_blank" className="text-text-muted text-xs hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" target="_blank" className="text-text-muted text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" target="_blank" className="text-text-muted text-xs hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
