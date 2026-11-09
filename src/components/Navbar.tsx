import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Programs', href: '#programs' },
    { label: 'Tips', href: '#tips' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Official Provided COACH B Logo (Unmodified) */}
        <a
          href="#"
          className="flex items-center shrink-0 group py-1"
          aria-label="Coach B Home"
        >
          <img
            src="/images/coach_b_logo_official.jpeg"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('IMG_7113')) {
                target.src = '/assets/aistudio/IMG_7113_2483f0be.jpeg';
              }
            }}
            alt="COACH B - Fitness • Nutrition • Wellness"
            className="h-11 sm:h-14 md:h-16 w-auto object-contain rounded-md shadow-md transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-['Inter'] font-medium text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D41478] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#D41478]/25 hover:shadow-[#D41478]/40 whitespace-nowrap cursor-pointer"
          >
            <span>BOOK A SESSION</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[8px] bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#303033]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-base font-['Inter'] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-white/80 hover:text-[#D41478] transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-3 w-full py-3.5 rounded-[10px] bg-[#D41478] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase text-center shadow-lg shadow-[#D41478]/25 cursor-pointer"
            >
              BOOK A SESSION
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
