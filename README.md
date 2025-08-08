# Zion AI Marketplace - Talent Profile AI Workflow

This repo provides a secure, production-ready workflow to enhance talent profiles using AI when a form is submitted.

## What it does
- On form submission or profile update, securely calls OpenAI via a Supabase Edge Function
- Generates a concise 100–150 word professional summary
- Extracts and normalizes up to 8 categorized skill tags
- Saves the results to the `talents` table (`summary`, `skills`, `profile_incomplete`)
- Caches AI results to reduce cost and latency
- Optionally sends a confirmation email to the user

## Architecture
- Edge Function: `supabase/functions/ai-profile` (Deno)
- Database: `talents`, `ai_skill_cache` (see `sql/schema.sql`)
- Optional email: Resend API

## Prerequisites
- Supabase project (URL + keys)
- OpenAI API key
- Optional: Resend API key for email notifications

## Setup
1. Create tables/policies
   - Apply `sql/schema.sql` to your Supabase project (Studio SQL editor or CLI):
     ```sql
     -- paste contents of sql/schema.sql
     ```
2. Configure environment for the Edge Function
   - In your Supabase project, set function secrets:
     - `OPENAI_API_KEY`
     - `OPENAI_MODEL` (optional, default `gpt-4o-mini`)
     - `RESEND_API_KEY` (optional)
     - `FROM_EMAIL` (optional, e.g., `Zion AI <no-reply@zion.ai>`) 
     - `SUPABASE_URL` (provided by Supabase)
     - `SUPABASE_ANON_KEY` (provided by Supabase)

3. Deploy the Edge Function
   ```bash
   supabase functions deploy ai-profile
   ```

4. Client integration (Lovable/onboarding form)
   - On form submission (or profile update), call the function endpoint:
   - Endpoint: `POST https://<PROJECT-REF>.functions.supabase.co/ai-profile`
   - Headers:
     - `Authorization: Bearer <user JWT>`
     - `Content-Type: application/json`
   - Body:
     ```json
     {
       "talentId": "<uuid>",
       "fullName": "Ada Lovelace",
       "bio": "Pioneer in computing with experience in analytical engines and algorithm design...",
       "skillsRaw": "Python, JavaScript, leadership, AWS, Docker, Kubernetes",
       "roles": "Software Engineer, Tech Lead",
       "industry": "AI/ML, Cloud",
       "email": "ada@example.com",
       "notify": true
     }
     ```

## Output
- The function updates the `talents` row:
  - `summary`: AI-generated 100–150 word summary
  - `skills`: categorized skills JSON with up to 8 tags total
  - `profile_incomplete`: flag if inputs appear incomplete
- Returns JSON:
  ```json
  {
    "talentId": "<uuid>",
    "summary": "...",
    "skills": {
      "programming": ["Python", "JavaScript"],
      "devops": ["Docker", "Kubernetes"],
      "platforms": ["AWS"],
      "soft_skills": ["Leadership"]
    },
    "profile_incomplete": false,
    "missing_fields": [],
    "cache_key": "<sha256>"
  }
  ```

## Caching
- Cache key is computed from the normalized input fields; results stored in `ai_skill_cache`.
- Avoids repeated OpenAI calls for identical inputs.

## Security
- OpenAI API key is kept server-side in the Edge Function. The client never sees it.
- Database writes are made with the user's JWT (RLS enforced), ensuring users can only update their own row.

## Email Notification (optional)
- If `RESEND_API_KEY` is configured and `notify` is true, sends:
  "Your profile has been enhanced with AI. You’re now more discoverable to recruiters and companies!"

## Notes
- You can trigger this on both create and update actions in your client app.
- Adjust the `missing_fields` logic inside the function to match your business rules.
- For high-volume usage, consider adding TTL/expiry to `ai_skill_cache` or a periodic cleanup job.