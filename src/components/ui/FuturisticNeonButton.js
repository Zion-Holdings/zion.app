import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
const FuturisticNeonButton = ({ children, onClick, variant = 'primary', size = 'md', glowIntensity = 'medium', disabled = false, className = '', icon, fullWidth = false, loading = false }) => {
    const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-lg",
        lg: "px-6 py-3 text-lg rounded-xl",
        xl: "px-8 py-4 text-xl rounded-2xl"
    };
    const variantClasses = {
        primary: {
            base: "bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple text-white border border-zion-cyan/50",
            glow: "shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)]",
            focus: "focus:ring-zion-cyan",
            hover: "hover:border-zion-cyan hover:bg-gradient-to-r hover:from-zion-cyan-light hover:via-zion-blue-light hover:to-zion-purple-light"
        },
        secondary: {
            base: "bg-transparent text-zion-cyan border border-zion-cyan/50",
            glow: "shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]",
            focus: "focus:ring-zion-cyan",
            hover: "hover:bg-zion-cyan/10 hover:border-zion-cyan hover:text-zion-cyan-light"
        },
        accent: {
            base: "bg-gradient-to-r from-zion-purple via-zion-pink to-zion-red text-white border border-zion-purple/50",
            glow: "shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]",
            focus: "focus:ring-zion-purple",
            hover: "hover:border-zion-purple hover:bg-gradient-to-r hover:from-zion-purple-light hover:via-zion-pink-light hover:to-zion-red-light"
        },
        danger: {
            base: "bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white border border-red-500/50",
            glow: "shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]",
            focus: "focus:ring-red-500",
            hover: "hover:border-red-400 hover:bg-gradient-to-r hover:from-red-400 hover:via-red-500 hover:to-red-600"
        }
    };
    const glowIntensityClasses = {
        low: "shadow-[0_0_10px_rgba(0,212,255,0.3)]",
        medium: "shadow-[0_0_20px_rgba(0,212,255,0.5)]",
        high: "shadow-[0_0_40px_rgba(0,212,255,0.8)]"
    };
    const widthClasses = fullWidth ? "w-full" : "";
    const buttonClasses = cn(baseClasses, sizeClasses[size], variantClasses[variant].base, variantClasses[variant].glow, variantClasses[variant].focus, variantClasses[variant].hover, glowIntensityClasses[glowIntensity], widthClasses, className);
    // Neon glow effect variants
    const glowVariants = {
        initial: {
            boxShadow: variantClasses[variant].glow,
            filter: "brightness(1)"
        },
        hover: {
            boxShadow: variantClasses[variant].glow.replace('0.5', '0.8').replace('0.3', '0.6'),
            filter: "brightness(1.1)",
            scale: 1.05
        },
        tap: {
            scale: 0.95,
            filter: "brightness(0.9)"
        }
    };
    // Inner glow effect
    const innerGlowVariants = {
        initial: { opacity: 0.3 },
        hover: { opacity: 0.6 }
    };
    // Ripple effect
    const rippleVariants = {
        initial: { scale: 0, opacity: 0.8 },
        animate: { scale: 4, opacity: 0 }
    };
    return (_jsxs(motion.button, { className: buttonClasses, onClick: onClick, disabled: disabled || loading, variants: glowVariants, initial: "initial", whileHover: "hover", whileTap: "tap", transition: {
            duration: 0.2,
            ease: "easeInOut"
        }, children: [_jsx(motion.div, { className: "absolute inset-0 rounded-inherit bg-gradient-to-r from-white/20 to-transparent opacity-0", variants: innerGlowVariants, initial: "initial", whileHover: "hover", transition: { duration: 0.3 } }), _jsx(motion.div, { className: "absolute inset-0 rounded-inherit border border-transparent", style: {
                    background: `linear-gradient(45deg, ${variant === 'primary' ? '#00D4FF' : variant === 'secondary' ? '#00D4FF' : variant === 'accent' ? '#8B5CF6' : '#EF4444'}, transparent, ${variant === 'primary' ? '#8B5CF6' : variant === 'secondary' ? '#00D4FF' : variant === 'accent' ? '#EC4899' : '#DC2626'})`,
                    backgroundSize: '200% 200%'
                }, animate: {
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }, transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                } }), _jsxs("div", { className: "relative z-10 flex items-center gap-2", children: [loading && (_jsx(motion.div, { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" } })), icon && !loading && (_jsx(motion.div, { initial: { scale: 0.8, opacity: 0.8 }, whileHover: { scale: 1.1, opacity: 1 }, transition: { duration: 0.2 }, children: icon })), _jsx(motion.span, { initial: { opacity: 0.9 }, whileHover: { opacity: 1 }, transition: { duration: 0.2 }, children: children })] }), variant === 'primary' && (_jsx("div", { className: "absolute inset-0 overflow-hidden rounded-inherit pointer-events-none", children: [...Array(3)].map((_, i) => (_jsx(motion.div, { className: "absolute w-1 h-1 bg-zion-cyan rounded-full", style: {
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`
                    }, animate: {
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5]
                    }, transition: {
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                    } }, i))) })), _jsx(motion.div, { className: "absolute inset-0 rounded-inherit bg-white/20", variants: rippleVariants, initial: "initial", whileHover: "animate", transition: { duration: 0.6 } })] }));
};
export default FuturisticNeonButton;
