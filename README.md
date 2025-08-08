# Zion AI Marketplace – Chat Assistant

An accessible, mobile-ready chat assistant powered by OpenAI. Includes a floating widget you can embed on every page and a secure server proxy so your API key stays private.

## Quick start

1. Create environment file

```bash
cp server/.env.sample server/.env
# edit server/.env and set OPENAI_API_KEY
```

2. Install dependencies and run

```bash
cd server
npm install
npm run start
```

This serves the widget at `http://localhost:8787/widget.js` and the chat API at `http://localhost:8787/api/chat`.

## Embed on any page

Add this script tag to your site-wide layout (e.g., in `<body>`):

```html
<script
  src="http://localhost:8787/widget.js"
  data-api-base="http://localhost:8787/api"
  data-accent="#6c5ce7"
  data-greeting="Hi! I’m your Zion AI Assistant. How can I help?"
  async
  defer
></script>
```

- `data-api-base`: Points the widget to your server’s API prefix
- `data-accent`: Customizes the widget color
- `data-greeting`: Optional custom greeting shown on first open

The widget creates a floating button and a panel (bottom-right on desktop, full-screen on mobile). It’s accessible via keyboard and screen readers, supports Escape to close, and is responsive.

## How it works

- Frontend: vanilla JS/CSS in `server/public/widget.js` and `server/public/widget.css`
- Backend: Express server in `server/index.js` exposes `POST /api/chat` and proxies to OpenAI Chat Completions with a Zion-specific system prompt
- Security: API key remains on the server; the browser never sees it

## Configuration

- `PORT`: Server port (default 8787)
- `OPENAI_API_KEY`: Your OpenAI API key
- `OPENAI_MODEL`: Optional model override (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, etc.)

## Deploying

- Host the `server` anywhere that supports Node.js (Render, Railway, Fly, Vercel functions, etc.)
- Update the script `src` and `data-api-base` to your deployed domain

## Notes

- The assistant greets users, answers FAQs, and guides through marketplace features. Customize the system prompt in `server/index.js`.
- For streaming responses, you can extend the server to use OpenAI streaming and emit text via server-sent events.