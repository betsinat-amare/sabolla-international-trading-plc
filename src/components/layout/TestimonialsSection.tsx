// components/TestimonialsSection.tsx
import { type JSX } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- 1. DEFINE TYPE FOR TESTIMONIAL DATA ---
interface Testimonial {
    id: number;
    name: string;
    title: string;
    avatarUrl: string;
    quote: string;
}

// --- 2. EDIT YOUR TESTIMONIALS HERE ---
// The data is now strongly typed according to the interface above.
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Hans Mueller',
        title: 'CEO, INDRA AVITECH GmbH',
        avatarUrl: 'https://i.pravatar.cc/150?img=32',
        quote:
            'SABOLLA\'s deep understanding of the Ethiopian aviation sector was instrumental in our market entry. Their import facilitation and local coordination saved us weeks of work. A truly professional team.',
    },
    {
        id: 2,
        name: 'Clara Rodriguez',
        title: 'Procurement Director, Rosenbauer',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
        quote:
            'Navigating the regulations for fire safety equipment can be complex. SABOLLA handled everything flawlessly, from sourcing to compliance. They are a reliable and effective partner in Ethiopia.',
    },
    {
        id: 3,
        name: 'David Chen',
        title: 'Operations Manager, Jingshen International',
        avatarUrl: 'https://i.pravatar.cc/150?img=68',
        quote:
            'Their market insights were invaluable. They provided us with actionable data that shaped our entire strategy for the region. We couldn\'t have done it without their expert advisory services.',
    },
];

type TestimonialsSectionProps = {};

const TestimonialsSection = ({ }: TestimonialsSectionProps): JSX.Element => {
    // --- 4. TYPE THE STATE HOOK ---
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

    // Auto-play functionality
    useEffect(() => {
        if (selectedTestimonial) return; // Pause auto-play when modal is open

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [selectedTestimonial]);

    // --- 5. TYPE THE EVENT HANDLERS ---
    const goToPrevious = (): void => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (): void => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index: number): void => {
        setCurrentIndex(index);
    };

    // --- 6. TYPE THE FRAMER MOTION VARIANTS ---
    const slideVariants: Variants = {
        hidden: { opacity: 0, x: 300 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -300 },
    };

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600 mb-16">
                    Don't just take our word for it. Here's what our partners have to say about our services.
                </p>

                <div className="relative flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 md:-left-12 z-10 p-3 bg-white rounded-full shadow-lg text-[#0A1F44] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 md:-right-12 z-10 p-3 bg-white rounded-full shadow-lg text-[#0A1F44] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight size={20} />
                    </button>

                    {/* Testimonial Card Container */}
                    <div className="w-full h-auto md:h-64 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full text-left cursor-pointer hover:shadow-2xl transition-shadow group"
                                onClick={() => setSelectedTestimonial(testimonials[currentIndex])}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <FaQuoteLeft className="text-4xl text-[#D4AF37] mb-4" />
                                <p className="text-gray-700 text-lg md:text-xl mb-6 italic line-clamp-3">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#D4AF37]"
                                            src={testimonials[currentIndex].avatarUrl}
                                            alt={testimonials[currentIndex].name}
                                        />
                                        <div>
                                            <h4 className="font-bold text-[#0A1F44] text-lg">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                {testimonials[currentIndex].title}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Click to read details
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-[#D4AF37] w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* ================= MODAL ================= */}
            <AnimatePresence>
                {selectedTestimonial && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTestimonial(null)}
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white max-w-2xl w-full rounded-2xl p-8 md:p-12 relative shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <FaQuoteLeft className="text-5xl text-[#D4AF37]/20 absolute top-8 left-8" />

                            <div className="flex flex-col items-center text-center relative z-10">
                                <img
                                    src={selectedTestimonial.avatarUrl}
                                    alt={selectedTestimonial.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-[#D4AF37] shadow-lg mb-6"
                                />
                                <h3 className="text-3xl font-bold text-[#0A1F44] mb-2">
                                    {selectedTestimonial.name}
                                </h3>
                                <p className="text-[#D4AF37] font-semibold mb-8">
                                    {selectedTestimonial.title}
                                </p>

                                <p className="text-gray-700 text-xl leading-relaxed italic">
                                    "{selectedTestimonial.quote}"
                                </p>

                                <button
                                    onClick={() => setSelectedTestimonial(null)}
                                    className="mt-10 px-8 py-3 bg-[#0A1F44] text-white rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-colors font-bold shadow-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TestimonialsSection;