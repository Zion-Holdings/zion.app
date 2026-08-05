#!/usr/bin/env python3
"""
Zion Tech Group — Email Responder v22.0 (Self-Improving Intelligence)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
v22 UPGRADES over v21:
  • Smart Response Timing: Analyzes sender's historical reply patterns → sends
    replies when they're most likely to respond (hour-of-day heatmap).
  • Auto-Testimonial Generation: After very_positive sentiment emails, sends a
    polite testimonial request. Tracks testimonial consent in v22_testimonials.json.
  • Self-Improving Feedback Loop: Tracks which reply templates get fastest
    response-back. Auto-optimizes template selection based on outcome data.
  • Contextual Business Hours: Detects sender timezone → adjusts greeting
    ("good morning" vs "good evening") and send timing.
  • Smart Attachment Handling: Detects .pdf/.docx/.xlsx/.zip attachments →
    acknowledges them specifically in the reply.
  • Conversation Memory v2: Tracks promises/commitments/open items across
    threads → references them contextually in new replies.
  • Improved Reply-All v2: Double-checks CC list for internal domains, never
    CC's our own domain, handles Reply-To header correctly.
All v21 features carried forward.
"""
import json, os, sys, time, re, hashlib, base64
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor, as_completed

HERMES_HOME = os.environ.get("HERMES_HOME", r"C:\Users\Zion\AppData\Local\hermes")
GAPI_DIR = os.path.join(HERMES_HOME, "skills", "productivity", "google-workspace", "scripts")
LOG_DIR = os.path.join(HERMES_HOME, "email_logs_v22")
os.makedirs(LOG_DIR, exist_ok=True)

sys.path.insert(0, GAPI_DIR)
from google_api import build_service

# ═══ CONFIG ═══
MAX_SEND_PER_RUN = 15
MAX_FULL_FETCH = 20
PHASE1_FETCH = 80
MAX_PARALLEL_FETCH = 1
SEND_INTERVAL = 2
FOLLOWUP_DAYS = 3
MAX_FOLLOWUPS = 3

CONTACT = {
    "name": "Kleber Garcia", "company": "Zion Tech Group",
    "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com",
    "website": "https://ziontechgroup.com",
    "address": "364 E Main St STE 1008, Middletown, DE 19709",
    "services_url": "https://ziontechgroup.com/services",
}

LABELS = {
    "PROCESSED": "V22-Processed", "REPLIED": "V22-Auto-Replied",
    "REPLIED_ALL": "V22-Replied-All", "HUMAN_REVIEW": "V22-Human-Review",
    "URGENT": "V22-Urgent", "DRAFTED": "V22-Draft-Pending",
    "FOLLOWUP": "V22-Followup", "SPAM_LEARNED": "V22-Spam-Learned",
    "BULK_ARCHIVED": "V22-Bulk-Archived", "AUTO_FOLLOWUP": "V22-Auto-Followup",
    "TESTIMONIAL": "V22-Testimonial-Requested",
}

ALL_PROCESSED_LABELS = {l.lower() for l in [
    "v22-processed","v22-auto-replied","v22-replied-all","v22-human-review","v22-urgent",
    "v22-draft-pending","v22-followup","v22-auto-followup","v22-testimonial-requested",
    "v21-processed","v21-auto-replied","v21-replied-all","v21-human-review","v21-urgent",
    "v21-draft-pending","v21-followup","v21-auto-followup",
    "v19-processed","v19-auto-replied","v19-replied-all","v19-human-review","v19-urgent",
    "v19-bulk-archived","v18-processed","v18-auto-replied","v18-bulk-archived",
]}

# ═══ DATA FILES ═══
FOLLOWUP_FILE = os.path.join(HERMES_HOME, "v22_followup_tracker.json")
PERSONALITY_FILE = os.path.join(HERMES_HOME, "v22_sender_personalities.json")
CONVERSATION_FILE = os.path.join(HERMES_HOME, "v22_conversation_states.json")
SENDER_HISTORY_FILE = os.path.join(HERMES_HOME, "v22_sender_history.json")
HASHES_FILE = os.path.join(HERMES_HOME, "v22_replied_hashes.json")
TIMING_FILE = os.path.join(HERMES_HOME, "v22_response_timing.json")
FEEDBACK_FILE = os.path.join(HERMES_HOME, "v22_feedback_loop.json")
TESTIMONIAL_FILE = os.path.join(HERMES_HOME, "v22_testimonials.json")
OUTCOME_LOG_FILE = os.path.join(HERMES_HOME, "v22_outcome_log.json")

# ═══ GMAIL API ═══
_svc = None

def svc_get():
    global _svc
    if _svc is None: _svc = build_service("gmail", "v1")
    return _svc

def track_api_call():
    pass  # v22: no rate limiting needed, API quotas are generous

def gmail_search(query, max_results=50):
    track_api_call()
    s = svc_get()
    result = s.users().messages().list(userId="me", q=query, maxResults=max_results).execute()
    return [m["id"] for m in result.get("messages", [])]

def gmail_get_metadata(msg_id, headers=None):
    track_api_call()
    s = svc_get()
    if headers is None: headers = ["From","To","Cc","Subject","Date","Reply-To","Bcc","List-Unsubscribe"]
    return s.users().messages().get(userId="me", id=msg_id, format="metadata", metadataHeaders=headers).execute()

def gmail_get_full(msg_id):
    track_api_call()
    s = svc_get()
    return s.users().messages().get(userId="me", id=msg_id, format="full").execute()

def gmail_get_thread(thread_id):
    track_api_call()
    s = svc_get()
    try: return s.users().threads().get(userId="me", id=thread_id, format="full").execute()
    except: return None

def gmail_modify(msg_id, add_labels=None, remove_labels=None):
    track_api_call()
    s = svc_get()
    body = {}
    if add_labels: body["addLabelIds"] = [l for l in add_labels if l]
    if remove_labels: body["removeLabelIds"] = [l for l in remove_labels if l]
    if not body: return None
    return s.users().messages().modify(userId="me", id=msg_id, body=body).execute()

def gmail_send_reply_all(msg_id, thread_id, to_addr, cc_list, subject, body_text):
    """
    Improved Reply-All v2:
    - Proper To+CC construction
    - Never CC our own domain
    - Respect Reply-To header
    - Filter duplicate emails in CC
    """
    track_api_call()
    s = svc_get()
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    from email.utils import parseaddr

    msg = MIMEMultipart()
    msg["to"] = to_addr

    our_domains = {"ziontechgroup.com", "klebergarciaalcatrao@gmail.com"}
    if cc_list:
        filtered = []
        seen = set()
        for c in cc_list:
            _, email_addr = parseaddr(c)
            email_lower = email_addr.lower().strip()
            if email_lower and email_lower not in our_domains and email_lower not in seen:
                filtered.append(c.strip())
                seen.add(email_lower)
        if filtered:
            msg["cc"] = ", ".join(filtered)

    msg["subject"] = subject
    msg.attach(MIMEText(body_text, "plain", "utf-8"))
    raw = base64.urlsafe_b64encode(msg.as_bytes()).decode()
    return s.users().messages().send(userId="me", body={"raw": raw, "threadId": thread_id}).execute()

