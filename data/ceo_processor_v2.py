#!/usr/bin/env python3
"""CEO Email Processor v2 for Zion Tech Group.

Enhanced with: expanded classification, smarter skip logic, better reply
templates, draft mode, summary reports, retry with exponential backoff,
and token health checks.
"""

import json
import os
import re
import sys
import time
import urllib.request
import urllib.error
import urllib.parse
import base64
import datetime
import uuid

HOME = os.environ.get("HOME", "")
TOKEN_FILE = os.path.join(HOME, ".openclaw", "workspace", "gog_tokens.json")
LOG_FILE = os.path.join(HOME, "data", "ceo_processor.log")
STATE_FILE = os.path.join(HOME, "data", "ceo_state.json")
DRAFT_DIR = os.path.join(HOME, "data", "email_drafts")
TOKEN_REFRESH_URL = "https://oauth2.googleapis.com/token"

# Contact details
CEO_NAME = "Kleber Garcia Alcatrao"
COMPANY = "Zion Tech Group"
PHONE = "+1 302 464 0950"
EMAIL = "kleber@ziontechgroup.com"
WEBSITE = "https://ziontechgroup.com"
ADDRESS = "364 E Main St STE 1008, Middletown, DE 19709"

# ---------------------------------------------------------------------------
# Skip logic
# ---------------------------------------------------------------------------

SKIP_SENDERS = [
    "notifications@github.com",
    "mailer-daemon",
    "noreply",
    "no-reply",
    "github-actions",
    "dependabot",
]

SKIP_SUBJECTS = [
    "delivery status",
    "undeliverable",
]

SKIP_DOMAINS = [
    # Newsletter platforms
    "mailchimp.com",
    "substack.com",
    "medium.com",
    "linkedin.com",
    # Procurement / alerts
    "licitacoes",
    "comprasnet",
    "gov.br",
    # Bank / finance notifications
    "portobank",
    "shell.com",
    "prudential.com",
    "capitalone",
    "chase.com",
    "bankofamerica",
    # Legal notices
    "serasa.com.br",
    "cnpj.com",
    "sintegra",
    "junta",
    # Ranking / SEO reports
    "wincher.com",
    "similarweb.com",
    "semrush",
    "ahrefs",
    "moz.com",
]

SKIP_KEYWORDS = [
    # Newsletter
    "unsubscribe",
    "newsletter",
    "daily digest",
    "weekly digest",
    "monthly digest",
    "this week in",
    "top stories",
    "edition #",
    "vol.",
    "no.",
    # Procurement
    "licitacao",
    "pregao",
    "edital",
    "public tender",
    "bid alert",
    "procurement alert",
    # Bank / finance
    "transaction alert",
    "payment confirmation",
    "bank statement",
    "credit card statement",
    "your bill is ready",
    "account notification",
    "deposit notification",
    # Legal / compliance
    "credit score update",
    "cnpj status",
    "cnpj consultation",
    "legal notice",
    "court notice",
    "regulatory update",
    # SEO / ranking
    "seo report",
    "ranking report",
    "search visibility",
    "keyword tracking",
    "backlink report",
    "domain authority",
    # Other auto
    "automated message",
    "do not reply",
    "no reply",
    "this is an automated",
    "out of office",
    "auto-reply",
]


# ---------------------------------------------------------------------------
# Expanded classification rules (order matters -- first match wins)
# ---------------------------------------------------------------------------

