# Analytics Consent Banner

## ✅ Overview

- Adds a mandatory consent banner for analytics tracking.
- Ensures compliance with GDPR and CCPA regulations.
- Analytics scripts initialize only after consent is granted.

## 🚀 Implementation Details

1. **New Component**: `AnalyticsConsentBanner.tsx`
   - Displays a fixed banner at the bottom of every page.
   - Stores the user's choice in `safeStorage` under `analyticsConsent`.
   - Calls `initGA()` when users accept analytics cookies.
2. **Layout Update**: `AppLayout.tsx`
   - Renders the banner across the application beneath the footer.

## 🎯 Compliance Notes

- Consent must be explicit; users can decline tracking.
- A link to the privacy policy is provided for transparency.
- Preferences persist for returning visitors but can be cleared via browser settings.

The banner enables respectful data collection practices while keeping users informed.