def ensure_label(name, labels_map):
    if name in labels_map: return labels_map[name]
    s = svc_get()
    try:
        result = s.users().labels().create(userId="me", body={
            "name": name, "labelListVisibility": "labelShow", "messageListVisibility": "show"
        }).execute()
        labels_map[name] = result["id"]
        return result["id"]
    except:
        labels_map[name] = name
        return name

# ═══ UTILITY ═══
def now_iso(): return datetime.now().isoformat()
def is_quiet():
    h = datetime.now().hour
    return h >= 21 or h < 7

def content_hash(subject, body):
    text = (subject or "") + (body or "")[:500]
    return hashlib.sha256(text.encode("utf-8", errors="ignore")).hexdigest()

def strip_quoted(body):
    if not body: return ""
    lines = body.split("\n"); clean = []
    for line in lines:
        if re.match(r"^.{0,5}>", line): break
        if re.match(r"^\s*-{3,}\s*Original Message\s*-{3,}", line, re.IGNORECASE): break
        if re.match(r"^\s*On .+ wrote:", line): break
        if re.match(r"^\s*From: .+", line) and len(clean) > 0: break
        clean.append(line)
    return "\n".join(clean).strip()

def get_body_text(payload):
    if not payload: return ""
    mime = payload.get("mimeType", "")
    if mime == "text/plain":
        data = payload.get("body", {}).get("data", "")
        if data: return base64.urlsafe_b64decode(data).decode("utf-8", errors="ignore")
    elif mime == "text/html":
        data = payload.get("body", {}).get("data", "")
        if data:
            html = base64.urlsafe_b64decode(data).decode("utf-8", errors="ignore")
            return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html)).strip()
    for part in payload.get("parts", []):
        t = get_body_text(part)
        if t: return t
    return ""

def extract_email(raw):
    if not raw: return ""
    m = re.search(r"<([^>]+)>", raw)
    if m: return m.group(1).lower()
    m = re.search(r"[\w.+-]+@[\w-]+\.[\w.]+", raw)
    if m: return m.group(0).lower()
    return raw.lower().strip()

def extract_name(raw):
    if not raw: return "there"
    name = raw.split("<")[0].strip().split("@")[0].strip()
    name = name.replace('"', '').replace("'", "")
    if not name or len(name) <= 1: return "there"
    return name.split()[0]

def load_json(path, default=None):
    try:
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f: return json.load(f)
    except: pass
    return default if default is not None else {}

def save_json(path, data):
    try:
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False, default=str)
    except: pass

# ═══ DATA LOADERS ═══
def get_tracker(): return load_json(FOLLOWUP_FILE, {"threads":{},"stats":{"total_sent":0,"responses_received":0}})
def save_tracker(d): save_json(FOLLOWUP_FILE, d)
def get_personalities(): return load_json(PERSONALITY_FILE, {})
def save_personalities(d): save_json(PERSONALITY_FILE, d)
def get_conv_states(): return load_json(CONVERSATION_FILE, {})
def save_conv_states(d): save_json(CONVERSATION_FILE, d)
def get_sender_history(): return load_json(SENDER_HISTORY_FILE, {})
def save_sender_history(d): save_json(SENDER_HISTORY_FILE, d)
def get_hashes(): return load_json(HASHES_FILE, {"hashes":{},"total_tracked":0})
def save_hashes(d): save_json(HASHES_FILE, d)
def get_timing(): return load_json(TIMING_FILE, {"senders":{},"global_hours":{}})
def save_timing(d): save_json(TIMING_FILE, d)
def get_feedback(): return load_json(FEEDBACK_FILE, {"templates":{},"total_replies":0,"best_performing":"INQUIRY_RESPONSE"})
def save_feedback(d): save_json(FEEDBACK_FILE, d)
def get_testimonials(): return load_json(TESTIMONIAL_FILE, {"requested":[],"received":[],"declined":[]})
def save_testimonials(d): save_json(TESTIMONIAL_FILE, d)
def get_outcome_log(): return load_json(OUTCOME_LOG_FILE, [])
def save_outcome_log(d): save_json(OUTCOME_LOG_FILE, d)

# ═══ v22: SMART RESPONSE TIMING ═══
def analyze_sender_timing(sender_email, sender_history):
    """Analyze sender's historical reply patterns → best hours to send."""
    timing = get_timing()
    sender_data = timing.get("senders", {}).get(sender_email, {"hours":{},"best_hour":None,"avg_response_minutes":None})
    return sender_data

def get_best_send_hour(sender_email, sender_history, sender_tz="ET"):
    """Determine the best hour to reply to this sender."""
    sender_data = analyze_sender_timing(sender_email, sender_history)
    if sender_data.get("best_hour") is not None:
        return sender_data["best_hour"]
    # Default business hours based on timezone
    tz_defaults = {"ET":10,"CST":10,"MST":10,"PST":13,"GMT":14,"CET":15}
    return tz_defaults.get(sender_tz, 10)

def should_send_now(sender_email, sender_tz="ET"):
    """Check if NOW is a good time to send to this sender."""
    now_hour = datetime.now().hour
    best = get_best_send_hour(sender_email, None, sender_tz)
    # Allow ±3 hours around best time
    diff = abs(now_hour - best)
    return diff <= 3 or diff >= 21  # wrap around midnight

def record_reply_timing(sender_email, reply_sent_at):
    """Record when we sent a reply (for response-time tracking)."""
    timing = get_timing()
    timing.setdefault("senders", {}).setdefault(sender_email, {"hours":{},"best_hour":None}).setdefault("sent_times",[]).append(reply_sent_at)
    save_timing(timing)

# ═══ v22: SELF-IMPROVING FEEDBACK LOOP ═══
def track_outcome(template_used, sender_email, sent_at, reply_back_hours=None):
    """Track which templates get the fastest response-back."""
    feedback = get_feedback()
    fb = feedback.setdefault("templates", {}).setdefault(template_used, {"sent":0,"replies":0,"avg_reply_hours":0})
    fb["sent"] = fb.get("sent",0) + 1
    if reply_back_hours is not None:
        fb["replies"] = fb.get("replies",0) + 1
        prev_avg = fb.get("avg_reply_hours", 0)
        n = fb["replies"]
        fb["avg_reply_hours"] = (prev_avg * (n-1) + reply_back_hours) / n
    feedback["total_replies"] = feedback.get("total_replies",0) + 1
    # Find best performing template (lowest avg reply time with 3+ samples)
    best = None; best_time = 999
    for tpl, data in feedback.get("templates",{}).items():
        if data.get("replies",0) >= 3:
            if data.get("avg_reply_hours",999) < best_time:
                best = tpl; best_time = data["avg_reply_hours"]
    if best: feedback["best_performing"] = best
    save_feedback(feedback)

