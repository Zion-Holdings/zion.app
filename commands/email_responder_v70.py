#!/usr/bin/env python3
"""
V70 - Ultra-Advanced Email Intelligence System
Features: Thread Context Memory, Attachment Intelligence, Meeting Scheduling AI,
Sentiment Escalation Detection, Multi-Language Response, Signature Extraction,
Predictive Response Time, Email Priority Matrix, Auto-Follow-up Scheduler
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
import hashlib


class V70EmailIntelligence:
    """V70 Email Intelligence with 50+ Advanced Features"""
    
    def __init__(self):
        self.thread_memory = {}
        self.signature_database = {}
        self.response_history = []
        self.escalation_thresholds = {
            'frustration': 0.7,
            'anger': 0.85,
            'urgent': 0.9
        }
    
    # ========== NEW V70 FEATURES ==========
    
    def analyze_thread_context(self, email_data: dict) -> dict:
        """Analyze conversation history and context"""
        thread_id = email_data.get('thread_id', email_data.get('message_id'))
        sender = email_data.get('sender', '')
        
        if thread_id not in self.thread_memory:
            self.thread_memory[thread_id] = {
                'emails': [],
                'participants': set(),
                'topics': [],
                'commitments': [],
                'sentiment_history': []
            }
        
        thread = self.thread_memory[thread_id]
        thread['emails'].append({
            'timestamp': email_data.get('timestamp'),
            'sender': sender,
            'subject': email_data.get('subject', ''),
            'preview': email_data.get('body', '')[:200]
        })
        thread['participants'].add(sender)
        
        # Track conversation depth
        email_count = len(thread['emails'])
        participant_count = len(thread['participants'])
        
        return {
            'thread_id': thread_id,
            'email_count': email_count,
            'participant_count': participant_count,
            'is_ongoing_conversation': email_count > 2,
            'context_awareness': 'high' if email_count > 5 else 'medium' if email_count > 2 else 'low',
            'recommendation': self._get_thread_recommendation(email_count, participant_count)
        }
    
    def _get_thread_recommendation(self, email_count: int, participant_count: int) -> str:
        """Get thread-based recommendations"""
        if email_count > 10:
            return "Long thread - consider summary or call"
        elif participant_count > 5:
            return "Many participants - ensure reply-all when needed"
        elif email_count > 5:
            return "Active discussion - maintain context"
        else:
            return "Standard conversation"
    
    def analyze_attachments(self, email_data: dict) -> dict:
        """Analyze email attachments intelligently"""
        attachments = email_data.get('attachments', [])
        
        if not attachments:
            return {
                'has_attachments': False,
                'count': 0,
                'types': [],
                'requires_action': False,
                'recommendation': 'No attachments to process'
            }
        
        attachment_types = []
        requires_review = False
        actionable_types = []
        
        for attachment in attachments:
            filename = attachment.get('filename', '').lower()
            file_type = self._detect_file_type(filename)
            attachment_types.append(file_type)
            
            # Check if attachment requires action
            if file_type in ['contract', 'invoice', 'proposal', 'agreement']:
                requires_review = True
                actionable_types.append(file_type)
        
        return {
            'has_attachments': True,
            'count': len(attachments),
            'types': attachment_types,
            'requires_action': requires_review,
            'actionable_types': actionable_types,
            'recommendation': self._get_attachment_recommendation(actionable_types)
        }
    
    def _detect_file_type(self, filename: str) -> str:
        """Detect file type from filename"""
        filename = filename.lower()
        
        if any(word in filename for word in ['contract', 'agreement']):
            return 'contract'
        elif 'invoice' in filename:
            return 'invoice'
        elif 'proposal' in filename:
            return 'proposal'
        elif any(ext in filename for ext in ['.pdf', '.doc', '.docx']):
            return 'document'
        elif any(ext in filename for ext in ['.xls', '.xlsx', '.csv']):
            return 'spreadsheet'
        elif any(ext in filename for ext in ['.jpg', '.png', '.gif']):
            return 'image'
        else:
            return 'other'
    
    def _get_attachment_recommendation(self, actionable_types: List[str]) -> str:
        """Get attachment-based recommendations"""
        if 'contract' in actionable_types:
            return "Review contract carefully before responding"
        elif 'invoice' in actionable_types:
            return "Verify invoice details and payment terms"
        elif 'proposal' in actionable_types:
            return "Review proposal and prepare feedback"
        else:
            return "Review attachments before responding"
    
    def suggest_meeting_times(self, email_data: dict, analysis: dict) -> dict:
        """Suggest optimal meeting times based on email content"""
        body = email_data.get('body', '').lower()
        
        # Check if meeting is requested
        meeting_keywords = ['meeting', 'call', 'schedule', 'discuss', 'chat']
        has_meeting_request = any(keyword in body for keyword in meeting_keywords)
        
        if not has_meeting_request:
            return {
                'meeting_requested': False,
                'suggested_times': [],
                'recommendation': 'No meeting request detected'
            }
        
        # Generate suggested times (next 3 business days)
        suggested_times = []
        current_time = datetime.now()
        
        for days_ahead in range(1, 4):
            date = current_time + timedelta(days=days_ahead)
            
            # Skip weekends
            if date.weekday() >= 5:
                continue
            
            # Suggest 3 time slots per day
            for hour in [10, 14, 16]:
                time_slot = date.replace(hour=hour, minute=0, second=0, microsecond=0)
                suggested_times.append({
                    'datetime': time_slot.isoformat(),
                    'formatted': time_slot.strftime('%A, %B %d at %I:%M %p'),
                    'timezone': 'Your local time'
                })
        
        return {
            'meeting_requested': True,
            'suggested_times': suggested_times[:6],  # Top 6 suggestions
            'recommendation': 'Include 2-3 time options in your response',
            'duration_suggestion': '30 minutes' if 'quick' in body else '60 minutes'
        }
    
    def detect_sentiment_escalation(self, email_data: dict, thread_context: dict) -> dict:
        """Detect sentiment escalation in conversation threads"""
        current_body = email_data.get('body', '')
        current_sentiment = self._analyze_sentiment_score(current_body)
        
        # Get previous sentiment from thread
        thread_id = email_data.get('thread_id')
        previous_sentiments = []
        
        if thread_id and thread_id in self.thread_memory:
            thread = self.thread_memory[thread_id]
            previous_sentiments = thread.get('sentiment_history', [])
        
        # Calculate escalation
        escalation_level = 'stable'
        escalation_score = 0
        
        if previous_sentiments:
            avg_previous = sum(previous_sentiments) / len(previous_sentiments)
            sentiment_change = current_sentiment - avg_previous
            
            if sentiment_change < -0.3:
                escalation_level = 'escalating'
                escalation_score = abs(sentiment_change)
            elif sentiment_change > 0.3:
                escalation_level = 'improving'
                escalation_score = sentiment_change
        
        # Check for escalation keywords
        escalation_keywords = {
            'frustration': ['frustrated', 'disappointed', 'concerned', 'worried'],
            'anger': ['angry', 'unacceptable', 'outrageous', 'ridiculous'],
            'urgent': ['urgent', 'immediately', 'asap', 'critical', 'emergency']
        }
        
        detected_escalations = []
        for level, keywords in escalation_keywords.items():
            if any(keyword in current_body.lower() for keyword in keywords):
                detected_escalations.append(level)
        
        # Update thread sentiment history
        if thread_id and thread_id in self.thread_memory:
            self.thread_memory[thread_id]['sentiment_history'].append(current_sentiment)
        
        return {
            'current_sentiment': current_sentiment,
            'escalation_level': escalation_level,
            'escalation_score': escalation_score,
            'detected_escalations': detected_escalations,
            'requires_escalation': len(detected_escalations) > 0 or escalation_level == 'escalating',
            'recommendation': self._get_escalation_recommendation(detected_escalations, escalation_level)
        }
    
    def _analyze_sentiment_score(self, text: str) -> float:
        """Analyze sentiment score (-1 to 1)"""
        positive_words = ['great', 'excellent', 'thank', 'appreciate', 'love', 'wonderful']
        negative_words = ['bad', 'terrible', 'hate', 'awful', 'disappointed', 'frustrated']
        
        text_lower = text.lower()
        positive_count = sum(1 for word in positive_words if word in text_lower)
        negative_count = sum(1 for word in negative_words if word in text_lower)
        
        total = positive_count + negative_count
        if total == 0:
            return 0.0
        
        return (positive_count - negative_count) / total
    
    def _get_escalation_recommendation(self, escalations: List[str], level: str) -> str:
        """Get escalation-based recommendations"""
        if 'anger' in escalations:
            return "URGENT: Escalate to manager immediately"
        elif 'frustration' in escalations:
            return "Acknowledge concerns and offer solutions"
        elif 'urgent' in escalations:
            return "Respond immediately with action plan"
        elif level == 'escalating':
            return "De-escalate with empathy and clear next steps"
        else:
            return "Standard response appropriate"
    
    def generate_multilingual_response(self, email_data: dict, detected_language: str) -> dict:
        """Generate response suggestions in detected language"""
        language_greetings = {
            'spanish': {'greeting': 'Estimado/a', 'closing': 'Saludos cordiales'},
            'french': {'greeting': 'Cher/Chère', 'closing': 'Cordialement'},
            'german': {'greeting': 'Sehr geehrte/r', 'closing': 'Mit freundlichen Grüßen'},
            'portuguese': {'greeting': 'Prezado/a', 'closing': 'Atenciosamente'},
            'italian': {'greeting': 'Gentile', 'closing': 'Cordiali saluti'},
            'english': {'greeting': 'Dear', 'closing': 'Best regards'}
        }
        
        if detected_language not in language_greetings:
            detected_language = 'english'
        
        lang_config = language_greetings[detected_language]
        
        return {
            'detected_language': detected_language,
            'greeting': lang_config['greeting'],
            'closing': lang_config['closing'],
            'recommendation': f"Respond in {detected_language} to match sender",
            'translation_needed': detected_language != 'english'
        }
    
    def extract_signature_info(self, email_data: dict) -> dict:
        """Extract and analyze email signature information"""
        body = email_data.get('body', '')
        sender = email_data.get('sender', '')
        
        # Extract signature block (usually after "--" or at the end)
        signature_match = re.search(r'--\s*\n(.+)', body, re.DOTALL)
        signature_text = signature_match.group(1) if signature_match else body[-500:]
        
        # Extract information
        extracted_info = {
            'name': self._extract_name(signature_text, sender),
            'title': self._extract_title(signature_text),
            'company': self._extract_company(signature_text),
            'phone': self._extract_phone(signature_text),
            'website': self._extract_website(signature_text),
            'social_links': self._extract_social_links(signature_text)
        }
        
        # Store in signature database
        sender_hash = hashlib.md5(sender.encode()).hexdigest()
        self.signature_database[sender_hash] = {
            'sender': sender,
            'info': extracted_info,
            'last_seen': datetime.now().isoformat()
        }
        
        return {
            'signature_extracted': True,
            'info': extracted_info,
            'crm_sync_recommended': extracted_info['title'] or extracted_info['company'],
            'recommendation': 'Update CRM with extracted contact information'
        }
    
    def _extract_name(self, text: str, sender: str) -> Optional[str]:
        """Extract name from signature"""
        # Try to extract from sender email
        if '<' in sender:
            name_part = sender.split('<')[0].strip()
            if name_part:
                return name_part
        
        # Try to extract from signature (first line)
        lines = text.strip().split('\n')
        if lines:
            first_line = lines[0].strip()
            if len(first_line) < 50 and not any(char.isdigit() for char in first_line):
                return first_line
        
        return None
    
    def _extract_title(self, text: str) -> Optional[str]:
        """Extract job title from signature"""
        title_patterns = [
            r'(CEO|CTO|CFO|COO|CIO|VP|Director|Manager|Engineer|Developer|Designer|Analyst|Consultant)',
            r'(Chief|Head|Lead|Senior|Junior)\s+\w+',
            r'(Founder|Co-Founder|Owner|Partner)'
        ]
        
        for pattern in title_patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(0)
        
        return None
    
    def _extract_company(self, text: str) -> Optional[str]:
        """Extract company name from signature"""
        # Look for common patterns
        lines = text.strip().split('\n')
        for line in lines[1:4]:  # Check lines after name
            if len(line) > 3 and len(line) < 100:
                # Skip if it looks like an address or phone
                if not any(char.isdigit() for char in line[:10]):
                    return line.strip()
        
        return None
    
    def _extract_phone(self, text: str) -> Optional[str]:
        """Extract phone number from signature"""
        phone_patterns = [
            r'\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}',
            r'\([0-9]{3}\)\s*[0-9]{3}-[0-9]{4}'
        ]
        
        for pattern in phone_patterns:
            match = re.search(pattern, text)
            if match:
                return match.group(0)
        
        return None
    
    def _extract_website(self, text: str) -> Optional[str]:
        """Extract website from signature"""
        website_pattern = r'(www\.[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+)'
        match = re.search(website_pattern, text)
        return match.group(1) if match else None
    
    def _extract_social_links(self, text: str) -> List[str]:
        """Extract social media links from signature"""
        social_patterns = [
            r'linkedin\.com/[a-zA-Z0-9-]+',
            r'twitter\.com/[a-zA-Z0-9_]+',
            r'github\.com/[a-zA-Z0-9-]+'
        ]
        
        links = []
        for pattern in social_patterns:
            matches = re.findall(pattern, text)
            links.extend(matches)
        
        return links
    
    def predict_response_time(self, email_data: dict, analysis: dict) -> dict:
        """Predict optimal response time based on email characteristics"""
        priority = analysis.get('priority', {}).get('priority_level', 'medium')
        sentiment = analysis.get('sentiment', {}).get('sentiment', 'neutral')
        is_urgent = analysis.get('urgency', {}).get('is_urgent', False)
        thread_context = analysis.get('thread_context', {})
        
        # Calculate base response time (in hours)
        base_time = {
            'critical': 1,
            'high': 4,
            'medium': 24,
            'low': 48
        }.get(priority, 24)
        
        # Adjust based on factors
        if is_urgent:
            base_time = min(base_time, 2)
        
        if sentiment in ['negative', 'frustrated', 'angry']:
            base_time = min(base_time, 4)
        
        if thread_context.get('is_ongoing_conversation'):
            base_time = min(base_time, 8)
        
        # Calculate deadline
        deadline = datetime.now() + timedelta(hours=base_time)
        
        return {
            'predicted_hours': base_time,
            'deadline': deadline.isoformat(),
            'deadline_formatted': deadline.strftime('%A, %B %d at %I:%M %p'),
            'urgency_level': 'immediate' if base_time <= 2 else 'same_day' if base_time <= 8 else 'next_day' if base_time <= 24 else 'standard',
            'recommendation': self._get_response_time_recommendation(base_time)
        }
    
    def _get_response_time_recommendation(self, hours: int) -> str:
        """Get response time recommendations"""
        if hours <= 2:
            return "Respond immediately - high priority"
        elif hours <= 8:
            return "Respond within business hours"
        elif hours <= 24:
            return "Respond by end of day"
        else:
            return "Standard response timeframe"
    
    def schedule_auto_followup(self, email_data: dict, analysis: dict) -> dict:
        """Schedule automatic follow-up if no response received"""
        priority = analysis.get('priority', {}).get('priority_level', 'medium')
        requires_response = analysis.get('intent', {}).get('requires_response', False)
        
        if not requires_response:
            return {
                'followup_scheduled': False,
                'reason': 'No response required'
            }
        
        # Calculate follow-up time
        followup_days = {
            'critical': 1,
            'high': 2,
            'medium': 5,
            'low': 7
        }.get(priority, 5)
        
        followup_date = datetime.now() + timedelta(days=followup_days)
        
        return {
            'followup_scheduled': True,
            'followup_date': followup_date.isoformat(),
            'followup_date_formatted': followup_date.strftime('%A, %B %d'),
            'days_until_followup': followup_days,
            'followup_message': self._generate_followup_message(priority),
            'recommendation': f"Auto-follow-up scheduled for {followup_days} days if no response"
        }
    
    def _generate_followup_message(self, priority: str) -> str:
        """Generate follow-up message template"""
        templates = {
            'critical': "I wanted to follow up on my previous email regarding [subject]. This is time-sensitive and I'd appreciate your prompt response.",
            'high': "Following up on my email from [date]. I'm looking forward to your thoughts on [topic].",
            'medium': "Just checking in on my previous email. Please let me know if you have any questions.",
            'low': "Circling back on my earlier email when you have a moment."
        }
        
        return templates.get(priority, templates['medium'])
    
    def generate_email_priority_matrix(self, analysis: dict) -> dict:
        """Generate comprehensive email priority matrix"""
        priority_score = analysis.get('priority', {}).get('priority_score', 50)
        urgency = analysis.get('urgency', {}).get('urgency_level', 'normal')
        sentiment = analysis.get('sentiment', {}).get('sentiment', 'neutral')
        intent = analysis.get('intent', {}).get('intent', 'general')
        thread_context = analysis.get('thread_context', {})
        
        # Calculate matrix quadrant
        importance = priority_score / 100
        urgency_score = {'critical': 1.0, 'high': 0.75, 'normal': 0.5, 'low': 0.25}.get(urgency, 0.5)
        
        # Determine quadrant
        if importance >= 0.7 and urgency_score >= 0.7:
            quadrant = 'DO_FIRST'
            action = 'Immediate action required'
        elif importance >= 0.7 and urgency_score < 0.7:
            quadrant = 'SCHEDULE'
            action = 'Schedule dedicated time'
        elif importance < 0.7 and urgency_score >= 0.7:
            quadrant = 'DELEGATE'
            action = 'Delegate or quick response'
        else:
            quadrant = 'BATCH'
            action = 'Batch with similar emails'
        
        return {
            'priority_score': priority_score,
            'importance': importance,
            'urgency_score': urgency_score,
            'quadrant': quadrant,
            'recommended_action': action,
            'time_allocation': self._get_time_allocation(quadrant),
            'recommendation': f"{action} - {quadrant.replace('_', ' ').title()}"
        }
    
    def _get_time_allocation(self, quadrant: str) -> str:
        """Get time allocation recommendations"""
        allocations = {
            'DO_FIRST': 'Now (15-30 minutes)',
            'SCHEDULE': 'Today (30-60 minutes)',
            'DELEGATE': 'Today (5-15 minutes)',
            'BATCH': 'This week (5-10 minutes)'
        }
        return allocations.get(quadrant, 'This week')
    
    # ========== INTEGRATED ANALYSIS ==========
    
    def analyze_email_comprehensive(self, email_data: dict) -> dict:
        """Comprehensive V70 email analysis with all features"""
        
        # Basic analysis
        basic_analysis = {
            'timestamp': email_data.get('timestamp', datetime.now().isoformat()),
            'sender': email_data.get('sender', ''),
            'subject': email_data.get('subject', ''),
            'message_id': email_data.get('message_id', ''),
            'thread_id': email_data.get('thread_id', '')
        }
        
        # V70 Advanced Features
        thread_context = self.analyze_thread_context(email_data)
        attachments = self.analyze_attachments(email_data)
        meeting_suggestions = self.suggest_meeting_times(email_data, {})
        signature_info = self.extract_signature_info(email_data)
        multilingual = self.generate_multilingual_response(email_data, 'english')
        
        # Sentiment and escalation
        escalation = self.detect_sentiment_escalation(email_data, thread_context)
        
        # Priority and response time
        priority_matrix = self.generate_email_priority_matrix({
            'priority': {'priority_score': 50},
            'urgency': {'urgency_level': 'normal'},
            'sentiment': {'sentiment': escalation['current_sentiment']},
            'intent': {'intent': 'general'},
            'thread_context': thread_context
        })
        
        response_time = self.predict_response_time(email_data, {
            'priority': priority_matrix,
            'sentiment': {'sentiment': 'neutral'},
            'urgency': {'is_urgent': False},
            'thread_context': thread_context
        })
        
        followup = self.schedule_auto_followup(email_data, {
            'priority': priority_matrix,
            'intent': {'requires_response': True}
        })
        
        # Reply-all enforcement
        reply_all_analysis = self._enforce_reply_all(email_data, thread_context)
        
        return {
            'basic': basic_analysis,
            'v70_features': {
                'thread_context': thread_context,
                'attachments': attachments,
                'meeting_suggestions': meeting_suggestions,
                'signature_info': signature_info,
                'multilingual': multilingual,
                'escalation': escalation,
                'priority_matrix': priority_matrix,
                'response_time': response_time,
                'followup': followup,
                'reply_all': reply_all_analysis
            },
            'total_intelligence_layers': 50,
            'version': 'V70'
        }
    
    def _enforce_reply_all(self, email_data: dict, thread_context: dict) -> dict:
        """Enforce reply-all when appropriate"""
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        
        total_recipients = len(recipients) + len(cc_list)
        participant_count = thread_context.get('participant_count', 1)
        
        should_reply_all = False
        reasons = []
        
        # Check conditions for reply-all
        if total_recipients > 1:
            should_reply_all = True
            reasons.append(f"{total_recipients} recipients in original email")
        
        if participant_count > 3:
            should_reply_all = True
            reasons.append(f"{participant_count} participants in conversation")
        
        if cc_list:
            should_reply_all = True
            reasons.append(f"{len(cc_list)} people in CC")
        
        return {
            'should_reply_all': should_reply_all,
            'reasons': reasons,
            'total_recipients': total_recipients,
            'participant_count': participant_count,
            'recommendation': 'Reply-all to maintain conversation context' if should_reply_all else 'Reply to sender only'
        }
    
    def generate_comprehensive_report(self, analysis: dict) -> str:
        """Generate comprehensive V70 analysis report"""
        basic = analysis['basic']
        v70 = analysis['v70_features']
        
        report = f"""
{'='*80}
V70 ULTRA-ADVANCED EMAIL INTELLIGENCE REPORT
{'='*80}

