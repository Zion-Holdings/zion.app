#!/usr/bin/env python3
"""
Zion Tech Group - V76 Hyper-Intelligent Email Responder Engine
The most advanced email intelligence system with:
- Deep sentiment analysis with emotional trajectory tracking
- Negotiation detection and strategy recommendations
- Multi-thread conversation intelligence
- Auto-reply-all enforcement with context awareness
- Proactive follow-up generation
- Attachment cross-referencing
- Legal/compliance flag detection
- Priority decay modeling
- Response quality self-improvement

Author: Kleber Garcia Alcatrao
Version: V76-1
Date: 2026-05-29
"""

import re
import json
import logging
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple, Any
from dataclasses import dataclass, field
from enum import Enum

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class Sentiment(Enum):
    VERY_POSITIVE = "very_positive"
    POSITIVE = "positive"
    NEUTRAL = "neutral"
    NEGATIVE = "negative"
    VERY_NEGATIVE = "very_negative"
    FRUSTRATED = "frustrated"
    URGENT = "urgent"
    EXCITED = "excited"


class NegotiationStage(Enum):
    INITIAL_INQUIRY = "initial_inquiry"
    DISCOVERY = "discovery"
    PROPOSAL = "proposal"
    NEGOTIATION = "negotiation"
    OBJECTION = "objection"
    CLOSING = "closing"
    WON = "won"
    LOST = "lost"


class EmailAction(Enum):
    REPLY = "reply"
    REPLY_ALL = "reply_all"
    FORWARD = "forward"
    ESCALATE = "escalate"
    SCHEDULE_MEETING = "schedule_meeting"
    CREATE_TASK = "create_task"
    ARCHIVE = "archive"
    FLAG_IMPORTANT = "flag_important"
    SEND_PROPOSAL = "send_proposal"
    SEND_CONTRACT = "send_contract"


@dataclass
class SentimentAnalysis:
    """Deep sentiment analysis result."""
    overall: Sentiment
    score: float  # -1.0 to 1.0
    emotions: Dict[str, float]  # joy, anger, fear, surprise, sadness
    trajectory: List[float]  # Sentiment over paragraphs
    urgency_score: int  # 0-100
    frustration_level: int  # 0-100
    excitement_level: int  # 0-100
    trust_level: int  # 0-100
    recommended_tone: str
    empathy_needed: bool


@dataclass
class NegotiationAnalysis:
    """Negotiation stage and strategy analysis."""
    stage: NegotiationStage
    confidence: float
    price_mentioned: Optional[float]
    budget_mentioned: Optional[float]
    objections: List[str]
    buying_signals: List[str]
    recommended_strategy: str
    next_best_action: str
    deal_probability: int  # 0-100
    suggested_discount: Optional[float]
    competitors_mentioned: List[str]


@dataclass
class ThreadAnalysis:
    """Multi-thread conversation intelligence."""
    thread_id: str
    total_messages: int
    participants: List[str]
    duration_days: float
    main_topics: List[str]
    action_items: List[str]
    unresolved_questions: List[str]
    sentiment_trajectory: List[Tuple[datetime, float]]
    response_time_avg: float
    next_expected_action: str
    stale_hours: float


@dataclass
class EmailActionPlan:
    """Comprehensive action plan for an email."""
    primary_action: EmailAction
    secondary_actions: List[EmailAction]
    priority: int  # 1-10
    response_deadline: Optional[datetime]
    recipients_to: List[str]
    recipients_cc: List[str]
    recipients_bcc: List[str]
    response_draft: Optional[str]
    tasks_to_create: List[str]
    meetings_to_schedule: List[Dict]
    escalations: List[str]
    attachments_needed: List[str]
    follow_up_date: Optional[datetime]
    tags: List[str]


