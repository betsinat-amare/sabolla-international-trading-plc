import React from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICES_LIST } from "../data/mockData";
import { motion } from "framer-motion";

// ================= ICONS =================
const CheckCircle = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const ChevronRight = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// ================= DATA BUILDER =================
const getDetailedServiceContent = (slug: string) => {
  const service = SERVICES_LIST.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    ...service,
    details: [
      {
        title: "Regulatory Guidance",
        content:
          "Expert assistance navigating Ethiopian trade laws, customs duties, and import/export licensing requirements. Ensure 100% compliance from day one.",
      },
      {
        title: "Market Intelligence",
        content:
          "Up-to-date local market assessments, consumer trends, and competitor analysis to inform your strategic decision-making in the region.",
      },
      {
        title: "Sourcing & Compliance",
        content:
          "Identifying reliable local partners and ensuring all products and processes meet Ethiopian standards (ES) and international quality regulations.",
      },
      {
        title: "Logistics & Risk Management",
        content:
          "Seamless coordination of global shipping, local storage, and distribution, while proactively identifying and mitigating supply chain risks.",
      },
      {
        title: "Operational Support",
        content:
          "End-to-end support, including meticulous documentation, efficient ground handling, and securing necessary governmental permissions without delay.",
      },
    ],
  };
};

// ================= ANIMATION VARIANTS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

// Motion-enabled Link
const MotionLink = motion(Link);

// ================= COMPONENT =================
const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const serviceData = getDetailedServiceContent(slug || "");

  if (!serviceData) {
    return (
      <div className="container mx-auto px-6 py-40 text-center">
        <h1 className="text-5xl font-extrabold text-[#0A1F44]">
          Service Not Found
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Please check the URL or return to the services page.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-block text-[#D4AF37] font-semibold hover:underline"
        >
          ← Back to All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#0A1F44] py-32 relative overflow-hidden shadow-xl"
      >
        <div className="absolute inset-0 opacity-10" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <p className="text-md font-semibold text-[#D4AF37] uppercase mb-3 tracking-widest">
            Expert Trade Solutions
          </p>

          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            {serviceData.name}
          </motion.h1>

          <motion.p
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl"
          >
            {serviceData.shortDesc}
          </motion.p>
        </div>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="md:col-span-2">
            <p className="text-2xl text-gray-700 mb-12 border-l-4 border-[#D4AF37] pl-6 italic bg-slate-50 p-4 rounded-lg">
              Our comprehensive <strong>{serviceData.name}</strong> service is
              built on two decades of local expertise.
            </p>

            <h2 className="text-4xl font-extrabold text-[#0A1F44] mb-10">
              The Sabolla Advantage
            </h2>

            <motion.div
              className="relative space-y-12 pl-6 border-l-4 border-slate-300"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {serviceData.details.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[38px] top-0 w-8 h-8 rounded-full bg-[#0A1F44] flex items-center justify-center border-4 border-white">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-8">
              <div className="bg-[#0A1F44] text-white p-8 rounded-xl shadow-2xl border-t-4 border-[#D4AF37]">
                <h3 className="text-3xl font-extrabold mb-4 text-[#D4AF37]">
                  Secure Your Trade Path
                </h3>
                <p className="mb-8 text-gray-200">
                  Get a tailored strategy from our expert consultants.
                </p>

                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center bg-[#D4AF37] text-[#0A1F44] font-bold py-3 rounded-xl"
                >
                  Get Expert Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </MotionLink>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border shadow">
                <Link
                  to="/services"
                  className="inline-flex items-center text-[#0A1F44] font-semibold hover:text-[#D4AF37]"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/services"
          className="mt-16 inline-block text-lg text-[#0A1F44] font-semibold hover:text-[#D4AF37]"
        >
          ← Return to All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
