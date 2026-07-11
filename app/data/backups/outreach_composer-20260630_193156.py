#!/usr/bin/env python3
"""
Automated Outreach Composer for Zion Tech Group
Uses discovered leads from integrated pipeline and sends personalized outreach emails
"""
import json
import os
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

PROJECT_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

LEADS_FILE = PROJECT_ROOT / "app" / "data" / "discovered_leads.json"
TEMPLATES_FILE = PROJECT_ROOT / "data" / "outreach" / "templates.json"
SERVICE_TEMPLATES_FILE = PROJECT_ROOT / "data" / "outreach" / "service_templates.json"

# Outreach templates by industry (legacy map)
OUTREACH_TEMPLATES = {
    "FinTech": {
        "subject": "Quick question for {company} - AI fraud detection",
        "body": """Hi {name},

I've been following {company}'s work in {industry} and impressed by what you're building.

We help FinTech companies like {company} deploy AI-powered fraud detection and risk scoring that reduces false positives by 60%+ while catching more sophisticated attacks.

Given your focus on {pain_points}, I'd love to share a quick case study of how we helped a similar company reduce fraud losses by $2M+ in 90 days.

Would you be open to a 15-min call this week?

Best,
Kleber Garcia
CTO, Zion Tech Group
kleber@ziontechgroup.com
+1 302 464 0950"""
    },
    "Healthcare IT": {
        "subject": "AI for {company} - HIPAA-compliant patient analytics",
        "body": """Hi {name},

I came across {company} and your work in healthcare technology stood out.

We specialize in HIPAA-compliant AI solutions for healthcare organizations - from predictive patient analytics to clinical decision support systems that integrate directly with existing EHR workflows.

Given your focus on {pain_points}, we've helped similar healthcare technology companies reduce diagnostic errors by 40% and improve patient outcomes.

Open to a brief conversation about how AI could accelerate your roadmap?

Best,
Kleber Garcia
CTO, Zion Tech Group
kleber@ziontechgroup.com
+1 302 464 0950"""
    },
    "Cybersecurity": {
        "subject": "AI threat detection for {company}",
        "body": """Hi {name},

Your work at {company} in cybersecurity caught my attention.

We build AI-powered threat detection and SOC automation that helps security teams identify advanced threats 10x faster while reducing alert fatigue by 80%.

With your focus on {pain_points}, we've helped security companies deploy autonomous threat hunting that catches nation-state attacks other tools miss.

Interested in a technical demo?

Best,
Kleber Garcia
CTO, Zion Tech Group
kleber@ziontechgroup.com
+1 302 464 0950"""
    },
    "EdTech": {
        "subject": "AI-powered learning for {company}",
        "body": """Hi {name},

I've been tracking {company}'s innovation in education technology.

We develop adaptive learning AI that personalizes curriculum in real-time, increasing student engagement by 2-3x and improving completion rates significantly.

Given your work on {pain_points}, we've helped EdTech platforms deploy AI tutoring that scales 1:1 instruction to millions of learners.

Would you be open to seeing a demo?

Best,
Kleber Garcia
CTO, Zion Tech Group
kleber@ziontechgroup.com
+1 302 464 0950"""
    },
    "default": {
        "subject": "AI automation for {company}",
        "body": """Hi {name},

I came across {company} and was impressed by your work in {industry}.

We help companies deploy custom AI solutions that automate complex workflows, reduce costs, and unlock new revenue streams.

Given your focus on {pain_points}, we've delivered measurable ROI for similar organizations in your space.

Worth a quick call to explore?

Best,
Kleber Garcia
CTO, Zion Tech Group
kleber@ziontechgroup.com
+1 302 464 0950"""
    }
}