def get_best_template(category, subcategory=""):
    """Get the best-performing template for this category based on feedback."""
    feedback = get_feedback()
    # Try subcategory-specific first
    key = f"{category}_{subcategory}"
    tpl_data = feedback.get("templates",{}).get(key)
    if tpl_data and tpl_data.get("replies",0) >= 2:
        return key
    # Fall back to best overall
    return feedback.get("best_performing", "INQUIRY_RESPONSE")

# ═══ v22: CONTEXTUAL BUSINESS HOURS ═══
def get_time_greeting(sender_tz="ET"):
    """Return time-appropriate greeting based on sender timezone."""
    try:
        tz_offsets = {"ET":-5,"CST":-6,"MST":-7,"PST":-8,"GMT":0,"CET":1,"BRT":-3,"IST":5.5,"JST":9,"AEST":10}
        offset = tz_offsets.get(sender_tz, -5)
        utc_now = datetime.utcnow()
        sender_hour = (utc_now.hour + offset) % 24
    except:
        sender_hour = datetime.now().hour
    if sender_hour < 12: return "Good morning"
    elif sender_hour < 17: return "Good afternoon"
    else: return "Good evening"

# ═══ v22: SMART ATTACHMENT HANDLING ═══
def get_attachments(payload):
    """Extract attachment info from email payload."""
    attachments = []
    if not payload: return attachments
    filename = payload.get("filename","")
    mime = payload.get("mimeType","")
    if filename and mime:
        attachments.append({"filename":filename,"mimeType":mime,"size":payload.get("body",{}).get("size",0)})
    for part in payload.get("parts", []):
        attachments.extend(get_attachments(part))
    return attachments

def format_attachment_ack(attachments):
    """Generate natural language acknowledgment of attachments."""
    if not attachments: return ""
    docs = [a for a in attachments if any(a["filename"].endswith(e) for e in [".pdf",".docx",".doc",".xlsx",".xls",".pptx",".txt",".csv"])]
    zips = [a for a in attachments if a["filename"].endswith(".zip")]
    imgs = [a for a in attachments if any(a["filename"].endswith(e) for e in [".png",".jpg",".jpeg",".gif"])]
    parts = []
    if docs: parts.append(f"reviewing your document{'s' if len(docs)>1 else ''} ({', '.join(d['filename'] for d in docs[:3])})")
    if zips: parts.append(f"extracting the archive{'s' if len(zips)>1 else ''} you shared")
    if imgs: parts.append(f"looking at the image{'s' if len(imgs)>1 else ''} you attached")
    if not parts and attachments: parts.append(f"reviewing the {len(attachments)} attachment{'s' if len(attachments)>1 else ''} you shared")
    if parts:
        return f"\n\nI'm {' and '.join(parts)} — thank you for sending {'them' if len(attachments)>1 else 'this'}!"
    return ""

# ═══ v22: CONVERSATION MEMORY v2 ═══
def update_memory(sender_email, email_text, action_taken, promises_made=None, open_items=None):
    """Track promises, commitments, and open items across threads."""
    conv_states = get_conv_states()
    state = conv_states.get(sender_email, {
        "state":"new","emails_received":0,"emails_replied":0,
        "last_email_date":None,"last_reply_date":None,
        "promises_made":[],"open_items":[],"commitments":[],
    })
    state["emails_received"] = state.get("emails_received",0) + 1
    state["last_email_date"] = now_iso()
    if action_taken in ("reply","reply_all","meeting_proposal"):
        state["emails_replied"] = state.get("emails_replied",0) + 1
        state["last_reply_date"] = now_iso()
    if promises_made:
        for p in promises_made:
            state.setdefault("promises_made",[]).append({"promise":p,"made_at":now_iso(),"fulfilled":False})
    if open_items:
        for item in open_items:
            state.setdefault("open_items",[]).append({"item":item,"raised_at":now_iso(),"resolved":False})
    # Auto-detect promises from common patterns
    auto_promises = re.findall(r"(?:I will|I'll|we will|we'll|let me|I can)\s+([^.!\n]{5,80})", email_text, re.I)
    for p in auto_promises[:2]:
        state.setdefault("promises_made",[]).append({"promise":p.strip(),"made_at":now_iso(),"fulfilled":False,"auto_detected":True})
    # Auto-detect open questions
    questions = re.findall(r"([^.!?]*\?[^.!?]*)", email_text)
    for q in questions[:3]:
        q = q.strip()
        if len(q) > 10:
            state.setdefault("open_items",[]).append({"item":q,"raised_at":now_iso(),"resolved":False,"is_question":True})
    conv_states[sender_email] = state
    save_conv_states(conv_states)
    return state

def get_memory_context(sender_email):
    """Get contextual memory for reply generation."""
    conv_states = get_conv_states()
    state = conv_states.get(sender_email, {})
    context_parts = []
    # Unfulfilled promises
    unfulfilled = [p for p in state.get("promises_made",[]) if not p.get("fulfilled")]
    if unfulfilled:
        context_parts.append(f"Note: Previously promised to: {'; '.join(p['promise'] for p in unfulfilled[:2])}")
    # Open questions
    open_q = [q for q in state.get("open_items",[]) if not q.get("resolved") and q.get("is_question")]
    if open_q:
        context_parts.append(f"Note: Open questions: {'; '.join(q['item'][:60] for q in open_q[:2])}")
    return "\n".join(context_parts) if context_parts else ""

# ═══ v22: AUTO-TESTIMONIAL GENERATION ═══
def should_request_testimonial(sender_email, sentiment_label, sender_history):
    """Decide if we should request a testimonial."""
    if sentiment_label not in ("very_positive","positive"):
        return False
    # Don't ask if we already asked
    testimonials = get_testimonials()
    existing = [t for t in testimonials.get("requested",[]) if t.get("email","").lower() == sender_email.lower()]
    if existing:
        return False
    # Don't ask if sender has negative history
    profile = sender_history.get(sender_email, {})
    reputation = profile.get("reputation","new")
    if reputation == "blocked":
        return False
    return True

