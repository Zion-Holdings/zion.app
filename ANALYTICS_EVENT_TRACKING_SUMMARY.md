# Analytics Event Tracking

## ✅ Overview
- Captures key user interactions for improved product decisions.
- Tracks Explore button clicks, dropdown toggles, and language changes.
- Events are logged via `fireEvent` to Google Analytics and Supabase.

## 🚀 Implementation Details
1. **Explore Marketplace Button**
   - File: `src/components/FeaturesGuideSection.tsx`
   - Logs `explore_marketplace_click` when the button is pressed.
2. **Profile Dropdown Menu**
   - File: `src/components/header/UserProfileDropdown.tsx`
   - Emits `profile_dropdown_toggle` on open and close actions.
3. **Language Selector**
   - File: `src/components/header/LanguageSelector.tsx`
   - Sends `language_selector_toggle` and `language_change` events.

These metrics provide insight into navigation patterns and help guide data‑driven improvements.
