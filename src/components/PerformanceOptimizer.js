import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
export function PerformanceOptimizer({ children, threshold = 0.1, delay = 0, className = '', fallback = null }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { threshold });
    const handleIntersection = useCallback(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
            // Simulate loading delay for better UX
            setTimeout(() => setIsLoaded(true), delay);
        }
    }, [inView, isVisible, delay]);
    useEffect(() => {
        handleIntersection();
    }, [handleIntersection]);
    // Performance monitoring
    useEffect(() => {
        if (typeof window !== 'undefined' && 'performance' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                    }
                }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
            return () => observer.disconnect();
        }
    }, []);
    if (!isVisible) {
        return (_jsx("div", { ref: ref, className: className, children: fallback }));
    }
    if (!isLoaded) {
        return (_jsx("div", { ref: ref, className: className, children: _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, className: "w-full h-full flex items-center justify-center", children: _jsx("div", { className: "animate-pulse", children: _jsx("div", { className: "w-8 h-8 border-2 border-zion-cyan border-t-transparent rounded-full animate-spin" }) }) }) }));
    }
    return (_jsx(motion.div, { ref: ref, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" }, className: className, children: children }));
}
// Lazy loading wrapper for images
export function LazyImage({ src, alt, className = '', placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTcwNzJiIi8+PC9zdmc+' }) {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);
    useEffect(() => {
        const img = imgRef.current;
        if (!img)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setImageSrc(src);
                    observer.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(img);
        return () => observer.unobserve(img);
    }, [src]);
    return (_jsx("img", { ref: imgRef, src: imageSrc, alt: alt, className: `transition-opacity duration-300 ${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`, onLoad: () => setIsLoaded(true) }));
}
// Virtual scrolling for large lists
export function VirtualList({ items, renderItem, itemHeight, containerHeight, overscan = 5 }) {
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef(null);
    const visibleStart = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visibleEnd = Math.min(items.length, Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan);
    const visibleItems = items.slice(visibleStart, visibleEnd);
    const totalHeight = items.length * itemHeight;
    const offsetY = visibleStart * itemHeight;
    const handleScroll = useCallback((e) => {
        setScrollTop(e.currentTarget.scrollTop);
    }, []);
    return (_jsx("div", { ref: containerRef, style: { height: containerHeight, overflow: 'auto' }, onScroll: handleScroll, children: _jsx("div", { style: { height: totalHeight, position: 'relative' }, children: _jsx("div", { style: { transform: `translateY(${offsetY}px)` }, children: visibleItems.map((item, index) => (_jsx("div", { style: { height: itemHeight }, children: renderItem(item, visibleStart + index) }, visibleStart + index))) }) }) }));
}
// Debounced search hook
export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
// Intersection observer hook for performance
export function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [entry, setEntry] = useState(null);
    const elementRef = useRef(null);
    useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            setEntry(entry);
        }, options);
        observer.observe(element);
        return () => observer.unobserve(element);
    }, [options]);
    return { ref: elementRef, isIntersecting, entry };
}
