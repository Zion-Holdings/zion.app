
import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number;
  gradient?: string;
}

export function FeatureCard({ title, description, icon, className, gradient }: FeatureCardProps) {
  return (
    <div className={cn(
      "flex items-start p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 relative overflow-hidden group",
      className
    )}>
      {/* Gradient background overlay on hover */}
      {gradient && (
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
          gradient
        )} />
      )}
      
      <div className="relative z-10 flex items-start w-full">
        <div className={cn(
          "mr-4 text-zion-cyan p-3 rounded-lg bg-zion-blue-dark/50 group-hover:bg-zion-blue-dark/80 transition-all duration-300",
          gradient && "group-hover:bg-white/10"
        )}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300">
            {title}
          </h3>
          <p className="text-zion-slate-light leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
