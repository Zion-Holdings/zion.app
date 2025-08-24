
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  animate?: boolean;
}

export function GradientHeading({ 
  children, 
  className, 
  level = "h2", 
  animate = true 
}: GradientHeadingProps) {
  const Tag = level;
  
  const gradientClasses = [
    "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple",
    "bg-gradient-to-l from-zion-cyan via-zion-purple-light to-zion-purple",
    "bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple",
    "bg-gradient-to-bl from-zion-cyan via-zion-purple-light to-zion-purple"
  ];
  
  const baseClasses = cn(
    "text-4xl font-bold tracking-tight bg-clip-text text-transparent",
    className
  );
  
  if (!animate) {
    return (
      <Tag className={cn(baseClasses, gradientClasses[0])}>
        {children}
      </Tag>
    );
  }
  
  return (
    <motion.div
      className="inline-block"
      animate={{
        background: gradientClasses.map(grad => grad),
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <Tag className={cn(baseClasses, "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple")}>
        {children}
      </Tag>
    </motion.div>
  );
}