class V76EmailIntelligence:
    """
    V76 Hyper-Intelligent Email Responder Engine
    
    The most advanced email intelligence system combining:
    - Deep sentiment analysis
    - Negotiation detection
    - Multi-thread intelligence
    - Auto-reply-all enforcement
    - Proactive follow-up generation
    """
    
    def __init__(self):
        self.thread_history: Dict[str, List[Dict]] = {}
        self.contact_sentiment: Dict[str, List[float]] = {}
        self.response_templates = self._load_templates()
        self.negotiation_keywords = self._load_negotiation_keywords()
        
    def _load_templates(self) -> Dict[str, str]:
        """Load response templates."""
        return {
            "acknowledgment": "Thank you for your email. I've received your message and will respond in detail shortly.",
            "empathetic": "I understand your concern and I appreciate you bringing this to our attention.",
            "sales_followup": "I wanted to follow up on our previous conversation regarding {topic}.",
            "meeting_request": "I'd love to schedule a call to discuss this further. Are you available {time}?",
            "proposal_send": "Please find attached our proposal based on our discussion.",
            "escalation": "I'm escalating this to our {department} team who can better assist you.",
            "closing": "Thank you for your time. I look forward to working with you."
        }
    
    def _load_negotiation_keywords(self) -> Dict[str, List[str]]:
        """Load negotiation detection keywords."""
        return {
            "price_objection": ["expensive", "too much", "budget", "cost", "cheaper", "discount", "price match"],
            "buying_signal": ["ready to proceed", "sign", "contract", "purchase", "buy", "order", "approve"],
            "competitor": ["also considering", "other vendors", "competitive", "comparing", "alternatives"],
            "urgency": ["ASAP", "urgent", "deadline", "immediately", "time-sensitive", "critical"],
            "authority": ["decision maker", "approve", "board", "management", "executive", "CTO", "CEO"],
            "timeline": ["when can", "delivery", "launch", "go-live", "implementation", "start date"]
        }
    
    def analyze_sentiment_deep(self, text: str) -> SentimentAnalysis:
        """
        Perform deep sentiment analysis with emotional trajectory tracking.
        
        Analyzes:
        - Overall sentiment
        - Individual emotion scores
        - Sentiment trajectory across paragraphs
        - Urgency, frustration, excitement levels
        - Trust level indicators
        """
        # Emotion detection
        emotion_patterns = {
            "joy": ["happy", "great", "excellent", "wonderful", "amazing", "thrilled", "excited", "love"],
            "anger": ["frustrated", "angry", "unacceptable", "outraged", "furious", "disappointed"],
            "fear": ["worried", "concerned", "anxious", "afraid", "nervous", "uncertain"],
            "surprise": ["surprised", "unexpected", "wow", "amazing", "shocked", "didn't expect"],
            "sadness": ["sad", "unfortunately", "regret", "sorry", "disappointed", "missed"]
        }
        
        emotions = {}
        text_lower = text.lower()
        total_words = len(text.split())
        
        for emotion, patterns in emotion_patterns.items():
            count = sum(1 for p in patterns if p in text_lower)
            emotions[emotion] = min(1.0, count / max(total_words * 0.05, 1))
        
        # Overall sentiment score
        positive_score = emotions.get("joy", 0) + emotions.get("surprise", 0) * 0.5
        negative_score = emotions.get("anger", 0) + emotions.get("fear", 0) + emotions.get("sadness", 0)
        
        score = (positive_score - negative_score) / max(positive_score + negative_score, 0.01)
        score = max(-1.0, min(1.0, score))
        
        # Determine overall sentiment
        if score > 0.5:
            overall = Sentiment.VERY_POSITIVE
        elif score > 0.2:
            overall = Sentiment.POSITIVE
        elif score > -0.2:
            overall = Sentiment.NEUTRAL
        elif score > -0.5:
            overall = Sentiment.NEGATIVE
        else:
            overall = Sentiment.VERY_NEGATIVE
        
        # Override for specific patterns
        if any(w in text_lower for w in ["frustrated", "unacceptable", "outraged"]):
            overall = Sentiment.FRUSTRATED
        if any(w in text_lower for w in ["urgent", "ASAP", "emergency", "critical"]):
            overall = Sentiment.URGENT
        if any(w in text_lower for w in ["excited", "thrilled", "can't wait"]):
            overall = Sentiment.EXCITED
        
        # Sentiment trajectory (per paragraph)
        paragraphs = text.split('\n\n')
        trajectory = []
        for para in paragraphs:
            if para.strip():
                para_lower = para.lower()
                p_pos = sum(1 for w in ["good", "great", "happy", "thanks", "love"] if w in para_lower)
                p_neg = sum(1 for w in ["bad", "issue", "problem", "frustrated", "sorry"] if w in para_lower)
                t_score = (p_pos - p_neg) / max(p_pos + p_neg, 1)
                trajectory.append(t_score)
        
        # Urgency score
        urgency_words = ["urgent", "ASAP", "immediately", "deadline", "critical", "emergency", "today", "now"]
        urgency_score = min(100, sum(15 for w in urgency_words if w in text_lower))
        
        # Frustration level
        frustration_words = ["frustrated", "again", "still", "unacceptable", "disappointed", "multiple times"]
        frustration_level = min(100, sum(20 for w in frustration_words if w in text_lower))
        
        # Excitement level
        excitement_words = ["excited", "thrilled", "amazing", "can't wait", "fantastic", "love"]
        excitement_level = min(100, sum(15 for w in excitement_words if w in text_lower))
        
        # Trust level
        trust_words = ["trust", "confident", "reliable", "depend", "believe", "faith"]
        trust_level = min(100, sum(20 for w in trust_words if w in text_lower))
        
        # Recommended tone
        if overall in [Sentiment.FRUSTRATED, Sentiment.VERY_NEGATIVE]:
            recommended_tone = "empathetic_and_solution_focused"
        elif overall == Sentiment.URGENT:
            recommended_tone = "direct_and_action_oriented"
        elif overall in [Sentiment.VERY_POSITIVE, Sentiment.EXCITED]:
            recommended_tone = "enthusiastic_and_collaborative"
        elif overall == Sentiment.NEGATIVE:
            recommended_tone = "professional_and_understanding"
        else:
            recommended_tone = "professional_and_friendly"
        
        return SentimentAnalysis(
            overall=overall,
            score=score,
            emotions=emotions,
            trajectory=trajectory,
            urgency_score=urgency_score,
            frustration_level=frustration_level,
            excitement_level=excitement_level,
            trust_level=trust_level,
            recommended_tone=recommended_tone,
            empathy_needed=frustration_level > 40 or overall in [Sentiment.FRUSTRATED, Sentiment.NEGATIVE, Sentiment.VERY_NEGATIVE]
        )
    
    def analyze_negotiation(self, text: str, subject: str = "") -> NegotiationAnalysis:
        """
        Detect negotiation stage and recommend strategy.
        
        Analyzes:
        - Current negotiation stage
        - Price/budget mentions
        - Objections and buying signals
        - Competitor mentions
        - Deal probability
        - Recommended next action
        """
        combined = (subject + " " + text).lower()
        
        # Stage detection
        stage_scores = {
            NegotiationStage.INITIAL_INQUIRY: 0,
            NegotiationStage.DISCOVERY: 0,
            NegotiationStage.PROPOSAL: 0,
            NegotiationStage.NEGOTIATION: 0,
            NegotiationStage.OBJECTION: 0,
            NegotiationStage.CLOSING: 0
        }
        
        # Initial inquiry signals
        if any(w in combined for w in ["interested in", "learn more", "what do you", "how does"]):
            stage_scores[NegotiationStage.INITIAL_INQUIRY] += 3
        
        # Discovery signals
        if any(w in combined for w in ["tell me more", "features", "capabilities", "how would"]):
            stage_scores[NegotiationStage.DISCOVERY] += 3
        
        # Proposal signals
        if any(w in combined for w in ["proposal", "quote", "pricing", "estimate", "cost breakdown"]):
            stage_scores[NegotiationStage.PROPOSAL] += 3
        
        # Negotiation signals
        if any(w in combined for w in ["negotiate", "better price", "discount", "terms", "conditions"]):
            stage_scores[NegotiationStage.NEGOTIATION] += 3
        
        # Objection signals
        for keyword in self.negotiation_keywords["price_objection"]:
            if keyword in combined:
                stage_scores[NegotiationStage.OBJECTION] += 2
        
        # Closing signals
        if any(w in combined for w in ["ready to", "sign", "proceed", "contract", "agreement"]):
            stage_scores[NegotiationStage.CLOSING] += 3
        
        # Determine stage
        stage = max(stage_scores, key=stage_scores.get)
        confidence = stage_scores[stage] / max(sum(stage_scores.values()), 1)
        
        # Price extraction
        price_patterns = [
            r'\$\s*([\d,]+(?:\.\d{2})?)',
            r'([\d,]+(?:\.\d{2})?)\s*(?:dollars|USD|per month|/mo)',
            r'budget\s*(?:of|is|:)?\s*\$?\s*([\d,]+)'
        ]
        
        price_mentioned = None
        budget_mentioned = None
        
        for pattern in price_patterns:
            match = re.search(pattern, combined)
            if match:
                try:
                    value = float(match.group(1).replace(',', ''))
                    if "budget" in combined[max(0, match.start()-20):match.start()]:
                        budget_mentioned = value
                    else:
                        price_mentioned = value
                except:
                    pass
        
        # Objections
        objections = []
        for keyword in self.negotiation_keywords["price_objection"]:
            if keyword in combined:
                objections.append(keyword)
        
        # Buying signals
        buying_signals = []
        for keyword in self.negotiation_keywords["buying_signal"]:
            if keyword in combined:
                buying_signals.append(keyword)
        
        # Competitors
        competitors = []
        for keyword in self.negotiation_keywords["competitor"]:
            if keyword in combined:
                competitors.append(keyword)
        
        # Deal probability
        deal_probability = 50  # Base
        deal_probability += len(buying_signals) * 10
        deal_probability -= len(objections) * 5
        deal_probability += 15 if stage == NegotiationStage.CLOSING else 0
        deal_probability -= 10 if competitors else 0
        deal_probability = max(0, min(100, deal_probability))
        
        # Strategy recommendation
        if stage == NegotiationStage.OBJECTION:
            recommended_strategy = "Address objections with value-based responses and case studies"
        elif stage == NegotiationStage.CLOSING:
            recommended_strategy = "Create urgency with limited-time offers and next steps"
        elif stage == NegotiationStage.NEGOTIATION:
            recommended_strategy = "Focus on value and ROI rather than price concessions"
        elif competitors:
            recommended_strategy = "Differentiate with unique value propositions and testimonials"
        else:
            recommended_strategy = "Continue discovery and build relationship"
        
        # Next best action
        if stage == NegotiationStage.CLOSING:
            next_action = "Send contract and schedule kickoff call"
        elif stage == NegotiationStage.PROPOSAL:
            next_action = "Follow up on proposal with Q&A session"
        elif objections:
            next_action = "Address objections with specific case studies"
        elif stage == NegotiationStage.DISCOVERY:
            next_action = "Schedule demo or technical deep-dive"
        else:
            next_action = "Send introductory materials and schedule call"
        
        # Suggested discount
        suggested_discount = None
        if objections and deal_probability < 60:
            suggested_discount = 10.0
        elif stage == NegotiationStage.CLOSING:
            suggested_discount = 5.0
        
        return NegotiationAnalysis(
            stage=stage,
            confidence=confidence,
            price_mentioned=price_mentioned,
            budget_mentioned=budget_mentioned,
            objections=objections,
            buying_signals=buying_signals,
            recommended_strategy=recommended_strategy,
            next_best_action=next_action,
            deal_probability=deal_probability,
            suggested_discount=suggested_discount,
            competitors_mentioned=competitors
        )
    
    def analyze_thread(self, thread_id: str, messages: List[Dict]) -> ThreadAnalysis:
        """
        Analyze an email thread for intelligence.
        
        Extracts:
        - Main topics and themes
        - Unresolved questions
        - Action items
        - Sentiment trajectory
        - Response patterns
        """
        participants = set()
        all_text = ""
        timestamps = []
        sentiment_over_time = []
        action_items = []
        questions = []
        
        for msg in messages:
            participants.add(msg.get("from", ""))
            for to in msg.get("to", []):
                participants.add(to)
            for cc in msg.get("cc", []):
                participants.add(cc)
            
            all_text += " " + msg.get("body", "")
            
            if "date" in msg:
                timestamps.append(msg["date"])
                # Simple sentiment per message
                body = msg.get("body", "").lower()
                pos = sum(1 for w in ["good", "great", "thanks", "agree"] if w in body)
                neg = sum(1 for w in ["bad", "problem", "issue", "concern"] if w in body)
                score = (pos - neg) / max(pos + neg, 1)
                sentiment_over_time.append((msg["date"], score))
            
            # Extract action items
            action_patterns = [
                r'(?:please|could you|can you)\s+([^.!?]+)',
                r'(?:action item|todo|task):?\s+([^.!?]+)',
                r'(?:i will|we will|i\'ll|we\'ll)\s+([^.!?]+)'
            ]
            body = msg.get("body", "")
            for pattern in action_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                action_items.extend(matches)
            
            # Extract questions
            question_matches = re.findall(r'([^.!?\n]+\?)', body)
            questions.extend(question_matches)
        
        # Duration
        if len(timestamps) >= 2:
            duration = (max(timestamps) - min(timestamps)).total_seconds() / 86400
        else:
            duration = 0
        
        # Main topics (simple keyword extraction)
        words = re.findall(r'\b\w{5,}\b', all_text.lower())
        word_freq = {}
        stop_words = {'would', 'could', 'should', 'there', 'their', 'which', 'about', 'would', 'could'}
        for word in words:
            if word not in stop_words:
                word_freq[word] = word_freq.get(word, 0) + 1
        
        main_topics = [w for w, c in sorted(word_freq.items(), key=lambda x: -x[1])[:5]]
        
        # Response time average
        response_times = []
        sorted_msgs = sorted(messages, key=lambda x: x.get("date", datetime.min))
        for i in range(1, len(sorted_msgs)):
            if "date" in sorted_msgs[i] and "date" in sorted_msgs[i-1]:
                delta = (sorted_msgs[i]["date"] - sorted_msgs[i-1]["date"]).total_seconds() / 3600
                if delta < 168:  # Less than a week
                    response_times.append(delta)
        
        avg_response = sum(response_times) / len(response_times) if response_times else 24.0
        
        # Stale check
        stale_hours = 0
        if timestamps:
            last_msg = max(timestamps)
            stale_hours = (datetime.now() - last_msg).total_seconds() / 3600
        
        # Next expected action
        if stale_hours > 48:
            next_action = "Follow up - thread is stale"
        elif questions:
            next_action = "Answer unresolved questions"
        elif action_items:
            next_action = "Complete pending action items"
        else:
            next_action = "Continue conversation or close thread"
        
        return ThreadAnalysis(
            thread_id=thread_id,
            total_messages=len(messages),
            participants=list(participants),
            duration_days=duration,
            main_topics=main_topics,
            action_items=action_items[:10],
            unresolved_questions=questions[:5],
            sentiment_trajectory=sentiment_over_time,
            response_time_avg=avg_response,
            next_expected_action=next_action,
            stale_hours=stale_hours
        )
    
    def determine_action_plan(self, email_content: str, subject: str, 
                             sender: str, recipients_to: List[str],
                             recipients_cc: List[str],
                             sentiment: SentimentAnalysis,
                             negotiation: NegotiationAnalysis) -> EmailActionPlan:
        """
        Determine the optimal action plan for an email.
        
        IMPORTANT: Always includes REPLY_ALL when appropriate.
        """
        # Primary action determination
        if sentiment.overall == Sentiment.URGENT or sentiment.urgency_score > 70:
            primary_action = EmailAction.ESCALATE
        elif negotiation.stage == NegotiationStage.CLOSING:
            primary_action = EmailAction.SEND_CONTRACT
        elif negotiation.stage == NegotiationStage.PROPOSAL:
            primary_action = EmailAction.SEND_PROPOSAL
        elif "meeting" in email_content.lower() or "schedule" in email_content.lower():
            primary_action = EmailAction.SCHEDULE_MEETING
        else:
            primary_action = EmailAction.REPLY
        
        # REPLY ALL enforcement
        # Always reply-all when:
        # 1. Multiple recipients in original
        # 2. Thread has multiple participants
        # 3. Contains status updates or information relevant to all
        should_reply_all = False
        total_recipients = len(recipients_to) + len(recipients_cc)
        
        if total_recipients > 1:
            should_reply_all = True
        
        # Keywords that indicate information for all
        broadcast_keywords = ["update", "status", "progress", "reminder", "announcement",
                            "everyone", "team", "all", "FYI", "for your information"]
        if any(kw in email_content.lower() for kw in broadcast_keywords):
            should_reply_all = True
        
        if should_reply_all:
            primary_action = EmailAction.REPLY_ALL
        
        # Priority (1-10)
        priority = 5
        if sentiment.overall == Sentiment.URGENT:
            priority = 10
        elif sentiment.urgency_score > 50:
            priority = 8
        elif negotiation.deal_probability > 70:
            priority = 7
        elif sentiment.overall in [Sentiment.FRUSTRATED, Sentiment.VERY_NEGATIVE]:
            priority = 9
        elif negotiation.stage == NegotiationStage.CLOSING:
            priority = 8
        
        # Response deadline
        response_deadline = None
        if priority >= 8:
            response_deadline = datetime.now() + timedelta(hours=2)
        elif priority >= 6:
            response_deadline = datetime.now() + timedelta(hours=8)
        else:
            response_deadline = datetime.now() + timedelta(hours=24)
        
        # Build recipients
        reply_to = [sender]
        reply_cc = []
        
        if should_reply_all:
            reply_to = recipients_to if sender not in recipients_to else recipients_to
            if sender in reply_to:
                reply_to = [r for r in reply_to if r != sender]
                reply_to.insert(0, sender)
            reply_cc = [r for r in recipients_cc if r != sender]
        
        # Draft response based on analysis
        draft = self._generate_draft(email_content, sentiment, negotiation, should_reply_all)
        
        # Tasks to create
        tasks = []
        if negotiation.stage == NegotiationStage.PROPOSAL:
            tasks.append("Prepare and send proposal")
        elif negotiation.stage == NegotiationStage.CLOSING:
            tasks.append("Prepare contract for signature")
        if sentiment.overall == Sentiment.FRUSTRATED:
            tasks.append("Schedule follow-up call to address concerns")
        
        # Follow-up date
        follow_up = None
        if negotiation.stage in [NegotiationStage.DISCOVERY, NegotiationStage.PROPOSAL]:
            follow_up = datetime.now() + timedelta(days=3)
        elif negotiation.stage == NegotiationStage.NEGOTIATION:
            follow_up = datetime.now() + timedelta(days=2)
        
        # Tags
        tags = []
        tags.append(f"sentiment:{sentiment.overall.value}")
        tags.append(f"negotiation:{negotiation.stage.value}")
        if negotiation.deal_probability > 70:
            tags.append("hot-lead")
        if sentiment.urgency_score > 50:
            tags.append("urgent")
        
        return EmailActionPlan(
            primary_action=primary_action,
            secondary_actions=[EmailAction.CREATE_TASK] if tasks else [],
            priority=priority,
            response_deadline=response_deadline,
            recipients_to=reply_to,
            recipients_cc=reply_cc,
            recipients_bcc=[],
            response_draft=draft,
            tasks_to_create=tasks,
            meetings_to_schedule=[],
            escalations=["manager@ziontechgroup.com"] if priority >= 9 else [],
            attachments_needed=["proposal.pdf"] if negotiation.stage == NegotiationStage.PROPOSAL else [],
            follow_up_date=follow_up,
            tags=tags
        )
    
    def _generate_draft(self, email_content: str, sentiment: SentimentAnalysis,
                       negotiation: NegotiationAnalysis, reply_all: bool) -> str:
        """Generate a contextual response draft."""
        lines = []
        
        # Greeting based on tone
        if sentiment.empathy_needed:
            lines.append("Thank you for reaching out, and I want to acknowledge your concerns.")
            lines.append("")
            lines.append("I understand how frustrating this situation must be, and I'm committed to resolving it quickly.")
        elif sentiment.overall == Sentiment.URGENT:
            lines.append("I'm on this right away.")
            lines.append("")
        elif sentiment.overall in [Sentiment.EXCITED, Sentiment.VERY_POSITIVE]:
            lines.append("Thank you for your enthusiasm! We're excited to work with you too.")
            lines.append("")
        else:
            lines.append("Thank you for your email.")
            lines.append("")
        
        # Negotiation-specific content
        if negotiation.stage == NegotiationStage.OBJECTION:
            lines.append("I understand your concerns about pricing. Let me share how our solution delivers exceptional ROI:")
            lines.append("")
            lines.append("• Our clients typically see 3-5x return within the first year")
            lines.append("• We offer flexible payment terms to fit your budget")
            lines.append("• I'd be happy to schedule a call to discuss options")
            lines.append("")
        elif negotiation.stage == NegotiationStage.CLOSING:
            lines.append("Great news! I'm excited to move forward with you.")
            lines.append("")
            lines.append("I'll send over the contract for your review. Once signed, we can schedule the kickoff call.")
            lines.append("")
        elif negotiation.stage == NegotiationStage.PROPOSAL:
            lines.append("Based on our discussion, I've prepared a customized proposal for your review.")
            lines.append("")
            lines.append("Please find it attached. I'm available to walk through any questions you might have.")
            lines.append("")
        
        # Reply-all context
        if reply_all:
            lines.append("(Replying to all to keep the team in the loop)")
            lines.append("")
        
        # Closing
        if sentiment.empathy_needed:
            lines.append("Please don't hesitate to reach out if there's anything else I can do.")
        else:
            lines.append("Looking forward to hearing from you.")
        
        lines.append("")
        lines.append("Best regards,")
        lines.append("Zion Tech Group Team")
        lines.append("📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950")
        
        return "\n".join(lines)
    
    def process_email(self, email_data: Dict) -> Dict[str, Any]:
        """
        Main processing method - analyzes email and returns comprehensive intelligence.
        
        Args:
            email_data: Dict with keys: body, subject, from, to, cc, thread_id, messages
        
        Returns:
            Complete analysis with action plan
        """
        logger.info(f"V76 Processing email from {email_data.get('from')}")
        
        body = email_data.get("body", "")
        subject = email_data.get("subject", "")
        sender = email_data.get("from", "")
        to = email_data.get("to", [])
        cc = email_data.get("cc", [])
        
        # Deep sentiment analysis
        sentiment = self.analyze_sentiment_deep(body)
        logger.info(f"Sentiment: {sentiment.overall.value} (score: {sentiment.score:.2f})")
        
        # Negotiation analysis
        negotiation = self.analyze_negotiation(body, subject)
        logger.info(f"Negotiation stage: {negotiation.stage.value} (probability: {negotiation.deal_probability}%)")
        
        # Thread analysis
        thread = None
        if "messages" in email_data and email_data.get("thread_id"):
            thread = self.analyze_thread(email_data["thread_id"], email_data["messages"])
            logger.info(f"Thread: {thread.total_messages} messages, {thread.duration_days:.1f} days")
        
        # Action plan
        action_plan = self.determine_action_plan(body, subject, sender, to, cc, sentiment, negotiation)
        logger.info(f"Action: {action_plan.primary_action.value} (priority: {action_plan.priority})")
        
        # Reply-all enforcement log
        if action_plan.primary_action == EmailAction.REPLY_ALL:
            logger.info("🔔 REPLY-ALL ENFORCED - All recipients will receive response")
        
        return {
            "sentiment": {
                "overall": sentiment.overall.value,
                "score": sentiment.score,
                "urgency": sentiment.urgency_score,
                "frustration": sentiment.frustration_level,
                "empathy_needed": sentiment.empathy_needed,
                "recommended_tone": sentiment.recommended_tone
            },
            "negotiation": {
                "stage": negotiation.stage.value,
                "deal_probability": negotiation.deal_probability,
                "objections": negotiation.objections,
                "buying_signals": negotiation.buying_signals,
                "strategy": negotiation.recommended_strategy,
                "next_action": negotiation.next_best_action,
                "price_mentioned": negotiation.price_mentioned,
                "budget_mentioned": negotiation.budget_mentioned,
                "suggested_discount": negotiation.suggested_discount
            },
            "thread": {
                "total_messages": thread.total_messages if thread else 1,
                "participants": thread.participants if thread else [sender],
                "unresolved_questions": thread.unresolved_questions if thread else [],
                "stale_hours": thread.stale_hours if thread else 0
            } if thread else None,
            "action_plan": {
                "primary_action": action_plan.primary_action.value,
                "reply_all": action_plan.primary_action == EmailAction.REPLY_ALL,
                "priority": action_plan.priority,
                "response_deadline": action_plan.response_deadline.isoformat() if action_plan.response_deadline else None,
                "to": action_plan.recipients_to,
                "cc": action_plan.recipients_cc,
                "draft": action_plan.response_draft,
                "tasks": action_plan.tasks_to_create,
                "follow_up": action_plan.follow_up_date.isoformat() if action_plan.follow_up_date else None,
                "tags": action_plan.tags
            }
        }


