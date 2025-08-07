import { ReactNode } from "react";

interface FuturisticHeroProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FuturisticHero({ 
  children, 
  title, 
  subtitle, 
  className = "bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20" 
}: FuturisticHeroProps) {
  return (
    <div className={className}>
      <div className="container mx-auto px-4 text-center">
        {title && <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>}
        {subtitle && <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
