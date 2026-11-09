import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ChevronRight, X, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onDiscoverCoachB: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverCoachB }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const certifications = [
    { title: 'NASM Master Trainer', desc: 'Performance Enhancement & Kinetic Chain Optimization' },
    { title: 'Precision Nutrition L2', desc: 'Bespoke Metabolic Protocol & Nutritional Bio-Individuality' },
    { title: 'Functional Movement (FMS)', desc: 'Corrective Exercise & Joint Longevity Engineering' },
    { title: '12+ Years Elite Practice', desc: 'Over 500+ Private Executive and Athlete Transformations' },
  ];

  const marqueeItems = [...certifications, ...certifications, ...certifications, ...certifications];

  // Subtle scroll parallax for the image
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate relative progress inside viewport
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setScrollOffset((progress - 0.5) * 40); // -20px to +20px gentle parallax
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 bg-transparent overflow-hidden"
    >
      {/* Subtle geometric ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D41478]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#B80F65]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* 1. TOP: Description & Presentation Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 transition-all duration-700 ease-out">
          <div className="space-y-3">
            <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
              COACHING LEADERSHIP
            </span>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.1]">
              MEET YOUR COACH
            </h2>
            <p className="font-['Sora'] font-semibold text-lg sm:text-xl text-white/90 tracking-wide pt-1">
              Experience · Discipline · Transformation
            </p>
          </div>

          {/* Short concise biography */}
          <p className="font-['Inter'] text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mx-auto">
            Coach B unites athletic precision with luxury wellness. Her methodology merges human biomechanics, restorative nervous-system protocols, and tailored nutrition to elevate both physical power and everyday vitality.
          </p>

          {/* CTA Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#D41478]/30 flex items-center gap-2.5 cursor-pointer"
            >
              <span>DISCOVER COACH B</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. BOTTOM: Official COACH B Logo Showcase positioned below description with entrance & scroll parallax */}
        <div className="mt-14 sm:mt-18 relative max-w-2xl mx-auto transition-all duration-700 ease-out">
          {/* Outer Metallic Fuchsia Frame Accent */}
          <div
            className="absolute -inset-3 sm:-inset-5 rounded-[34px] bg-gradient-to-r from-[#FF2E93] via-[#D41478] to-[#B80F65] opacity-80 blur-xs transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(${scrollOffset * 0.5}px)`,
            }}
          />

          {/* Main Logo Container Card */}
          <div
            className="relative rounded-[28px] overflow-hidden bg-white shadow-2xl border-2 border-pink-200/60 p-6 sm:p-10 group transition-transform duration-300 ease-out flex flex-col items-center justify-center"
            style={{
              transform: `translateY(${scrollOffset}px)`,
            }}
          >
            <img
              src="/images/coach_b_logo_official.jpeg"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('IMG_7113')) {
                  target.src = '/assets/aistudio/IMG_7113_2483f0be.jpeg';
                }
              }}
              alt="Official COACH B Logo - Fitness Nutrition Wellness"
              className="w-full max-h-[340px] sm:max-h-[400px] object-contain transition-transform duration-700 ease-out group-hover:scale-103"
              loading="lazy"
            />
          </div>

          {/* Geometric Decorative Accent */}
          <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-[#252528]/90 backdrop-blur-md hidden sm:flex shadow-xl">
            <div className="w-14 h-14 rounded-full border border-[#D41478]/70 flex items-center justify-center">
              <span className="font-['Sora'] font-bold text-[11px] text-white">OFFICIAL</span>
            </div>
          </div>
        </div>

        {/* 3. Automatic Horizontal Scrolling Marquee (Left to Right) for Certifications */}
        <div className="mt-20 pt-10 border-t border-white/10 relative">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-['Inter'] font-bold tracking-[0.2em] text-[#D41478] uppercase">
              CREDENTIALS &amp; CERTIFICATIONS
            </span>
            <span className="text-[11px] font-['Inter'] text-white/40 tracking-wider">
              CONTINUOUS ROTATION
            </span>
          </div>

          {/* Marquee Container with edge gradients */}
          <div className="relative w-full overflow-hidden py-3">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#1e1e20] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#1e1e20] to-transparent z-10 pointer-events-none" />

            {/* Moving ticker track from Left to Right */}
            <div className="animate-marquee-ltr flex items-center gap-4">
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 sm:w-96 p-4 rounded-[16px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D41478]/50 transition-all duration-300 shadow-lg group select-none"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D41478] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-['Sora'] font-bold text-xs sm:text-sm text-white group-hover:text-[#D41478] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <p className="font-['Inter'] text-xs text-white/65 leading-normal pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Discover Coach B Editorial Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#303033] border border-white/15 rounded-[24px] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-[8px] bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.2em] uppercase">
              BIOGRAPHY &amp; METHODOLOGY
            </span>
            <h3 className="font-['Sora'] font-bold text-2xl sm:text-3xl text-white mt-1 mb-4">
              The Coach B Standard
            </h3>

            <div className="space-y-4 text-sm font-['Inter'] text-white/80 leading-relaxed">
              <p>
                With over a decade dedicated to high-performance private clientele—spanning executives, artists, and competitive athletes—Coach B approaches fitness not as a temporary regimen, but as an architectural discipline for life.
              </p>
              <div className="p-4 rounded-[18px] bg-black/30 border border-white/10 space-y-2">
                <h4 className="font-['Sora'] font-bold text-white text-sm">Key Principles</h4>
                <ul className="space-y-1.5 text-xs text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D41478]" />
                    <span>Structural balance before load progression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D41478]" />
                    <span>Nourishment calibrated for sustained metabolic energy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D41478]" />
                    <span>Continuous adaptation measured through objective physical markers</span>
                  </li>
                </ul>
              </div>
              <p>
                Every coaching relationship begins with a deep physiological and lifestyle audit, establishing an uncompromised path to strength, aesthetics, and mental clarity.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => {
                  setModalOpen(false);
                  onDiscoverCoachB();
                }}
                className="px-6 py-2.5 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-colors cursor-pointer"
              >
                REQUEST PRIVATE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
