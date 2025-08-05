import React from "react";
interface ResponsiveCardProps {
  children: React.ReactNode'
  className?: string
  variant?: 'default' | 'elevated' | 'outlined' | 'glass
  padding?: 'none' | 'sm' | 'base' | 'lg' | 'xl
  hover?: boolean
  interactive?: boolean
  onClick?: () => void}
const ResponsiveCard: React.FC<ResponsiveCardProps> = ({'
  children,
  className="'',"
  variant = 'default',
  padding = 'base',
  hover = true,
  interactive = false,
  onClick
}) => {'
  const variantClasses = {
    default: 'bg-white/5 backdrop-blur-sm border border-white/10',
    elevated: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg',
    outlined: 'bg-transparent border border-white/20',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 shadow-xl'}'
  const paddingClasses = {
    none: '',
    sm: 'p-3 sm:p-4',
    base: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-12'}'
  const hoverClasses = hover ? 'hover-responsive' : '
  const interactiveClasses = interactive ? 'cursor-pointer' : '
  return (
    <div className="{`"
        rounded-xl transition-all duration-300
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${interactiveClasses}`
        ${className}``
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
''`
export default ResponsiveCard ''`