# Heatmap Tracking with Hotjar & FullStory

## ✅ Overview
- Adds in-depth heatmap analytics to better understand how users interact with Zion.app.
- Integrates both **Hotjar** (for click and scroll heatmaps) and **FullStory** (for session playback and event analysis).
- Tracking scripts load only after users grant analytics consent, keeping the platform compliant with GDPR/CCPA.

## 🚀 Implementation Details
1. **Environment Variables**
   - `NEXT_PUBLIC_HOTJAR_ID` – your Hotjar site ID.
   - `NEXT_PUBLIC_HOTJAR_SV` – Hotjar snippet version.
   - `NEXT_PUBLIC_FULLSTORY_ORG` – FullStory organization identifier.
2. **Script Loader**
   - Create a `HeatmapTracking.tsx` component under `src/integrations/`.
   - Inject Hotjar and FullStory snippets inside a `useEffect` hook.
   - Scripts run only when `safeStorage.getItem('analyticsConsent') === 'true'`.
3. **Global Usage**
   - Import `HeatmapTracking` in `pages/_app.tsx` so tracking is available across all pages.

## 🛠 Setup Steps
1. Sign up for accounts on [Hotjar](https://www.hotjar.com/) and [FullStory](https://www.fullstory.com/).
2. Add the environment variables above to your `.env.local` file.
3. Deploy the application with these variables set.
4. Visit your Hotjar and FullStory dashboards to view heatmaps and session replays.

With these additions, product teams gain actionable insights into user behavior, enabling data‑driven UX improvements.
