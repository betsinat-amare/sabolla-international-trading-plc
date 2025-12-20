// src/pages/ProductsIndex.tsx
import React from 'react';
import { PRODUCT_CATEGORIES } from '../data/mockData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgPattern from '../assets/about_hero_pattern.png';

// --- CUSTOM VARIANTS ---
// Updated variants for a more pronounced lift and visual change on hover
const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  hover: {
    y: -8, // Lift the card higher
    scale: 1.03,
    // Stronger shadow for depth on hover
    boxShadow: "0 20px 30px rgba(18, 44, 33, 0.1), 0 5px 15px rgba(18, 44, 33, 0.05)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  },
};

const getCategoryImageStyle = (index: number) => {
  const styles = [
    { backgroundColor: '#122C21', backgroundImage: 'linear-gradient(135deg, #122C21 0%, #0F251B 100%)' },
    { backgroundColor: '#308667', backgroundImage: 'linear-gradient(135deg, #308667 0%, #266B52 100%)' },
    { backgroundColor: '#09140F', backgroundImage: 'linear-gradient(135deg, #09140F 0%, #122C21 100%)' },
    { backgroundColor: '#387663', backgroundImage: 'linear-gradient(135deg, #387663 0%, #308667 100%)' },
  ];
  return styles[index % styles.length];
};

const ProductsIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F2D6]">

      {/* ================= HERO/HEADER SECTION ================= */}
      <section className="bg-[#308667] border-b border-[#122C21]/10 py-24 relative overflow-hidden">

        {/* Local Image Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#122C21]/20 z-0" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-[#F9F2D6] mb-6 tracking-tighter uppercase"
          >
            Explore <span className="text-[#122C21]">Commodities</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed">
              Connecting <b className="text-[#F9F2D6] font-extrabold">Global Suppliers</b> of essential commodities with the thriving <b className="text-[#F9F2D6] font-extrabold">Ethiopian Market</b> — ensuring <span className="italic text-[#122C21] font-bold bg-[#F9F2D6]/10 px-2 rounded">Quality & Compliance</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <div className="container mx-auto px-6 py-24 max-w-7xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((product, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={cardVariants}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="group relative border border-[#122C21]/5 rounded-[2rem] shadow-xl h-full flex flex-col overflow-hidden cursor-pointer transition-all duration-300 bg-white hover:border-[#308667]/30"
                whileHover="hover"
                variants={cardVariants}
              >

                {/* Visual Header/Image Placeholder */}
                <div
                  className="h-32 rounded-t-[2rem] flex items-center justify-center p-6 text-white relative overflow-hidden"
                  style={getCategoryImageStyle(index)}
                >
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/noise.png')]"></div>
                  <span className="text-xl md:text-2xl font-black tracking-widest opacity-40 uppercase transform group-hover:scale-110 transition-transform duration-500">
                    {product.name.split(' ')[0]}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between grow">
                  <h2 className="text-xl font-bold text-[#122C21] mb-3 group-hover:text-[#308667] transition-colors duration-300 tracking-tight">
                    {product.name}
                  </h2>

                  <p className="text-gray-600 mb-6 grow leading-relaxed text-sm font-medium line-clamp-3">{product.desc}</p>

                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center text-xs font-black uppercase tracking-widest text-[#308667] hover:text-[#122C21] transition-colors duration-300 group-hover:translate-x-2"
                  >
                    Explore Line
                    <svg className="w-3 h-3 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CALL TO ACTION - Bottom Strip ================= */}
      <section className="bg-[#308667] mt-0 py-24 relative overflow-hidden">
        {/* Local Image Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-black text-[#F9F2D6] mb-6 uppercase tracking-tight">
            Need a Custom Sourcing Solution?
          </h3>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Our global network is ready to meet your specific trade requirements with precision and reliability.
          </p>
          <Link to='/contact'>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(18, 44, 33, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 text-sm font-black bg-[#122C21] text-white rounded-2xl transition-all duration-300 uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-[#122C21]"
            >
              Get Expertise
            </motion.button>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default ProductsIndex;