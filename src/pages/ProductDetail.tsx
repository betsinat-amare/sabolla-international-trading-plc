// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaShieldAlt, FaTruck, FaHandshake } from 'react-icons/fa';
import { PRODUCT_CATEGORIES } from '../data/mockData';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the product based on the URL slug
  const product = PRODUCT_CATEGORIES.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-2xl shadow-xl max-w-lg"
        >
          <h1 className="text-4xl font-extrabold text-red-600 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8 text-lg">
            The product category you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-corporate-blue text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            <FaArrowLeft /> Back to Products
          </Link>
        </motion.div>
      </div>
    );
  }

  // Feature list based on product context (mimicking dynamic data for now)
  const features = [
    { icon: <FaShieldAlt className="text-corporate-gold text-3xl" />, title: "Regulatory Compliance", desc: "Full ECAA & safety standard adherence." },
    { icon: <FaTruck className="text-corporate-gold text-3xl" />, title: "Secure Logistics", desc: "End-to-end transportation & handling." },
    { icon: <FaHandshake className="text-corporate-gold text-3xl" />, title: "Duty Facilitation", desc: "Expert customs clearance support." },
    { icon: <FaCheckCircle className="text-corporate-gold text-3xl" />, title: "After-Sales Support", desc: "Maintenance contracts & spare parts." },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-corporate-blue to-slate-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light"
          >
            {product.description}
          </motion.p>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-5xl px-6 mt-10 relative z-10">
        <Link to="/products" className="text-corporate-gold hover:text-white transition-colors mb-6 inline-flex items-center gap-2 font-medium">
          <FaArrowLeft /> Back to All Categories
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: Description */}
            <div>
              <h2 className="text-3xl font-bold text-corporate-blue mb-6 border-b border-gray-100 pb-4">
                Detailed Offering
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SABOLLA facilitates the import and delivery of <span className="font-semibold text-corporate-blue">{product.name}</span> systems and spare parts, ensuring they meet all Ethiopian Civil Aviation Authority (ECAA) or relevant military/fire safety standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We manage the entire supply chain, from sourcing high-quality international suppliers to final installation and regulatory compliance within Ethiopia. Our team ensures that every step is handled with precision and integrity.
              </p>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-gray transition-colors border border-transparent hover:border-gray-200">
                  <div className="mt-1 bg-blue-50 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;