import { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AnimatedBackground({ children, className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-20"></div>
      {children}
    </div>
  );
}
