import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const logoColor = customColor || 'from-zion-cyan via-zion-purple-light to-zion-purple';
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      {customLogo ? (
        <img 
          src={customLogo} 
          alt="Logo" 
          className="h-8 w-auto"
        />
      ) : (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className={`text-xl font-bold bg-gradient-to-r ${logoColor} bg-clip-text text-transparent`}>
            ZION
          </span>
        </div>
      )}
    </Link>
  );
}