import React from 'react';
import { cn } from '@/lib/utils';

interface NeonGlowProps {
  children: React.ReactNode;
  color?: 'zion-cyan' | 'zion-purple' | 'zion-blue' | 'custom';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  customColor?: string;
}

export function NeonGlow({ 
  children, 
  color = 'zion-cyan', 
  intensity = 'medium',
  className = '',
  customColor
}: NeonGlowProps) {
  const getGlowStyles = () => {
    const baseColor = customColor || (color === 'zion-cyan' ? '#00d4ff' : 
                                    color === 'zion-purple' ? '#a855f7' : 
                                    color === 'zion-blue' ? '#3b82f6' : '#00d4ff');
    
    const intensityMap = {
      low: {
        textShadow: `0 0 5px ${baseColor}, 0 0 10px ${baseColor}`,
        filter: `drop-shadow(0 0 2px ${baseColor})`
      },
      medium: {
        textShadow: `0 0 10px ${baseColor}, 0 0 20px ${baseColor}, 0 0 30px ${baseColor}`,
        filter: `drop-shadow(0 0 5px ${baseColor}) drop-shadow(0 0 10px ${baseColor})`
      },
      high: {
        textShadow: `0 0 15px ${baseColor}, 0 0 30px ${baseColor}, 0 0 45px ${baseColor}, 0 0 60px ${baseColor}`,
        filter: `drop-shadow(0 0 8px ${baseColor}) drop-shadow(0 0 15px ${baseColor}) drop-shadow(0 0 25px ${baseColor})`
      }
    };

    return intensityMap[intensity];
  };

  const glowStyles = getGlowStyles();

  return (
    <span 
      className={cn('transition-all duration-300', className)}
      style={glowStyles}
    >
      {children}
    </span>
  );
}