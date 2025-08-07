import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function FuturisticCard({ children, className = "bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl p-6 text-white" }: FuturisticCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
