import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialProgram = 'Personal Coaching',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    coachingInterest: (initialProgram as any) || 'Personal Coaching',
    preferredTime: 'Morning (07:00 - 11:00)',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Please provide a valid phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#303033] border border-white/15 rounded-[24px] p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-[8px] bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#D41478]/20 border border-[#D41478] flex items-center justify-center mx-auto text-[#D41478]">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-widest uppercase">
                CONSULTATION SECURED
              </span>
              <h3 className="font-['Sora'] font-extrabold text-2xl text-white">
                Welcome, {formData.fullName}
              </h3>
              <p className="font-['Inter'] text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                Coach B’s private intake office will connect with you via email ({formData.email}) within 24 business hours to confirm your introductory assessment.
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs font-['Inter'] font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="space-y-1">
              <span className="text-[#D41478] text-[11px] font-['Inter'] font-bold tracking-widest uppercase">
                COACH B CONCIERGE
              </span>
              <h3 className="font-['Sora'] font-extrabold text-2xl text-white">
                Schedule Private Consultation
              </h3>
              <p className="font-['Inter'] text-xs text-white/60">
                Reserve your 1-on-1 discovery session with Coach B.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-['Inter'] font-medium text-white/80 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Victoria Sterling"
                  className={`w-full px-4 py-2.5 rounded-[10px] bg-black/40 border ${
                    errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#D41478]'
                  } text-white text-sm focus:outline-none transition-colors font-['Inter']`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-['Inter'] font-medium text-white/80 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="victoria@example.com"
                    className={`w-full px-4 py-2.5 rounded-[10px] bg-black/40 border ${
                      errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#D41478]'
                    } text-white text-sm focus:outline-none transition-colors font-['Inter']`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-['Inter'] font-medium text-white/80 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-2.5 rounded-[10px] bg-black/40 border ${
                      errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#D41478]'
                    } text-white text-sm focus:outline-none transition-colors font-['Inter']`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-['Inter'] font-medium text-white/80 mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.coachingInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, coachingInterest: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-[10px] bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D41478] transition-colors font-['Inter']"
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

              <div>
                <label className="block text-xs font-['Inter'] font-medium text-white/80 mb-1">
                  Goals or Specific Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Primary goals, injury notes, or scheduling preferences..."
                  className="w-full px-4 py-2.5 rounded-[10px] bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D41478] transition-colors font-['Inter'] resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] disabled:opacity-50 text-white text-xs font-['Inter'] font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#D41478]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>REQUESTING...</span>
                ) : (
                  <>
                    <span>SUBMIT INTAKE REQUEST</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
