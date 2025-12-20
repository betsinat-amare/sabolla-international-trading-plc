// src/pages/ServicesIndex.tsx
import React, { useEffect, useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgPattern from '../assets/about_hero_pattern.png';
import { FaShieldAlt, FaChartBar, FaShip, FaCubes, FaArrowRight } from 'react-icons/fa';

// --- Placeholder Icons (Unified with Service Detail) ---
const Icons: { [key: string]: React.ReactNode } = {
  "Trade Consulting": <FaShieldAlt />,
  "Logistics Support": <FaShip />,
  "Compliance & Regulatory": <FaChartBar />, // Adapted mapping
  "Sourcing": <FaCubes />,
};

const getIcon = (name: string) => {
  // Simple check to match name to icon
  return Icons[name] || <FaShieldAlt />;
};

// Animation variants for cards
const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  hover: {
    y: -10,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const ServicesIndex: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <div className="bg-[#F9F2D6] min-h-screen relative font-sans selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#308667] border-b border-[#122C21]/10 py-32 overflow-hidden">

        {/* Local Image Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#122C21]/20 z-0" />

        <div className="relative container mx-auto px-6 max-w-7xl z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-[#F9F2D6] mb-6 tracking-tighter uppercase leading-[0.9]"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              Strategic <br /><span className="text-[#122C21]">Trade Services</span>
            </motion.h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              We offer services designed to streamline your operations, reduce risk, and ensure <b className="font-bold text-[#F9F2D6]">regulatory compliance</b> in the dynamic Ethiopian market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative py-24 -mt-20 z-20">
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_LIST.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link to={`/services/${service.slug}`} className="block h-full">
                    <div className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-[#122C21]/5 flex flex-col justify-between h-full transition-all duration-500 group-hover:border-[#308667]/30 relative overflow-hidden">

                      {/* Background Hover Effect */}
                      <div className="absolute inset-0 bg-[#308667]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-[#122C21] text-[#F9F2D6] flex items-center justify-center mb-8 text-2xl shadow-lg group-hover:bg-[#308667] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          {getIcon(service.name)}
                        </div>

                        <h2 className="text-3xl font-black text-[#122C21] mb-4 uppercase tracking-tight group-hover:text-[#308667] transition-colors">
                          {service.name}
                        </h2>
                        <p className="text-gray-600 mb-8 font-medium leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center text-sm font-black uppercase tracking-widest text-[#308667] group-hover:text-[#122C21] transition-colors">
                        Explore Service <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="bg-[#308667] mt-0 py-24 relative overflow-hidden">
        {/* Local Image Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="relative container mx-auto px-6 max-w-7xl text-center z-10">
          <h3 className="text-3xl md:text-5xl font-black text-[#F9F2D6] mb-6 uppercase tracking-tight leading-none">
            Let's Build Your <br /><span className="text-[#122C21]">Success Strategy</span>
          </h3>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            Our specialists are ready to simplify your most complex import and export challenges.
          </p>
          <Link to='/contact'>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(18, 44, 33, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 text-sm font-black bg-[#122C21] text-white rounded-2xl transition-all duration-300 uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-[#122C21]"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesIndex;
