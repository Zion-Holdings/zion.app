import React from 'react
import Link from "next/link;
interface ResponsiveButtonProps {
  children: React.ReactNode'
  className?: string
  variant?: 'prima'r'y | seconda'r'y | outl'i'ne' | 'ghost' | 'danger
  size?: ''xs' | 'sm | 'b'ase'' | lg' | 'xl
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'}
const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({'
  children,
  className=,"
  variant = 'prima'ry,
  size = 'ba'se,
  href,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,'
  icon,
  iconPosition = 'left'
}) => {'
  const $1 = {
    primary: bg-gradient-to-r' from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25',
    secondary: bg-gray-'600 hover:bg-gray-700 text-white',
    outline: border' border-white/20 text-white hover:bg-white/10',
    ghost: text-gray-'300 hover:text-white hover:bg-white/10',
    danger: bg-red-'600 hover:bg-red-700 text-white'}
  const $1 = {
    xs: px-'2 py-1 text-responsive-xs',
    sm: px-'3 py-2 text-responsive-sm',
    base: px-'4 py-2 text-responsive-base',
    lg: px-'6 py-3 text-responsive-lg',
    xl: px-'8 py-4 text-responsive-xl'}
  const baseClasses = `
    inline-flex items-center justify-center rounded-lg font-medium
    transition-all duration-300 touch-target
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? w-ful'l' : }
    ${disabled ? 'opacity'-50 cursor-not-allowed : ''}
    ${loading ? opacity-'75 cursor-wait' : }`
    ${className}``
  `

  const content = (
    </>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 fill= none viewBox="0 0 24" 24>
          <circle className=" opacity-25 cx= 12" cy=12 r="10" stroke=currentColor strokeWidth=4 > </circle" className=" opacity-25 cx= 12 cy=12" r="10 stroke=currentColor" strokeWidth="4 ><path className=" opacity-75 fill= currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z "> </path className= opacity-75 fill= currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z "></svg>'
      )},"'
    {icon && iconPosition === le'f't && !loading && <span className=mr-2>{icon}</span>}
      {children},"'
    {icon && iconPosition === 'right' && <span className="ml-2>{icon}</span>}
    </>)
  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}">
        {content}
      </Link>
    )}
  return (
    <button className="{baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button > );
};
'`
export default ResponsiveButton "'`