CLASSIFICATION_RULES = [
    # Spam indicators (check first to avoid false positives)
    ("spam", [
        "you won", "congratulations!", "claim your prize", "lottery",
        "nigerian prince", "wire transfer", "bank account to receive",
        "mlm", "pyramid", "multi-level marketing",
    ]),
    # Legal
    ("legal", [
        "lawsuit", "legal action", "attorney", "counsel", "compliance",
        "regulatory", "gdpr", "data protection", "intellectual property",
        "trademark", "patent", "cease and desist", "settlement",
        "nda", "non-disclosure", "contract review",
    ]),
    # Accounting / finance (non-automated)
    ("accounting", [
        "tax filing", "audit", "financial statement", "bookkeeping",
        "accounts payable", "accounts receivable", "payroll",
        "expense report", "budget review", "quarterly earnings",
        "fiscal year", "tax season",
    ]),
    # Partnership (moved up for priority)
    ("partnership", [
        "partnership", "partner", "collaborate", "joint venture",
        "resell", "affiliate program", "distributor", "referral program",
        "white label", "reseller", "channel partner", "strategic alliance",
        "co-marketing", "co-sell",
    ]),
    # Sales inquiries
    ("sales", [
        "buy", "purchase", "order", "quote", "pricing", "cost",
        "how much", "proposal", "rfq", "demo", "trial",
        "request for quotation", "price list", "catalog",
        "bulk order", "reseller pricing",
    ]),
    # Procurement (human-sent, not automated)
    ("procurement", [
        "rfp", "request for proposal", "vendor registration",
        "supplier qualification", "supply chain", "sourcing",
        "procurement", "purchase order",
    ]),
    # Hiring / recruiting
    ("hiring", [
        "hiring", "recruit", "talent", "join our", "we are hiring",
        "job opening", "career opportunity", "headhunter",
        "we're hiring", "position available",
    ]),
    # Support / help
    ("support", [
        "support", "help desk", "issue", "bug", "broken", "error",
        "problem", "complaint", "not working", "troubleshoot",
        "ticket", "service request",
    ]),
    # Billing (human-sent)
    ("billing", [
        "invoice", "payment", "billing", "receipt", "charge",
        "subscription", "overdue", "past due", "collections",
    ]),
    # Meeting / scheduling
    ("meeting", [
        "meeting", "schedule a call", "zoom call", "teams call",
        "book a call", "catch up", "sync up", "1:1 meeting",
        "calendar invite", "availability",
    ]),
    # Personal
    ("personal", [
        "birthday", "wedding", "congratulations on", "condolences",
        "personal note", "family", "fwd: personal",
    ]),
    # Newsletter (human-sent but newsletter-like)
    ("newsletter", [
        "newsletter", "digest", "weekly roundup", "industry update",
        "market insights", "thought leadership",
    ]),
]


# ---------------------------------------------------------------------------
# Enhanced reply templates (more specific, qualifying questions)
# ---------------------------------------------------------------------------

