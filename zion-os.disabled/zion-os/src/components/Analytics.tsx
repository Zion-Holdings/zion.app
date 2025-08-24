"use client";

import { useEffect } from "react";

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Element;
}

export function Analytics() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== "undefined") {
      // Core Web Vitals monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
          }
          if (entry.entryType === "first-input") {
            const firstInputEntry = entry as FirstInputEntry;
            console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        }
      });

      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] });

      // Cumulative Layout Shift monitoring
      let cls = 0;
      const observer2 = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "layout-shift") {
            const layoutShiftEntry = entry as any;
            cls += layoutShiftEntry.value;
          }
        }
      });

      observer2.observe({ entryTypes: ["layout-shift"] });

      // Report metrics on page unload
      window.addEventListener("beforeunload", () => {
        console.log("CLS:", cls);
      });

      // Cleanup
      return () => {
        observer.disconnect();
        observer2.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}