import React from 'react';
import { Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#242426] border-t border-white/10 text-white/70 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center py-1">
              <img
                src="/images/coach_b_logo_official.jpeg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('IMG_7113')) {
                    target.src = '/assets/aistudio/IMG_7113_2483f0be.jpeg';
                  }
                }}
                alt="COACH B - Fitness • Nutrition • Wellness"
                className="h-12 sm:h-14 w-auto object-contain rounded-md shadow-md"
                loading="lazy"
              />
            </div>

            <p className="font-['Inter'] text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Luxury fitness, modern wellness, and bespoke athletic coaching. Empowering physical autonomy, grace, and enduring performance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#D41478] hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#D41478] hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#D41478] hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Mirror */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-['Inter']">
            <div className="space-y-3">
              <span className="font-['Sora'] font-bold text-white uppercase tracking-wider block">
                EXPLORE
              </span>
              <ul className="space-y-2 text-white/60">
                <li><a href="#welcome" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Meet Coach B</a></li>
                <li><a href="#philosophy" className="hover:text-white transition-colors">My Philosophy</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Coaching Programs</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-['Sora'] font-bold text-white uppercase tracking-wider block">
                PRACTICE
              </span>
              <ul className="space-y-2 text-white/60">
                <li><a href="#tips" className="hover:text-white transition-colors">Editorial Tips</a></li>
                <li><a href="#transformations" className="hover:text-white transition-colors">Transformations</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Book Session</a></li>
              </ul>
            </div>
          </div>

          {/* Quick Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right space-y-1">
              <span className="text-[11px] font-['Inter'] font-semibold tracking-widest text-[#D41478] uppercase block">
                GLOBAL HEADQUARTERS
              </span>
              <p className="text-xs text-white/60">
                Private Studio Sanctuary<br />
                San Francisco, California
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-[8px] bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-['Inter'] font-semibold text-white/80 hover:text-white transition-all cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Inter'] text-white/40">
          <p>© {new Date().getFullYear()} COACH B FITNESS &amp; MODERN WELLNESS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white/70 transition-colors">Client Concierge</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
