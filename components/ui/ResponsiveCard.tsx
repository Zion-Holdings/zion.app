import React from "react";
interface $1 {
  children: React.ReactNode'
  className?: string
  variant?: 'defau'lt | 'elevat'ed | 'outli'ned'' | glass'
  padding?: 'no'n'e | s'm' | ba's'e | 'l'g | x'l'
  hover?: boolean
  interactive?: boolean
  onClick?: () => void};
const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  children,
  className=',"
  variant = 'default',
  padding = 'base',
  hover = true,
  interactive = false,
  onClick
}) => {'
  const $1 = {
    default: bg-white'/5 backdrop-blur-sm border border-white/10',
    elevated: bg-white'/10 backdrop-blur-md border border-white/20 shadow-lg',
    outlined: bg-transparent' border border-white/20',
    glass: bg-white'/5 backdrop-blur-md border border-white/10 shadow-xl'}
  const $1 = {
    none: ,
    sm: 'p'-3 sm:p-4,
    base: 'p'-4 sm:p-6,
    lg: 'p'-6 sm:p-8,
    xl: 'p'-8 sm:p-12}
  const $1 = hover ? 'hover-responsi've : '
  const $1 = interactive ? 'cursor-pointer' : '
  return (</div>
    <div className="{
        rounded-xl transition-all duration-300
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${interactiveClasses}"
        ${className}`"
      "}
      onClick={onClick}
    >
      {children}</div>
    </div>
  );
};
";}
export default ResponsiveCard ''"</div>