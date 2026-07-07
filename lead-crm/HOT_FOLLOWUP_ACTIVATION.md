# Zion CRM Post-Auth Activation Runbook

Use this immediately after Gmail auth is restored for `kleber@ziontechgroup.com`.

## 1. Verify auth
```bash
gog gmail search 'in:anywhere' --max 1 --plain --account kleber@ziontechgroup.com
```

## 2. Activate hot-followup responder
```bash
cd /Users/miami2/zion.app
python3 lead-crm/hot_followup_responder.py
```

Expected: JSON with label `!!!hot-follow-up`, dry-run=false, sent_count > 0.

## 3. Run outreach batch
```bash
python3 lead-crm/send_outreach_batch.py lead-crm/outreach_ready_canonical.json
```

## 4. Start high-frequency loop
```bash
python3 lead-crm/continuous_outreach_pipeline.py
```

Or use the existing Telegram cron job: `zion-hot-followup-responder` at `*/1 * * * *`.

## 5. Verify labels
- `!!!hot-followup-sent` should exist after first send.
- Check Sent folder for new thread replies.

## 6. Monitor
Watch `lead-crm/pipeline_log.json` for:
- `hot_followup_sent`
- `pipeline_tick`
- `gmail_error_classified`

If errors persist, inspect the most recent event error field and stop retrying auth until resolved.