def load_service_templates() -> dict:
    if not SERVICE_TEMPLATES_FILE.exists():
        return {}
    try:
        with open(SERVICE_TEMPLATES_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        if isinstance(data, dict):
            return data.get("services", data)
    except Exception:
        pass
    return {}


def _normalize(value: str) -> str:
    return (value or "").strip().lower()


def load_leads():
    """Load discovered leads"""
    if not LEADS_FILE.exists():
        print(f"[ERROR] Leads file not found: {LEADS_FILE}")
        return []

    with open(LEADS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def load_sent_log():
    """Load sent email log to avoid re-composing for already-contacted leads"""
    sent_log_path = PROJECT_ROOT / "data" / "outreach" / "sent_log.json"
    if sent_log_path.exists():
        with open(sent_log_path, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def get_template(industry):
    """Get outreach template for industry"""
    return OUTREACH_TEMPLATES.get(industry, OUTREACH_TEMPLATES["default"])


def update_lead_statuses(leads, updated_leads):
    """Update lead statuses in discovered_leads.json after generating outreach"""
    if not LEADS_FILE.exists():
        return
    try:
        with open(LEADS_FILE, "r", encoding="utf-8") as f:
            all_leads = json.load(f)
        
        # Map by email for quick lookup
        email_to_lead = {_normalize(l.get("email", "")): l for l in all_leads}
        
        for lead in updated_leads:
            email = _normalize(lead.get("email", ""))
            if email in email_to_lead:
                # Only update if still "New" or "Queued"
                if email_to_lead[email].get("status") in ("New", "Queued"):
                    email_to_lead[email]["status"] = "Outreach Composed"
                    email_to_lead[email]["lastContact"] = datetime.now().isoformat()
                    if "activities" not in email_to_lead[email]:
                        email_to_lead[email]["activities"] = []
                    email_to_lead[email]["activities"].append({
                        "timestamp": datetime.now().isoformat(),
                        "action": "Outreach composed - queued for sending"
                    })
        
        with open(LEADS_FILE, 'w', encoding="utf-8") as f:
            json.dump(all_leads, f, indent=2)
        print(f"[Outreach] Updated {len(updated_leads)} lead statuses to 'Outreach Composed'")
    except Exception as e:
        print(f"[Warning] Could not update lead statuses: {e}")


def _render_from_service_or_industry(lead, service_key, industry):
    services = load_service_templates()
    service_key_norm = _normalize(service_key)
    for key, entry in services.items():
        if _normalize(key) == service_key_norm:
            company = lead.get("company") or "your company"
            name = lead.get("name") or ""
            subject = (entry.get("subject") or "").replace("{company}", company)
            body = (entry.get("body") or "").replace("{company}", company).replace("{name}", name).replace(
                "{industry}", industry or "operational efficiency"
            )
            return subject, body

    template = get_template(industry)
    pain_points = ", ".join(lead.get("painPoints", ["AI automation"])[:2])
    subject = template["subject"].format(
        company=lead.get("company", "your company"),
        name=lead.get("name", "there"),
        industry=lead.get("industry", "your industry"),
    )
    body = template["body"].format(
        company=lead.get("company", "your company"),
        name=lead.get("name", "there"),
        industry=lead.get("industry", "your industry"),
        pain_points=pain_points,
    )
    return subject, body


def generate_outreach(leads, max_emails=20, status_filter="New", prefer_verified_only=True):
    """Generate outreach emails for leads. Returns (outreach_list, leads_processed)"""
    # Load sent log to avoid re-contact
    sent_log = load_sent_log()
    sent_emails = set(sent_log.keys())
    
    # Track companies already contacted (from sent_log)
    sent_companies = set()
    for entry in sent_log.values():
        company = _normalize(entry.get("company", ""))
        if company:
            sent_companies.add(company)
    
    # ALSO check latest_outreach.json queue to avoid re-queuing
    latest_outreach_path = PROJECT_ROOT / "data" / "outreach" / "latest_outreach.json"
    queued_emails = set()
    queued_companies = set()
    if latest_outreach_path.exists():
        try:
            with open(latest_outreach_path, "r", encoding="utf-8") as f:
                queued = json.load(f)
            for entry in queued:
                queued_emails.add(_normalize(entry.get("email", "")))
                queued_companies.add(_normalize(entry.get("company", "")))
        except Exception as e:
            print(f"[Warning] Could not load latest_outreach.json: {e}")
    
    # First pass: verified, non-duplicated leads
    verified_filtered = [
        l for l in leads
        if _normalize(l.get("status")) == _normalize(status_filter)
        and l.get("verified")
        and (_normalize(l.get("email","")) or "").strip()
        and _normalize(l.get("email","")) not in sent_emails
        and _normalize(l.get("company","")) not in sent_companies
        and _normalize(l.get("email","")) not in queued_emails
        and _normalize(l.get("company","")) not in queued_companies
    ]
    outreach: list[dict[str, Any]] = []
    processed_leads: list[dict[str, Any]] = []

    for lead in verified_filtered[:max_emails]:
        service_key = lead.get("service_key") or lead.get("industry") or ""
        industry = lead.get("industry") or lead.get("niche") or ""
        subject, body = _render_from_service_or_industry(lead, service_key, industry)
        outreach.append({
            "lead_id": lead.get("id") or lead.get("lead_id"),
            "company": lead.get("company"),
            "name": lead.get("name"),
            "email": lead.get("email"),
            "industry": industry,
            "subject": subject,
            "body": body,
            "score": lead.get("score"),
            "verified": lead.get("verified"),
            "generated_at": datetime.now().isoformat(),
        })
        processed_leads.append(lead)

    if len(outreach) >= max_emails:
        return outreach[:max_emails], processed_leads[:max_emails]
    remaining = max_emails - len(outreach)
    if not prefer_verified_only:
        unverified_filtered = [
            l for l in leads
            if _normalize(l.get("status")) == _normalize(status_filter)
            and _normalize(l.get("status")) == "new"
            and (_normalize(l.get("email","")) or "").strip()
            and _normalize(l.get("email","")) not in sent_emails
            and _normalize(l.get("company","")) not in sent_companies
            and _normalize(l.get("email","")) not in queued_emails
            and _normalize(l.get("company","")) not in queued_companies
        ]
        for lead in unverified_filtered[:remaining]:
            service_key = lead.get("service_key") or lead.get("industry") or ""
            industry = lead.get("industry") or lead.get("niche") or ""
            subject, body = _render_from_service_or_industry(lead, service_key, industry)
            outreach.append({
                "lead_id": lead.get("id") or lead.get("lead_id"),
                "company": lead.get("company"),
                "name": lead.get("name"),
                "email": lead.get("email"),
                "industry": industry,
                "subject": subject,
                "body": body,
                "score": lead.get("score"),
                "verified": lead.get("verified"),
                "generated_at": datetime.now().isoformat(),
            })
            processed_leads.append(lead)
        return outreach, processed_leads
    return outreach, processed_leads


def save_outreach(outreach):
    """Save outreach emails to file (append-safe for latest_outreach.json)"""
    output_dir = PROJECT_ROOT / "data" / "outreach"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Save timestamped batch backup (always the new batch, not appended)
    output_file = output_dir / f"outreach_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(output_file, 'w', encoding="utf-8") as f:
        json.dump(outreach, f, indent=2)
    
    # Append to canonical latest queue (preserve existing unsent items)
    latest_file = output_dir / "latest_outreach.json"
    existing = []
    if latest_file.exists():
        try:
            with open(latest_file, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            existing = []
    
    existing_emails = {_normalize(e.get("email", "")) for e in existing}
    new_entries = [e for e in outreach if _normalize(e.get("email", "")) not in existing_emails]
    combined = existing + new_entries
    
    with open(latest_file, 'w', encoding="utf-8") as f:
        json.dump(combined, f, indent=2)
    
    print(f"[Outreach] Appended {len(new_entries)} new emails to queue (total: {len(combined)})")
    print(f"[Outreach] Saved batch to {output_file}")
    print(f"[Outreach] Latest queue: {latest_file}")

def print_outreach(outreach):
    """Print outreach emails for review"""
    for i, email in enumerate(outreach, 1):
        print(f"\n{'='*60}")
        print(f"EMAIL #{i} | Score: {email['score']} | Verified: {email['verified']}")
        print(f"To: {email['name']} <{email['email']}>")
        print(f"Company: {email['company']} ({email['industry']})")
        print(f"Subject: {email['subject']}")
        print("-"*60)
        print(email['body'])

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Generate outreach emails for discovered leads")
    parser.add_argument("--max-emails", type=int, default=20, help="Maximum emails to generate")
    parser.add_argument("--status", default="New", help="Lead status filter")
    parser.add_argument("--dry-run", action="store_true", help="Print emails without saving")
    parser.add_argument("--save", action="store_true", help="Save to file (default)")
    parser.add_argument("--no-save", action="store_false", dest="save", help="Don't save to file")
    
    args = parser.parse_args()
    
    print("=" * 60)
    print("ZION TECH GROUP - AUTOMATED OUTREACH COMPOSER")
    print("=" * 60)
    
    leads = load_leads()
    print(f"[Outreach] Loaded {len(leads)} leads")
    
    outreach, processed_leads = generate_outreach(leads, max_emails=args.max_emails, status_filter=args.status)
    print(f"[Outreach] Generated {len(outreach)} outreach emails")
    
    if outreach:
        print_outreach(outreach)
        
        # Update lead statuses to "Outreach Composed"
        if not args.dry_run:
            update_lead_statuses(leads, processed_leads)
        
        if args.save and not args.dry_run:
            save_outreach(outreach)
    else:
        print("[Outreach] No leads matched criteria")

if __name__ == "__main__":
    main()
