// src/components/ui/Logo.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import SABOLLA from '../../assets/SABOLLA.png';
import logo from '../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">

      {/* Logo Emblem */}
      <img
        src={SABOLLA}
        alt="Sabolla Logo"
        className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />

    </Link>
  );
};

export default Logo;
