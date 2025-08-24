# Supabase schema suggestion for translations

Create or alter table `talent_profiles` with JSONB columns:

- original_language TEXT
- translations JSONB

Example insert shape for `translations`:

```json
{
  "title": { "es": "...", "de": "..." },
  "summary": { "es": "..." },
  "bio": { "es": "..." },
  "category": { "es": "..." }
}
```