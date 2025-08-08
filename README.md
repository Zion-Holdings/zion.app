# Zion AI Marketplace – Assistant Widget

An AI-powered chat assistant for the Zion AI Marketplace. It greets users, answers FAQs, and guides them through browsing listings, pricing/credits, integrations, and vendor onboarding. The widget is responsive and can be included on all pages.

## Features
- Floating chat bubble, always-on across pages
- Mobile-friendly panel with accessible controls
- Greeting + quick action buttons
- Conversations persisted in `localStorage`
- Server-side proxy to OpenAI (no API key in browser)
- Lightweight FAQ context to improve response quality

## Tech
- Node.js + Express (ESM)
- OpenAI API
- Vanilla JS/CSS widget, no framework

## Setup
1. Copy env and set your key:
   ```bash
   cp .env.example .env
   # Edit .env to set OPENAI_API_KEY and optional OPENAI_MODEL
   ```
2. Install and run:
   ```bash
   npm install
   npm run dev
   # Open http://localhost:3000
   ```

## Embed on your site
Include the script and stylesheet in your global layout (so it appears on all pages):
```html
<link rel="stylesheet" href="/widget.css" />
<script src="/widget.js" defer></script>
```
The widget mounts automatically and talks to `/api/chat` on the same origin.

If your site is hosted separately, deploy this server and set `ALLOWED_ORIGIN` accordingly.

## Customization
- Edit the system prompt and FAQ in `server.mjs`.
- Adjust styles in `public/widget.css`.
- Change greeting, quick actions, or persistence in `public/widget.js`.

## Notes
- Default model is `gpt-4o-mini`. You can set `OPENAI_MODEL` to any GPT-4 family model available to your key.
- For enterprise usage, add authentication and stronger rate limiting.