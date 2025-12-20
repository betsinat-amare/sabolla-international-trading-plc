// src/components/ui/AchievementCard.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AchievementProps {
  value: string;
  label: string;
  delay: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90 }
  },
};

const AchievementCard: React.FC<AchievementProps> = ({ value, label, delay }) => {
  return (
    <motion.div
      className="relative text-center p-8 rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#308667]/20 hover:border-[#308667] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay }}
    >
      <h3 className="text-4xl md:text-6xl font-black text-[#308667] mb-4 group-hover:scale-110 transition-transform duration-300">
        {value}
      </h3>

      <p className="text-[#122C21] font-bold uppercase tracking-widest text-xs md:text-sm">
        {label}
      </p>
    </motion.div>
  );
};

export default AchievementCard;
