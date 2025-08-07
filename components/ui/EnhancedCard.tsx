import { ReactNode } from "react";

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
}

export default function EnhancedCard({ children, className = "bg-white rounded-lg shadow-md p-6" }: EnhancedCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
