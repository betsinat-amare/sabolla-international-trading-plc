import * as React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import bgPattern from '../assets/about_hero_pattern.png';

// Full data imports from your files
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from '../components/layout/TestimonialsSection';

const PartnersPage: React.FC = () => {
  return (
    <div className="bg-[#F9F2D6] min-h-screen font-sans selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#122C21] pt-16 pb-32 overflow-hidden border-b border-[#308667]/20">
        {/* Subtle Brand Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#122C21]/90 z-0" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-6 py-2 border border-[#308667]/50 bg-[#308667]/10 backdrop-blur-sm rounded-full mb-10"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F9F2D6]">
              Global Connectivity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-[#F9F2D6] uppercase tracking-tighter leading-[0.9] mb-8"
          >
            Strategic <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#308667] to-[#4ade80]">Synergy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We represent the world's most innovative manufacturers, ensuring Ethiopia has
            seamless access to <span className="text-[#F9F2D6] font-semibold">mission-critical technologies</span> and industrial solutions.
          </motion.p>
        </div>
      </section>

      {/* ================= PARTNERS SHOWCASE ================= */}
      <section className="relative -mt-12 z-20 w-full">
        {/* Full width white container */}
        <div className="bg-white  border-t border-[#122C21]/5 w-full py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">

            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
                Our Trusted Partners
              </h2>
              <div className="w-24 h-1.5 bg-[#308667] mx-auto mb-8 rounded-full" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                A curated network of international leaders and local stakeholders driving
                national progress across aviation, safety, and infrastructure.
              </p>
            </div>

            {/* International Partners Section */}
            <section className="mb-24">
              <div className="flex items-center gap-6 mb-12">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-xs md:text-sm font-black text-[#308667] uppercase tracking-[0.3em] whitespace-nowrap">
                  International Suppliers
                </h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <PartnersShowcase partners={PARTNERS} />
            </section>

            {/* Local & Government Partners Section */}
            <section>
              <div className="flex items-center gap-6 mb-12">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-xs md:text-sm font-black text-[#308667] uppercase tracking-[0.3em] whitespace-nowrap">
                  Local & Government Network
                </h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <PartnersShowcase partners={LOCAL_PARTNERS} />
            </section>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white pb-24">
        <TestimonialsSection />
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-32 bg-[#122C21] relative overflow-hidden group">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />
        {/* Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#308667] opacity-20 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h3 className="text-4xl md:text-7xl font-black text-[#F9F2D6] uppercase mb-10 leading-[0.9] tracking-tighter">
            Ready to Expand <br /> Together?
          </h3>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#308667] text-white px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-[#F9F2D6] hover:text-[#122C21] transition-all shadow-xl flex items-center gap-4 mx-auto"
            >
              Partner With Us <FaArrowRight />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;