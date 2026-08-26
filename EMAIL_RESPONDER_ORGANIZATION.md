# Email Auto-Responder System — Organization Guide
# Zion Tech Group — kleber@ziontechgroup.com

## System Overview
The email auto-responder runs on cron every 30 minutes during business hours (8am-6pm, Mon-Fri).
It uses the direct Gmail API (no gog CLI dependency) with OAuth 2.0 tokens.

## File Structure
```
scripts/
├── email_responder_v2.py          # Main responder (608 lines)
├── email_responder_daily_summary.py  # Daily summary report
├── token_lifecycle_manager.py     # OAuth token management (493 lines)
├── token_renewal_watchdog.py      # Standalone token watchdog
├── lead_finder.py                 # Lead discovery engine
└── outreach_templates.json        # 10 email templates

data/
├── email_responder_v2_log.json    # Full email processing log
├── email_responder_v2_state.json  # Persistent state (processed/replied/errors)
├── token_state.json               # Token refresh state
└── token_dashboard.json           # Token health dashboard

~/.openclaw/workspace/
└── gog_tokens.json                # OAuth tokens (chmod 600)
```

## Commands

### Email Responder
```bash
python3 scripts/email_responder_v2.py              # Dry-run (default)
python3 scripts/email_responder_v2.py --send        # Actually send replies
python3 scripts/email_responder_v2.py --send --max-emails 5
python3 scripts/email_responder_v2.py --verbose     # Debug logging
python3 scripts/email_responder_v2.py --json-output # JSON summary
python3 scripts/email_responder_v2.py --stats       # Show statistics
```

### Token Manager
```bash
python3 scripts/token_lifecycle_manager.py check         # Health check + auto-refresh
python3 scripts/token_lifecycle_manager.py force-refresh  # Force refresh
python3 scripts/token_lifecycle_manager.py status         # Full status
python3 scripts/token_lifecycle_manager.py dashboard      # Export dashboard data
```

## Classification Categories
- **lead** — Sales inquiries, pricing questions, demo requests
- **customer_inquiry** — Support requests, billing, account issues
- **partnership** — Partnership, reseller, integration inquiries
- **spam** — CI/CD notifications, social media, newsletters
- **human_review** — Unclear emails marked for manual review

## Template Selection
Templates are selected by category + detected industry:
- Healthcare → intro-ai-healthcare
- FinTech → intro-fintech
- Retail → intro-retail
- EdTech → intro-edtech
- Logistics → intro-logistics
- Universal → proposal-ready (leads) / free-audit (inquiries)

## Auto-Archive
These senders are automatically archived (removed from inbox):
- notifications@github.com (CI/CD noise)

## Blocked Senders (never auto-reply)
- kleber@ziontechgroup.com (self)
- support@retellai.com, contact@stammer.ai, partners@datadoghq.com
- fin@pictory.intercom-mail.com, joao.marcos@awazai.intercom-mail.com
- support@cartesia.ai, mmcguinness@rafay.co, devon@raynmaker.ai
- contact@pathors.com, contact@botpenguin.com, aline.garcia@sinaia.com.br

## Cron Jobs
| Job | Schedule | Purpose |
|-----|----------|---------|
| Email Auto-Responder | */30 8-18 * * 1-5 | Process emails every 30min business hours |
| Google Token Health Monitor | 0 */3 * * * | Check token every 3 hours |
| Email Responder Daily Summary | 0 9 * * * | Daily summary at 9am |
| Token Dashboard Export | 0 8 * * 1 | Weekly dashboard on Monday 8am |
| Lead Finder Daily Run | 0 8 * * * | Daily lead discovery at 8am |
| email-readiness-check | every 120m | Verify email system health |
| org-health-check | every 240m | Overall system health |
| wave-research-and-content | every 240m | Content research |
| zion-link-monitor | every 360m | Link monitoring |

## Token Renewal Automation
- Tokens auto-refresh every 3 hours via cron
- Proactive refresh when < 7 days remaining
- Auto-refresh when < 1 day remaining
- Gmail API verification after each refresh
- Persistent state tracking (refresh count, failures, backoff)
- Manual recovery: `python3 scripts/google_oauth_manual_auth.py`

## State Tracking
The responder tracks in `data/email_responder_v2_state.json`:
- total_processed: Total emails processed
- total_replied: Total replies sent
- total_skipped: Total skipped (already processed)
- total_errors: Total send failures
- total_human_review: Total flagged for manual review
- last_run: Timestamp of last run
