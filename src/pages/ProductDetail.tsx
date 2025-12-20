import * as React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaShieldAlt, FaTruck, FaCogs, FaHandshake, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSET
import bgPattern from "../assets/about_hero_pattern.png";

// --- DATA STRUCTURE (UNTOUCHED) ---
const PRODUCT_DATA: Record<string, any> = {
  "aviation": {
    name: "Aviation",
    desc: "Critical communication and navigation systems.",
    content: "We support the aviation sector with a comprehensive suite of critical systems including VHF AM base stations, communication and navigation spare parts, AMHS, AIM, and AIS systems. Each product is carefully sourced from trusted manufacturers, with detailed verification to ensure technical compliance with international aviation safety standards.",
    lifecycle: "Beyond procurement, we coordinate supplier engagement, manage import documentation, and oversee the certification process. We provide full lifecycle support, including installation guidance.",
    impact: "Our approach ensures that airports and air traffic control authorities receive reliable equipment that enhances safety and operational efficiency."
  },
  "military": {
    name: "Military",
    desc: "Advanced defense technologies.",
    content: "We deliver advanced technologies designed to meet the exacting standards of defense and military operations. Our services include sourcing verified equipment from specialized manufacturers and managing secure procurement workflows.",
    lifecycle: "Each process is structured to meet security requirements and operational confidentiality. Our support extends to logistics planning and documentation management.",
    impact: "We ensure reliability and mission-critical performance, allowing defense institutions to focus on strategic objectives."
  },
  "fire-disaster": {
    name: "Fire & Disaster Risk",
    desc: "Ready-to-deploy emergency-response equipment.",
    content: "Our category encompasses firefighting trucks, aerial ladder trucks, firefighting foam, and dry chemical powders. We manage technical assessment and delivery logistics to ensure fully functional equipment.",
    lifecycle: "Every item is vetted for quality and compliance with international standards. We provide operational support and technical training.",
    impact: "Our holistic approach helps fire departments respond effectively to crises, minimizing risks and safeguarding lives."
  },
  "safety-security": {
    name: "Safety & Security",
    desc: "Specialized protective gear.",
    content: "Our offerings include firefighting clothing, breathing apparatus, aluminized suits, and full diving suits. Each product undergoes strict verification for material quality.",
    lifecycle: "Our services include full logistics management, regulatory clearance, and after-sales support.",
    impact: "By ensuring access to gear that meets safety standards, we reduce workplace risks in hazardous conditions."
  },
  "agriculture": {
    name: "Agricultural Products",
    desc: "Post-harvest protection materials.",
    content: "We supply a wide array of inputs, including food-grade hermetic bags and jute bags. Our process emphasizes supplier verification and quality inspection.",
    lifecycle: "We provide technical guidance and collaboration with cooperatives to implement effective storage systems.",
    impact: "By supporting storage efficiency, we help strengthen supply chains and improve profitability for agricultural operations."
  },
  "water-sewerage": {
    name: "Water & Sewerage",
    desc: "Infrastructure for the water sector.",
    content: "We support the sector by supplying sewerage trucks, jetting trucks, water meters, and pumps. Our team manages sourcing and coordinates export/import procedures.",
    lifecycle: "We assist utilities in deploying solutions efficiently, providing operational guidance and maintaining quality standards.",
    impact: "Ensuring timely equipment delivery enables improved urban service delivery and sustainable water management."
  },
  "power-energy": {
    name: "Power & Energy",
    desc: "Electrical infrastructure components.",
    content: "We provide electric meters, generators, transformers, and network cables. Our support covers sourcing and specification verification.",
    lifecycle: "Our involvement extends to planning assistance and installation coordination to ensure efficiency in real-world operations.",
    impact: "By delivering reliable power solutions, we help clients implement scalable energy systems that drive growth."
  },
  "transportation": {
    name: "Transport & Storage",
    desc: "Logistics solutions and heavy machinery.",
    content: "Our solutions cover freight containers, reachstackers, forklifts, and specialized tires. We provide full supply-chain support.",
    lifecycle: "We advise clients on equipment suitability and integration to optimize warehouse operations.",
    impact: "By ensuring reliable supply, we help logistics companies maintain uninterrupted operations."
  }
};

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const productKeys = Object.keys(PRODUCT_DATA);
  const currentIndex = productKeys.indexOf(slug || "aviation");
  const product = PRODUCT_DATA[slug || "aviation"] || PRODUCT_DATA["aviation"];

  const nextSlug = productKeys[(currentIndex + 1) % productKeys.length];
  const prevSlug = productKeys[(currentIndex - 1 + productKeys.length) % productKeys.length];

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#122C21] pt-32 pb-48 overflow-hidden">

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#122C21]/50 to-[#122C21] z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-[#308667]" />
            Back to Categories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >


            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {product.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 max-w-7xl relative -mt-32 z-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Column: Main Detail */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Overview Card */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
              <h2 className="text-lg font-bold text-[#122C21] uppercase tracking-wide mb-6 border-b border-gray-100 pb-4">
                Operational Brief
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-0">
                {product.content}
              </p>
            </div>

            {/* Strategy Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 border-t-4 border-[#308667]">
                <h4 className="text-sm font-bold text-[#308667] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FaCogs /> Lifecycle Integration
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {product.lifecycle}
                </p>
              </div>
              <div className="bg-[#122C21] p-8 rounded-2xl shadow-lg text-white">
                <h4 className="text-sm font-bold text-[#308667] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FaCheckCircle /> Strategic Impact
                </h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  {product.impact}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">

              {/* Compliance Box */}
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
                <h3 className="text-lg font-bold text-[#122C21] mb-6 flex items-center gap-2">
                  <FaShieldAlt className="text-[#308667]" />
                  Compliance Framework
                </h3>

                <div className="space-y-6">
                  {[
                    { icon: <FaShieldAlt />, t: "Verification", d: "Strict safety certification checks." },
                    { icon: <FaTruck />, t: "Logistics", d: "Coordinated global supply chains." },
                    { icon: <FaCogs />, t: "Maintenance", d: "Technical operational support." },
                    { icon: <FaHandshake />, t: "Partnership", d: "Direct manufacturer access." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="text-[#308667] text-xl mt-1 opacity-80">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-[#122C21] text-sm mb-1">{item.t}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="block mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(18, 44, 33, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-5 text-sm font-black bg-[#122C21] text-white rounded-2xl transition-all duration-300 uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-[#122C21]"
                  >
                    Request Consultation
                  </motion.button>
                </Link>
              </div>

              {/* Navigation Pagers */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to={`/products/${prevSlug}`}
                  className="bg-white p-4 rounded-xl border border-gray-100 hover:border-[#308667]/30 hover:shadow-md transition-all text-center group"
                >
                  <span className="text-xs font-semibold text-gray-400 uppercase block mb-1">Previous</span>
                  <span className="text-sm font-bold text-[#122C21] group-hover:text-[#308667] transition-colors">← Sector</span>
                </Link>
                <Link
                  to={`/products/${nextSlug}`}
                  className="bg-white p-4 rounded-xl border border-gray-100 hover:border-[#308667]/30 hover:shadow-md transition-all text-center group"
                >
                  <span className="text-xs font-semibold text-gray-400 uppercase block mb-1">Next</span>
                  <span className="text-sm font-bold text-[#122C21] group-hover:text-[#308667] transition-colors">Sector →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY QUICK-SWITCHER ================= */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Browse Other Commodities</h5>
          <div className="flex flex-wrap justify-center gap-3">
            {productKeys.map((key) => (
              <Link
                key={key}
                to={`/products/${key}`}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all border
                            ${key === slug
                    ? 'bg-[#122C21] text-white border-[#122C21]'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-[#308667] hover:text-[#308667] hover:bg-white'}
                        `}
              >
                {PRODUCT_DATA[key].name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;