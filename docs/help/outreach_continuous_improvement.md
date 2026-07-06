# AI/IT Outreach Continuous Improvement

## Objective
Improve response quality and pipeline throughput continuously without repeating automation errors.

## Metrics to track
- pipeline_tick count
- send success vs failure ratio
- 429 rate-limit frequency
- new leads added by miner
- response rate from sent emails

## Actions completed
- Unified pipeline fixed for EPIPE / retry / cooldown handling
- Cross-folder prospector `lead-crm/web_prospecting.py` implemented and tested
- CEO-style outreach templates added: `lead-crm/ceo_followup_templates.json`
- Outreach log entries include success metrics and failures

## Next steps
1. Retry live sends only after Gmail rate limit clears
2. Expand prospecting queries weekly based on miner results
3. Connect pipeline metrics to weekly summary report
4. Add LLM-quality scoring for sent messages
