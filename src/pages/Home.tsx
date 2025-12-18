import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import TestimonialsSection from "../components/layout/TestimonialsSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center text-[#D4AF37]">

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase mb-6"
          >
            SABOLLA INTERNATIONAL TRADING PLC
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Your Gateway to Ethiopia’s Market
            </motion.span>
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            SABOLLA INTERNATIONAL TRADING PLC connects international businesses with Ethiopia’s
            growing market. With over 20 years of expertise in trade representation, we provide
            advisory services, market insights, sourcing, import & export facilitation, and
            supply chain management.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="text-lg font-semibold mb-12"
          >
            Expert Support. Seamless Operations. Global Connections.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-4 px-12 rounded-full hover:text-white hover:shadow-xl transition"
            >
              Explore Our Services →
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-4 px-12 rounded-full hover:text-white hover:shadow-xl transition"
            >
              Talk to an Expert
            </Link>
          </motion.div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "100+", label: "International Suppliers" },
              { value: "150+", label: "Successful Shipments" },
              { value: "50+", label: "Product Categories" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative py-28 bg-white">
        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-8"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We are a trusted bridge between international suppliers and Ethiopia’s rapidly
            growing marketplace, delivering market entry strategies, logistics coordination,
            and long-term partnerships.
          </motion.p>
        </div>
      </section>

      {/* ================= GLOBAL FOOTPRINT ================= */}
      <GlobalFootprint />

      {/* ================= PARTNERS ================= */}
      <section className="py-28 bg-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0A1F44] mb-6">
            Our Trusted Global Partners
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            We collaborate with globally recognized manufacturers and technology leaders.
          </p>
          <PartnersShowcase partners={[]}/>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-200">
        <TestimonialsSection />
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Ready to Expand into the Ethiopian Market?
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#D4AF37] text-[#0A1F44] font-bold py-4 px-14 rounded-full hover:scale-105 hover:shadow-xl transition"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
