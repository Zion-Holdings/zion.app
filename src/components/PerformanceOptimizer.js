import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
export function PerformanceOptimizer() {
    const [metrics, setMetrics] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        // Only show when explicitly enabled
        if (localStorage.getItem('showPerformance') === 'true') {
            setIsVisible(true);
            measurePerformance();
        }
    }, []);
    const measurePerformance = () => {
        if ('PerformanceObserver' in window) {
            // Measure Core Web Vitals
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        updateMetrics('lcp', entry.startTime);
                    }
                    else if (entry.entryType === 'first-input') {
                        const firstInputEntry = entry;
                        updateMetrics('fid', firstInputEntry.processingStart - firstInputEntry.startTime);
                    }
                });
            });
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
            // Measure other metrics
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                    updateMetrics('ttfb', navigation.responseStart - navigation.requestStart);
                }
            }, 1000);
        }
    };
    const updateMetrics = (key, value) => {
        setMetrics(prev => {
            if (!prev)
                return null;
            const newMetrics = Object.assign(Object.assign({}, prev), { [key]: value });
            // Calculate overall score
            const scores = [
                newMetrics.fcp < 1800 ? 100 : Math.max(0, 100 - (newMetrics.fcp - 1800) / 10),
                newMetrics.lcp < 2500 ? 100 : Math.max(0, 100 - (newMetrics.lcp - 2500) / 25),
                newMetrics.fid < 100 ? 100 : Math.max(0, 100 - (newMetrics.fid - 100) / 2),
                newMetrics.cls < 0.1 ? 100 : Math.max(0, 100 - newMetrics.cls * 1000),
                newMetrics.ttfb < 800 ? 100 : Math.max(0, 100 - (newMetrics.ttfb - 800) / 8)
            ];
            newMetrics.overall = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
            return newMetrics;
        });
    };
    const getScoreColor = (score) => {
        if (score >= 90)
            return 'bg-green-500';
        if (score >= 70)
            return 'bg-yellow-500';
        return 'bg-red-500';
    };
    const getScoreIcon = (score) => {
        if (score >= 90)
            return '✅';
        if (score >= 70)
            return '⏰';
        return '⚠️';
    };
    if (!isVisible || !metrics)
        return null;
    return (_jsxs("div", { ref: ref, className: "fixed bottom-4 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 rounded-lg border p-4 shadow-2xl", children: [_jsxs("div", { className: "pb-2", children: [_jsxs("h3", { className: "flex items-center gap-2 text-sm font-semibold", children: [_jsx("span", { children: "\u26A1" }), "Performance Monitor", _jsxs("span", { className: "ml-auto px-2 py-1 bg-muted rounded text-xs font-mono", children: [metrics.overall, "/100"] })] }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Core Web Vitals & Performance Metrics" })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "First Contentful Paint" }), _jsxs("span", { className: "font-mono", children: [Math.round(metrics.fcp), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.fcp / 1800) * 100)}%` } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "Largest Contentful Paint" }), _jsxs("span", { className: "font-mono", children: [Math.round(metrics.lcp), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.lcp / 2500) * 100)}%` } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "First Input Delay" }), _jsxs("span", { className: "font-mono", children: [Math.round(metrics.fid), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.fid / 100) * 100)}%` } }) }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "Cumulative Layout Shift" }), _jsx("span", { className: "font-mono", children: metrics.cls.toFixed(3) })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.cls / 0.1) * 100)}%` } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "Time to First Byte" }), _jsxs("span", { className: "font-mono", children: [Math.round(metrics.ttfb), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.ttfb / 800) * 100)}%` } }) })] }), _jsx("div", { className: "pt-2 border-t border-border", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs font-medium", children: "Overall Score" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { children: getScoreIcon(metrics.overall) }), _jsx("span", { className: `text-sm font-bold ${getScoreColor(metrics.overall).replace('bg-', 'text-')}`, children: metrics.overall })] })] }) })] })] }));
}