REPLIES = {
    "partnership": """Dear {sender_name},

Thank you for reaching out regarding a potential partnership with Zion Tech Group. We're always interested in exploring strategic alliances that create mutual value.

To better understand how we might collaborate, could you share a bit more about:

1. What specific platform, product, or service you'd like to partner on?
2. What does your ideal partnership structure look like -- white-label, co-marketing, referral, or something else?
3. Who is your target market, and what regions do you primarily serve?
4. Do you have any case studies or reference clients we could review?

Once I have a clearer picture of your proposal, I'd love to schedule a call to discuss next steps. Would you be available sometime next week?

Looking forward to exploring this further.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "sales": """Dear {sender_name},

Thank you for your interest in Zion Tech Group's products and services. We appreciate you reaching out to us.

To make sure we connect you with the right specialist and provide the most relevant information, could you help me understand a few details:

1. What specific solution or product are you most interested in?
2. What's the size of your organization (number of employees/users)?
3. Do you have a preferred timeline for implementation?
4. Have you worked with a similar platform before, or is this a new initiative?
5. Is there a budget range you're working with for this project?

I'll make sure one of our solutions specialists follows up with tailored information based on your specific needs.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "hiring": """Dear {sender_name},

Thank you for your interest in joining Zion Tech Group. We're always on the lookout for talented individuals who share our passion for technology and innovation.

To help our team review your profile efficiently, could you:

1. Send your resume or portfolio to {email}?
2. Let us know what type of role interests you most (engineering, operations, sales, etc.)?
3. Indicate whether you're open to remote work, hybrid, or on-site at our Delaware office?

Our HR team reviews all submissions regularly and will reach out if there's a match with our current or upcoming openings. Even if we don't have an immediate fit, we keep promising profiles on file for future opportunities.

We appreciate your interest in being part of the Zion Tech Group team.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "support": """Dear {sender_name},

Thank you for bringing this to our attention. We take all support matters seriously and want to ensure your issue is resolved as quickly as possible.

I've forwarded your message to our support team for immediate review. To help us resolve this faster, please include:

1. Your account or customer ID (if applicable)
2. A brief description of the steps that led to the issue
3. Any error messages you've encountered

Someone from our team will follow up within 24 hours. If this is urgent, please don't hesitate to call us directly at {phone}.

We appreciate your patience and are committed to making this right.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "billing": """Dear {sender_name},

Thank you for your message regarding billing. I've directed this to our finance team for review.

To help us resolve this as quickly as possible, please include any of the following that apply:

1. Account number or customer ID
2. Invoice number(s) in question
3. A brief description of the discrepancy (if any)
4. Preferred resolution method (refund, credit, correction, etc.)

Our finance team typically responds within 1-2 business days. If this is time-sensitive, feel free to call us directly at {phone} and reference this email.

We'll get back to you shortly with a detailed response.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "meeting": """Dear {sender_name},

Thank you for your meeting request. I'd be happy to connect with you.

To help us find the right time, could you share:

1. A few time slots that work for you over the next two weeks
2. Your preferred platform (Zoom, Google Meet, Microsoft Teams, or a simple phone call)
3. The general topic or agenda you'd like to cover -- this will help me prepare

I'll confirm the details once we align on a time that works for both of us.

Looking forward to our conversation.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "legal": """Dear {sender_name},

Thank you for reaching out regarding a legal matter. Given the nature of your message, I've flagged it for priority review.

To ensure we address this appropriately and promptly, could you clarify:

1. The specific legal matter or concern this relates to
2. Whether this involves an existing contract, agreement, or new matter
3. Any relevant deadlines or filing dates
4. The preferred method for our legal team to follow up (email or phone)

Our legal team will review this and respond within 1-2 business days. If this is urgent, please call us directly at {phone}.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "accounting": """Dear {sender_name},

Thank you for your message regarding accounting matters. I've forwarded this to our finance and accounting team for review.

To help us address this efficiently, please include:

1. The specific period or tax year in question
2. Any relevant account numbers, invoice references, or document IDs
3. A brief description of what you need (report, reconciliation, filing, etc.)
4. Any applicable deadlines we should be aware of

Our accounting team will follow up within 1-2 business days. For urgent matters, please call us at {phone}.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "procurement": """Dear {sender_name},

Thank you for reaching out regarding procurement opportunities. We're interested in learning more about your requirements.

To help us prepare an appropriate response, could you share:

1. The specific products, services, or solutions you're sourcing
2. The scope and scale of the project
3. Key deadlines (RFP submission, decision date, project start)
4. Any specific qualifications or certifications required
5. The procurement process and evaluation criteria

We'll review your requirements and respond promptly with our capabilities and relevant experience.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "newsletter": """Dear {sender_name},

Thank you for sharing this newsletter with us. We appreciate being included in your distribution.

We'll review the content and reach out if there's anything we'd like to discuss further.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "personal": """Dear {sender_name},

Thank you for your personal message. I appreciate you thinking of me.

I'll review this and respond personally as soon as I can.

Warm regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",

    "spam": None,  # No reply for spam

    "general": """Dear {sender_name},

Thank you for reaching out to Zion Tech Group. I appreciate you taking the time to contact me.

Your message has been received and will be reviewed. If it requires a more detailed response, I'll get back to you personally. Otherwise, a member of our team may follow up with you directly.

Thank you for your interest in Zion Tech Group.

Best regards,
{ceo_name}
{company}
{phone}
{email}
{website}
{address}""",
}


# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------

def log(msg):
    ts = datetime.datetime.now().isoformat()
    line = f"[{ts}] {msg}"
    print(line)
    with open(LOG_FILE, "a") as f:
        f.write(line + "\n")


# ---------------------------------------------------------------------------
# Token health check & auto-refresh
# ---------------------------------------------------------------------------

def check_token_health(tokens):
    """Check if the access token is still valid. Auto-refresh if expired.

    Returns (access_token, refreshed: bool).
    """
    access_token = tokens.get("access_token", "")
    expiry_str = tokens.get("expiry", "")
    refresh_token = tokens.get("refresh_token", "")

    is_expired = False
    if expiry_str:
        try:
            expiry_dt = datetime.datetime.fromisoformat(expiry_str.replace("Z", "+00:00"))
            now = datetime.datetime.now(datetime.timezone.utc)
            if now >= expiry_dt - datetime.timedelta(minutes=5):
                is_expired = True
        except (ValueError, TypeError):
            is_expired = True
    else:
        # No expiry info -- do a lightweight test
        test_url = "https://gmail.googleapis.com/gmail/v1/users/me/profile"
        resp = api_request(test_url, token=access_token)
        if "_error" in resp and resp.get("status") in (401, 403):
            is_expired = True
        else:
            is_expired = False

    if not is_expired:
        log("Token health check: OK")
        return access_token, False

    # Token expired -- attempt refresh
    log("Token health check: EXPIRED -- attempting refresh...")
    if not refresh_token:
        log("ERROR: No refresh token available. Cannot auto-refresh.")
        return access_token, False

    client_id = tokens.get("client_id", "")
    client_secret = tokens.get("client_secret", "")

    if not client_id or not client_secret:
        log("ERROR: Missing client_id/client_secret for token refresh.")
        return access_token, False

    refresh_data = urllib.parse.urlencode({
        "client_id": client_id,
        "client_secret": client_secret,
        "refresh_token": refresh_token,
        "grant_type": "refresh_token",
    }).encode("utf-8")

    req = urllib.request.Request(TOKEN_REFRESH_URL, method="POST", data=refresh_data)
    req.add_header("Content-Type", "application/x-www-form-urlencoded")

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read().decode("utf-8")
            new_tokens = json.loads(body)
    except Exception as e:
        log(f"ERROR: Token refresh failed: {e}")
        return access_token, False

    new_access_token = new_tokens.get("access_token", "")
    expires_in = new_tokens.get("expires_in", 3600)
    new_expiry = (
        datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(seconds=expires_in)
    ).isoformat()

    # Update tokens file
    tokens["access_token"] = new_access_token
    tokens["expiry"] = new_expiry
    with open(TOKEN_FILE, "w") as f:
        json.dump(tokens, f, indent=2)

    log(f"Token refreshed successfully. New expiry: {new_expiry}")
    return new_access_token, True


# ---------------------------------------------------------------------------
# Retry logic with exponential backoff
# ---------------------------------------------------------------------------

