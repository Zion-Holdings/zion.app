# Zion Podcast Host

Routes:
- /media/podcast — public episodes list
- /studio/host — operator studio for generating episodes

APIs:
- POST /api/podcast/generate
- GET  /api/podcast/list
- GET  /api/podcast/get?id=...
- POST /api/podcast/synthesize
- POST /api/podcast/rss

Setup:
1. Copy .env.example to .env.local and set keys (OPENAI_API_KEY, optional ElevenLabs/PlayHT, SITE_URL)
2. Run dev server: npm run dev
3. Generate an episode in /studio/host, synthesize audio, then update RSS. Feed at /podcast.xml

Storage:
- Episodes JSON: data/podcast/episodes.json
- Audio files: public/podcast/
- RSS: public/podcast.xml