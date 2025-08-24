import React from 'react';

interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const logoColor = customColor || '#00ffff';
  
  return (
    <div className="flex items-center">
      <span 
        className="text-2xl font-bold"
        style={{ color: logoColor }}
      >
        {customLogo || 'ZION'}
      </span>
    </div>
  );
}