def api_request(url, method="GET", data=None, token=None, headers=None,
                max_retries=3, base_delay=1.0):
    """Make an API request with exponential backoff on failure."""
    last_error = None
    for attempt in range(max_retries + 1):
        req = urllib.request.Request(url, method=method)
        if token:
            req.add_header("Authorization", f"Bearer {token}")
        req.add_header("Content-Type", "application/json")
        if headers:
            for k, v in headers.items():
                req.add_header(k, v)
        if data:
            req.data = json.dumps(data).encode("utf-8")
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                body = resp.read().decode("utf-8")
                return json.loads(body) if body else {}
        except urllib.error.HTTPError as e:
            err_body = e.read().decode("utf-8", errors="replace")
            last_error = {"_error": True, "status": e.code, "body": err_body}

            # Don't retry on client errors (except 429 rate limit)
            if e.code in (400, 401, 403, 404) and e.code != 429:
                log(f"HTTPError {e.code} for {url} (non-retryable): {err_body}")
                return last_error

            if attempt < max_retries:
                delay = base_delay * (2 ** attempt)
                if e.code == 429:
                    delay = max(delay, 5.0)
                log(f"HTTPError {e.code} for {url} (attempt {attempt+1}/{max_retries+1}), "
                    f"retrying in {delay:.1f}s...")
                time.sleep(delay)
            else:
                log(f"HTTPError {e.code} for {url} after {max_retries+1} attempts: {err_body}")

        except Exception as e:
            last_error = {"_error": True, "error": str(e)}
            if attempt < max_retries:
                delay = base_delay * (2 ** attempt)
                log(f"Exception for {url} (attempt {attempt+1}/{max_retries+1}): {e}, "
                    f"retrying in {delay:.1f}s...")
                time.sleep(delay)
            else:
                log(f"Exception for {url} after {max_retries+1} attempts: {e}")

    return last_error


# ---------------------------------------------------------------------------
# Token loading
# ---------------------------------------------------------------------------

def load_tokens():
    with open(TOKEN_FILE) as f:
        return json.load(f)


# ---------------------------------------------------------------------------
# Classification (expanded)
# ---------------------------------------------------------------------------

def classify_email(subject, sender, body_text=""):
    """Classify an email into an intent category.

    Returns one of: spam, legal, accounting, partnership, sales, procurement,
    hiring, support, billing, meeting, personal, newsletter, general, or skip.
    """
    combined = (subject + " " + sender + " " + body_text).lower()
    sender_lower = sender.lower()
    subject_lower = subject.lower()

    # Check skip rules -- sender patterns
    for s in SKIP_SENDERS:
        if s in sender_lower:
            return "skip"

    # Check skip rules -- subject patterns
    for s in SKIP_SUBJECTS:
        if s in subject_lower:
            return "skip"

    # Check skip rules -- domain patterns
    for domain in SKIP_DOMAINS:
        if domain in sender_lower:
            return "skip"

    # Check skip rules -- keyword patterns
    for kw in SKIP_KEYWORDS:
        if kw in combined:
            return "skip"

    # Classify by intent (first match wins)
    for category, keywords in CLASSIFICATION_RULES:
        for kw in keywords:
            if kw in combined:
                return category

    return "general"


# ---------------------------------------------------------------------------
# Sender name extraction
# ---------------------------------------------------------------------------

def extract_sender_name(from_header):
    """Extract a friendly name from the From header."""
    m = re.match(r"^([^<]+)", from_header)
    if m:
        name = m.group(1).strip().strip('"')
        if name:
            return name
    m2 = re.match(r"<([^>]+)>", from_header)
    if m2:
        return m2.group(1).split("@")[0].replace(".", " ").title()
    return from_header.split("@")[0] if "@" in from_header else from_header


def get_header(payload, name):
    headers = payload.get("headers", [])
    for h in headers:
        if h["name"].lower() == name.lower():
            return h["value"]
    return ""


# ---------------------------------------------------------------------------
# Label management
# ---------------------------------------------------------------------------

def ensure_label_exists(token, label_name):
    """Check if a label exists, create it if not. Returns label ID."""
    url = "https://gmail.googleapis.com/gmail/v1/users/me/labels"
    resp = api_request(url, token=token)
    if "_error" in resp:
        log(f"Error listing labels: {resp}")
        return None
    for label in resp.get("labels", []):
        if label["name"] == label_name:
            return label["id"]
    create_url = "https://gmail.googleapis.com/gmail/v1/users/me/labels"
    create_data = {
        "name": label_name,
        "labelListVisibility": "labelShow",
        "messageListVisibility": "show",
    }
    create_resp = api_request(create_url, method="POST", data=create_data, token=token)
    if "_error" in create_resp:
        log(f"Error creating label '{label_name}': {create_resp}")
        return None
    label_id = create_resp.get("id")
    log(f"Created label '{label_name}' with ID {label_id}")
    return label_id


