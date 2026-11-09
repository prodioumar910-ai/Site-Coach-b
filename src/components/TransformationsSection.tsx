import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TransformationStory } from '../types';

interface TransformationsSectionProps {
  onDiscoverStories: () => void;
}

export const TransformationsSection: React.FC<TransformationsSectionProps> = ({ onDiscoverStories }) => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const stories: TransformationStory[] = [
    {
      id: 'story-1',
      clientName: 'Elena Vance',
      role: 'Managing Director, Private Equity',
      achievement: '18kg lean body recomposition & metabolic reset',
      timeframe: '6-Month Bespoke Residency',
      quote: 'Coach B eliminated the myth that peak physical condition requires sacrificing an executive career. Her structural approach rebuilt my stamina, posture, and strength entirely.',
      details: 'Started with chronic lower-back tightness from 14-hour desk schedules. Completed a calibrated 3x/week strength architecture paired with anti-inflammatory nutrition protocol. Reached sub-20% body fat with peak biomarker panels.',
    },
    {
      id: 'story-2',
      clientName: 'Marcus Chen',
      role: 'Technology Founder & Investor',
      achievement: '+12kg clean muscle mass & complete joint rehabilitation',
      timeframe: '9-Month Private Program',
      quote: 'The level of biomechanical precision is unmatched. Past trainers gave me cookie-cutter workouts that led to impingements; Coach B engineered a bulletproof physique.',
      details: 'Overcame a previous shoulder labrum issue using targeted rotator cuff stability and scapular kinetic chain remodeling before progressively loading compound presses.',
    },
    {
      id: 'story-3',
      clientName: 'Sofia Al-Mansoor',
      role: 'Creative Director & Architectural Designer',
      achievement: 'Athletic endurance, functional agility & sustained energy',
      timeframe: '12-Month Master Practice',
      quote: 'Beyond aesthetics, Coach B gave me back my physical autonomy. Waking up with boundless energy and genuine core stability has transformed how I lead and create.',
      details: 'Integrated a functional movement routine harmonized with international travel schedule, optimizing circadian sleep windows and gourmet whole-food nutrition.',
    },
  ];

  const currentStory = stories[activeStoryIdx];

  return (
    <section id="transformations" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-3 max-w-xl">
            <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
              PROVEN RESULTS
            </span>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.1]">
              REAL PEOPLE
              <br />
              <span className="text-[#D41478]">REAL TRANSFORMATIONS</span>
            </h2>
          </div>

          <div className="shrink-0">
            <button
              onClick={onDiscoverStories}
              className="px-6 py-3.5 rounded-[10px] bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#D41478] text-white text-xs font-['Inter'] font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              DISCOVER THE STORIES
            </button>
          </div>
        </div>

        {/* Visual Showcase + Attributable Testimonial Grid (Geometric 50/50 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image Showcase (50%) */}
          <div className="w-full relative">
            <div className="relative rounded-[24px] overflow-hidden bg-[#242426] border border-white/15 shadow-2xl aspect-[4/3] group select-none">
              <img
                src="/src/assets/images/transformation_athletic_showcase_1794253311339.jpg"
                alt="Athletic Transformation Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#202022]/90 via-transparent to-black/30 pointer-events-none" />

              {/* Bottom tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-['Inter']">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D41478]" />
                  <span className="font-['Sora'] font-bold text-white uppercase tracking-wider">
                    VERIFIED CLIENT CASE STUDY
                  </span>
                </div>
                <span className="px-3 py-1 rounded-[8px] bg-white/10 backdrop-blur-md text-white/90 font-medium">
                  {currentStory.timeframe}
                </span>
              </div>
            </div>

            {/* Micro Quantitative Badge below frame */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-2 text-xs font-['Inter'] text-white/60">
              <span>98% Client Goal Attainment</span>
              <span aria-hidden="true">·</span>
              <span>100% Bespoke Bio-Adaptation</span>
              <span aria-hidden="true">·</span>
              <span>Zero Rebound Attrition</span>
            </div>
          </div>

          {/* Right Column: Testimonial & Narrative Description (50%) */}
          <div className="w-full space-y-6">
            <div className="p-8 sm:p-10 rounded-[24px] bg-[#28282b] border border-white/10 space-y-6 shadow-xl relative">
              <Quote className="w-8 h-8 text-[#D41478]/40" />

              <p className="font-['Sora'] font-medium text-base sm:text-lg text-white/95 leading-relaxed italic">
                "{currentStory.quote}"
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-['Sora'] font-bold text-white text-base">
                      {currentStory.clientName}
                    </h4>
                    <p className="font-['Inter'] text-xs text-white/60">
                      {currentStory.role}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-[12px] bg-black/30 border border-white/5 text-xs font-['Inter'] text-white/80 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D41478] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Outcome: </strong>
                    {currentStory.achievement}
                  </span>
                </div>
              </div>

              {/* Story Carousel Controls */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-['Inter'] text-white/40 font-semibold tracking-widest">
                  0{activeStoryIdx + 1} / 0{stories.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveStoryIdx((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
                    }
                    className="p-2.5 rounded-[10px] bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveStoryIdx((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
                    }
                    className="p-2.5 rounded-[10px] bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
