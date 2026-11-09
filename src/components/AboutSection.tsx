import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, X } from 'lucide-react';

interface AboutSectionProps {
  onDiscoverCoachB: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverCoachB }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const certifications = [
    { title: 'NASM Master Trainer', desc: 'Performance Enhancement & Kinetic Chain Optimization' },
    { title: 'Precision Nutrition L2', desc: 'Bespoke Metabolic Protocol & Nutritional Bio-Individuality' },
    { title: 'Functional Movement (FMS)', desc: 'Corrective Exercise & Joint Longevity Engineering' },
    { title: '12+ Years Elite Practice', desc: 'Over 500+ Private Executive and Athlete Transformations' },
  ];

  const marqueeItems = [...certifications, ...certifications, ...certifications, ...certifications];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Subtle geometric ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D41478]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#B80F65]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Image on the Left */}
          <div className="w-full relative transition-all duration-700 ease-out">
            <div className="relative w-full">
              {/* Outer Geometric Frame Accent */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-[28px] border border-[#D41478]/30 bg-gradient-to-tr from-[#D41478]/10 via-transparent to-white/5 -rotate-1 transition-transform duration-700 hover:rotate-0" />
              
              {/* Image Container with 24px radius */}
              <div className="relative rounded-[24px] overflow-hidden bg-[#242426] shadow-2xl border border-white/10 group aspect-[3/4]">
                <img
                  src="/src/assets/images/coach_b_portrait_1794253310125.jpg"
                  alt="Coach B"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle scrim & brand tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#303033]/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-['Inter']">
                  <div>
                    <span className="block font-['Sora'] font-bold text-white text-base">COACH B</span>
                    <span className="text-white/70">Founder &amp; Master Coach</span>
                  </div>
                  <span className="px-3 py-1 rounded-[8px] bg-[#D41478]/90 text-white font-medium text-[11px] tracking-wider uppercase">
                    PRIVATE PRACTICE
                  </span>
                </div>
              </div>

              {/* Geometric Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-[#252528]/80 backdrop-blur-md hidden sm:flex">
                <div className="w-16 h-16 rounded-full border border-[#D41478]/50 flex items-center justify-center">
                  <span className="font-['Sora'] font-bold text-xs text-white">EST 2014</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Description (Geometric 50%) */}
          <div className="w-full space-y-8 transition-all duration-700 ease-out">
            <div className="space-y-3">
              <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
                COACHING LEADERSHIP
              </span>
              <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl tracking-tight text-white uppercase leading-[1.1]">
                MEET YOUR COACH
              </h2>
              <p className="font-['Sora'] font-semibold text-lg sm:text-xl text-white/90 tracking-wide pt-1">
                Experience · Discipline · Transformation
              </p>
            </div>

            {/* Short concise biography */}
            <p className="font-['Inter'] text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
              Coach B unites athletic precision with luxury wellness. Her methodology merges human biomechanics, restorative nervous-system protocols, and tailored nutrition to elevate both physical power and everyday vitality.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-7 py-3.5 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#D41478]/30 flex items-center gap-2.5 cursor-pointer"
              >
                <span>DISCOVER COACH B</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Automatic Horizontal Scrolling Marquee (Left to Right) for Certifications */}
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
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#303033] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#303033] to-transparent z-10 pointer-events-none" />

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
