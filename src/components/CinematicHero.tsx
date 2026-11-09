import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

interface CinematicHeroProps {
  onStartJourney: () => void;
  onExplorePrograms?: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onStartJourney }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(7.93);
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState('0.00');

  const targetTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Initialize and force-decode first frame on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    // Load duration when metadata is ready
    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setVideoDuration(video.duration);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedMetadata);

    // Initial play & pause nudge so the browser initializes the hardware video decoder
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Immediately pause so scroll controls scrubbing
          video.pause();
          video.currentTime = 0.001;
        })
        .catch(() => {
          // If autoplay blocked, pause and set poster
          video.pause();
        });
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedMetadata);
    };
  }, []);

  // Sync scroll position within the 400vh container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = containerHeight - viewportHeight;

      if (maxScroll <= 0) return;

      const scrollOffset = -rect.top;
      const progress = Math.max(0, Math.min(1, scrollOffset / maxScroll));
      setScrollProgress(progress);

      const dur = videoDuration > 0 ? videoDuration : 7.93;
      targetTimeRef.current = progress * dur;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videoDuration]);

  // Smooth scrubbing animation loop
  useEffect(() => {
    const scrubLoop = () => {
      const video = videoRef.current;
      if (video && !video.seeking) {
        const target = targetTimeRef.current;
        const current = video.currentTime;
        const diff = target - current;

        // If delta is noticeable, step towards target
        if (Math.abs(diff) > 0.02) {
          try {
            const nextTime = Math.max(0, Math.min(videoDuration, current + diff * 0.4));
            video.currentTime = nextTime;
            setCurrentTimeDisplay(nextTime.toFixed(2));
          } catch {
            // Ignore rapid seek exceptions
          }
        }
      }
      rafIdRef.current = requestAnimationFrame(scrubLoop);
    };

    rafIdRef.current = requestAnimationFrame(scrubLoop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [videoDuration]);

  // Phase opacities
  const getPhaseOpacity = (start: number, end: number, currentProgress: number) => {
    const fadeRange = 0.08;
    if (currentProgress < start - fadeRange || currentProgress > end + fadeRange) return 0;
    if (currentProgress >= start && currentProgress <= end) return 1;
    if (currentProgress < start) {
      return (currentProgress - (start - fadeRange)) / fadeRange;
    }
    return (end + fadeRange - currentProgress) / fadeRange;
  };

  const phase1Opacity = getPhaseOpacity(0, 0.35, scrollProgress);
  const phase2Opacity = getPhaseOpacity(0.40, 0.68, scrollProgress);
  const phase3Opacity = getPhaseOpacity(0.74, 1.0, scrollProgress);

  return (
    <section
      ref={containerRef}
      id="welcome"
      className="relative w-full h-[400vh] bg-[#303033]"
      aria-label="Welcome to Coach B — Cinematic Experience"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Video Layer with Poster Underneath */}
        <div className="absolute inset-0 w-full h-full bg-[#1e1e20] z-0 overflow-hidden">
          {/* Guaranteed Poster Image so the frame is never blank or black */}
          <img
            src="/videos/hero_poster.jpg"
            alt="Coach B Fitness"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Interactive Scroll-Scrubbed Video */}
          <video
            ref={videoRef}
            src="/videos/hero_coach_b.mp4"
            poster="/videos/hero_poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/hero_coach_b.mp4" type="video/mp4" />
          </video>

          {/* Cinematic Vignette & Scrims */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#303033] via-black/20 to-[#303033]/40" />
          <div className="absolute inset-0 pointer-events-none bg-radial-[ellipse_at_center] from-transparent via-black/15 to-black/55" />
        </div>



        {/* Cinematic Content Overlays */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-center">
          {/* Phase 1: Main Hero Section (0% - 35%) — Single Call To Action */}
          <div
            className="transition-all duration-500 max-w-4xl"
            style={{
              opacity: phase1Opacity,
              transform: `translateY(${(1 - phase1Opacity) * 30}px)`,
              pointerEvents: phase1Opacity > 0.4 ? 'auto' : 'none',
            }}
          >
            <div className="space-y-4">
              <h1 className="font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white uppercase text-balance drop-shadow-2xl">
                YOUR BODY
                <br />
                <span className="text-[#D41478]">YOUR POWER</span>
                <br />
                YOUR TRANSFORMATION
              </h1>

              {/* Exact Single Call to Action Button */}
              <div className="pt-10 sm:pt-14 md:pt-18 flex items-center">
                <button
                  onClick={onStartJourney}
                  className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-[10px] bg-[#D41478] hover:bg-[#B80F65] text-white text-xs sm:text-sm font-['Inter'] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-[#D41478]/40 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>START YOUR JOURNEY</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Phase 2: Power & Precision (40% - 68%) */}
          <div
            className="absolute max-w-3xl transition-all duration-500"
            style={{
              opacity: phase2Opacity,
              transform: `translateY(${(1 - phase2Opacity) * 30}px)`,
              pointerEvents: phase2Opacity > 0.4 ? 'auto' : 'none',
            }}
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
                SCULPTED BY DISCIPLINE
              </span>
              <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.1]">
                POWER &amp; PRECISION
                <br />
                <span className="text-white/80">FORM IN MOTION</span>
              </h2>
            </div>
          </div>

          {/* Phase 3: Transition to Meet Coach B (74% - 100%) */}
          <div
            className="absolute max-w-3xl transition-all duration-500"
            style={{
              opacity: phase3Opacity,
              transform: `translateY(${(1 - phase3Opacity) * 30}px)`,
              pointerEvents: phase3Opacity > 0.4 ? 'auto' : 'none',
            }}
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[#D41478] text-xs font-['Inter'] font-bold tracking-[0.25em] uppercase">
                BESPOKE EXCELLENCE
              </span>
              <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase leading-[1.1]">
                TRANSFORMATION
                <br />
                <span className="text-[#D41478]">STARTS HERE</span>
              </h2>
              <div className="pt-3">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-xs font-['Inter'] font-bold text-white/90 hover:text-white uppercase tracking-wider py-2"
                >
                  <span>MEET YOUR COACH</span>
                  <ArrowDown className="w-4 h-4 text-[#D41478] animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator at Viewport Bottom */}
        <div className="relative z-10 w-full pb-8 flex justify-center items-center pointer-events-none">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-['Inter'] font-semibold tracking-[0.2em] text-white/60 uppercase">
              SCROLL TO CONTROL VIDEO
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1 bg-black/20 backdrop-blur-sm">
              <div
                className="w-1 h-2 bg-[#D41478] rounded-full transition-transform duration-200"
                style={{
                  transform: `translateY(${Math.min(12, scrollProgress * 12)}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
