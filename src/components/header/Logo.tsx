import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const logoColor = customColor || '#3b82f6'; // Default blue color
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-lg"
        style={{ backgroundColor: logoColor }}
      >
        Z
      </div>
      <span className="text-xl font-bold text-white">Zion Tech Group</span>
    </Link>
  );
}