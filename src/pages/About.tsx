import * as React from 'react';
import { useState } from "react";
import { ACHIEVEMENTS } from '../data/mockData';
import AchievementCard from '../components/ui/AchievementCard';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import bgPattern from '../assets/about_hero_pattern.png';
import { FaArrowRight } from 'react-icons/fa';

const VISION_MISSION_VALUES = [
  {
    key: 'mission',
    title: 'Our Mission',
    content: "To be the leading facilitator of Sino-Ethiopian trade, delivering expert services grounded in professionalism, integrity, and thorough knowledge of Ethiopia’s commercial and logistical environment. We are committed to simplifying complex trade processes for our partners.",
  },
  {
    key: 'vision',
    title: 'Our Vision',
    content: "To create a seamless, efficient, and highly compliant trade corridor, establishing Sabolla International as the indispensable partner for global manufacturers seeking sustainable growth and deep market penetration within the rapidly developing Ethiopian economy.",
  },
  {
    key: 'values',
    title: 'Core Values',
    content: "Integrity (Uncompromising ethics in all dealings), Reliability (Consistent and timely delivery), Expertise (Deep regulatory and market knowledge), and Partnership (Long-term, mutually beneficial relationships).",
  },
];

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(VISION_MISSION_VALUES[0].key);
  const activeContent = VISION_MISSION_VALUES.find(item => item.key === activeTab);

  return (
    <div className="bg-[#F9F2D6] w-full min-h-screen overflow-hidden font-sans selection:bg-[#308667] selection:text-[#F9F2D6]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-16 pb-32 flex items-center justify-center bg-[#122C21] overflow-hidden border-b border-[#308667]/20">
        {/* Background Pattern Image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}>
        </div>

        {/* Gradient Mesh for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#122C21]/90 z-0"></div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-6 py-2 border border-[#308667]/50 bg-[#308667]/10 backdrop-blur-sm rounded-full mb-10"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F9F2D6]">
              A Legacy of Trust
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-[#F9F2D6] mb-8 uppercase tracking-tighter leading-[0.9]"
          >
            Connecting <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#308667] to-[#4ade80]">Global Markets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Two decades of connecting global manufacturers with Ethiopian markets through{' '}
            <span className="text-[#F9F2D6] font-semibold">Precision and Reliability.</span>
          </motion.p>
        </div>
      </section>

      {/* ================= FOUNDATION & TABS ================= */}
      <section className="relative py-24 bg-[#F9F2D6] -mt-12 z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white rounded-[3rem] shadow-xl border border-[#122C21]/5 p-8 md:p-16">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
                Defining <span className="text-[#308667]">Global Trade</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#308667] mx-auto mb-8 rounded-full" />

              {/* TAB NAVIGATION */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {VISION_MISSION_VALUES.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`py-3 px-8 text-xs md:text-sm font-black transition-all duration-300 rounded-full border border-transparent uppercase tracking-widest
                        ${activeTab === item.key
                        ? 'bg-[#122C21] text-[#F9F2D6] shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-[#122C21]'}
                      `}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT */}
              <div className="relative min-h-[200px] max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#F9F2D6]/30 border border-[#122C21]/5 p-8 md:p-12 rounded-3xl"
                  >
                    <h3 className="text-2xl font-black text-[#122C21] mb-4 uppercase tracking-tight">
                      {activeContent?.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {activeContent?.content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h3 className="text-3xl md:text-5xl font-black text-[#122C21] uppercase tracking-tighter">
              Key Metrics of Our <span className="text-[#308667]">Success</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard
                key={index}
                value={achievement.value}
                label={achievement.label}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
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
              Start Trading Today <FaArrowRight />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;