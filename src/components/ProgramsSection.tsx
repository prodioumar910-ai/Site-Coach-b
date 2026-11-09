import React from 'react';

interface ProgramsSectionProps {
  onSelectProgram: (programName: string) => void;
}

interface RateCardItem {
  id: string;
  badge: string;
  punchline: string;
  description: string;
  tiers: {
    name: string;
    price: string;
    isLink?: boolean;
  }[];
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const rateCards: RateCardItem[] = [
    {
      id: '01',
      badge: '01 | PERSONAL TRAINING',
      punchline: 'Building strength, one questionable facial expression at a time.',
      description: 'One-on-one, 60-minute in-person sessions tailored to your fitness goals.',
      tiers: [
        { name: 'Single session', price: '$60' },
        { name: '4 sessions', price: '$230' },
        { name: '8 sessions', price: '$440' },
        { name: '12 sessions', price: '$630' },
      ],
    },
    {
      id: '02',
      badge: '02 | WEIGHT LOSS & BODY RECOMPOSITION',
      punchline: 'Lose fat, not your will to live.',
      description:
        'Personalized exercise coaching for men and women, focused on strength, consistency and sustainable habits. Available online or in person.',
      tiers: [
        { name: 'Online coaching | 4 weeks', price: '$149' },
        { name: 'Online coaching | 8 weeks', price: '$279' },
        { name: 'Online coaching | 12 weeks', price: '$399' },
        { name: 'In-person coaching', price: 'See personal training rates', isLink: true },
      ],
    },
    {
      id: '03',
      badge: '03 | BIBI NO L – GLUTE GROWTH',
      punchline: 'BBL? We have a different kind of lift in mind.',
      description:
        'Glute-focused strength programming with progressive training and realistic expectations.',
      tiers: [
        { name: 'Self-guided program | 8 weeks', price: '$79' },
        { name: 'Self-guided program | 12 weeks', price: '$99' },
        { name: 'Personalized online glute coaching', price: '$149 / month' },
      ],
    },
    {
      id: '04',
      badge: '04 | FOOD FOR THOUGHT',
      punchline: 'Eat smarter, not sadder.',
      description:
        'General nutrition education, macro basics, balanced-meal ideas and practical meal-prep strategies. No individualized dietary prescriptions.',
      tiers: [
        { name: 'Nutrition & meal-prep guidance | 60 min', price: '$60' },
        { name: 'Session + general meal-prep resource', price: '$85' },
        { name: 'Educational coaching add-on', price: '$35 / month' },
      ],
    },
    {
      id: '05',
      badge: '05 | CUSTOM WORKOUT DESIGN',
      punchline: 'I make the plan. You make the gains.',
      description:
        'A personalized exercise plan to follow independently, with no live coaching sessions included.',
      tiers: [
        { name: 'Custom workout plan | 4 weeks', price: '$89' },
        { name: 'Custom workout plan | 8 weeks', price: '$129' },
      ],
    },
    {
      id: '06',
      badge: '06 | THE BUNDLES',
      punchline: 'More support. More structure. Same real-life flexibility.',
      description: 'Combine online training with a Food for Thought educational session.',
      tiers: [
        { name: 'The Balanced B | 4 weeks online + 1 food session', price: '$199' },
        { name: 'The Full B Experience | 12 weeks online + food session & guide', price: '$459' },
      ],
    },
  ];

  return (
    <section id="programs" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[#D41478]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#FF2E93]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header without periods */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
            BESPOKE PATHWAYS &amp; RATES
          </span>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.1]">
            YOUR GOALS
            <br />
            <span className="text-[#D41478]">YOUR PROGRAM</span>
          </h2>
        </div>

        {/* 6 High-Fidelity Glossy Rate Cards (Coach B banner removed) */}
        <div className="space-y-6">
          {rateCards.map((card) => (
            <div
              key={card.id}
              className="p-[2.5px] rounded-[30px] bg-gradient-to-r from-[#FF2E93] via-[#D41478] to-[#B80F65] shadow-xl hover:shadow-2xl hover:shadow-[#D41478]/30 transition-all duration-300 group"
            >
              <div className="p-5 sm:p-7 rounded-[28px] bg-gradient-to-b from-white via-[#FFF8FC] to-[#FCEEF6] text-slate-800">
                {/* Header Tab Pill (Top-Left) */}
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D41478] to-[#FF2E93] text-white font-['Sora'] font-extrabold text-xs sm:text-sm tracking-wide shadow-md">
                    {card.badge}
                  </div>
                  <span className="text-[11px] font-['Inter'] font-semibold text-slate-400 group-hover:text-[#D41478] transition-colors">
                    CLICK TO SELECT
                  </span>
                </div>

                {/* Subtitle / Italic Punchline */}
                <h4 className="font-['Inter'] italic font-bold text-sm sm:text-base text-slate-900 mt-2">
                  {card.punchline}
                </h4>

                {/* Description */}
                <p className="font-['Inter'] text-xs sm:text-[13px] text-slate-600 mt-1 mb-4 leading-relaxed">
                  {card.description}
                </p>

                {/* Pricing Rows Pill Container */}
                <div className="space-y-2">
                  {card.tiers.map((tier, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectProgram(`${card.badge} - ${tier.name}`)}
                      className="group/row px-4 py-2 rounded-full bg-white/80 hover:bg-white border border-pink-100/80 hover:border-pink-300 flex items-center justify-between transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
                    >
                      <span className="font-['Inter'] font-semibold text-xs sm:text-sm text-slate-800 group-hover/row:text-[#D41478] transition-colors">
                        {tier.name}
                      </span>

                      {tier.isLink ? (
                        <span className="font-['Inter'] text-xs font-bold text-[#D41478] italic group-hover/row:underline">
                          {tier.price}
                        </span>
                      ) : (
                        <span className="font-['Sora'] font-extrabold text-xs sm:text-sm px-4 py-1 rounded-full bg-gradient-to-r from-[#D41478] to-[#FF2E93] group-hover/row:from-[#B80F65] group-hover/row:to-[#D41478] text-white shadow-sm transition-all duration-200">
                          {tier.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-12 text-center">
          <p className="font-['Inter'] text-xs text-white/60 tracking-wider">
            ALL PACKAGES INCLUDE DIRECT BIO-METRIC TRACKING &amp; 1-ON-1 PERIODIZATION
          </p>
        </div>
      </div>
    </section>
  );
};
