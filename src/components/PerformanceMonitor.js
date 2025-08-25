import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
export function PerformanceMonitor({ onMetrics, logToConsole = false, sendToAnalytics = false, analyticsEndpoint = '/api/analytics/performance', }) {
    const observerRef = useRef(null);
    const metricsRef = useRef({
        fcp: null,
        lcp: null,
        fid: null,
        cls: null,
        ttfb: null,
        fmp: null,
    });
    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
            metricsRef.current.fcp = fcpEntry.startTime;
            if (logToConsole) {
                console.log('FCP:', fcpEntry.startTime, 'ms');
            }
        }
    };
    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
        if ('PerformanceObserver' in window) {
            try {
                observerRef.current = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    if (lastEntry) {
                        metricsRef.current.lcp = lastEntry.startTime;
                        if (logToConsole) {
                            console.log('LCP:', lastEntry.startTime, 'ms');
                        }
                    }
                });
                observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
            }
            catch (error) {
                console.warn('LCP measurement failed:', error);
            }
        }
    };
    // Measure First Input Delay (FID)
    const measureFID = () => {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (entry.entryType === 'first-input') {
                            // Use a safer way to measure FID
                            const fid = entry.processingStart ? entry.processingStart - entry.startTime : 0;
                            metricsRef.current.fid = fid;
                            if (logToConsole) {
                                console.log('FID:', fid, 'ms');
                            }
                        }
                    });
                });
                observer.observe({ entryTypes: ['first-input'] });
            }
            catch (error) {
                console.warn('FID measurement failed:', error);
            }
        }
    };
    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
        if ('PerformanceObserver' in window) {
            try {
                let clsValue = 0;
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });
                    metricsRef.current.cls = clsValue;
                    if (logToConsole) {
                        console.log('CLS:', clsValue);
                    }
                });
                observer.observe({ entryTypes: ['layout-shift'] });
            }
            catch (error) {
                console.warn('CLS measurement failed:', error);
            }
        }
    };
    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry) {
            metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            if (logToConsole) {
                console.log('TTFB:', metricsRef.current.ttfb, 'ms');
            }
        }
    };
    // Measure First Meaningful Paint (FMP) approximation
    const measureFMP = () => {
        // FMP is not directly measurable, but we can approximate it
        // by looking at the first paint after a significant delay
        setTimeout(() => {
            const paintEntries = performance.getEntriesByType('paint');
            const lastPaintEntry = paintEntries[paintEntries.length - 1];
            if (lastPaintEntry) {
                metricsRef.current.fmp = lastPaintEntry.startTime;
                if (logToConsole) {
                    console.log('FMP (approximate):', lastPaintEntry.startTime, 'ms');
                }
            }
        }, 1000);
    };
    // Send metrics to analytics endpoint
    const sendMetricsToAnalytics = async (metrics) => {
        if (!sendToAnalytics)
            return;
        try {
            await fetch(analyticsEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    metrics,
                    timestamp: Date.now(),
                    userAgent: navigator.userAgent,
                    url: window.location.href,
                }),
            });
        }
        catch (error) {
            console.warn('Failed to send performance metrics:', error);
        }
    };
    // Get performance grade based on metrics
    const getPerformanceGrade = (metrics) => {
        let score = 0;
        let totalMetrics = 0;
        // FCP scoring (0-100)
        if (metrics.fcp !== null) {
            totalMetrics++;
            if (metrics.fcp < 1800)
                score += 100;
            else if (metrics.fcp < 3000)
                score += 75;
            else if (metrics.fcp < 4000)
                score += 50;
            else
                score += 25;
        }
        // LCP scoring (0-100)
        if (metrics.lcp !== null) {
            totalMetrics++;
            if (metrics.lcp < 2500)
                score += 100;
            else if (metrics.lcp < 4000)
                score += 75;
            else if (metrics.lcp < 6000)
                score += 50;
            else
                score += 25;
        }
        // FID scoring (0-100)
        if (metrics.fid !== null) {
            totalMetrics++;
            if (metrics.fid < 100)
                score += 100;
            else if (metrics.fid < 300)
                score += 75;
            else if (metrics.fid < 500)
                score += 50;
            else
                score += 25;
        }
        // CLS scoring (0-100)
        if (metrics.cls !== null) {
            totalMetrics++;
            if (metrics.cls < 0.1)
                score += 100;
            else if (metrics.cls < 0.25)
                score += 75;
            else if (metrics.cls < 0.4)
                score += 50;
            else
                score += 25;
        }
        const averageScore = totalMetrics > 0 ? score / totalMetrics : 0;
        if (averageScore >= 90)
            return 'A';
        if (averageScore >= 80)
            return 'B';
        if (averageScore >= 70)
            return 'C';
        if (averageScore >= 60)
            return 'D';
        return 'F';
    };
    useEffect(() => {
        // Wait for page to load before measuring
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                measureFCP();
                measureFMP();
            });
        }
        else {
            measureFCP();
            measureFMP();
        }
        // Start measuring LCP, FID, and CLS
        measureLCP();
        measureFID();
        measureCLS();
        // Measure TTFB after a short delay to ensure navigation timing is available
        setTimeout(measureTTFB, 100);
        // Send metrics after a delay to ensure all measurements are complete
        const sendMetricsTimer = setTimeout(() => {
            const metrics = metricsRef.current;
            const grade = getPerformanceGrade(metrics);
            if (logToConsole) {
                console.log('Performance Grade:', grade);
                console.log('All Metrics:', metrics);
            }
            // Call callback with metrics
            if (onMetrics) {
                onMetrics(metrics);
            }
            // Send to analytics
            sendMetricsToAnalytics(metrics);
        }, 5000);
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            clearTimeout(sendMetricsTimer);
        };
    }, [onMetrics, logToConsole, sendToAnalytics, analyticsEndpoint]);
    // This component doesn't render anything
    return null;
}
// Hook for using performance monitoring
export function usePerformanceMonitoring(options) {
    const [metrics, setMetrics] = useState(null);
    const [grade, setGrade] = useState('');
    const handleMetrics = (newMetrics) => {
        setMetrics(newMetrics);
    };
    return {
        metrics,
        grade,
        PerformanceMonitor: () => (_jsx(PerformanceMonitor, Object.assign({}, options, { onMetrics: handleMetrics }))),
    };
}
// Utility function to get current performance metrics
export function getCurrentPerformanceMetrics() {
    var _a, _b;
    const paintEntries = performance.getEntriesByType('paint');
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    return {
        fcp: ((_a = paintEntries.find(entry => entry.name === 'first-contentful-paint')) === null || _a === void 0 ? void 0 : _a.startTime) || null,
        lcp: null, // LCP requires observer, can't get current value
        fid: null, // FID requires observer, can't get current value
        cls: null, // CLS requires observer, can't get current value
        ttfb: navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : null,
        fmp: ((_b = paintEntries[paintEntries.length - 1]) === null || _b === void 0 ? void 0 : _b.startTime) || null,
    };
}
