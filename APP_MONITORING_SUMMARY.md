# 📈 App Monitoring Improvements

This update consolidates the various monitoring tools now used across the project.
It highlights how Lighthouse, Core Web Vitals and Firebase Performance are configured.

## ✅ Key Enhancements

1. **Lighthouse CI Integration**
   - `.github/workflows/hourly-check.yml` installs **Lighthouse CI** and runs audits on every scheduled build.
   - Reports are uploaded as workflow artifacts for performance tracking over time.
2. **Core Web Vitals Tracking**
   - `src/utils/performance.ts` measures **CLS**, **INP**, **FCP**, **LCP** and **TTFB** in real time.
   - Metrics can be sent to analytics services for production monitoring.
3. **Firebase Performance Setup**
   - `src/integrations/firebase/client.ts` now initializes `getPerformance` so the app can send performance traces to Firebase.

## 📂 Relevant Files

- `.github/workflows/hourly-check.yml` – Scheduled Lighthouse audits
- `src/utils/performance.ts` – Core Web Vitals utilities
- `src/integrations/firebase/client.ts` – Firebase configuration with Performance monitoring

These tools provide a comprehensive view of frontend performance, helping maintain fast load times and a smooth user experience.
