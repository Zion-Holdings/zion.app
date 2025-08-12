# Persistent Cookie Consent and Settings Link

## ✅ Overview
- Stores analytics consent in cookies and localStorage for long-term persistence.
- Adds a new **Privacy Settings** page to let users adjust their preferences.
- Banner now links directly to this settings page.

## 🚀 Implementation Details
1. **Banner Update**
   - Reads the `analyticsConsent` cookie and falls back to `safeStorage`.
   - Sets both cookie and localStorage when users accept or decline.
   - Link text changed to "Privacy Settings".
2. **New Page**: `PrivacySettings.tsx`
   - Simple interface to toggle analytics cookies.
   - Updates both storage mechanisms.

## 🎯 Compliance Notes
- Storing consent in cookies ensures the banner does not reappear unnecessarily.
- Users can easily manage consent anytime from the settings page.
