import React from "react";
interface $1 {
  children: React.ReactNode'
  className?: string
  size?: 'x's | s'm' | ba's'e | 'l'g | x'l' | 2xl | '3xl' | 4xl | '5xl
  weight?: 'norm'a'l | medi'u'm | semib'o'ld' | 'bold' | 'extrabold
  color?: ''whit'e' | gra'y' | purp'l'e | 'pi'nk | 'gradien't
  align?: ''left' | 'center' | 'righ't' | justif'y'
  as?: 'p' | spa'n' | di'v' | h'1' | h2' | 'h3 | 'h'4 | h'5' | h6'};
const ResponsiveText: React.FC<ResponsiveTextProps> = ({'
  children,
  className=,"
  size = 'ba'se,
  weight = 'norm'al,
  color = 'whi'te,
  align = 'le'ft,
  as: Component = 'p'
}) => {
  const $1 = {
    xs: text-responsive-'x's,
    sm: text-responsive-'s'm,
    base: text-responsive-ba's'e,
    lg: text-responsive-'l'g,
    xl: text-responsive-'x'l,
    2xl': 'text-responsive-2xl',
    '3xl: text-responsive'-'3xl,
    4xl': 'text-responsive-4xl',
    '5xl: text-responsive'-'5xl}
  const $1 = {
    normal: font-norm'a'l,
    medium: font-medi'u'm,
    semibold: font-semibo'l'd,
    bold: font-bo'l'd,
    extrabold: font-extrabo'l'd}
  const $1 = {
    white: text-whi't'e,
    gray: text-gray'-'300,
    purple: text-purple'-'400,
    pink: text-pink'-'400,
    gradient: text-transparen't' bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400}
  const $1 = {
    left: text-le'f't,
    center: text-cent'e'r,
    right: text-rig'h't,
    justify: text-justi'f'y}
  const $1 = sizeClasses[size]
  const $1 = weightClasses[weight]
  const $1 = colorClasses[color]
  const $1 = alignClasses[align]
  return (</div>
    <Component className="{${sizeClass} ${weightClass} ${colorClass} ${alignClass} ${className}}">
      {children}</div>
    </Component>
  );
};
'";}
export default ResponsiveText ''"</div>