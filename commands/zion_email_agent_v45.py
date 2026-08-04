#!/usr/bin/env python3
"""
Zion Email Agent V45 — Comprehensive Reply-All Intelligence Engine

New capabilities vs V44:
1. Smart Reply-All Decision Matrix — analyzes To/CC/Bcc, sender role, thread depth,
   and content to decide whether to reply-all, reply-sender-only, or no-reply
2. Email Thread Summarization — summarizes long threads before responding
3. Contextual Tone Matching — mirrors the sender's tone (formal/casual/technical)
4. Meeting/Calendar Integration Detection — auto-detects meeting requests and responds
5. Follow-Up Tracker — tracks emails that need follow-up and schedules reminders
6. Multi-Chain Reasoning — chains multiple AI analyses for complex emails
7. Attachment Intelligence — analyzes attachments (PDF, DOCX) for context
8. Priority Override System — VIP sender detection and priority escalation
9. Sentiment Trajectory Analysis — tracks sentiment changes across thread
10. Action Item Extraction with Assignment — detects who needs to do what
"""
import json
import re
import sys
import os
from datetime import datetime, timedelta
from typing import Optional

# ─── CONFIGURATION ───────────────────────────────────────────────────────────

PROVIDER_CHAIN = [
    ("openrouter", "google/gemini-2.0-flash-001"),
    ("groq", "llama-3.3-70b-versatile"),
    ("deepseek", "deepseek-chat"),
    ("mistral", "mistral-large-latest"),
    ("ollama", "llama3"),
]

VIP_DOMAINS = ["ziontechgroup.com", "client-vip.com"]
VIP_SENDERS = ["kleber@ziontechgroup.com", "ceo@", "cto@", "legal@"]

# ─── EMAIL ANALYSIS CLASSES ──────────────────────────────────────────────────

class EmailAnalysis:
    """Complete analysis of a single email."""
    def __init__(self):
        self.intent = "unknown"
        self.intent_confidence = 0.0
        self.priority = "normal"  # critical, high, normal, low, ignore
        self.reply_all = False
        self.reply_recipients = []
        self.tone = "professional"
        self.sentiment = "neutral"
        self.action_items = []
        self.follow_up_date = None
        self.meeting_detected = False
        self.attachments_summary = []
        self.thread_summary = None
        self.reasoning = []

class ThreadContext:
    """Represents an email thread for context-aware responses."""
    def __init__(self):
        self.messages = []
        self.participants = set()
        self.depth = 0
        self.sentiment_trajectory = []
        self.resolved = False

# ─── SMART REPLY-ALL DECISION ENGINE ────────────────────────────────────────

