import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, X } from 'lucide-react';
import { TipArticle } from '../types';

export const TipsSection: React.FC = () => {
  const [activeTip, setActiveTip] = useState<TipArticle | null>(null);

  const tips: TipArticle[] = [
    {
      id: 'tip-1',
      category: 'FITNESS TIPS',
      title: 'Biomechanics of Progressive Overload',
      subtitle: 'Form integrity precedes load advancement.',
      readTime: '3 min read',
      excerpt: 'Why tempo control, eccentric tension, and joint alignment yield twice the muscle stimulus with zero wear.',
      keyPoints: [
        'Maintain a 3-second eccentric phase on compound lifts to maximize hypertrophy',
        'Prioritize scapular retraction and pelvic neutrality over sheer load',
        'Deload every 5th week to prevent central nervous system fatigue accumulation',
      ],
    },
    {
      id: 'tip-2',
      category: 'NUTRITION TIPS',
      title: 'Circadian Nutrient Timing Protocol',
      subtitle: 'Syncing macronutrients with biological clocks.',
      readTime: '4 min read',
      excerpt: 'Optimizing glycemic response, protein synthesis, and cellular autophagy through intelligent meal spacing.',
      keyPoints: [
        'Concentrate complex carbohydrates in the post-workout and early evening window',
        'Aim for 35g of high-leucine protein within 90 minutes of waking',
        'Conclude eating 3 hours prior to sleep to preserve nocturnal human growth hormone spikes',
      ],
    },
    {
      id: 'tip-3',
      category: 'WELLNESS TIPS',
      title: 'Nervous System Reset in 10 Minutes',
      subtitle: 'Downregulating cortisol for deep cellular repair.',
      readTime: '2 min read',
      excerpt: 'How targeted physiological sighs and thermal contrasts shift the body into rapid parasympathetic recovery.',
      keyPoints: [
        'Utilize 2-inhalation physiological sighs during moments of acute cognitive stress',
        'Implement 65°F cool bedroom environments to deepen REM and slow-wave sleep cycles',
        'Practice non-sleep deep rest (NSDR) for 10 minutes between high-intensity meetings',
      ],
    },
  ];

  return (
    <section id="tips" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-3 max-w-xl">
            <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
              EDITORIAL MAGAZINE
            </span>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.1]">
              KNOW MORE
              <br />
              <span className="text-[#D41478]">LIVE BETTER</span>
            </h2>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setActiveTip(tips[0])}
              className="px-6 py-3.5 rounded-[10px] bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#D41478] text-white text-xs font-['Inter'] font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              EXPLORE ALL TIPS
            </button>
          </div>
        </div>

        {/* Three Editorial Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <article
              key={tip.id}
              onClick={() => setActiveTip(tip)}
              className="group relative p-8 sm:p-9 rounded-[24px] bg-[#303033] hover:bg-[#343438] border border-white/10 hover:border-[#D41478]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Clean unboxed metadata with typographic separator */}
                <div className="flex items-center gap-2 text-xs font-['Inter'] font-medium text-white/50">
                  <span className="text-[#D41478] tracking-widest font-bold uppercase">{tip.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{tip.readTime}</span>
                </div>

                <h3 className="font-['Sora'] font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#D41478] transition-colors duration-300 leading-snug">
                  {tip.title}
                </h3>

                <p className="font-['Sora'] font-semibold text-xs text-white/80">
                  {tip.subtitle}
                </p>

                <p className="font-['Inter'] text-xs sm:text-sm text-white/60 leading-relaxed pt-1">
                  {tip.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-['Inter'] font-bold text-white/70 group-hover:text-white transition-colors">
                <span className="tracking-wider uppercase">READ BRIEF</span>
                <ArrowUpRight className="w-4 h-4 text-[#D41478] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Editorial Read Modal */}
      {activeTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#303033] border border-white/15 rounded-[24px] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveTip(null)}
              className="absolute top-6 right-6 p-2 rounded-[8px] bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.2em] uppercase">
              {activeTip.category}
            </span>
            <h3 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl text-white mt-1 mb-2">
              {activeTip.title}
            </h3>
            <p className="font-['Sora'] text-white/80 text-sm font-semibold mb-4">
              {activeTip.subtitle}
            </p>

            <p className="font-['Inter'] text-sm text-white/70 leading-relaxed mb-6">
              {activeTip.excerpt}
            </p>

            <div className="space-y-3 mb-6 p-4 rounded-[18px] bg-black/30 border border-white/10">
              <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-white">
                Core Takeaways:
              </h4>
              <ul className="space-y-2">
                {activeTip.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/75 font-['Inter']">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D41478] mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setActiveTip(null)}
              className="w-full py-3 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              CLOSE BRIEF
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
