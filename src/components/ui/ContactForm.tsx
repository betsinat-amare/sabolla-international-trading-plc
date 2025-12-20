// src/components/ui/ContactForm.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    console.log('Form Data Submitted (Mock):', formData);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  const inputClasses = "mt-2 block w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[#122C21] focus:ring-2 focus:ring-[#308667] focus:border-transparent outline-none transition-all duration-300 placeholder-gray-400";
  const labelClasses = "block text-xs font-black uppercase tracking-widest text-[#122C21]/80 ml-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-[#122C21]/5 relative overflow-hidden"
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#122C21] via-[#308667] to-[#122C21]" />

      <h3 className="text-2xl font-black text-[#122C21] mb-8 uppercase tracking-tighter">
        Send us a <span className="text-[#308667]">Message</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>Full Name *</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="John Doe"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>Email Address *</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>Phone Number</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+251 ..."
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>Your Inquiry *</label>
          <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="How can we help you?"
            className={`${inputClasses} resize-none`}
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full py-4 px-6 rounded-xl text-sm font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 ${status === 'submitting'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#122C21] hover:bg-[#308667] hover:shadow-xl'
            }`}
        >
          {status === 'submitting' ? 'Sending Request...' : 'Submit Inquiry'}
        </motion.button>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-4 bg-[#308667]/10 border border-[#308667]/20 rounded-xl text-center"
          >
            <p className="text-[#308667] font-bold text-sm">Thank you! Your message has been sent successfully.</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl text-center"
          >
            <p className="text-red-600 font-bold text-sm">Error submitting form. Please try again later.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;