# ---------------------------------------------------------------------------
# Send reply
# ---------------------------------------------------------------------------

def send_reply(token, to_addr, subject, body_text, thread_id):
    """Send a reply via Gmail API."""
    reply_subject = subject if subject.startswith("Re:") else f"Re: {subject}"
    message = f"Subject: {reply_subject}\r\n"
    message += f"To: {to_addr}\r\n"
    message += f"From: {EMAIL}\r\n"
    message += f"Content-Type: text/plain; charset=\"utf-8\"\r\n"
    message += f"\r\n{body_text}\r\n"

    raw = base64.urlsafe_b64encode(message.encode("utf-8")).decode("utf-8")
    url = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send"
    data = {"raw": raw, "threadId": thread_id}
    resp = api_request(url, method="POST", data=data, token=token)
    return resp


def modify_message(token, msg_id, add_labels=None, remove_labels=None):
    """Modify message labels."""
    url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}/modify"
    body = {}
    if add_labels:
        body["addLabelIds"] = add_labels
    if remove_labels:
        body["removeLabelIds"] = remove_labels
    resp = api_request(url, method="POST", data=body, token=token)
    return resp


# ---------------------------------------------------------------------------
# Draft mode
# ---------------------------------------------------------------------------

def save_draft(msg_id, sender_email, sender_name, subject, classification, reply_body):
    """Save a reply draft to ~/data/email_drafts/ as JSON for human review."""
    os.makedirs(DRAFT_DIR, exist_ok=True)
    draft = {
        "draft_id": str(uuid.uuid4()),
        "msg_id": msg_id,
        "sender_email": sender_email,
        "sender_name": sender_name,
        "subject": subject,
        "classification": classification,
        "reply_body": reply_body,
        "created_at": datetime.datetime.now().isoformat(),
        "status": "pending_review",
    }
    filename = f"draft_{msg_id}_{int(time.time())}.json"
    filepath = os.path.join(DRAFT_DIR, filename)
    with open(filepath, "w") as f:
        json.dump(draft, f, indent=2)
    log(f"  -> Draft saved to {filepath}")
    return filepath


# ---------------------------------------------------------------------------
# Summary report
# ---------------------------------------------------------------------------

