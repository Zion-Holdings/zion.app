# Outreach Automation — Improvement Brief

## Actual Performance
- **Failure rate:** 100% of recent runs failed to send outreach.
- **Observed sumary:** `scanned=0`, `potentialClients=0`, `skippedDuplicateSuppression=0`, `sent=0`.
- **Root cause:** Hard blocker — `gmail search failed: No auth for gmail kleber@ziontechgroup.com`. All runs abort before candidate emails are processed.

## Identified Auth Blocker
- The `gog` Gmail path has no credential for `kleber@ziontechgroup.com`.
- `ai-email-outreach-llm-agent.cjs` bubbles up the same message; fix lies outside this file (`gog auth add ... --services gmail`).

## Code Improvements (target once Gmail auth is restored)

1. **Strengthen outreach messaging with a specific problem → outcome hook**
   - In `generateLLMOutreach` prompt, replace generic “IA, cloud e automação” with a client-relevant micro-offer based on subject keywords.
   - Example line to add to the prompt: `Pick one short, specific outcome they likely want based on the subject, then propose one 60-minute next step with a concrete result they can expect.`
   - Fallback should also switch from fixed “IA, cloud e automação” to subject-matched promises.

2. **Adapt sender-to-recipient alignment and reply-path handling**
   - The script currently uses `thread.to || thread.from` and always replies as `Re: <subject>`.
   - Improvement: when scanning `in:anywhere`, detect whether the lead initiated the thread or only replied to an existing conversation; only skip if we already engaged in that thread explicitly.
   - Add to prompt: `If the recipient is a new lead, introduce us in one short sentence; do not assume past collaboration unless they referenced it.`
