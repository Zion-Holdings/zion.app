## Zion AI Marketplace: Job-to-Talent Matching Workflow

Trigger
- When a new job is submitted via the "Post a Job" form, call `POST /api/post-job` with payload:

```json
{
  "title": "Senior Node.js Engineer",
  "description": "We need…",
  "requiredSkills": ["Node JS", "TypeScript", "Postgres"],
  "category": "Engineering",
  "budget": { "currency": "USD", "hourlyMax": 120 },
  "timeline": "ASAP"
}
```

Workflow Steps
1) Input Collection
- Captures title, description, requiredSkills, category, budget, timeline.

2) AI Processing (OpenAI)
- Normalizes skill tags (e.g., Node JS -> Node.js)
- Extracts key requirements from description
- Builds a ranking prompt to evaluate top talent
- Sample system prompt:
```
Based on this job description and required skills, identify the top 5 matching talent profiles from the database. Consider experience, skill tags, availability, and hourly rate.
```

3) Talent Database Query & Ranking
- Retrieves active talent profiles (current demo uses `data/talent.ts`)
- Compares with AI-normalized job profile
- Returns top 3–5 talent slugs ranked by relevance

4) Notification Flow
- Stores results in Supabase table `suggested_matches`
- Notifies each matched talent (stub in `utils/notify/matches.ts`)
  - Summary of job and CTA (Apply/View Job)

5) Client-Side Output
- Use `GET /api/suggested-matches?jobId=...` to render suggested talents in dashboard
- Example component: `components/marketplace/SuggestedMatchesPanel.tsx`

Security
- Use Supabase Service Role key on the server to insert into `suggested_matches`
- Keep PII out of client payloads; store emails and salary expectations securely
- See `docs/suggested_matches_schema.sql` for schema and RLS guidance

Environment Variables
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_APP_URL` (optional, for CTA links)