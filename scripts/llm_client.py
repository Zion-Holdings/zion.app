#!/usr/bin/env python3
"""
LLM Client Module
Provides LLM-powered content generation and analysis capabilities
"""

import os
import json
from typing import List, Dict, Any, Optional
from pathlib import Path
from dataclasses import dataclass

@dataclass
class LLMConfig:
    """Configuration for LLM API calls."""
    api_key: str
    base_url: str = "https://openrouter.ai/api/v1"
    model: str = "nvidia/nemotron-3-ultra-550b-a55b:free"
    max_tokens: int = 2000
    temperature: float = 0.7
    timeout: int = 30

class LLMClient:
    """LLM client for generating tailored responses using various models."""
    
    def __init__(self, config: Optional[LLMConfig] = None):
        """Initialize LLM client with configuration."""
        self.config = config or self._load_default_config()
        self.api_key = self.config.api_key
        
        if not self.api_key:
            raise ValueError("OpenRouter API key not found. Set OPENROUTER_API_KEY environment variable.")
    
    def _load_default_config(self) -> LLMConfig:
        """Load default configuration from environment."""
        api_key = os.environ.get('OPENROUTER_API_KEY')
        if not api_key:
            print("Warning: OPENROUTER_API_KEY not set. LLM features will be limited.")
        
        return LLMConfig(
            api_key=api_key or '',
            base_url=os.environ.get('OPENROUTER_BASE_URL', 'https://openrouter.ai/api/v1'),
            model=os.environ.get('OPENROUTER_MODEL', 'nvidia/nemotron-3-ultra-550b-a55b:free'),
            max_tokens=int(os.environ.get('OPENROUTER_MAX_TOKENS', '2000')),
            temperature=float(os.environ.get('OPENROUTER_TEMPERATURE', '0.7')),
            timeout=int(os.environ.get('OPENROUTER_TIMEOUT', '30'))
        )
    
    def generate_completion(self, model: str, prompt: str, max_tokens: int = None, 
                           temperature: float = None) -> str:
        """Generate a completion using the specified model."""
        # In production, this would make actual API calls
        # For now, we'll simulate the response
        print(f"Generating completion with model: {model}")
        print(f"Prompt length: {len(prompt)} characters")
        print(f"Max tokens: {max_tokens or self.config.max_tokens}")
        print(f"Temperature: {temperature or self.config.temperature}")
        
        # Simulate API response
        return self._simulate_response(prompt)
    
    def generate_completion_with_fallback(self, primary_model: str, fallback_model: str,
                                          prompt: str, max_tokens: int = None,
                                          temperature: float = None) -> str:
        """Generate completion with fallback to alternative model if primary fails."""
        try:
            return self.generate_completion(primary_model, prompt, max_tokens, temperature)
        except Exception as e:
            print(f"Primary model failed: {e}. Trying fallback model...")
            try:
                return self.generate_completion(fallback_model, prompt, max_tokens, temperature)
            except Exception as e2:
                print(f"Fallback model also failed: {e2}")
                raise
    
    def analyze_email_context(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email to extract context for tailored responses."""
        analysis = {
            'sentiment': 'neutral',
            'urgency': 'medium',
            'topic': 'general',
            'entities': [],
            'intent': 'unknown'
        }
        
        # Simple heuristic-based analysis
        body = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        
        # Sentiment analysis
        positive_words = ['thanks', 'thank', 'great', 'good', 'excellent', 'appreciate']
        negative_words = ['problem', 'issue', 'broken', 'failed', 'error', 'urgent']
        
        if any(word in body or word in subject for word in positive_words):
            analysis['sentiment'] = 'positive'
        elif any(word in body or word in subject for word in negative_words):
            analysis['sentiment'] = 'negative'
        
        # Urgency detection
        urgent_words = ['urgent', 'asap', 'immediately', 'today', 'now', 'deadline']
        if any(word in body or word in subject for word in urgent_words):
            analysis['urgency'] = 'high'
        
        # Topic detection
        topic_keywords = {
            'project': ['project', 'work', 'deliverable', 'milestone'],
            'pricing': ['price', 'cost', 'quote', 'budget', 'invoice'],
            'technical': ['bug', 'issue', 'error', 'fix', 'support'],
            'sales': ['interested', 'demo', 'trial', 'feature', 'capability'],
            'partnership': ['partner', 'collaboration', 'joint', 'together']
        }
        
        for topic, keywords in topic_keywords.items():
            if any(word in body or word in subject for word in keywords):
                analysis['topic'] = topic
                break
        
        # Extract entities (simple extraction)
        import re
        emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', body)
        urls = re.findall(r'https?://[^\s]+', body)
        analysis['entities'] = emails + urls
        
        # Intent detection
        intent_keywords = {
            'inquiry': ['question', 'ask', 'wonder', 'curious'],
            'complaint': ['problem', 'issue', 'broken', 'not working'],
            'feedback': ['feedback', 'suggest', 'recommend', 'improve'],
            'follow-up': ['follow', 'check-in', 'update', 'status']
        }
        
        for intent, keywords in intent_keywords.items():
            if any(word in body or word in subject for word in keywords):
                analysis['intent'] = intent
                break
        
        return analysis
    
    def generate_tailored_response(self, email_data: Dict[str, Any], 
                                   context: str = '',
                                   persona: str = 'CEO') -> str:
        """Generate a tailored response based on email context and persona."""
        analysis = self.analyze_email_context(email_data)
        
        # Build prompt based on analysis
        prompt = f"""
You are {persona} of Zion Tech Group. Generate a tailored response to the following email.

Email Analysis:
- Sentiment: {analysis['sentiment']}
- Urgency: {analysis['urgency']}
- Topic: {analysis['topic']}
- Intent: {analysis['intent']}
- Entities: {', '.join(analysis['entities']) if analysis['entities'] else 'None'}

Email Context:
Subject: {email_data.get('subject', 'No subject')}
From: {email_data.get('from_name', 'Unknown')} ({email_data.get('from_email', 'Unknown')})
Body: {email_data.get('body', 'No body')[:500]}...

Additional Context: {context}

Response Style:
- Professional but friendly
- Personalized and specific to the conversation
- Include relevant links and offers
- Aim to advance the relationship

Generate a complete, tailored response.
"""
        
        return self.generate_completion(
            model=self.config.model,
            prompt=prompt,
            max_tokens=self.config.max_tokens,
            temperature=self.config.temperature
        )
    
    def _simulate_response(self, prompt: str) -> str:
        """Simulate an LLM response (for testing without API)."""
        # This is a placeholder that returns a simulated response
        # In production, this would make actual API calls
        return f"""Thank you for reaching out! 

I really appreciate the opportunity to have worked with you on the previous project. It was a pleasure collaborating with your team.

Based on our conversation, I see some exciting opportunities for us to explore together:

1. **AI-Powered Automation Suite**: We could help you automate [specific business process mentioned in email] using our autonomous AI agents, potentially saving you 40-60% in operational costs.

2. **Predictive Analytics Platform**: Our predictive maintenance AI could help prevent [relevant issue] before it happens, ensuring smoother operations and reduced downtime.

3. **Custom AI Solutions**: We've developed several new AI tools that might be relevant to your goals, including [specific tool based on context].

I'd love to discuss these ideas in more detail and explore how we can create mutual value. Would you be available for a brief call next week? I can schedule a time that works best for you using my Calendly: {os.environ.get('CALENDLY_URL', 'https://calendly.com/kleber-ziontechgroup')}

In the meantime, I encourage you to visit our website at https://ziontechgroup.com to learn more about our new AI services. We also have many free tools and utilities available that could be immediately useful for your team.

Looking forward to continuing our collaboration!

Best regards,
Kleber Garcia Alcatrao
CEO, Zion Tech Group
+1 302 464 0950

P.S. We've been working on some exciting new AI capabilities that I think you'll find impressive!"""

# Convenience function for quick initialization
def get_llm_client() -> LLMClient:
    """Get a configured LLM client instance."""
    return LLMClient()

# Default models for different use cases
DEFAULT_MODELS = {
    'completion': 'nvidia/nemotron-3-ultra-550b-a55b:free',
    'analysis': 'openai/gpt-4o-mini',
    'coding': 'anthropic/claude-sonnet-4',
    'reasoning': 'google/gemini-2.5-flash'
}

# Temperature settings for different use cases
TEMPERATURE_PRESETS = {
    'creative': 0.9,
    'balanced': 0.7,
    'precise': 0.3,
    'structured': 0.1
}