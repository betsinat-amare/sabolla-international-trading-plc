import { useState } from "react";
import { motion } from "framer-motion";

export type Partner = {
  name: string;
  description?: string;
  website?: string;
  icon?: string;
};

type Props = {
  partners: Partner[];
};

const PartnersShowcase = ({ partners }: Props) => {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);

  // Duplicate partners for infinite scroll illusion
  const loopedPartners = [...partners, ...partners];

  return (
    <>
      {/* ===== SCROLLING PARTNERS ===== */}
      <div className="relative overflow-hidden w-full py-10">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {loopedPartners.map((partner, index) => (
            <div
              key={index}
              onClick={() => setActivePartner(partner)}
              className="min-w-[220px] bg-white rounded-2xl shadow-xl p-6 text-center cursor-pointer border border-slate-200 hover:border-[#D4AF37] transition-all hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">
                {partner.icon ?? "🤝"}
              </div>
              <h3 className="font-bold text-[#0A1F44] text-sm">
                {partner.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== MODAL ===== */}
      {activePartner && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#0A1F44]">
              {activePartner.name}
            </h3>

            {activePartner.description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {activePartner.description}
              </p>
            )}

            {activePartner.website && (
              <a
                href={activePartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 font-bold text-[#0A1F44] hover:underline"
              >
                Visit Website →
              </a>
            )}

            <button
              onClick={() => setActivePartner(null)}
              className="block mx-auto px-8 py-3 bg-[#0A1F44] text-white rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PartnersShowcase;