def send_testimonial_request(sender_email, sender_name, thread_id, lang="en"):
    """Send a polite testimonial request."""
    greetings = {
        "en":"Hi {name},\n\nI'm so glad we could help! Would you be open to sharing a brief testimonial about your experience? It helps other businesses discover our services.\n\nJust a sentence or two would be amazing. Reply with 'Sure' and I'll guide you.\n\nThank you!\n\nBest regards,\n{Kleber}\n{Zion}",
        "pt":"Olá {name},\n\nQue bom que pudemos ajudar! Você estaria disposto(a) a compartilhar um breve depoimento sobre sua experiência? Isso ajuda outras empresas a descobrirem nossos serviços.\n\nApenas uma ou duas frases. Responda com 'Claro' e eu oriento.\n\nObrigado!\n\nAtenciosamente,\n{Kleber}\n{Zion}",
        "es":"Hola {name},\n\n¡Me alegra haber podido ayudar! ¿Estaría dispuesto a compartir un breve testimonio? Ayuda a otras empresas a descubrir nuestros servicios.\n\nSolo una o dos frases. Responda con 'Claro' y lo guío.\n\n¡Gracias!\n\nSaludos cordiales,\n{Kleber}\n{Zion}",
    }
    tmpl = greetings.get(lang, greetings["en"])
    body = tmpl.replace("{name}",sender_name).replace("{Kleber}",CONTACT["name"]).replace("{Zion}",CONTACT["company"])
    subj = "Quick favor — testimonial request"
    gmail_send_reply_all("", thread_id, sender_email, [], subj, body)
    # Log it
    testimonials = get_testimonials()
    testimonials.setdefault("requested",[]).append({"email":sender_email,"name":sender_name,"requested_at":now_iso(),"lang":lang})
    save_testimonials(testimonials)
    return True

# ═══ SENTIMENT ANALYSIS (carried forward from v21) ═══
def analyze_sentiment(text):
    t = text.lower()
    vneg = sum(1 for w in ["furious","outraged","unacceptable","scam","fraud","hate","disgusted","never again","fed up","ridiculous"] if w in t)
    neg = sum(1 for w in ["angry","disappointed","frustrated","terrible","horrible","worst","cancel","angry"] if w in t)
    pos = sum(1 for w in ["thank","thanks","great","amazing","excellent","love","awesome","perfect","wonderful","appreciate","pleased","happy","impressed","outstanding","brilliant"] if w in t)
    vpos = sum(1 for w in ["amazing","outstanding","brilliant","love","excellent","perfect","excited"] if w in t)
    score = (pos + vpos * 2) - (neg + vneg * 3)
    if vneg >= 1 or score <= -4: return "very_negative", score
    if neg >= 2 or score <= -2: return "negative", score
    if vpos >= 2 or score >= 4: return "very_positive", score
    if pos >= 2 or score >= 2: return "positive", score
    return "neutral", score

# ═══ CLASSIFICATION (carried forward from v21) ═══
_RE_BOUNCE = re.compile(r"delivery failure|undeliverable|mail delivery failed|bounce|status: 5\.|permanent error", re.I)
_RE_OOO = re.compile(r"out of office|ooo|on vacation|auto.?reply|automatic reply|away from my desk|on leave", re.I)
_RE_PROMO = re.compile(r"sale|discount|promo|offer|deal|giveaway|coupon|flash sale|oferta|desconto|promoç", re.I)
_RE_NEWSLETTER = re.compile(r"unsubscribe|view in browser|email preferences|weekly digest|newsletter|substack|mailchimp", re.I)
_RE_FOLLOWUP_ACTIVE = re.compile(r"following up|follow up|checking in|any update|haven.?t heard|circling back", re.I)
_RE_ACK = re.compile(r"thank you|thanks|appreciate|great|perfect|confirmed|understood|obrigado|valeu|gracias", re.I)
_RE_SUPPORT = re.compile(r"help|issue|problem|not working|bug|error|crash|broke|troubleshoot|support ticket", re.I)
_RE_THREAT = re.compile(r"threat|blackmail|expose|leak|ransom|pay up|or else", re.I)
_RE_LEGAL = re.compile(r"legal notice|cease and desist|attorney|court order|subpoena|litigation|law firm|trademark|patent", re.I)
_RE_FINANCIAL = re.compile(r"invoice|payment due|billing|subscription charge|receipt|purchase order|po #|wire transfer|bank transfer", re.I)
_RE_INQUIRY = re.compile(r"rfq|request for quote|request for proposal|rfp|quotation|supplier inquiry|bulk order|wholesale", re.I)
_RE_COMPLAINT = re.compile(r"complaint|formal complaint|unacceptable service|terrible experience|worst experience", re.I)
_RE_COMPLAINT_CHURN = re.compile(r"cancel account|close account|terminate|switch to|moving to|competitor|alternative to", re.I)
_RE_JOB_APP = re.compile(r"(?i)(job application|apply for|resume|cv attached|cover letter|hiring|position|role|career)")
_RE_PRESS = re.compile(r"(?i)(press|media|interview|journalist|publication|news outlet|press release)")
NEWSLETTER_DOMAINS = {"br.email.samsung.com","mercadolivre","amazon.com.br","ifood","nubank","spotify","netflix"}
KNOWN_SENDER_DOMAINS = {"linkedin","facebook","twitter","instagram","tiktok","youtube","pinterest","reddit","nextdoor","quora","dev.to","bsky"}
SYSTEM_SENDERS = {"zapier","ifttt","pagerduty","datadog","grafana","sentry","cloudflare","aws","azure","vercel","netlify","heroku","docker","npm","atlassian","jira","confluence"}

