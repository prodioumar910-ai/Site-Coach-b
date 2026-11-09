import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProgramsSection } from './components/ProgramsSection';
import { TipsSection } from './components/TipsSection';
import { TransformationsSection } from './components/TransformationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SectionReveal } from './components/SectionReveal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('01 | PERSONAL TRAINING');

  const handleStartJourney = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  const handleExplorePrograms = () => {
    const progElem = document.getElementById('programs');
    if (progElem) {
      progElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (programName: string) => {
    setSelectedProgram(programName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#1e1e20] text-white selection:bg-[#D41478] selection:text-white antialiased overflow-x-clip">
      {/* Official Coach B Brand Graphic (media_1794253335194_313c273b.jpg) fixed across all sections */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-85 transition-opacity duration-700"
        style={{
          backgroundImage: "url('/images/bg_section_coach_b.jpg')",
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Measured gradient scrim for perfect typography legibility */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#1e1e20]/45 via-black/20 to-[#1e1e20]/60" />

      {/* Completely Transparent Luxury Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="relative z-10">
        {/* Section 01: Welcome to Coach B — Scroll-Controlled Video Scrubbing */}
        <CinematicHero onStartJourney={handleStartJourney} />

        {/* Section 02: Meet Coach B with Section Transition */}
        <SectionReveal>
          <AboutSection onDiscoverCoachB={handleStartJourney} />
        </SectionReveal>

        {/* Section 03: My Philosophy with Section Transition */}
        <SectionReveal delay={50}>
          <PhilosophySection onExplorePhilosophy={handleExplorePrograms} />
        </SectionReveal>

        {/* Section 04: Coaching Programs with Section Transition */}
        <SectionReveal delay={50}>
          <ProgramsSection onSelectProgram={handleSelectProgram} />
        </SectionReveal>

        {/* Section 05: Coach B's Tips with Section Transition */}
        <SectionReveal delay={50}>
          <TipsSection />
        </SectionReveal>

        {/* Section 06: Transformations & Success Stories with Section Transition */}
        <SectionReveal delay={50}>
          <TransformationsSection onDiscoverStories={handleStartJourney} />
        </SectionReveal>

        {/* Section 07: Let's Get to Work! with Section Transition */}
        <SectionReveal delay={50}>
          <ContactSection preselectedProgram={selectedProgram} />
        </SectionReveal>
      </main>

      {/* Luxury Brand Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialProgram={selectedProgram}
      />
    </div>
  );
}
