import React, { useState } from 'react';
import { Dumbbell, Utensils, Heart, ArrowRight, X } from 'lucide-react';

interface PhilosophySectionProps {
  onExplorePhilosophy: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onExplorePhilosophy }) => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: 'FITNESS',
      subtitle: 'Strength and performance',
      icon: Dumbbell,
      animationClass: 'animate-float-1',
      description: 'Cultivating muscular resilience, functional biomechanics, and kinetic control without burnout.',
      details: [
        'Progressive overload tuned to nervous system recovery',
        'Kinetic chain stabilization and joint longevity',
        'High-density metabolic conditioning for vitality',
      ],
    },
    {
      id: 2,
      title: 'NUTRITION',
      subtitle: 'Balance and healthy habits',
      icon: Utensils,
      animationClass: 'animate-float-2',
      description: 'Metabolic fuel tailored to your lifestyle, honoring culinary joy while optimizing daily energy.',
      details: [
        'Bio-individual macronutrient calibration',
        'Anti-inflammatory micronutrient prioritization',
        'Zero starvation — sustainable culinary intuition',
      ],
    },
    {
      id: 3,
      title: 'WELLNESS',
      subtitle: 'Mind and body harmony',
      icon: Heart,
      animationClass: 'animate-float-3',
      description: 'Restorative sleep protocols, stress attenuation, and mindfulness to align mind and body.',
      details: [
        'Parasympathetic nervous system downregulation',
        'Circadian rhythm and deep sleep architecture',
        'Mental poise and emotional equilibrium',
      ],
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Refined Geometric Architectural Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#D41478]/15 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header without periods */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
            THE COACH B ETHOS
          </span>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.1]">
            MORE THAN FITNESS
            <br />
            <span className="text-[#D41478]">A WAY OF LIFE</span>
          </h2>
        </div>

        {/* Three Horizontal Floating Bubble Cards Styled in WHITE with Glossy Pink Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-[2.5px] rounded-[26px] bg-gradient-to-r from-[#FF2E93] via-[#D41478] to-[#B80F65] shadow-xl hover:shadow-2xl hover:shadow-[#D41478]/30 ${pillar.animationClass} transition-all duration-300 cursor-pointer group flex flex-col`}
              >
                {/* White Glossy Card Body matching the Program section style */}
                <div className="p-6 sm:p-7 rounded-[24px] bg-gradient-to-b from-white via-[#FFF8FC] to-[#FCEEF6] text-slate-800 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top indicator & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-[12px] bg-gradient-to-r from-[#D41478] to-[#FF2E93] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-['Inter'] font-extrabold text-[#D41478] tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-['Sora'] font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-[#D41478] transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="font-['Sora'] font-bold text-xs text-slate-700">
                        {pillar.subtitle}
                      </p>
                      <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed pt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Pill */}
                  <div className="pt-5 mt-5 border-t border-pink-100 flex items-center justify-between">
                    <span className="text-[11px] font-['Inter'] font-bold text-slate-700 group-hover:text-[#D41478] tracking-wider uppercase transition-colors">
                      VIEW PROTOCOL
                    </span>
                    <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#D41478] to-[#FF2E93] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA Button styled in white/fuchsia program theme */}
        <div className="mt-14 sm:mt-18 text-center">
          <button
            onClick={onExplorePhilosophy}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D41478] to-[#FF2E93] hover:from-[#B80F65] hover:to-[#D41478] text-white text-xs font-['Inter'] font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-[#D41478]/30 cursor-pointer"
          >
            EXPLORE MY PHILOSOPHY
          </button>
        </div>
      </div>

      {/* Pillar Detail Modal */}
      {selectedPillar !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#303033] border border-white/15 rounded-[24px] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-6 right-6 p-2 rounded-[8px] bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.2em] uppercase">
              PILLAR 0{selectedPillar + 1}
            </span>
            <h3 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl text-white mt-1 mb-2">
              {pillars[selectedPillar].title}
            </h3>
            <p className="font-['Sora'] text-white/80 text-sm font-semibold mb-5">
              {pillars[selectedPillar].subtitle}
            </p>

            <p className="font-['Inter'] text-sm text-white/70 leading-relaxed mb-6">
              {pillars[selectedPillar].description}
            </p>

            <div className="space-y-2.5 mb-6">
              <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-white">
                Core Methodology Focus
              </h4>
              <ul className="space-y-2">
                {pillars[selectedPillar].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white/75 font-['Inter']">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D41478] mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setSelectedPillar(null);
                onExplorePhilosophy();
              }}
              className="w-full py-3 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              INTEGRATE INTO MY PROGRAM
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