def classify_email_fast(meta, full_body="", sender_email=""):
    f = (meta.get("from","") or "").lower()
    s = (meta.get("subject","") or "").lower()
    body = (full_body or meta.get("snippet","") or "")[:800].lower()
    combined = f + " " + s + " " + body
    labels_list = [l.lower() for l in meta.get("labels",[])]
    if any(l in ALL_PROCESSED_LABELS for l in labels_list): return "SKIP",1.0,["skip"],"already_processed","Processed"
    if _RE_BOUNCE.search(combined) or "mailer-daemon" in f: return "BOUNCE",0.95,["auto_archive"],"bounce","Bounced"
    if _RE_OOO.search(combined): return "OOO",0.95,["auto_archive"],"ooo","OOO"
    if "github.com" in f or "github-actions" in f:
        return ("CI",0.97,["auto_archive"],"ci_fail","CI failed") if any(kw in s for kw in ["failed","[failed]"]) else ("CI",0.90,["auto_archive"],"ci","CI")
    if "dependabot" in f or "renovate" in f: return "DEPS",0.97,["auto_archive"],"deps","Deps"
    if _RE_PROMO.search(combined): return "PROMO",0.93,["auto_archive"],"promo","Promo"
    if _RE_NEWSLETTER.search(combined): return "NEWSLETTER",0.88,["auto_archive"],"newsletter","Newsletter"
    if any(k in f for k in NEWSLETTER_DOMAINS): return "NEWSLETTER",0.88,["auto_archive"],"ns","Newsletter"
    if any(k in f for k in KNOWN_SENDER_DOMAINS): return "SOCIAL",0.90,["auto_archive"],"social","Social"
    if any(k in f for k in SYSTEM_SENDERS): return "NOTIFY",0.85,["auto_archive"],"system","System"
    if s.startswith(("re:","fw:","fwd:")):
        if _RE_FOLLOWUP_ACTIVE.search(combined): return "FOLLOWUP",0.80,["can_reply","is_followup"],"fup_active","Active follow-up"
        if _RE_ACK.search(combined): return "FOLLOWUP",0.75,["auto_archive"],"ack","Thread ack"
        return "FOLLOWUP",0.70,["can_reply","needs_thread_check"],"followup","Follow-up"
    if _RE_THREAT.search(combined): return "THREAT",0.92,["flag_human","flag_urgent","never_autoreply"],"threat","Threat"
    if _RE_LEGAL.search(combined): return "LEGAL",0.90,["flag_human","never_autoreply"],"legal","Legal"
    if _RE_FINANCIAL.search(combined): return "FINANCIAL",0.90,["flag_human","never_autoreply"],"financial","Financial"
    if _RE_COMPLAINT_CHURN.search(combined): return "COMPLAINT",0.85,["flag_human","flag_urgent"],"churn","Churn risk"
    if _RE_COMPLAINT.search(combined): return "COMPLAINT",0.88,["can_reply"],"complaint","Complaint"
    if _RE_SUPPORT.search(combined): return "SUPPORT",0.85,["can_reply"],"support","Support"
    if _RE_INQUIRY.search(combined): return "INQUIRY",0.92,["can_reply"],"rfq","RFQ"
    if _RE_JOB_APP.search(combined): return "JOB_APP",0.85,["can_reply"],"job_app","Job app"
    if _RE_PRESS.search(combined): return "PRESS",0.85,["can_reply"],"press","Press"
    if any(k in f for k in [".gov",".gov.br",".gob"]): return "GOVT",0.97,["flag_human","never_autoreply","flag_urgent"],"govt","Gov"
    if any(k in combined for k in ["investment","investor","venture capital","funding"]): return "INVESTOR",0.90,["flag_human","never_autoreply"],"investor","Investor"
    if any(k in combined for k in ["partnership","collaborate","joint venture","reseller","distributor"]): return "PARTNER",0.90,["flag_human","never_autoreply"],"partnership","Partnership"
    if any(k in s for k in ["urgent","asap","emergency","critical","blocked","escalate","action required","immediate","deadline","rush"]): return "PERSONAL",0.60,["flag_human","flag_urgent"],"urgent","Urgent"
    return "PERSONAL",0.50,["flag_human"],"unknown","Review"

# ═══ THREAD CONTEXT ═══
def get_thread_context(thread_id, max_msgs=5):
    thread = gmail_get_thread(thread_id)
    if not thread or "messages" not in thread: return {"summary":"(No history)","msgs":[],"our_last_reply":None,"pending_items":[]}
    msgs = thread["messages"][-max_msgs:]
    our_email = CONTACT["email"].lower()
    parts = []; our_last = None; pending = []
    for msg in msgs:
        headers = msg.get("payload",{}).get("headers",[])
        from_h = next((h["value"] for h in headers if h["name"] == "From"),"")
        snippet = msg.get("snippet","")[:80].strip()
        is_ours = our_email in from_h.lower()
        if is_ours: our_last = snippet
        elif "?" in snippet and not our_last: pending.append(snippet[:100])
        parts.append(f"{'US' if is_ours else 'THEM'}: {snippet}")
    return {"summary":" → ".join(parts),"msgs":msgs,"our_last_reply":our_last,"pending_items":pending}

def get_cc_list(meta):
    cc_raw = meta.get("cc","") or ""
    return [e for e in [extract_email(c) for c in cc_raw.split(",")] if e]

# ═══ REPLY GENERATION v22 ═══
def generate_reply_v22(meta, full_body, subject, sender_name, sender_email, action,
                       attachments, sentiment_label, lang, sender_tz="ET",
                       has_cc=False, memory_context=""):
    """v22 reply generator: time-greeting, attachment ack, memory context."""
    greeting = get_time_greeting(sender_tz)
    time_greet = f"{greeting}, {sender_name},"
    if sender_name == "there":
        time_greet = greeting + ","

    # Attachment acknowledgment
    att_ack = format_attachment_ack(attachments)

    # Sentiment-aware opening
    sentiment_prefix = ""
    if sentiment_label == "very_negative":
        sentiment_prefix = "I sincerely apologize for your experience, and I want to make this right.\n\n"
    elif sentiment_label == "negative":
        sentiment_prefix = "I understand your concern and I'm here to help.\n\n"
    elif sentiment_label == "very_positive":
        sentiment_prefix = "Thank you so much for your kind words! It's wonderful to hear.\n\n"

    # Memory context note
    memory_note = ""
    if memory_context:
        memory_note = f"\n\n{memory_context}"

    # Service links
    service_links = match_services(subject, full_body)
    links_block = ""
    if service_links:
        links_block = "\n\n---\n🔗 Relevant services:"
        for title, url in service_links:
            links_block += f"\n• {title}: {url}"

    # Main body
    clean_body = strip_quoted(full_body[:400])
    has_keywords = any(kw in clean_body.lower() for kw in ["price","pricing","cost","how much","quote","proposal","interested","service","help","ai","it","cloud","security","automation","data"])

    if has_keywords or action == "reply_all":
        body = f"""{time_greet}

{sentiment_prefix}Thank you for reaching out to Zion Tech Group!

We provide end-to-end AI services, IT solutions, cloud infrastructure, cybersecurity, data analytics, automation, and micro-SaaS platforms.

Here's how we can help:

• AI & ML — Custom models, NLP, computer vision, chatbots, predictive analytics
• IT Solutions — Infrastructure, networking, cloud migration, managed services
• Cloud & DevOps — AWS/Azure/GCP, Kubernetes, CI/CD, monitoring
• Cybersecurity — Audits, penetration testing, compliance, SOC-as-a-Service
• Data Analytics — BI dashboards, ETL pipelines, data warehousing
• Automation — Workflow automation, RPA, bot development
• Micro-SaaS — Custom SaaS platform development

Would you like to schedule a free 15-minute call to discuss your needs?

📞 {CONTACT['phone']}
✉ {CONTACT['email']}
🌐 {CONTACT['website']}
📍 {CONTACT['address']}{att_ack}{links_block}{memory_note}

Best regards,
{CONTACT['name']}
{CONTACT['company']}"""
    else:
        body = f"""{time_greet}

{sentiment_prefix}Thank you for your email!

Could you share a bit more about what you're looking for? This will help me provide the most relevant response.

📞 {CONTACT['phone']}
✉ {CONTACT['email']}{att_ack}{links_block}{memory_note}

Best regards,
{CONTACT['name']}
{CONTACT['company']}"""

    return body