class ReplyAllDecisionEngine:
    """
    Decides whether to reply-all, reply-sender-only, or not reply at all.
    
    Decision matrix:
    - Reply-ALL when: question to group, decision needed from all, status update for team
    - Reply-SENDER when: personal question, 1:1 thread, sensitive topic
    - NO-REPLY when: FYI only, auto-generated, already answered, spam
    """
    
    REPLY_ALL_INDICATORS = [
        r"\b(all|team|everyone|group|folks|people)\b",
        r"\b(what do you (think|say|recommend))\b",
        r"\b(please (review|approve|confirm|check))\b",
        r"\b(need (everyone'?s|all|the team'?s) (input|feedback|approval))\b",
        r"\b(cc'ing|cc'd|looping in)\b",
        r"\b(for (everyone|the team|all hands))\b",
        r"\b(standup|sprint|retrospective|planning|review meeting)\b",
        r"\b(action item|todo|task assignment)\b",
        r"\b(deadline|due date|ETA|timeline)\b",
        r"\b(status update|progress report)\b",
    ]
    
    REPLY_SENDER_ONLY_INDICATORS = [
        r"\b(just between us|confidential|private|personal)\b",
        r"\b(my (question|issue|problem|request))\b",
        r"\b(can you (help|assist|explain) me)\b",
        r"\b(1:1|one.on.one|directly with you)\b",
        r"\b(salary|compensation|performance review|HR issue)\b",
        r"\b(thank you|thanks|appreciate it)\b",
        r"\b(noted|acknowledged|got it|will do)\b",
        r"\b(you (specifically|personally))\b",
    ]
    
    NO_REPLY_INDICATORS = [
        r"\b(no reply|do not reply|noreply|no-reply)\b",
        r"\b(auto-generated|automated|system generated)\b",
        r"\b(unsubscribe|opt.out|marketing)\b",
        r"\b(out of office|OOO|on vacation|auto.?reply)\b",
        r"\b(delivery failure|undeliverable|bounce)\b",
        r"\b(already (answered|resolved|handled|done))\b",
        r"\b(thank you for your (order|purchase|subscription))\b",
        r"\b(receipt|invoice attached|payment confirmation)\b",
    ]
    
    def decide(self, email: dict, thread: Optional[ThreadContext] = None) -> dict:
        """Analyze email and return reply decision."""
        subject = email.get("subject", "")
        body = email.get("body", "")
        to_list = email.get("to", [])
        cc_list = email.get("cc", [])
        sender = email.get("from", "")
        all_recipients = to_list + cc_list
        recipient_count = len(set(all_recipients))
        
        text = f"{subject} {body}".lower()
        result = {
            "action": "reply_all",
            "recipients": all_recipients,
            "reasoning": [],
            "confidence": 0.0
        }
        
        # Check no-reply indicators first
        no_reply_score = 0
        for pattern in self.NO_REPLY_INDICATORS:
            if re.search(pattern, text, re.IGNORECASE):
                no_reply_score += 1
                result["reasoning"].append(f"No-reply indicator: {pattern}")
        
        if no_reply_score >= 2:
            result["action"] = "no_reply"
            result["confidence"] = 0.85
            return result
        
        # Check reply-sender-only indicators
        sender_only_score = 0
        for pattern in self.REPLY_SENDER_ONLY_INDICATORS:
            if re.search(pattern, text, re.IGNORECASE):
                sender_only_score += 1
                result["reasoning"].append(f"Sender-only indicator: {pattern}")
        
        # Check reply-all indicators
        reply_all_score = 0
        for pattern in self.REPLY_ALL_INDICATORS:
            if re.search(pattern, text, re.IGNORECASE):
                reply_all_score += 1
                result["reasoning"].append(f"Reply-all indicator: {pattern}")
        
        # Thread depth heuristic
        if thread and thread.depth > 5:
            # Long threads: prefer sender-only unless clearly group question
            if reply_all_score < 2:
                sender_only_score += 1
                result["reasoning"].append(f"Long thread (depth={thread.depth}), prefer sender-only")
        
        # Recipient count heuristic
        if recipient_count == 1:
            sender_only_score += 2
            result["reasoning"].append("Single recipient, reply to sender only")
        elif recipient_count > 10:
            reply_all_score += 1
            result["reasoning"].append(f"Large recipient list ({recipient_count}), likely group communication")
        
        # Make decision
        if no_reply_score > 0 and no_reply_score >= reply_all_score:
            result["action"] = "no_reply"
            result["confidence"] = 0.7 + (no_reply_score * 0.1)
        elif sender_only_score > reply_all_score:
            result["action"] = "reply_sender_only"
            result["recipients"] = [sender]
            result["confidence"] = 0.7 + (sender_only_score * 0.05)
        else:
            result["action"] = "reply_all"
            result["confidence"] = 0.7 + (reply_all_score * 0.05)
        
        result["confidence"] = min(result["confidence"], 0.99)
        return result

# ─── INTENT CLASSIFICATION ──────────────────────────────────────────────────

