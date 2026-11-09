import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Sparkles, Send } from 'lucide-react';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  preselectedProgram?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedProgram }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    coachingInterest: (preselectedProgram as any) || 'Personal Coaching',
    preferredTime: 'Morning (07:00 - 11:00)',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string; name: string } | null>(null);

  // Sync preselected program if passed down
  React.useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({
        ...prev,
        coachingInterest: preselectedProgram as any,
      }));
    }
  }, [preselectedProgram]);

  const validate = () => {
    const errs: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Please provide a valid contact number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note on your goals.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate luxury client intake submission with generated ticket ID
    setTimeout(() => {
      const referenceId = `CB-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedData({ id: referenceId, name: formData.fullName });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Visual Accent Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D41478]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B80F65]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Brand Ethos & Studio Contacts (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
                COMMENCE TRANSFORMATION
              </span>
              <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.08]">
                YOUR NEXT
                <br />
                CHAPTER
                <br />
                <span className="text-[#D41478]">STARTS NOW</span>
              </h2>
            </div>

            <p className="font-['Inter'] text-sm sm:text-base text-white/75 leading-relaxed max-w-md">
              Private coaching appointments are intentionally limited each calendar quarter to guarantee uncompromised focus, bespoke biomechanical programming, and concierge support.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-[18px] bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-[10px] bg-black/40 border border-white/10 flex items-center justify-center text-[#D41478] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-['Inter'] font-medium text-white/50 uppercase tracking-wider block">
                    Concierge Inquiries
                  </span>
                  <a
                    href="mailto:concierge@coachb-fitness.com"
                    className="font-['Inter'] text-sm font-semibold text-white hover:text-[#D41478] transition-colors"
                  >
                    concierge@coachb-fitness.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-[18px] bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-[10px] bg-black/40 border border-white/10 flex items-center justify-center text-[#D41478] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-['Inter'] font-medium text-white/50 uppercase tracking-wider block">
                    Private Appointments Line
                  </span>
                  <span className="font-['Inter'] text-sm font-semibold text-white">
                    +1 (415) 890-COACH
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-[18px] bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-[10px] bg-black/40 border border-white/10 flex items-center justify-center text-[#D41478] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-['Inter'] font-medium text-white/50 uppercase tracking-wider block">
                    Private Studio
                  </span>
                  <span className="font-['Inter'] text-sm font-semibold text-white">
                    San Francisco · London · Worldwide Virtual
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Luxury Booking Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[28px] bg-[#28282b] border border-white/10 shadow-2xl relative">
              {submittedData ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#D41478]/20 border border-[#D41478] flex items-center justify-center mx-auto text-[#D41478]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-widest uppercase">
                      REQUEST CONFIRMED
                    </span>
                    <h3 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl text-white">
                      Thank You, {submittedData.name}
                    </h3>
                    <p className="font-['Inter'] text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Your consultation brief has been prioritized under reference{' '}
                      <span className="text-white font-mono font-bold">{submittedData.id}</span>.
                      Coach B’s concierge team will contact you within 24 business hours to schedule your initial assessment.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="px-6 py-2.5 rounded-[10px] bg-white/10 hover:bg-white/20 text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER REQUEST
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1">
                    <span className="text-[#D41478] text-[11px] font-['Inter'] font-bold tracking-widest uppercase">
                      PRIVATE INTAKE
                    </span>
                    <h3 className="font-['Sora'] font-bold text-xl sm:text-2xl text-white">
                      Request Consultation
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-['Inter'] font-medium text-white/80">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alexandra Stone"
                        className={`w-full px-4 py-3 rounded-[10px] bg-black/40 border ${
                          errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#D41478]'
                        } text-white placeholder-white/30 text-sm focus:outline-none transition-colors font-['Inter']`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 font-['Inter']">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-['Inter'] font-medium text-white/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexandra@example.com"
                        className={`w-full px-4 py-3 rounded-[10px] bg-black/40 border ${
                          errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#D41478]'
                        } text-white placeholder-white/30 text-sm focus:outline-none transition-colors font-['Inter']`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 font-['Inter']">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-['Inter'] font-medium text-white/80">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-[10px] bg-black/40 border ${
                          errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#D41478]'
                        } text-white placeholder-white/30 text-sm focus:outline-none transition-colors font-['Inter']`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 font-['Inter']">{errors.phone}</p>
                      )}
                    </div>

                    {/* Coaching Interest */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-['Inter'] font-medium text-white/80">
                        Coaching Interest
                      </label>
                      <select
                        value={formData.coachingInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, coachingInterest: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-[10px] bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D41478] transition-colors font-['Inter'] cursor-pointer"
                      >
                        <option value="01 | PERSONAL TRAINING" className="bg-[#242426]">01 | PERSONAL TRAINING (1-on-1 Sessions)</option>
                        <option value="02 | WEIGHT LOSS & BODY RECOMPOSITION" className="bg-[#242426]">02 | WEIGHT LOSS &amp; BODY RECOMPOSITION</option>
                        <option value="03 | BIBI NO L – GLUTE GROWTH" className="bg-[#242426]">03 | BIBI NO L – GLUTE GROWTH</option>
                        <option value="04 | FOOD FOR THOUGHT" className="bg-[#242426]">04 | FOOD FOR THOUGHT (Nutrition &amp; Meal-Prep)</option>
                        <option value="05 | CUSTOM WORKOUT DESIGN" className="bg-[#242426]">05 | CUSTOM WORKOUT DESIGN</option>
                        <option value="06 | THE BUNDLES" className="bg-[#242426]">06 | THE BUNDLES (Balanced B / Full Experience)</option>
                        <option value="Bespoke Private Consultation" className="bg-[#242426]">Bespoke Private Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Time Window */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-['Inter'] font-medium text-white/80">
                      Preferred Assessment Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-[10px] bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D41478] transition-colors font-['Inter'] cursor-pointer"
                    >
                      <option value="Morning (07:00 - 11:00)" className="bg-[#242426]">Morning (07:00 - 11:00)</option>
                      <option value="Midday (11:00 - 15:00)" className="bg-[#242426]">Midday (11:00 - 15:00)</option>
                      <option value="Evening (15:00 - 19:00)" className="bg-[#242426]">Evening (15:00 - 19:00)</option>
                      <option value="Flexible / Weekend" className="bg-[#242426]">Flexible / Weekend</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-['Inter'] font-medium text-white/80">
                      Current Goals &amp; Training History *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your primary objectives, existing routines, or specific physical goals..."
                      className={`w-full px-4 py-3 rounded-[10px] bg-black/40 border ${
                        errors.message ? 'border-red-500' : 'border-white/15 focus:border-[#D41478]'
                      } text-white placeholder-white/30 text-sm focus:outline-none transition-colors font-['Inter'] resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 font-['Inter']">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] disabled:opacity-50 text-white text-xs font-['Inter'] font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-[#D41478]/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING CONCIERGE BRIEF...</span>
                      ) : (
                        <>
                          <span>BOOK YOUR SESSION</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