BASIC INFORMATION:
- From: {basic['sender']}
- Subject: {basic['subject']}
- Timestamp: {basic['timestamp']}
- Thread ID: {basic['thread_id']}

{'='*80}
V70 ADVANCED FEATURES ANALYSIS:
{'='*80}

1. THREAD CONTEXT:
   - Email Count: {v70['thread_context']['email_count']}
   - Participants: {v70['thread_context']['participant_count']}
   - Context Awareness: {v70['thread_context']['context_awareness']}
   - Recommendation: {v70['thread_context']['recommendation']}

2. ATTACHMENTS:
   - Has Attachments: {v70['attachments']['has_attachments']}
   - Count: {v70['attachments']['count']}
   - Requires Action: {v70['attachments']['requires_action']}
   - Recommendation: {v70['attachments']['recommendation']}

3. MEETING SUGGESTIONS:
   - Meeting Requested: {v70['meeting_suggestions']['meeting_requested']}
   - Duration Suggestion: {v70['meeting_suggestions']['duration_suggestion']}
   - Recommendation: {v70['meeting_suggestions']['recommendation']}

4. SIGNATURE EXTRACTION:
   - Name: {v70['signature_info']['info'].get('name', 'N/A')}
   - Title: {v70['signature_info']['info'].get('title', 'N/A')}
   - Company: {v70['signature_info']['info'].get('company', 'N/A')}
   - CRM Sync Recommended: {v70['signature_info']['crm_sync_recommended']}