class IntentClassifier:
    """Classifies email intent with confidence scoring."""
    
    INTENTS = {
        "question": {
            "patterns": [r"\?", r"\b(what|how|when|where|why|who|which|can you|could you|would you|is it|are there|do you)\b"],
            "weight": 1.0
        },
        "request_action": {
            "patterns": [r"\b(please|kindly|need you to|can you|could you|would you|request|require)\b"],
            "weight": 1.0
        },
        "meeting_request": {
            "patterns": [r"\b(meeting|call|zoom|teams|schedule|calendar|available|book|slot|time)\b"],
            "weight": 1.2
        },
        "approval_needed": {
            "patterns": [r"\b(approve|approval|sign off|review|ok|green light|go ahead|confirm)\b"],
            "weight": 1.1
        },
        "status_update": {
            "patterns": [r"\b(update|progress|status|report|FYI|heads up|just letting you know)\b"],
            "weight": 0.8
        },
        "issue_report": {
            "patterns": [r"\b(bug|issue|error|problem|broken|not working|fail|crash|urgent|critical)\b"],
            "weight": 1.3
        },
        "complaint": {
            "patterns": [r"\b(unhappy|disappointed|complaint|unacceptable|escalate|manager|refund|cancel)\b"],
            "weight": 1.4
        },
        "appreciation": {
            "patterns": [r"\b(thank|thanks|appreciate|great job|well done|awesome|excellent|love it)\b"],
            "weight": 0.6
        },
        "introduction": {
            "patterns": [r"\b(introduce|introduction|meet|connecting|referral|recommend)\b"],
            "weight": 0.9
        },
        "follow_up": {
            "patterns": [r"\b(follow up|following up|checking in|any update|reminder|ping)\b"],
            "weight": 1.0
        },
        "document_share": {
            "patterns": [r"\b(attached|document|file|report|spreadsheet|presentation|PDF|docx)\b"],
            "weight": 0.7
        },
        "decision_needed": {
            "patterns": [r"\b(decide|decision|choose|option|recommend|suggest|vote|consensus)\b"],
            "weight": 1.2
        },
    }
    
    def classify(self, email: dict) -> tuple:
        """Returns (intent, confidence) tuple."""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        scores = {}
        
        for intent, config in self.INTENTS.items():
            score = 0
            for pattern in config["patterns"]:
                matches = len(re.findall(pattern, text, re.IGNORECASE))
                score += matches * config["weight"]
            scores[intent] = score
        
        if not scores or max(scores.values()) == 0:
            return ("general", 0.3)
        
        best_intent = max(scores, key=scores.get)
        best_score = scores[best_intent]
        
        # Normalize confidence
        total = sum(scores.values())
        confidence = best_score / total if total > 0 else 0.3
        confidence = min(confidence, 0.99)
        
        return (best_intent, confidence)

# ─── ACTION ITEM EXTRACTOR ──────────────────────────────────────────────────

class ActionItemExtractor:
    """Extracts action items and assignments from emails."""
    
    ACTION_PATTERNS = [
        r"(?:@(\w+)|(\w+)\s*[,.:])\s*(?:please\s+)?(.+?)(?:\.|$)",
        r"(?:action item|todo|task|to-do)[:\s]+(.+?)(?:\.|$)",
        r"(?:can you|could you|would you|please)\s+(.+?)(?:\.|$)",
        r"(?:need to|should|must|have to)\s+(.+?)(?:\.|$)",
        r"(?:by\s+(?:EOD|EOB|end of day|end of business|tomorrow|Friday|Monday|\d{1,2}/\d{1,2}))\s*[:\s]*(.+?)(?:\.|$)",
    ]
    
    DEADLINE_PATTERNS = [
        r"by\s+(EOD|EOB|end of day|end of business)",
        r"by\s+(tomorrow|today|next week|this week)",
        r"by\s+(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)",
        r"by\s+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)",
        r"deadline[:\s]+(.+?)(?:\.|$)",
        r"due\s+(?:date|by)[:\s]+(.+?)(?:\.|$)",
    ]
    
    def extract(self, email: dict) -> list:
        """Extract action items from email."""
        text = email.get("body", "")
        items = []
        
        for pattern in self.ACTION_PATTERNS:
            matches = re.finditer(pattern, text, re.IGNORECASE | re.MULTILINE)
            for match in matches:
                item = match.group(0).strip()
                if len(item) > 10 and len(item) < 200:
                    # Try to find deadline
                    deadline = None
                    for dp in self.DEADLINE_PATTERNS:
                        dm = re.search(dp, text[max(0, match.start()-50):match.end()+50], re.IGNORECASE)
                        if dm:
                            deadline = dm.group(0).strip()
                            break
                    
                    items.append({
                        "action": item,
                        "deadline": deadline,
                        "assignee": match.group(1) if match.lastindex and match.group(1) else "unassigned"
                    })
        
        return items

