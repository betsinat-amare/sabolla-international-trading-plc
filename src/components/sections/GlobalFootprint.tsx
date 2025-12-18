import React from "react";
import { motion } from "framer-motion";

const locations = [
  { name: "Ethiopia", top: "50%", left: "56.2%" },
  { name: "Germany", top: "28%", left: "47%" },
  { name: "France", top: "30%", left: "46%" },
  { name: "England", top: "27%", left: "44%" },
  { name: "Poland", top: "27%", left: "50%" },
  { name: "Spain", top: "34%", left: "44%" },
  { name: "Austria", top: "30%", left: "49%" },
  { name: "UAE", top: "43%", left: "60%" },
  { name: "India", top: "45%", left: "68%" },
  { name: "China", top: "35%", left: "72%" },
  { name: "USA", top: "34%", left: "20%" },
  { name: "Nigeria", top: "49%", left: "47%" },
];

const ethiopia = locations.find(l => l.name === "Ethiopia")!;

const routes = locations
  .filter(l => l.name !== "Ethiopia")
  .map(l => ({
    from: {
      x: parseFloat(ethiopia.left),
      y: parseFloat(ethiopia.top),
    },
    to: {
      x: parseFloat(l.left),
      y: parseFloat(l.top),
    },
  }));

const GlobalFootprint: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl font-bold text-[#0A1F44] mb-12">
          Our Global Footprint
        </h2>

        <div className="relative w-full">
          {/* World Map */}
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map"
            className="w-full select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Routes */}
          <svg
            viewBox="0 0 95 95"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {routes.map((r, i) => (
              <motion.path
                key={i}
                d={`
                  M ${r.from.x} ${r.from.y}
                  Q ${(r.from.x + r.to.x) / 2}
                    ${Math.min(r.from.y, r.to.y) - 8}
                    ${r.to.x} ${r.to.y}
                `}
                fill="none"
                stroke="#9CC4E4"
                strokeWidth="0.4"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.15 }}
              />
            ))}
          </svg>

          {/* Pins */}
          {locations.map(loc => (
            <div
              key={loc.name}
              className="absolute flex flex-col items-center group"
              style={{ top: loc.top, left: loc.left }}
            >
              {/* Pulse */}
              <div className="absolute w-8 h-8 bg-[#D4AF37]/30 rounded-full animate-ping" />

              {/* Dot */}
              <div className="relative w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-white shadow-lg z-10" />

              {/* Tooltip */}
              <span className="opacity-0 group-hover:opacity-100 transition mt-2 text-xs font-semibold text-white bg-[#0A1F44] px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                {loc.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-700 text-lg max-w-3xl mx-auto">
          Ethiopia serves as our strategic hub — connecting trusted partners across
          Europe, Asia, Africa, the Middle East, and North America.
        </p>
      </div>
    </section>
  );
};

export default GlobalFootprint;