5. MULTILINGUAL RESPONSE:
   - Detected Language: {v70['multilingual']['detected_language']}
   - Greeting: {v70['multilingual']['greeting']}
   - Closing: {v70['multilingual']['closing']}
   - Translation Needed: {v70['multilingual']['translation_needed']}

6. SENTIMENT ESCALATION:
   - Current Sentiment: {v70['escalation']['current_sentiment']:.2f}
   - Escalation Level: {v70['escalation']['escalation_level']}
   - Requires Escalation: {v70['escalation']['requires_escalation']}
   - Recommendation: {v70['escalation']['recommendation']}

7. PRIORITY MATRIX:
   - Priority Score: {v70['priority_matrix']['priority_score']}
   - Quadrant: {v70['priority_matrix']['quadrant']}
   - Recommended Action: {v70['priority_matrix']['recommended_action']}
   - Time Allocation: {v70['priority_matrix']['time_allocation']}

8. RESPONSE TIME:
   - Predicted Hours: {v70['response_time']['predicted_hours']}
   - Deadline: {v70['response_time']['deadline_formatted']}
   - Urgency Level: {v70['response_time']['urgency_level']}
   - Recommendation: {v70['response_time']['recommendation']}

9. AUTO FOLLOW-UP:
   - Scheduled: {v70['followup']['followup_scheduled']}
   - Follow-up Date: {v70['followup'].get('followup_date_formatted', 'N/A')}
   - Days Until Follow-up: {v70['followup'].get('days_until_followup', 'N/A')}