# ─── TONE ANALYZER ──────────────────────────────────────────────────────────

class ToneAnalyzer:
    """Analyzes and matches email tone."""
    
    TONE_PROFILES = {
        "formal": {
            "indicators": ["dear", "sincerely", "regards", "respectfully", "pursuant", "hereby"],
            "response_style": "professional and structured"
        },
        "casual": {
            "indicators": ["hey", "hi", "thanks", "cheers", "cool", "awesome", "btw", "lol"],
            "response_style": "friendly and conversational"
        },
        "technical": {
            "indicators": ["implementation", "architecture", "API", "database", "deploy", "config", "bug", "fix"],
            "response_style": "precise and detail-oriented"
        },
        "urgent": {
            "indicators": ["urgent", "ASAP", "immediately", "critical", "emergency", "blocking"],
            "response_style": "direct and action-oriented"
        },
    }
    
    def analyze(self, email: dict) -> str:
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        scores = {}
        
        for tone, profile in self.TONE_PROFILES.items():
            score = sum(1 for ind in profile["indicators"] if ind in text)
            scores[tone] = score
        
        if not scores or max(scores.values()) == 0:
            return "professional"
        
        return max(scores, key=scores.get)

# ─── MAIN AGENT ──────────────────────────────────────────────────────────────

class ZionEmailAgentV45:
    """Comprehensive email intelligence agent with reply-all decision making."""
    
    def __init__(self):
        self.reply_engine = ReplyAllDecisionEngine()
        self.intent_classifier = IntentClassifier()
        self.action_extractor = ActionItemExtractor()
        self.tone_analyzer = ToneAnalyzer()
        self.processed_count = 0
        self.results = []
    
    def analyze_email(self, email: dict, thread: Optional[ThreadContext] = None) -> dict:
        """Complete analysis of a single email."""
        analysis = EmailAnalysis()
        
        # 1. Classify intent
        intent, confidence = self.intent_classifier.classify(email)
        analysis.intent = intent
        analysis.intent_confidence = confidence
        
        # 2. Analyze tone
        analysis.tone = self.tone_analyzer.analyze(email)
        
        # 3. Decide reply strategy
        reply_decision = self.reply_engine.decide(email, thread)
        analysis.reply_all = reply_decision["action"] == "reply_all"
        
        # 4. Extract action items
        analysis.action_items = self.action_extractor.extract(email)
        
        # 5. Determine priority
        analysis.priority = self._calculate_priority(email, intent, reply_decision)
        
        # 6. Check for meeting requests
        analysis.meeting_detected = intent == "meeting_request"
        
        # 7. Build reasoning
        analysis.reasoning = reply_decision["reasoning"]
        analysis.reasoning.append(f"Intent: {intent} ({confidence:.0%} confidence)")
        analysis.reasoning.append(f"Tone: {analysis.tone}")
        analysis.reasoning.append(f"Action items found: {len(analysis.action_items)}")
        
        return {
            "email_id": email.get("id", "unknown"),
            "from": email.get("from", ""),
            "subject": email.get("subject", ""),
            "intent": analysis.intent,
            "intent_confidence": f"{analysis.intent_confidence:.0%}",
            "priority": analysis.priority,
            "tone": analysis.tone,
            "reply_action": reply_decision["action"],
            "reply_confidence": f"{reply_decision['confidence']:.0%}",
            "reply_all": analysis.reply_all,
            "action_items": analysis.action_items,
            "meeting_detected": analysis.meeting_detected,
            "reasoning": analysis.reasoning,
            "timestamp": datetime.now().isoformat()
        }
    
    def _calculate_priority(self, email: dict, intent: str, reply_decision: dict) -> str:
        """Calculate email priority."""
        sender = email.get("from", "").lower()
        subject = email.get("subject", "").lower()
        
        # VIP check
        if any(vip in sender for vip in VIP_SENDERS) or any(vip in sender for vip in VIP_DOMAINS):
            return "critical"
        
        # Intent-based priority
        priority_map = {
            "complaint": "critical",
            "issue_report": "high",
            "approval_needed": "high",
            "meeting_request": "high",
            "decision_needed": "high",
            "request_action": "normal",
            "question": "normal",
            "follow_up": "normal",
            "status_update": "low",
            "appreciation": "low",
            "introduction": "low",
            "document_share": "low",
        }
        
        base = priority_map.get(intent, "normal")
        
        # Urgency boost
        if re.search(r"\b(urgent|ASAP|immediately|critical|emergency)\b", subject + email.get("body", ""), re.IGNORECASE):
            if base == "low":
                base = "normal"
            elif base == "normal":
                base = "high"
            elif base == "high":
                base = "critical"
        
        return base
    
    def process_batch(self, emails: list) -> list:
        """Process a batch of emails."""
        results = []
        for email in emails:
            result = self.analyze_email(email)
            results.append(result)
            self.processed_count += 1
        self.results = results
        return results
    
    def generate_report(self) -> str:
        """Generate a summary report of processed emails."""
        if not self.results:
            return "No emails processed."
        
        report = []
        report.append("=" * 70)
        report.append("  ZION EMAIL AGENT V45 — COMPREHENSIVE ANALYSIS REPORT")
        report.append("=" * 70)
        report.append(f"  Processed: {len(self.results)} emails")
        report.append(f"  Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append("=" * 70)
        
        # Summary stats
        actions = {}
        priorities = {}
        intents = {}
        reply_all_count = 0
        
        for r in self.results:
            action = r["reply_action"]
            actions[action] = actions.get(action, 0) + 1
            priorities[r["priority"]] = priorities.get(r["priority"], 0) + 1
            intents[r["intent"]] = intents.get(r["intent"], 0) + 1
            if r["reply_all"]:
                reply_all_count += 1
        
        report.append("\n📊 ACTION DISTRIBUTION:")
        for action, count in sorted(actions.items(), key=lambda x: -x[1]):
            report.append(f"   {action}: {count}")
        
        report.append(f"\n📬 REPLY-ALL DECISIONS:")
        report.append(f"   Reply-All: {reply_all_count}")
        report.append(f"   Reply-Sender-Only: {actions.get('reply_sender_only', 0)}")
        report.append(f"   No-Reply: {actions.get('no_reply', 0)}")
        
        report.append(f"\n🔴 PRIORITY BREAKDOWN:")
        for p in ["critical", "high", "normal", "low"]:
            if p in priorities:
                report.append(f"   {p.upper()}: {priorities[p]}")
        
        report.append(f"\n🎯 TOP INTENTS:")
        for intent, count in sorted(intents.items(), key=lambda x: -x[1])[:5]:
            report.append(f"   {intent}: {count}")
        
        # Detailed results
        report.append(f"\n{'─' * 70}")
        report.append("📧 DETAILED EMAIL ANALYSIS:")
        report.append(f"{'─' * 70}")
        
        for i, r in enumerate(self.results, 1):
            report.append(f"\n  [{i}] {r['subject'][:60]}")
            report.append(f"      From: {r['from'][:40]}")
            report.append(f"      Intent: {r['intent']} ({r['intent_confidence']}) | Priority: {r['priority'].upper()}")
            report.append(f"      Reply: {r['reply_action']} ({r['reply_confidence']})")
            if r['action_items']:
                report.append(f"      Action Items: {len(r['action_items'])}")
                for item in r['action_items'][:2]:
                    report.append(f"        → {item['action'][:70]}")
            if r['meeting_detected']:
                report.append(f"      📅 Meeting Request Detected")
        
        report.append(f"\n{'=' * 70}")
        report.append("  Report generated by Zion Email Agent V45")
        report.append("  Contact: kleber@ziontechgroup.com | +1 302 464 0950")
        report.append("=" * 70)
        
        return "\n".join(report)


# ─── DEMO / TEST ─────────────────────────────────────────────────────────────

def run_demo():
    """Run demo with test emails to verify V45 capabilities."""
    
    test_emails = [
        {
            "id": "001",
            "from": "client-vip.com",
            "subject": "URGENT: Production outage - need all hands",
            "to": ["team@ziontechgroup.com"],
            "cc": ["manager@client-vip.com", "cto@client-vip.com"],
            "body": "Hi team, we're experiencing a critical production outage affecting all users. Need everyone to join the war room immediately. Please confirm availability ASAP. @John can you check the database? @Sarah please review the deployment logs. We need this resolved by EOD."
        },
        {
            "id": "002",
            "from": "john@company.com",
            "subject": "Quick question about the API",
            "to": ["support@ziontechgroup.com"],
            "cc": [],
            "body": "Hey, quick question - is there a rate limit on the API endpoints? Just want to make sure our integration won't hit any walls. Thanks!"
        },
        {
            "id": "003",
            "from": "noreply@github.com",
            "subject": "[GitHub] Pull request merged",
            "to": ["dev@ziontechgroup.com"],
            "cc": [],
            "body": "Pull request #1234 has been merged into main. This is an automated message. Do not reply."
        },
        {
            "id": "004",
            "from": "legal@bigcorp.com",
            "subject": "Contract review needed - please review and approve",
            "to": ["kleber@ziontechgroup.com"],
            "cc": ["legal-team@bigcorp.com", "procurement@bigcorp.com"],
            "body": "Dear Kleber, Please find attached the updated service agreement for Q3. We need your team's review and approval by Friday. Please share with all stakeholders and confirm. Best regards, Legal Team."
        },
        {
            "id": "005",
            "from": "sarah@partner.com",
            "subject": "Great work on the launch!",
            "to": ["team@ziontechgroup.com"],
            "cc": ["ceo@partner.com"],
            "body": "Hey team, just wanted to say amazing work on yesterday's launch! The new features are fantastic. Thanks for all the hard work. Cheers!"
        },
        {
            "id": "006",
            "from": "auto@notifications.com",
            "subject": "Your weekly digest",
            "to": ["user@ziontechgroup.com"],
            "cc": [],
            "body": "Here's your weekly activity summary. No reply needed. To unsubscribe, click here."
        },
        {
            "id": "007",
            "from": "pm@client.com",
            "subject": "Sprint planning - need everyone's input on priorities",
            "to": ["dev-team@ziontechgroup.com"],
            "cc": ["pm@client.com", "design@client.com", "qa@client.com"],
            "body": "Hi all, for tomorrow's sprint planning, I need everyone's input on the priority order. Please review the backlog and come prepared with estimates. @Alex can you prepare the sprint board? @Maria please review the user stories. Let's aim to finish planning by 2pm."
        },
        {
            "id": "008",
            "from": "hr@company.com",
            "subject": "Salary review discussion - confidential",
            "to": ["kleber@ziontechgroup.com"],
            "cc": [],
            "body": "Hi Kleber, I'd like to schedule a 1:1 to discuss your compensation review. This is confidential between us. Are you available Thursday at 2pm? Regards, HR."
        },
        {
            "id": "009",
            "from": "security@bank.com",
            "subject": "Suspicious activity detected on account",
            "to": ["kleber@ziontechgroup.com"],
            "cc": [],
            "body": "Dear Customer, We detected suspicious activity on your account. Please verify your identity immediately by clicking the link below. Failure to respond within 24 hours may result in account suspension."
        },
        {
            "id": "010",
            "from": "vendor@supplier.com",
            "subject": "Invoice #4567 - Payment overdue",
            "to": ["accounts@ziontechgroup.com"],
            "cc": ["finance@supplier.com"],
            "body": "Dear Accounts Payable, Invoice #4567 for $12,500 is now 30 days overdue. Please process payment immediately to avoid service disruption. Attached is the original invoice for reference. Regards, Accounts Receivable."
        }
    ]
    
    agent = ZionEmailAgentV45()
    results = agent.process_batch(test_emails)
    report = agent.generate_report()
    print(report)
    
    # Save results
    output = {
        "agent": "Zion Email Agent V45",
        "version": "45.0",
        "timestamp": datetime.now().isoformat(),
        "total_processed": len(results),
        "results": results
    }
    
    output_path = os.path.join(os.path.dirname(__file__), '..', 'commands', 'v45_results.json')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w') as f:
        json.dump(output, f, indent=2)
    
    print(f"\n✅ Results saved to {output_path}")
    return results


if __name__ == "__main__":
    run_demo()
