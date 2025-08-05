import React from 'react';
interface ResponsiveTextProps {
  children: React.ReactNode'
  className?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold
  color?: 'white' | 'gray' | 'purple' | 'pink' | 'gradient
  align?: 'left' | 'center' | 'right' | 'justify
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}
const ResponsiveText: React.FC<ResponsiveTextProps> = ({'
  children,
  className="'',"
  size = 'base',
  weight = 'normal',
  color = 'white',
  align = 'left',
  as: Component = 'p'
}) => {'
  const sizeClasses = {
    xs: 'text-responsive-xs',
    sm: 'text-responsive-sm',
    base: 'text-responsive-base',
    lg: 'text-responsive-lg',
    xl: 'text-responsive-xl',
    '2xl': 'text-responsive-2xl',
    '3xl': 'text-responsive-3xl',
    '4xl': 'text-responsive-4xl',
    '5xl': 'text-responsive-5xl'}'
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'}'
  const colorClasses = {
    white: 'text-white',
    gray: 'text-gray-300',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'}'
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'}
  const sizeClass = sizeClasses[size]
  const weightClass = weightClasses[weight]
  const colorClass = colorClasses[color]
  const alignClass = alignClasses[align]
  return (
    <Component className="{`${sizeClass}" ${weightClass} ${colorClass} ${alignClass} ${className}`}>
      {children}
    </Component>
  );
};
''`
export default ResponsiveText ''`