import React from 'react';

interface SafeContentContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * SafeContentContainer provides lateral margins to prevent zoom animations
 * from throwing content off-screen. This component should wrap the main
 * content of pages that have zoom/scale animations.
 */
export default function SafeContentContainer({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: SafeContentContainerProps) {
  return (
    <Component 
      className={`mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 ${className}`.trim()}
    >
      {children}
    </Component>
  );
}