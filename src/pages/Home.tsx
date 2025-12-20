import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeImage from '../assets/home_image.png';

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import TestimonialsSection from "../components/layout/TestimonialsSection";
import LocalPartner from "../components/partners/localPartner";
import { PARTNERS } from "../data/partners";

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
            backgroundImage: `url(${homeImage})`,
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

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-sabolla-white">
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
            className="text-lg md:text-xl font-normal text-sabolla-white/90 mb-10 max-w-4xl mx-auto leading-relaxed tracking-wide"
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
              className="inline-flex items-center gap-2 border-2 border-sabolla-light-green text-sabolla-light-green font-bold py-4 px-12 rounded-full hover:bg-sabolla-light-green hover:text-sabolla-white hover:shadow-xl transition"
            >
              Explore Our Services →
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-sabolla-light-green text-sabolla-light-green font-bold py-4 px-12 rounded-full hover:bg-sabolla-light-green hover:text-sabolla-white hover:shadow-xl transition"
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
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.1,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    zIndex: 10
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/15 cursor-pointer transition-colors h-full"
                >
                  <div className="text-4xl font-extrabold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-200">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      {/* ================= WHO WE ARE ================= */}
      <section className="relative py-28 bg-sabolla-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-sabolla-light-green/10 rounded-2xl transform rotate-3" />
              <iframe
                title="SABOLLA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019590456102!2d-122.41941508468186!3d37.77492927975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1f1b9b45%3A0x1234567890abcdef!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1698870702130!5m2!1sen!2sus"
                width="100%"
                height="500"
                className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full border-0"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-sabolla-dark-green p-8 rounded-xl shadow-lg hidden md:block">
                <div className="text-4xl font-black text-sabolla-white">20+</div>
                <div className="text-sm font-bold text-sabolla-light-green uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sabolla-light-green font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-sabolla-black mb-6 leading-tight">
                Your Trusted Partner in <span className="text-sabolla-light-green">Global Trade</span>
              </h2>
              <p className="text-lg text-sabolla-black/70 mb-8 leading-relaxed">
                SABOLLA INTERNATIONAL TRADING PLC connects international businesses with Ethiopia’s rapidly growing marketplace. We don't just facilitate trade; we build lasting bridges that foster economic growth and mutual success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Strategic Sourcing", "Market Intelligence", "Logistics Mastery", "Regulatory Support"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-sabolla-light-green" />
                    <span className="font-bold text-sabolla-dark-green">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-sabolla-dark-green text-sabolla-white font-bold rounded-lg hover:bg-sabolla-light-green transition-colors shadow-lg"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL FOOTPRINT ================= */}
      <GlobalFootprint />

      {/* ================= PARTNERS ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#122C21] mb-6">
            Our Trusted <span className="text-[#308667]">Global Partners</span>
          </h2>
          <p className="text-center text-sabolla-black/70 max-w-2xl mx-auto mb-16">
            We collaborate with globally recognized manufacturers and technology leaders.
          </p>
          <PartnersShowcase partners={PARTNERS} />
        </div>
      </section>

      {/* ================= LOCAL PARTNERS ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#122C21] mb-6">
            Our <span className="text-[#308667]">Local Partners</span>
          </h2>
          <p className="text-center text-sabolla-black/70 max-w-2xl mx-auto mb-16">
            Strengthening our roots through strategic alliances with leading Ethiopian enterprises.
          </p>
          <LocalPartner />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-sabolla-black/5">
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
        <div className="absolute inset-0 bg-sabolla-black/80" />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
          >
            Ready to Expand into the <span className="text-[#308667]">Ethiopian Market?</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(18, 44, 33, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-5 text-sm font-black bg-[#122C21] text-white rounded-2xl transition-all duration-300 uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-[#122C21]"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