def print_summary_report(results):
    """Print a detailed summary report of the processing run."""
    log("\n" + "=" * 60)
    log("PROCESSING COMPLETE -- SUMMARY REPORT")
    log("=" * 60)
    log(f"  Total scanned:  {results['total_scanned']}")
    log(f"  Replied:        {results['replied']}")
    log(f"  Skipped:        {results['skipped']}")
    log(f"  Errors:         {results['errors']}")
    log(f"  Drafts saved:   {results['drafts_saved']}")

    # Breakdown by classification
    if results["by_classification"]:
        log("\n  Breakdown by classification:")
        for cat, count in sorted(results["by_classification"].items(), key=lambda x: -x[1]):
            log(f"    {cat:20s} {count}")

    # Breakdown by skip reason
    if results["skip_reasons"]:
        log("\n  Skip reasons:")
        for reason, count in sorted(results["skip_reasons"].items(), key=lambda x: -x[1]):
            log(f"    {reason:30s} {count}")

    log("=" * 60)

    if results["replied_emails"]:
        log("\nReplied emails:")
        for e in results["replied_emails"]:
            log(f"  [{e['classification']}] {e['from']} -- {e['subject']}")

    if results["skipped_emails"]:
        log("\nSkipped emails:")
        for e in results["skipped_emails"]:
            log(f"  [{e.get('skip_reason', 'unknown')}] {e['from']} -- {e['subject']}")

    if results["error_details"]:
        log("\nErrors:")
        for e in results["error_details"]:
            log(f"  {e.get('from', e['id'])} -- {e.get('error', 'unknown')}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    dry_run = "--dry-run" in sys.argv
    draft_mode = "--draft" in sys.argv

    log("=" * 60)
    log("CEO Email Processor v2 started")
    if dry_run:
        log("  *** DRY RUN MODE -- no emails will be sent ***")
    if draft_mode:
        log("  *** DRAFT MODE -- replies saved for review ***")
    log("=" * 60)

    # Load tokens
    try:
        tokens = load_tokens()
    except Exception as e:
        log(f"FATAL: Could not load tokens: {e}")
        sys.exit(1)

    # Token health check & auto-refresh
    access_token, was_refreshed = check_token_health(tokens)
    if was_refreshed:
        log("Token was auto-refreshed before processing.")

    # Ensure CEO-Replied label exists
    ceo_label_id = ensure_label_exists(access_token, "CEO-Replied")
    if ceo_label_id:
        log(f"CEO-Replied label ID: {ceo_label_id}")
    else:
        log("WARNING: Could not ensure CEO-Replied label exists")

    # Fetch unread inbox messages
    list_url = "https://gmail.googleapis.com/gmail/v1/users/me/messages?labelIds=INBOX&labelIds=UNREAD&maxResults=50"
    list_resp = api_request(list_url, token=access_token)

    if "_error" in list_resp:
        log(f"FATAL: Could not list messages: {list_resp}")
        sys.exit(1)

    messages = list_resp.get("messages", [])
    total = len(messages)
    log(f"Found {total} unread messages in inbox")

    if total == 0:
        log("No unread messages to process.")
        state = {
            "run_time": datetime.datetime.now().isoformat(),
            "total_scanned": 0,
            "replied": 0,
            "skipped": 0,
            "errors": 0,
            "drafts_saved": 0,
            "replied_emails": [],
            "by_classification": {},
            "skip_reasons": {},
        }
        with open(STATE_FILE, "w") as f:
            json.dump(state, f, indent=2)
        log("State saved. Done.")
        return

    results = {
        "total_scanned": total,
        "replied": 0,
        "skipped": 0,
        "errors": 0,
        "drafts_saved": 0,
        "replied_emails": [],
        "skipped_emails": [],
        "error_details": [],
        "by_classification": {},
        "skip_reasons": {},
    }

    for i, msg_ref in enumerate(messages):
        msg_id = msg_ref["id"]
        thread_id = msg_ref.get("threadId", "")
        log(f"\n--- Processing message {i+1}/{total} (ID: {msg_id}) ---")

        # Get full message
        msg_url = (f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}"
                   f"?format=metadata&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=Date")
        msg_data = api_request(msg_url, token=access_token)

        if "_error" in msg_data:
            log(f"ERROR: Could not fetch message {msg_id}: {msg_data}")
            results["errors"] += 1
            results["error_details"].append({"id": msg_id, "error": str(msg_data)})
            continue

        payload = msg_data.get("payload", {})
        subject = get_header(payload, "Subject") or "(No Subject)"
        from_header = get_header(payload, "From") or "(Unknown Sender)"
        date_header = get_header(payload, "Date") or "(No Date)"

        # Extract sender email
        email_match = re.search(r"<([^>]+)>", from_header)
        sender_email = email_match.group(1) if email_match else from_header
        sender_name = extract_sender_name(from_header)

        log(f"  From: {from_header}")
        log(f"  Subject: {subject}")
        log(f"  Date: {date_header}")

        # Classify
        classification = classify_email(subject, from_header)
        log(f"  Classification: {classification}")

        # Track classification
        results["by_classification"][classification] = results["by_classification"].get(classification, 0) + 1

        if classification == "skip":
            log(f"  -> SKIPPED (auto/system sender)")
            results["skipped"] += 1
            results["skip_reasons"]["auto/system sender"] = results["skip_reasons"].get("auto/system sender", 0) + 1
            results["skipped_emails"].append({
                "id": msg_id,
                "from": from_header,
                "subject": subject,
                "skip_reason": "auto/system sender",
            })
            if not dry_run and ceo_label_id:
                modify_message(access_token, msg_id, remove_labels=["UNREAD"])
            continue

        if classification == "spam":
            log(f"  -> SKIPPED (spam detected)")
            results["skipped"] += 1
            results["skip_reasons"]["spam"] = results["skip_reasons"].get("spam", 0) + 1
            results["skipped_emails"].append({
                "id": msg_id,
                "from": from_header,
                "subject": subject,
                "skip_reason": "spam",
            })
            continue

        # Generate reply
        reply_template = REPLIES.get(classification, REPLIES["general"])
        if reply_template is None:
            # No reply for this category (e.g. spam)
            log(f"  -> No reply template for classification '{classification}', skipping.")
            results["skipped"] += 1
            results["skip_reasons"][f"no_template:{classification}"] = \
                results["skip_reasons"].get(f"no_template:{classification}", 0) + 1
            continue

        reply_body = reply_template.format(
            sender_name=sender_name,
            ceo_name=CEO_NAME,
            company=COMPANY,
            phone=PHONE,
            email=EMAIL,
            website=WEBSITE,
            address=ADDRESS,
        )

        # Draft mode: save to file instead of sending
        if draft_mode:
            draft_path = save_draft(msg_id, sender_email, sender_name, subject, classification, reply_body)
            results["drafts_saved"] += 1
            results["replied"] += 1
            results["replied_emails"].append({
                "id": msg_id,
                "thread_id": thread_id,
                "from": from_header,
                "subject": subject,
                "date": date_header,
                "classification": classification,
                "draft_path": draft_path,
            })
            continue

        # Dry run: log but don't send
        if dry_run:
            log(f"  -> [DRY RUN] Would send reply to {sender_email}")
            log(f"  -> [DRY RUN] Reply preview (first 200 chars):")
            for line in reply_body[:200].split("\n"):
                log(f"      {line}")
            results["replied"] += 1
            results["replied_emails"].append({
                "id": msg_id,
                "thread_id": thread_id,
                "from": from_header,
                "subject": subject,
                "date": date_header,
                "classification": classification,
                "dry_run": True,
            })
            continue

        # Send reply
        log(f"  -> Sending reply to {sender_email}...")
        send_resp = send_reply(access_token, sender_email, subject, reply_body, thread_id)

        if "_error" in send_resp:
            log(f"  ERROR sending reply: {send_resp}")
            results["errors"] += 1
            results["error_details"].append({
                "id": msg_id,
                "from": from_header,
                "subject": subject,
                "error": str(send_resp),
            })
            continue

        sent_id = send_resp.get("id", "unknown")
        log(f"  -> Reply sent successfully (Sent ID: {sent_id})")

        # Label and mark as read
        if ceo_label_id:
            mod_resp = modify_message(
                access_token, msg_id,
                add_labels=[ceo_label_id],
                remove_labels=["UNREAD"],
            )
            if "_error" in mod_resp:
                log(f"  WARNING: Could not label/mark read: {mod_resp}")
            else:
                log(f"  -> Labeled 'CEO-Replied' and marked as read")

        results["replied"] += 1
        results["replied_emails"].append({
            "id": msg_id,
            "thread_id": thread_id,
            "from": from_header,
            "subject": subject,
            "date": date_header,
            "classification": classification,
            "sent_id": sent_id,
        })

        # Small delay to avoid rate limiting
        time.sleep(0.5)

    # Save state
    state = {
        "run_time": datetime.datetime.now().isoformat(),
        **results,
    }
    with open(STATE_FILE, "w") as f:
        json.dump(state, f, indent=2)

    # Print summary report
    print_summary_report(results)

    return results


if __name__ == "__main__":
    main()
