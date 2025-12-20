import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export type Partner = {
  name: string;
  description?: string;
  website?: string;
  icon?: string;
};

type Props = {
  partners: Partner[];
};

const PartnersShowcase = ({ partners }: Props) => {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate partners to ensure enough content for scrolling and a fuller look
  // We use a larger multiplier if the list is short to ensure overflow
  const loopedPartners = [...partners, ...partners, ...partners];

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      // Only auto-scroll if not hovered and not actively dragging
      if (scrollContainerRef.current && !isHovered && !isDragging) {
        scrollContainerRef.current.scrollLeft += 1;

        // Infinite loop reset check
        // If we've scrolled past 2/3 of the content (assuming 3 sets), reset to 1/3
        // This is a rough approximation for infinite effect. 
        // A simpler approach: if at end, jump to start.
        if (
          scrollContainerRef.current.scrollLeft >=
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth - 1
        ) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  // Drag Event Handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Button Controls
  const scrollContainerBy = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="relative group w-full py-10 px-4 md:px-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Button */}
        <button
          onClick={() => scrollContainerBy(-200)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-sabolla-white p-2 md:p-3 rounded-full shadow-lg text-sabolla-dark-green hover:bg-sabolla-light-green hover:text-sabolla-white transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Scroll Left"
        >
          <FaChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scrollContainerBy(200)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-sabolla-white p-2 md:p-3 rounded-full shadow-lg text-sabolla-dark-green hover:bg-sabolla-light-green hover:text-sabolla-white transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Scroll Right"
        >
          <FaChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loopedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              layoutId={`partner-${index}`}
              onClick={() => setActivePartner(partner)}
              className="min-w-[150px] md:min-w-[220px] bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center cursor-pointer border border-sabolla-medium-green/20 hover:border-sabolla-light-green hover:shadow-2xl transition-all duration-300 transform"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 md:h-14 mb-3 md:mb-4 flex items-center justify-center">
                {partner.icon &&
                  (partner.icon.includes("/") || partner.icon.includes(".")) ? (
                  <img
                    src={partner.icon}
                    alt={partner.name}
                    className="h-full w-full p-1 object-contain transition-all duration-300"
                  />
                ) : (
                  <span className="text-2xl md:text-3xl">{partner.icon ?? "🤝"}</span>
                )}
              </div>
              <h3 className="font-bold text-sabolla-dark-green text-xs md:text-base line-clamp-2">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {activePartner && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-sabolla-white rounded-2xl max-w-lg w-full p-8 text-center relative shadow-2xl border-2 border-sabolla-light-green/20"
            >
              <button
                onClick={() => setActivePartner(null)}
                className="absolute top-4 right-4 bg-sabolla-medium-green/10 p-2 rounded-full text-sabolla-dark-green hover:bg-sabolla-dark-green hover:text-sabolla-white transition-colors"
                aria-label="Close"
              >
                <FaTimes size={20} />
              </button>

              <div className="h-24 mb-6 flex items-center justify-center">
                {activePartner.icon &&
                  (activePartner.icon.includes("/") ||
                    activePartner.icon.includes(".")) ? (
                  <img
                    src={activePartner.icon}
                    alt={activePartner.name}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-6xl">{activePartner.icon ?? "🤝"}</span>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-sabolla-dark-green">
                {activePartner.name}
              </h3>

              {activePartner.description && (
                <p className="text-sabolla-black/80 leading-relaxed mb-8">
                  {activePartner.description}
                </p>
              )}

              {activePartner.website && (
                <a
                  href={activePartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sabolla-dark-green text-sabolla-white rounded-full hover:bg-sabolla-light-green transition-colors font-semibold shadow-md"
                >
                  Visit Website ↗
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PartnersShowcase;
