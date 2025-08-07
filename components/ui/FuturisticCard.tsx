import { ReactNode } from "react";

interface FuturisticCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function FuturisticCard({ 
  children, 
  title, 
  className = "bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white" 
}: FuturisticCardProps) {
  return (
    <div className={className}>
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
