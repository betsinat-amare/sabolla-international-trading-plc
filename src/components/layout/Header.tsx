// src/components/layout/Header.tsx
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../../assets/logo.png'
import Logo from '../ui/Logo';
import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Partners', path: '/partners' },
  { name: 'Contact', path: '/contact', isPrimary: true },
];

const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 
          bg-linear-to-r from-sabolla-black via-sabolla-dark-green to-sabolla-black
          ${hasScrolled ? 'shadow-2xl py-2 backdrop-blur-md' : 'py-3'}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 relative h-14">
          {/* Logo wrapper - styled absolute to allow size without affecting header height */}
          <div className="absolute top-1/2 -translate-y-1/2 z-50">
            <Logo />
          </div>

          <div className="w-48 xl:w-64 hidden lg:block" />

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex space-x-10 items-center relative">
            {navItems.map((item) => {
              // Robust active check allowing sub-routes (except for Home which must be exact)
              const isActive = item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

              if (item.isPrimary) {
                return (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.path}
                      className={`relative px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.15em] border transition-all duration-300
                        ${isActive
                          ? 'bg-[#F9F2D6] text-[#122C21] border-[#F9F2D6] shadow-[0_0_20px_rgba(249,242,214,0.4)]'
                          : 'bg-[#308667] text-white border-[#308667] hover:bg-[#266B52] hover:border-[#266B52] shadow-md'}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              }

              return (
                <div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`relative font-medium transition py-2
                      ${isActive ? 'text-sabolla-light-green font-semibold' : 'text-sabolla-white/80 hover:text-sabolla-light-green'}`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-sabolla-light-green"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden ml-auto text-sabolla-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE NAV DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-sabolla-black border-l border-sabolla-white/10 shadow-2xl flex flex-col pt-24 px-8 lg:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-sabolla-white/60 hover:text-sabolla-light-green transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col space-y-6">
                {navItems.map((item) => {
                  const isActive = item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                  if (item.isPrimary) {
                    return (
                      <Link
                        key={item.name}
                        onClick={() => setMenuOpen(false)}
                        to={item.path}
                        className="mt-4 text-center w-full py-3 bg-sabolla-light-green text-sabolla-white font-bold rounded-lg shadow-lg active:scale-95 transition"
                      >
                        {item.name}
                      </Link>
                    )
                  }

                  return (
                    <Link
                      key={item.name}
                      onClick={() => setMenuOpen(false)}
                      to={item.path}
                      className={`text-2xl font-bold tracking-tight transition-colors
                        ${isActive
                          ? 'text-sabolla-light-green'
                          : 'text-sabolla-white hover:text-sabolla-light-green'}
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
