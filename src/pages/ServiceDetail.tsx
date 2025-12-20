import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaChartBar,
  FaShip,
  FaCubes,
  FaArrowLeft,
  FaLayerGroup,
  FaChevronRight
} from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSET
import bgPattern from "../assets/about_hero_pattern.png";


// --- SERVICE DATA (UNTOUCHED) ---
const DETAILED_SERVICES: Record<string, any> = {
  "advisory": {
    name: "Advisory and Consultancy Services",
    icon: <FaShieldAlt />,
    intro: "We offer high-value advisory and consultancy services to guide international companies through Ethiopia’s complex legal, regulatory, and commercial landscape.",
    fullContent: [
      "Our team helps clients navigate import rules, sector-specific compliance standards, and local operational requirements, ensuring that every business decision aligns with regulatory frameworks.",
      "We actively identify investment opportunities, public tenders, and market entry options, delivering detailed sector analyses that include political, economic, and operational risk assessments.",
      "Our support extends across the entire project lifecycle, from initial market entry strategy to contract negotiation, project development, and execution.",
      "We advise clients on business positioning, pricing strategies, and operational planning while continuously monitoring risks and providing mitigation strategies."
    ],
    outcome: "By offering real-time guidance and tailored consulting, we enable international partners to make informed, strategic decisions that maximize profitability, reduce exposure, and foster long-term sustainable growth in the Ethiopian market."
  },
  "market-assessments": {
    name: "Local Market Assessments",
    icon: <FaChartBar />,
    intro: "Sabolla conducts comprehensive local market assessments to provide international partners with a clear understanding of Ethiopia’s dynamic business environment.",
    fullContent: [
      "Using extensive local networks, field intelligence, and data analytics, we evaluate customer preferences, demand patterns, competitor activity, and emerging trends.",
      "Our studies identify potential buyers, distributors, and strategic project partners while monitoring government procurement pipelines, donor-funded projects, and sector-specific opportunities.",
      "In addition to quantitative research, we conduct field surveys, in-person interviews, and on-site validation to ensure the accuracy and reliability of our findings.",
      "Our ongoing market intelligence reports keep partners updated on shifts in consumer behavior, competitive moves, and regulatory developments, enabling them to adapt strategies proactively."
    ],
    outcome: "This thorough, evidence-based approach helps international businesses reduce uncertainty, increase market penetration, and optimize operational effectiveness."
  },
  "import-export": {
    name: "Import and Export Facilitation",
    icon: <FaShip />,
    intro: "We provide end-to-end support for import and export processes, ensuring smooth, compliant, and efficient movement of goods.",
    fullContent: [
      "Our team manages all aspects of regulatory compliance, including certifications, permits, quality standards, and documentation such as invoices, packing lists, certificates of origin, and pre-shipment inspections.",
      "We coordinate closely with customs authorities, shipping agents, and freight forwarders to streamline operations and minimize procedural delays.",
      "Our services also cover logistics management, transportation planning, and monitoring of exports from Ethiopia to global markets.",
      "We handle risk assessment, tracking, and coordination with stakeholders to ensure timely delivery and minimize disruptions."
    ],
    outcome: "By managing regulatory requirements and operational logistics proactively, we allow international partners to focus on market growth, sales strategy, and business expansion with confidence that their supply chain is fully optimized and compliant."
  },
  "sourcing": {
    name: "Sourcing and Supply Chain Management",
    icon: <FaCubes />,
    intro: "SABOLLA offers full-spectrum sourcing and supply chain management services tailored to both international and domestic clients.",
    fullContent: [
      "We identify reliable suppliers, conduct rigorous verification, negotiate pricing and agreements, and supervise procurement processes from start to finish.",
      "Our team monitors production quality, adherence to specifications, and compliance with industry standards, ensuring that all sourced products meet required benchmarks.",
      "We manage all aspects of local logistics, warehousing, and inland transportation, ensuring timely and secure delivery.",
      "Continuous risk assessment of supply chain operations including market fluctuations, production delays, and operational challenges ensures proactive mitigation."
    ],
    outcome: "By maintaining ethical practices, transparency, and cost-efficiency throughout the supply chain, we provide partners with reliable, high-quality products and services while protecting commercial interests."
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = DETAILED_SERVICES[slug || "advisory"] || DETAILED_SERVICES["advisory"];

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

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-[#308667]" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#308667] text-white text-xs font-bold px-3 py-1 rounded-full">
                SERVICE
              </span>
              <span className="text-white/60 text-sm tracking-widest uppercase font-medium">Global Expertise</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {service.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT SECTION (UNTOUCHED) ================= */}
      <div className="container mx-auto px-6 py-24 max-w-7xl relative -mt-32 z-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                <div className="text-[#308667] text-2xl">{service.icon}</div>
                <h2 className="text-lg font-bold text-[#122C21] uppercase tracking-wide">Introduction</h2>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {service.intro}
              </p>
            </motion.div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#122C21] mb-8 tracking-tight">Scope of Work</h2>

              <div className="space-y-8">
                {service.fullContent.map((paragraph: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 bg-[#122C21]/5 rounded-full flex items-center justify-center text-[#308667] group-hover:bg-[#308667] group-hover:text-white transition-all duration-300">
                        <FaLayerGroup className="text-sm" />
                      </div>
                      {idx !== service.fullContent.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gray-200" />
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed pb-8 font-medium text-base">
                      {paragraph}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Sticky Outcome */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">

              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#308667] mb-4">Strategic Outcome</h3>
                <p className="text-gray-700 font-medium leading-relaxed italic">
                  "{service.outcome}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-8 mt-8">
                <h4 className="font-bold text-[#122C21] mb-2">Ready to engage?</h4>
                <p className="text-sm text-gray-500 mb-6">Connect with our team for a detailed proposal.</p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(18, 44, 33, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 text-sm font-bold bg-[#122C21] text-white rounded-xl transition-all duration-300 uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:bg-[#308667]"
                  >
                    Partner With Us <FaChevronRight className="text-xs" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;