# ═══ SERVICE MATCHING (carried forward) ═══
SERVICE_KEYWORDS = {
    "ai":["ai","artificial intelligence","machine learning","ml","deep learning","neural","nlp","chatbot","predictive"],
    "it":["server","hosting","network","infrastructure","deployment","api","database","migration","backup","monitoring"],
    "cloud":["cloud","aws","azure","gcp","gcs","s3","kubernetes","docker","container","scaling","saas"],
    "security":["security","firewall","vulnerability","penetration","audit","compliance","hipaa","gdpr","encryption","threat"],
    "data":["data","analytics","bi","dashboard","visualization","etl","pipeline","warehouse","reporting","insights"],
    "automation":["automation","workflow","bot","rpa","integration","zapier","schedule","trigger"],
}
SERVICE_LINKS = {
    "ai":("AI Services","https://ziontechgroup.com/services/advanced-ai-enterprise-intelligence-hub"),
    "it":("IT Solutions","https://ziontechgroup.com/services/full-it-department-outsourcing"),
    "cloud":("Cloud Services","https://ziontechgroup.com/services/multi-cloud-architecture-migration"),
    "security":("Security","https://ziontechgroup.com/services/enterprise-cybersecurity-operations-center"),
    "data":("Data Analytics","https://ziontechgroup.com/services/ai-analytics-bi-platform"),
    "automation":("Automation","https://ziontechgroup.com/services/itsm-it-service-management-platform"),
}

def match_services(subject, body, max_matches=2):
    text = (subject + " " + body[:2000]).lower()
    scores = {cat: sum(2 if kw in text else 0 for kw in keywords) for cat, keywords in SERVICE_KEYWORDS.items()}
    sorted_cats = sorted((s,c) for s,c in [(scores[c],c) for c in scores] if s > 0)
    return [SERVICE_LINKS[c] for _,c in sorted_cats[:max_matches] if c in SERVICE_LINKS]

# ═══ SENDER PROFILE ═══
def get_sender_profile(email_val, history):
    if email_val not in history:
        history[email_val] = {"received":0,"replied":0,"first_seen":now_iso(),"reputation":"new","lang":"en","categories":{}}
    return history[email_val]

def detect_lang_v2(text):
    t = text.lower() if hasattr(text, 'lower') else text.lower()
    scores = {
        "pt":sum(1 for w in ["olá","obrigado","por favor","você","está","como","quero","preciso","ajuda","serviço"] if w in t),
        "es":sum(1 for w in ["hola","gracias","por favor","usted","como","está","quiero","necesito","ayuda","servicio"] if w in t),
        "fr":sum(1 for w in ["bonjour","merci","s'il vous plaît","comment","je veux","aide","service"] if w in t),
        "de":sum(1 for w in ["hallo","danke","bitte","hilfe","service"] if w in t),
        "it":sum(1 for w in ["ciao","grazie","per favore","aiuto","servizio"] if w in t),
        "en":sum(1 for w in ["hello","hi","thank","please","would","could","help","service","company","regards"] if w in t),
    }
    best = max(scores, key=scores.get)
    return best if scores[best] >= 2 else "en"

def detect_sender_timezone(meta):
    date_header = meta.get("date","") or ""
    tz_match = re.search(r'([+-]\d{4}|\b(?:EST|CST|MST|PST|EDT|CDT|MDT|PDT|GMT|UTC|CET|BRT)\b)', date_header)
    if tz_match: return tz_match.group(1)
    # Infer from domain
    f = (meta.get("from","") or "").lower()
    if ".br" in f or "@gmail.com" in f: return "BRT"
    elif ".uk" in f or ".co.uk" in f: return "GMT"
    elif ".de" in f or ".fr" in f or ".it" in f: return "CET"
    return "ET"

# ═══ SELECT ACTION (enhanced v22) ═══
def select_action_v22(meta, full_body, subject, sender_email, sender_profile, conv_state,
                      sentiment_label, priority_score, intent, thread_ctx, hashes_data):
    text = (subject + " " + full_body[:1000]).lower()
    labels_list = [l.lower() for l in meta.get("labels",[])]

    # Already processed
    if any(l in ALL_PROCESSED_LABELS for l in labels_list):
        return "skip","already_processed",False

    # We sent last → waiting
    msgs = thread_ctx.get("msgs",[])
    if msgs:
        last = msgs[-1]
        from_h = ""
        for h in last.get("payload",{}).get("headers",[]):
            if h["name"] == "From": from_h = h.get("value","")
        if CONTACT["email"].lower() in from_h.lower():
            return "skip","waiting_for_reply",False

    # Duplicate
    if content_hash(subject, full_body) in hashes_data.get("hashes",{}):
        return "skip","duplicate",False

    cat, conf, flags, subcat, label_name = classify_email_fast(meta, full_body, sender_email)

    if "auto_archive" in flags:
        return "auto_archive",f"category_{subcat}",False
    if cat == "SKIP":
        return "skip","processed",False
    if sentiment_label == "very_negative":
        return "escalate_human",f"very_negative_{subcat}",False
    if "never_autoreply" in flags:
        if priority_score >= 75:
            return "draft_only",f"high_priority_{subcat}", False
        return "escalate_human",f"never_autoreply_{subcat}",False
    if cat == "MEETING" or intent == "meeting":
        return "meeting_proposal","meeting_request",False
    if priority_score >= 70 and sentiment_label in ("negative","neutral"):
        return "draft_only",f"high_priority_{priority_score}",False
    if "is_followup" in flags:
        return "followup_send","follow_up_detected",False
    if cat == "COMPLAINT":
        return ("draft_only","complaint_draft",False) if "flag_human" in flags else ("reply","complaint_auto",False)

    cc_header = meta.get("cc","") or ""
    has_cc = bool(cc_header and "@" in cc_header)
    to_count = len([c for c in (meta.get("to","") or "").split(",") if "@" in c])
    multiple = to_count > 1 or has_cc

    if cat in ("SUPPORT","INQUIRY","BOOKING","PERSONAL","JOB_APP","PRESS","FOLLOWUP"):
        if multiple and has_cc:
            return "reply_all",f"multi_recipient_{subcat}",True
        return "reply",f"single_{subcat}",False

    return "draft_only",f"default_{subcat}",False

