import React from 'react';
import { CONTACT_INFO } from '../data/mockData';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';
import bgPattern from '../assets/about_hero_pattern.png';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F9F2D6] min-h-screen font-sans selection:bg-[#308667] selection:text-[#F9F2D6]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-16 pb-32 flex items-center justify-center bg-[#122C21] overflow-hidden border-b border-[#308667]/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}>
        </div>

        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#122C21]/90 z-0"></div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-6 py-2 border border-[#308667]/50 bg-[#308667]/10 backdrop-blur-sm rounded-full mb-10"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F9F2D6]">
              24/7 Global Support
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-[#F9F2D6] mb-8 uppercase tracking-tighter leading-[0.9]"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#308667] to-[#4ade80]">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We are here to facilitate your trade requirements. Reach out to our specialized team.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <div className="container mx-auto px-6 py-24 -mt-20 relative z-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT COLUMN: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-[#122C21]/5">
              <h2 className="text-4xl font-black text-[#122C21] mb-10 uppercase tracking-tighter">
                Contact <span className="text-[#308667]">Details</span>
              </h2>

              <div className="space-y-10">
                {/* Address */}
                <motion.div whileHover={{ x: 10 }} className="flex items-start group">
                  <div className="w-14 h-14 bg-[#F9F2D6] rounded-full flex items-center justify-center mr-6 shrink-0 group-hover:bg-[#122C21] transition-colors duration-300">
                    <FaMapMarkerAlt className="text-[#122C21] text-xl group-hover:text-[#F9F2D6] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#308667] mb-2">Office Headquarters</h3>
                    <p className="text-[#122C21] text-lg font-medium leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ x: 10 }} className="flex items-start group">
                  <div className="w-14 h-14 bg-[#F9F2D6] rounded-full flex items-center justify-center mr-6 shrink-0 group-hover:bg-[#122C21] transition-colors duration-300">
                    <FaEnvelope className="text-[#122C21] text-xl group-hover:text-[#F9F2D6] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#308667] mb-2">Global Inquiries</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#122C21] text-lg font-bold hover:text-[#308667] transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div whileHover={{ x: 10 }} className="flex items-start group">
                  <div className="w-14 h-14 bg-[#F9F2D6] rounded-full flex items-center justify-center mr-6 shrink-0 group-hover:bg-[#122C21] transition-colors duration-300">
                    <FaPhoneAlt className="text-[#122C21] text-xl group-hover:text-[#F9F2D6] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#308667] mb-2">Direct Line</h3>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#122C21] text-lg font-bold hover:text-[#308667] transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Simple Map Container / Decoration */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white h-[300px] relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="SABOLLA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.06830509618!2d38.70420772710323!3d8.980603415174092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1703112345678!5m2!1sen!2set"
                width="100%"
                height="100%"
                className="border-0 w-full h-full"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[2.5rem]"></div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* The form container logic is already handled inside ContactForm, but we add a wrapper if needed or just drop it in. 
                Since ContactForm has its own card style, we just place it directly. 
            */}
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
