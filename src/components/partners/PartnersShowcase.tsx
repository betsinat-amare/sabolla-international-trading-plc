// src/components/ui/PartnersShowcase.tsx
import { useState } from "react";
import { motion } from "framer-motion";

export type Partner = {
  name: string;
  description: string;
  website?: string;
  icon?: string;
};

type Props = {
  partners: Partner[];
};

const PartnersShowcase = ({ partners }: Props) => {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);
  const loopedPartners = [...partners, ...partners];

  return (
    <>
      <div className="relative overflow-hidden w-full py-10">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {loopedPartners.map((partner, i) => (
            <div
              key={i}
              onClick={() => setActivePartner(partner)}
              className="min-w-[220px] bg-white rounded-2xl shadow-xl p-6 text-center cursor-pointer hover:border-[#D4AF37] border"
            >
              <div className="text-4xl mb-4">{partner.icon ?? "🤝"}</div>
              <h3 className="font-bold text-[#0A1F44] text-sm">{partner.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>

      {activePartner && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
          <motion.div className="bg-white rounded-2xl max-w-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {activePartner.name}
            </h3>
            <p className="text-gray-700 mb-6">
              {activePartner.description}
            </p>
            {activePartner.website && (
              <a
                href={activePartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0A1F44] hover:underline"
              >
                Visit Website →
              </a>
            )}
            <button
              onClick={() => setActivePartner(null)}
              className="block mx-auto mt-6 px-6 py-2 bg-[#0A1F44] text-white rounded-full"
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