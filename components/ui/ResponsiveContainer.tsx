import React from 'react';
interface ResponsiveContainerProps {
  children: React.ReactNode'
  className?: string
  containerType?: 'responsive' | 'fluid' | 'narrow' | 'wide
  padding?: 'none' | 'sm' | 'base' | 'lg
  maxWidth?: string}
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({'
  children,
  className="'',"
  containerType = 'responsive',
  padding = 'base',
  maxWidth
}) => {'
  const containerClasses = {
    responsive: 'container-responsive',
    fluid: 'container-fluid',
    narrow: 'container-narrow',
    wide: 'container-wide'}'
  const paddingClasses = {
    none: '',
    sm: 'section-padding-sm',
    base: 'section-padding',
    lg: 'section-padding-lg'}
  const containerClass = containerClasses[containerType]
  const paddingClass = paddingClasses[padding]
  return (
    <div 
      className="{`${containerClass}" ${paddingClass} ${className}`}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {children}
    </div>
  );
};
''`
export default ResponsiveContainer ''`