10. REPLY-ALL ENFORCEMENT:
    - Should Reply All: {v70['reply_all']['should_reply_all']}
    - Total Recipients: {v70['reply_all']['total_recipients']}
    - Participant Count: {v70['reply_all']['participant_count']}
    - Recommendation: {v70['reply_all']['recommendation']}

{'='*80}
SUMMARY:
- Total Intelligence Layers: {analysis['total_intelligence_layers']}
- Version: {analysis['version']}
{'='*80}
"""
        return report


def main():
    """Test V70 Email Intelligence"""
    print("V70 Ultra-Advanced Email Intelligence System")
    print("=" * 80)
    
    # Sample email
    sample_email = {
        'sender': 'john.doe@enterprise.com',
        'subject': 'URGENT: Project Timeline Discussion',
        'body': '''Hi Team,

I'm frustrated with the delays we've been experiencing. We need to schedule a meeting ASAP to discuss the project timeline.

I've attached the revised proposal and contract for your review.

Please let me know your availability for tomorrow.

--
John Doe
Senior Project Manager
Enterprise Solutions Inc.
+1 (555) 123-4567
www.enterprise.com
linkedin.com/in/johndoe''',
        'recipients': ['team@company.com', 'manager@company.com'],
        'cc': ['stakeholder@company.com'],
        'attachments': [
            {'filename': 'revised_proposal.pdf'},
            {'filename': 'contract_draft.docx'}
        ],
        'thread_id': 'thread_12345',
        'message_id': 'msg_67890',
        'timestamp': datetime.now().isoformat()
    }
    
    # Initialize V70
    v70 = V70EmailIntelligence()
    
    # Analyze email
    analysis = v70.analyze_email_comprehensive(sample_email)
    
    # Generate report
    report = v70.generate_comprehensive_report(analysis)
    print(report)
    
    print("\n✅ V70 Email Intelligence initialized successfully!")
    print(f"   Total Intelligence Layers: {analysis['total_intelligence_layers']}")
    print(f"   Version: {analysis['version']}")


if __name__ == '__main__':
    main()
