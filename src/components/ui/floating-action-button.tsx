import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus, MessageCircle, Phone, Mail, X, Sparkles } from "lucide-react";

interface FloatingActionButtonProps {
  className?: string;
  variant?: "default" | "expanded" | "circular";
  size?: "sm" | "md" | "lg";
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  actions?: Array<{
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    color?: string;
  }>;
  mainAction?: {
    icon: React.ReactNode;
    onClick: () => void;
    label?: string;
  };
}

export function FloatingActionButton({
  className,
  variant = "default",
  size = "md",
  position = "bottom-right",
  actions = [],
  mainAction
}: FloatingActionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  const defaultActions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Chat Support",
      onClick: () => {},
      color: "bg-zion-cyan hover:bg-zion-cyan-light"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      onClick: () => {},
      color: "bg-zion-purple hover:bg-zion-purple-light"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      onClick: () => {},
      color: "bg-zion-blue hover:bg-zion-blue-light"
    }
  ];

  const finalActions = actions.length > 0 ? actions : defaultActions;

  const handleMainClick = () => {
    if (variant === "expanded") {
      setIsExpanded(!isExpanded);
    }
    mainAction?.onClick();
  };

  return (
    <div className={cn("fixed z-50", positionClasses[position])}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-full right-0 mb-4 space-y-3"
          >
            {finalActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <motion.button
                  onClick={action.onClick}
                  className={cn(
                    "w-12 h-12 rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center",
                    action.color || "bg-zion-cyan hover:bg-zion-cyan-light"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {action.icon}
                </motion.button>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white bg-zion-blue-dark/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
                >
                  {action.label}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleMainClick}
        className={cn(
          "relative rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300 flex items-center justify-center group",
          sizeClasses[size],
          className
        )}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
        animate={isExpanded ? { rotate: 45 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {mainAction?.icon || <Plus className="w-6 h-6" />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Sparkle effect */}
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-3 h-3 text-zion-cyan" />
        </motion.div>
      </motion.button>

      {/* Tooltip for main button */}
      {mainAction?.label && (
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-zion-blue-dark/90 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          {mainAction.label}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zion-blue-dark/90"></div>
        </motion.div>
      )}
    </div>
  );
}

// Quick action floating button
export function QuickActionButton({
  icon,
  label,
  onClick,
  className,
  position = "bottom-right"
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}) {
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        "fixed z-50 w-14 h-14 rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300 flex items-center justify-center group",
        positionClasses[position],
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-zion-blue-dark/90 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zion-blue-dark/90"></div>
      </div>
    </motion.button>
  );
}