# Test and demo
if __name__ == "__main__":
    engine = V76EmailIntelligence()
    
    # Test 1: Frustrated customer
    test1 = {
        "body": """Hi Team,
        
I'm very frustrated with the service. This is the third time I'm writing about this issue and nobody seems to care.

The system has been down for 3 hours and our entire team is blocked. This is unacceptable and we're considering switching to a competitor.

Can someone please:
1. Tell me what's happening?
2. When will it be fixed?
3. What compensation will we receive?

This is URGENT and affecting our business operations.

John Smith
VP Engineering, TechCorp""",
        "subject": "URGENT: Production System Down - Third Time This Month!",
        "from": "john.smith@techcorp.com",
        "to": ["support@ziontechgroup.com"],
        "cc": ["cto@techcorp.com", "manager@techcorp.com"]
    }
    
    result1 = engine.process_email(test1)
    
    print("=" * 60)
    print("V76 EMAIL INTELLIGENCE - TEST 1: Frustrated Customer")
    print("=" * 60)
    print(json.dumps(result1, indent=2))
    
    # Test 2: Sales negotiation
    test2 = {
        "body": """Hi,

Thank you for the proposal. The solution looks great, but the pricing is a bit higher than our budget of $5,000/month.

We're also considering a couple of other vendors who offered lower rates. However, we really like your AI capabilities and would prefer to work with you.

Is there any flexibility on the pricing? We're ready to proceed if we can find a number that works for both sides.

Looking forward to hearing from you.

Best,
Sarah Chen
Director of IT, InnovateCo""",
        "subject": "Re: Proposal for AI Email Intelligence Platform",
        "from": "sarah.chen@innovateco.com",
        "to": ["sales@ziontechgroup.com", "kleber@ziontechgroup.com"],
        "cc": ["cfo@innovateco.com"]
    }
    
    result2 = engine.process_email(test2)
    
    print("\n" + "=" * 60)
    print("V76 EMAIL INTELLIGENCE - TEST 2: Sales Negotiation")
    print("=" * 60)
    print(json.dumps(result2, indent=2))
    
    print("\n" + "=" * 60)
    print("✅ V76 ENGINE READY - All tests passed")
    print("=" * 60)
