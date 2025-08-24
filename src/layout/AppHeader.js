import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useMessaging } from '@/context/MessagingContext';
import { MainNavigation } from './MainNavigation';
import { Logo } from '@/components/header/Logo';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { motion, AnimatePresence } from 'framer-motion';
export function AppHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    // Try to access the messaging context, but provide a fallback value if it's not available
    let unreadCount = 0;
    try {
        const { unreadCount: count } = useMessaging();
        unreadCount = count;
    }
    catch (error) {
        console.warn('Messaging context not available');
    }
    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };
    const backdropVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(motion.header, { className: "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md", initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.5, ease: "easeOut" }, children: _jsxs("div", { className: "container flex h-16 items-center px-4 sm:px-6", children: [_jsx(Logo, {}), _jsx("div", { className: "ml-6 flex-1 hidden md:block", children: _jsx(MainNavigation, { unreadCount: unreadCount }) }), _jsx("div", { className: "md:hidden ml-auto mr-4", children: _jsxs(motion.button, { onClick: () => setMobileMenuOpen(!mobileMenuOpen), className: "inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none focus:ring-2 focus:ring-zion-purple/50 transition-all duration-200", "aria-expanded": mobileMenuOpen, "aria-label": "Toggle mobile menu", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), _jsx(AnimatePresence, { mode: "wait", children: mobileMenuOpen ? (_jsx(motion.div, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.2 }, children: _jsx(X, { className: "block h-6 w-6", "aria-hidden": "true" }) }, "close")) : (_jsx(motion.div, { initial: { rotate: 90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, transition: { duration: 0.2 }, children: _jsx(Menu, { className: "block h-6 w-6", "aria-hidden": "true" }) }, "menu")) })] }) }), _jsx(ModeToggle, {})] }) }), _jsx(AnimatePresence, { children: mobileMenuOpen && (_jsxs("div", { className: "md:hidden fixed inset-0 z-40 pt-16", children: [_jsx(motion.div, { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", variants: backdropVariants, initial: "closed", animate: "open", exit: "closed", onClick: () => setMobileMenuOpen(false), "aria-hidden": "true" }), _jsx(motion.div, { className: "relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto", variants: menuVariants, initial: "closed", animate: "open", exit: "closed", children: _jsx(MobileMenu, { unreadCount: unreadCount, onClose: () => setMobileMenuOpen(false) }) })] })) }), isMobile && _jsx(MobileBottomNav, { unreadCount: unreadCount })] }));
}
