# 🔋 Battery Optimization Summary

This update introduces a small energy‑saving enhancement to the Zion app.

## ✅ Key Improvement

- **Service Worker Registration**: The function now checks `navigator.connection.saveData` before registering the service worker. When users enable the browser's data saver mode—which is often used to conserve battery—the app will skip service worker registration. This avoids background processes such as caching and sync that can drain power.
  - **File**: `src/serviceWorkerRegistration.ts`

## 🌟 Benefits

- Reduces background activity for users who opt into data saving.
- Respects user preference for lower power consumption.

---

*Generated on: 2025-06-27T00:54:03+00:00*
