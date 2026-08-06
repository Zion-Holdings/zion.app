# LLM Tailoring Activation

Enable live, thread-aware CEO replies by configuring **one** supported provider set in the worker environment.

## Provider options

### Option A — Zion native
```bash
ZION_LLM_API_ENDPOINT=https://<your-llm-endpoint>
ZION_LLM_API_KEY=<your-api-key>
ZION_LLM_MODEL=<model-id>
```

### Option B — OpenRouter
```bash
OPENROUTER_API_KEY=<your-openrouter-key>
OPENROUTER_MODEL=<model-id>
```

### Option C — Groq
```bash
GROQ_API_KEY=<your-groq-key>
GROQ_MODEL=<model-id>
```

### Option D — Gemini
```bash
GEMINI_API_KEY=<your-gemini-key>
GEMINI_MODEL=<model-id>
```

## Quick activation checklist

- [ ] Choose one option above
- [ ] Add the env vars to the runtime where `scripts/outreach/outreach_worker_automation.py` runs
- [ ] Optional fallback list:
  - `ZION_LLM_FALLBACK_MODELS=<comma-separated model ids>`
- [ ] Re-run outreach in non-dry-run mode
- [ ] Confirm `LLM_TAILOR_ENABLED=True` in worker logs

## Notes

- Tailored replies include Calendly, website link, past-project thanks, and context-aware proposals.
- Duplicate filtering, alive-thread checks, and all-folder discovery remain active.
- If no provider is configured, the worker still runs with safer context-aware fallbacks.
