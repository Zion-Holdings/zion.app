import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback, useRef } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
export function LazyImage({ src, alt, className = '', placeholder = '/images/placeholder.jpg', threshold = 0.1, rootMargin = '50px' }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [imageSrc, setImageSrc] = useState(placeholder);
    const imageRef = useRef(null);
    const handleIntersection = useCallback((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                setImageSrc(src);
            }
        });
    }, [src]);
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin,
        });
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        return () => observer.disconnect();
    }, [handleIntersection, threshold, rootMargin]);
    const handleLoad = () => {
        setIsLoaded(true);
    };
    const handleError = () => {
        // Fallback to placeholder on error
        setImageSrc(placeholder);
        setIsLoaded(true);
    };
    return (_jsxs("div", { className: `relative overflow-hidden ${className}`, children: [_jsx("img", { ref: imageRef, src: imageSrc, alt: alt, onLoad: handleLoad, onError: handleError, className: `w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}` }), !isLoaded && (_jsx("div", { className: "absolute inset-0 bg-zion-blue-dark/20 flex items-center justify-center", children: _jsx(LoadingSpinner, { size: "md", variant: "pulse" }) })), !isLoaded && (_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-zion-blue-light/20 to-transparent animate-pulse" }))] }));
}
export function VirtualList({ items, renderItem, itemHeight, containerHeight, overscan = 5 }) {
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef(null);
    const totalHeight = items.length * itemHeight;
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(items.length, Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan);
    const visibleItems = items.slice(startIndex, endIndex);
    const offsetY = startIndex * itemHeight;
    const handleScroll = useCallback((e) => {
        setScrollTop(e.currentTarget.scrollTop);
    }, []);
    return (_jsx("div", { ref: containerRef, style: { height: containerHeight, overflow: 'auto' }, onScroll: handleScroll, children: _jsx("div", { style: { height: totalHeight, position: 'relative' }, children: _jsx("div", { style: { transform: `translateY(${offsetY}px)` }, children: visibleItems.map((item, index) => (_jsx("div", { style: { height: itemHeight }, children: renderItem(item, startIndex + index) }, startIndex + index))) }) }) }));
}
// Performance Monitor Component
export function PerformanceMonitor() {
    const [metrics, setMetrics] = useState({
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
    });
    useEffect(() => {
        if ('PerformanceObserver' in window) {
            // First Contentful Paint
            const fcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const fcp = entries[entries.length - 1];
                setMetrics(prev => (Object.assign(Object.assign({}, prev), { fcp: fcp.startTime })));
            });
            fcpObserver.observe({ entryTypes: ['paint'] });
            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lcp = entries[entries.length - 1];
                setMetrics(prev => (Object.assign(Object.assign({}, prev), { lcp: lcp.startTime })));
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            // First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const fid = entries[entries.length - 1];
                const fidEntry = fid;
                setMetrics(prev => (Object.assign(Object.assign({}, prev), { fid: fidEntry.processingStart - fidEntry.startTime })));
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
            // Cumulative Layout Shift
            const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0;
                for (const entry of list.getEntries()) {
                    const layoutShiftEntry = entry;
                    if (!layoutShiftEntry.hadRecentInput) {
                        clsValue += layoutShiftEntry.value;
                    }
                }
                setMetrics(prev => (Object.assign(Object.assign({}, prev), { cls: clsValue })));
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
            return () => {
                fcpObserver.disconnect();
                lcpObserver.disconnect();
                fidObserver.disconnect();
                clsObserver.disconnect();
            };
        }
    }, []);
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
        return null;
    }
    return (_jsx("div", { className: "fixed bottom-4 left-4 bg-zion-blue-dark/90 backdrop-blur-sm border border-zion-purple/30 rounded-lg p-3 text-xs text-white z-50", children: _jsxs("div", { className: "font-mono space-y-1", children: [_jsxs("div", { children: ["FCP: ", metrics.fcp.toFixed(0), "ms"] }), _jsxs("div", { children: ["LCP: ", metrics.lcp.toFixed(0), "ms"] }), _jsxs("div", { children: ["FID: ", metrics.fid.toFixed(0), "ms"] }), _jsxs("div", { children: ["CLS: ", metrics.cls.toFixed(3)] })] }) }));
}
// Debounced Search Hook
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
// Throttled Scroll Hook
export function useThrottledScroll(callback, delay) {
    const lastRun = useRef(Date.now());
    useEffect(() => {
        const handler = () => {
            if (Date.now() - lastRun.current >= delay) {
                callback();
                lastRun.current = Date.now();
            }
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, [callback, delay]);
}
// Preload Critical Resources
export function PreloadCriticalResources() {
    useEffect(() => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.as = 'style';
        criticalCSS.href = '/src/index.css';
        document.head.appendChild(criticalCSS);
        // Preload critical fonts
        const font = document.createElement('link');
        font.rel = 'preload';
        font.as = 'font';
        font.href = '/fonts/orbitron.woff2';
        font.crossOrigin = 'anonymous';
        document.head.appendChild(font);
        // Preload critical images
        const criticalImages = [
            '/images/zion-logo.png',
            '/images/zion-homepage-og.jpg'
        ];
        criticalImages.forEach(src => {
            const img = document.createElement('link');
            img.rel = 'preload';
            img.as = 'image';
            img.href = src;
            document.head.appendChild(img);
        });
    }, []);
    return null;
}
// Service Worker Registration
export function ServiceWorkerRegistration() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                    .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }, []);
    return null;
}
