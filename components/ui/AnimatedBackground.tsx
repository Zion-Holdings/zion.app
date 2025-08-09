import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className, children }) => {
  return (
    <div className={className} aria-hidden>{children}</div>
  );
};

export default AnimatedBackground;