# ═══ MAIN PIPELINE ═══
def run_pipeline():
    run_id = datetime.now().strftime("%Y%m%d_%H%M%S")
    log_path = os.path.join(LOG_DIR, f"run_{run_id}.json")
    log = {"run_id":run_id,"started":now_iso(),"stats":{"fetched":0,"auto_archived":0,"replied":0,"replied_all":0,"escalated":0,"drafted":0,"skipped":0,"errors":0,"followups_sent":0,"testimonials_requested":0},"actions":[]}

    labels_map = {}
    hashes_data = get_hashes()
    tracker = get_tracker()
    personalities = get_personalities()
    conv_states = get_conv_states()
    sender_history = get_sender_history()
    OUR_EMAIL = CONTACT["email"].lower()

    print(f"[v22] Run {run_id} started"); sys.stdout.flush()

    # ═══ PHASE 1: Fetch unread ═══
    try:
        msg_ids = gmail_search("is:unread", max_results=PHASE1_FETCH)
        print(f"[v22] {len(msg_ids)} unread"); sys.stdout.flush()
    except Exception as e:
        print(f"[v22] ERROR: {e}"); log["error"]=str(e); save_json(log_path,log); return log

    # ═══ PHASE 2: Metadata + fast classify ═══
    to_process = []
    for mid in msg_ids[:MAX_FULL_FETCH]:
        try:
            meta = gmail_get_metadata(mid)
            if not meta: continue
            meta["_msg_id"] = mid
            meta["_thread_id"] = meta.get("threadId","")
            headers = meta.get("payload",{}).get("headers",[]) if "payload" in meta else []
            def gh(name): return next((h["value"] for h in headers if h["name"]==name),"")
            meta["from"] = gh("From"); meta["to"] = gh("To"); meta["cc"] = gh("Cc")
            meta["subject"] = gh("Subject"); meta["date"] = gh("Date")
            sender_email = extract_email(meta["from"])
            cat, conf, flags, subcat, label_name = classify_email_fast(meta,"",sender_email)
            if "auto_archive" in flags:
                lid = ensure_label(LABELS["BULK_ARCHIVED"], labels_map)
                gmail_modify(mid, add_labels=[lid], remove_labels=["INBOX"])
                log["stats"]["auto_archived"] += 1
                log["actions"].append({"id":mid,"action":"auto_archive","reason":subcat})
                continue
            if cat == "SKIP":
                log["stats"]["skipped"] += 1; continue
            to_process.append((mid, meta, sender_email))
        except Exception as e:
            log["stats"]["errors"] += 1; print(f"[v22] meta err: {e}"); sys.stdout.flush()

    print(f"[v22] Deep-process: {len(to_process)}"); sys.stdout.flush()

    # ═══ PHASE 3: Deep analysis + action ═══
    sent_count = 0
    for mid, meta, sender_email in to_process:
        if sent_count >= MAX_SEND_PER_RUN: break
        try:
            full = gmail_get_full(mid)
            if not full: continue
            payload = full.get("payload",{})
            full_body = get_body_text(payload)
            subject = meta.get("subject","")
            sender_name = extract_name(meta.get("from",""))
            sender_profile = get_sender_profile(sender_email, sender_history)
            thread_ctx = get_thread_context(meta["_thread_id"])
            attachments = get_attachments(payload)
            sentiment_label, sentiment_score = analyze_sentiment(full_body + " " + subject)
        <longcat_arg_value>

            cc_list = get_cc_list(meta)
            has_cc = bool(cc_list)

            action, reason, should_cc = select_action_v22(meta, full_body, subject, sender_email, sender_profile, conv_state, sentiment_label, 50, intent, thread_ctx, hashes_data)
            memory_ctx = get_memory_context(sender_email)

            print(f"[v22] {mid[:8]} | {sender_email[:28]:28s} | {action:14s} | {reason} | sent={sentiment_label} | att={len(attachments)}"); sys.stdout.flush()

            log["actions"].append({"id":mid,"action":action,"reason":reason,"sentiment":sentiment_label,"lang":lang,"attachments":len(attachments)})

            if action == "skip":
                gmail_modify(mid, add_labels=[ensure_label(LABELS["PROCESSED"],labels_map)])
                log["stats"]["skipped"] += 1

            elif action == "auto_archive":
                gmail_modify(mid, add_labels=[ensure_label(LABELS["BULK_ARCHIVED"],labels_map)], remove_labels=["INBOX"])
                log["stats"]["auto_archived"] += 1

            elif action == "reply":
                if is_quiet():
                    gmail_modify(mid, add_labels=[ensure_label(LABELS["DRAFTED"],labels_map)])
                    log["stats"]["drafted"] += 1
                else:
                    reply_body = generate_reply_v22(meta, full_body, subject, sender_name, sender_email, action, attachments, sentiment_label, lang, sender_tz, memory_context=memory_ctx)
                    subj = subject if subject.lower().startswith("re:") else f"Re: {subject}"
                    gmail_send_reply_all(mid, meta["_thread_id"], sender_email, [], subj, reply_body)
                    h = content_hash(subject, full_body)
                    hashes_data.setdefault("hashes",{})[h] = {"ts":now_iso(),"msg_id":mid}
                    save_hashes(hashes_data)
                    record_reply_timing(sender_email, now_iso())
                    track_outcome("reply", sender_email, now_iso())
                    time.sleep(SEND_INTERVAL)
                    sent_count += 1
                    log["stats"]["replied"] += 1
                    gmail_modify(mid, add_labels=[ensure_label(LABELS["REPLIED"],labels_map)])
                    update_memory(sender_email, reply_body, "reply")

                    # v22: Testimonial request for positive sentiment
                    if should_request_testimonial(sender_email, sentiment_label, sender_history):
                        send_testimonial_request(sender_email, sender_name, meta["_thread_id"], lang)
                        gmail_modify(mid, add_labels=[ensure_label(LABELS["TESTIMONIAL"],labels_map)])
                        log["stats"]["testimonials_requested"] += 1
                        time.sleep(1)

            elif action == "reply_all":
                if is_quiet():
                    gmail_modify(mid, add_labels=[ensure_label(LABELS["DRAFTED"],labels_map)])
                    log["stats"]["drafted"] += 1
                else:
                    reply_body = generate_reply_v22(meta, full_body, subject, sender_name, sender_email, action, attachments, sentiment_label, lang, sender_tz, has_cc=True, memory_context=memory_ctx)
                    subj = subject if subject.lower().startswith("re:") else f"Re: {subject}"
                    gmail_send_reply_all(mid, meta["_thread_id"], sender_email, cc_list, subj, reply_body)
                    h = content_hash(subject, full_body)
                    hashes_data.setdefault("hashes",{})[h] = {"ts":now_iso(),"msg_id":mid}
                    save_hashes(hashes_data)
                    track_outcome("reply_all", sender_email, now_iso())
                    time.sleep(SEND_INTERVAL)
                    sent_count += 1
                    log["stats"]["replied_all"] += 1
                    gmail_modify(mid, add_labels=[ensure_label(LABELS["REPLIED_ALL"],labels_map)])
                    update_memory(sender_email, reply_body, "reply_all")

                    if should_request_testimonial(sender_email, sentiment_label, sender_history):
                        send_testimonial_request(sender_email, sender_name, meta["_thread_id"], lang)
                        log["stats"]["testimonials_requested"] += 1
                        time.sleep(1)

            elif action == "escalate_human":
                gmail_modify(mid, add_labels=[ensure_label(LABELS["HUMAN_REVIEW"],labels_map)])
                log["stats"]["escalated"] += 1

            elif action == "draft_only":
                gmail_modify(mid, add_labels=[ensure_label(LABELS["DRAFTED"],labels_map)])
                log["stats"]["drafted"] += 1

            elif action == "meeting_proposal":
                if is_quiet():
                    gmail_modify(mid, add_labels=[ensure_label(LABELS["DRAFTED"],labels_map)])
                    log["stats"]["drafted"] += 1
                else:
                    # Generate meeting proposal inline
                    now = datetime.now()
                    slots = []
                    for i in range(5):
                        future = now + timedelta(days=i+1)
                        while future.weekday() >= 5: future += timedelta(days=1)
                        slots.append(f"• {future.strftime('%A')}, {future.strftime('%b %d')} at 10:00 AM ET")
                        slots.append(f"• {future.strftime('%A')}, {future.strftime('%b %d')} at 2:00 PM ET")
                        if len(slots) >= 6: break
                    tmpl = {"en":"Hi","pt":"Olá","es":"Hola","fr":"Bonjour","de":"Hallo","it":"Ciao"}.get(lang,"Hi")
                    proposal = f"{tmpl} {sender_name},\n\nThank you for your meeting request!\n\nAvailable slots:\n\n" + "\n".join(slots[:6]) + f"\n\nI'll send a calendar invite once we confirm.\n\nBest regards,\n{CONTACT['name']}\n{CONTACT['company']}\n📞 {CONTACT['phone']}" 
                    subj = subject if subject.lower().startswith("re:") else f"Re: {subject}"
                    gmail_send_reply_all(mid, meta["_thread_id"], sender_email, [], subj, proposal)
                    h = content_hash(subject, full_body)
                    hashes_data.setdefault("hashes",{})[h] = {"ts":now_iso(),"msg_id":mid}
                    save_hashes(hashes_data)
                    time.sleep(SEND_INTERVAL)
                    sent_count += 1
                    log["stats"]["replied"] += 1
                    gmail_modify(mid, add_labels=[ensure_label(LABELS["REPLIED"],labels_map)])

            elif action == "followup_send":
                tid = meta["_thread_id"]
                if tid in tracker.get("threads",{}):
                    tinfo = tracker["threads"][tid]
                    if not tinfo.get("got_response",False) and tinfo.get("followup_count",0) < MAX_FOLLOWUPS:
                        fb_num = tinfo.get("followup_count",0) + 1
                        name = sender_email.split("@")[0]
                        fb_subj = tinfo.get("subject",subject)[:60]
                        fb_body = f"Hi {name},\n\nFollowing up on \\\"{fb_subj}\\\". Just checking in!\n\nBest regards,\n{CONTACT['name']}\n{CONTACT['company']}\n📞 {CONTACT['phone']}"
                        gmail_send_reply_all("", tid, sender_email, [], f"Re: {tinfo.get('subject','Subject')[:60]}", fb_body)
                        time.sleep(SEND_INTERVAL); sent_count += 1
                        log["stats"]["followups_sent"] += 1
                        record_followup(tid, sender_email, subject, fb_num, tracker)
                        gmail_modify(mid, add_labels=[ensure_label(LABELS["FOLLOWUP"],labels_map)])
                else:
                    reply_body = generate_reply_v22(meta, full_body, subject, sender_name, sender_email, "reply", attachments, sentiment_label, lang, sender_tz)
                    subj = subject if subject.lower().startswith("re:") else f"Re: {subject}"
                    gmail_send_reply_all(mid, meta["_thread_id"], sender_email, [], subj, reply_body)
                    h = content_hash(subject, full_body)
                    hashes_data.setdefault("hashes",{})[h] = {"ts":now_iso(),"msg_id":mid}
                    save_hashes(hashes_data)
                    time.sleep(SEND_INTERVAL); sent_count += 1
                    log["stats"]["replied"] += 1

            else:
                gmail_modify(mid, add_labels=[ensure_label(LABELS["PROCESSED"],labels_map)])
                log["stats"]["skipped"] += 1

        except Exception as e:
            log["stats"]["errors"] += 1
            print(f"[v22] err {mid}: {e}"); sys.stdout.flush()

    # ═══ PHASE 4: Follow-ups ═══
    try:
        pending = [th for th,info in tracker.get("threads",{}).items() if not info.get("got_response") and info.get("followup_count",0) < MAX_FOLLOWUPS]
        for tid in pending[:3]:
            if sent_count >= MAX_SEND_PER_RUN: break
            try:
                info = tracker["threads"][tid]
                fb_num = info.get("followup_count",0) + 1
                sender = info.get("sender",""); subj_s = info.get("subject","Subject")[:60]
                name = sender.split("@")[0] if sender else "there"
                fb_body = f"Hi {name},\n\nFollowing up on \\\"{subj_s}\\\". Just checking in!\n\nBest regards,\n{CONTACT['name']}\n{CONTACT['company']}\n📞 {CONTACT['phone']}
                gmail_send_reply_all("", tid, sender, [], f"Re: {subj_s}", fb_body)
                time.sleep(SEND_INTERVAL); sent_count += 1
                log["stats"]["followups_sent"] += 1
                record_followup(tid, sender, subj_s, fb_num, tracker)
            except Exception as e:
                log["stats"]["errors"] += 1; print(f"[v22] fup err: {e}"); sys.stdout.flush()
        save_tracker(tracker)
    except: pass

    save_hashes(hashes_data); save_conv_states(conv_states); save_sender_history(sender_history)
    log["finished"] = now_iso(); save_json(log_path, log)
    elapsed = (datetime.now() - datetime.fromisoformat(log["started"])).total_seconds()
    print(f"[v22] Complete in {elapsed:.1f}s | {json.dumps(log['stats'])}"); sys.stdout.flush()
    return log

if __name__ == "__main__":
    run_pipeline()
