// src/components/ui/PartnersShowcase.tsx
import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { PARTNERS, type Partner } from "../../data/partners";

const PartnersShowcase = () => {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate data to create a seamless infinite scroll buffer
  const loopedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const animateScroll = () => {
      if (!isPaused) {
        container.scrollLeft += 1; // Adjust speed here (higher = faster)

        // Reset scroll when reaching the halfway point to create infinite loop illusion
        // We use scrollWidth / 2 because we need enough buffer content
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth) / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ===== SCROLLABLE ROW ===== */}
      <div
        className="relative w-full py-10 group/container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Buttons - Always Visible (Opacity 100) */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg text-[#0A1F44] hover:bg-[#D4AF37] hover:text-white transition-all -ml-2 hover:ml-0 border border-slate-100"
          aria-label="Scroll Left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg text-[#0A1F44] hover:bg-[#D4AF37] hover:text-white transition-all -mr-2 hover:mr-0 border border-slate-100"
          aria-label="Scroll Right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-hidden pb-8 pt-4 px-4 whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loopedPartners.map((partner: Partner, i: number) => (
            <div
              key={i}
              onClick={() => setActivePartner(partner)}
              className="min-w-[160px] md:min-w-[200px] shrink-0 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-slate-200 hover:border-corporate-gold transition-all cursor-pointer group snap-center hover:-translate-y-2 whitespace-normal"
            >
              <div className="text-4xl mb-4">
                {(partner.icon as ReactNode) ?? "🤝"}
              </div>

              <h3 className="font-extrabold text-[#0A1F44] text-sm mb-2">
                {partner.name}
              </h3>

              <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                Click to view details
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {activePartner && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white max-w-lg w-full rounded-2xl p-10 relative text-center shadow-2xl"
          >
            <button
              onClick={() => setActivePartner(null)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            <div className="text-5xl mb-4">{activePartner.icon ?? "🤝"}</div>

            <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
              {activePartner.name}
            </h3>

            {/* <p className="text-gray-700 leading-relaxed mb-6">
              {activePartner.description}
            </p> */}

            {/* {activePartner.website && (
              <a
                href={activePartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 text-corporate-blue font-bold hover:underline"
              >
                Visit Website →
              </a>
            )} */}

            <div>
              <button
                onClick={() => setActivePartner(null)}
                className="px-8 py-3 bg-[#0A1F44] text-white rounded-full hover:bg-corporate-gold hover:text-[#0A1F44] transition shadow"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PartnersShowcase;
