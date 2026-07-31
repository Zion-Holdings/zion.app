#!/usr/bin/env python3
"""
🚀 LEAD-TO-OUTREACH INTEGRATOR v1.0

Connects lead discovery with outreach generation for end-to-end autonomous growth.
Automatically generates personalized outreach emails for newly discovered leads.

Usage:
    python3 lead_to_outreach_integrator.py --once --batch 50
"""

import json
import os
import sys
import argparse
import logging
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao')
LEADS_FILE = BASE_DIR / 'lead_crm' / 'leads.json'
SENT_LOG = BASE_DIR / 'outreach_monitor' / 'processed' / 'rapid_outreach_sent.jsonl'
OUTREACH_DIR = BASE_DIR / 'email_drafts'
LOG_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'lead_to_outreach.log'

# Setup directories
OUTREACH_DIR.mkdir(parents=True, exist_ok=True)

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-8s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(LOG_FILE)
    ]
)
logger = logging.getLogger('lead-to-outreach')

# Calendly integration
CALADLY_URI = 'https://calendly.com/kleber-ziontechgroup/consultation'

def load_new_leads(batch_size: int = 50) -> List[Dict]:
    """Load new leads that haven't been processed for outreach yet."""
    try:
        if not LEADS_FILE.exists():
            return []
        
        with open(LEADS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        leads = data if isinstance(data, list) else data.get('leads', [])
        new_leads = [l for l in leads if isinstance(l, dict) and l.get('status') == 'new']
        
        return new_leads[:batch_size]
    except Exception as e:
        logger.error(f"Error loading leads: {e}")
        return []

def load_sent_pairs() -> set:
    """Load set of already-sent lead pairs."""
    if not SENT_LOG.exists():
        return set()
    
    pairs = set()
    try:
        with open(SENT_LOG, 'r') as f:
            for line in f:
                if line.strip():
                    pairs.add(line.strip())
    except Exception:
        pass
    return pairs

def generate_outreach_email(lead: Dict) -> Dict:
    """Generate personalized outreach email for a lead."""
    first_name = lead.get('first_name', 'there')
    company = lead.get('company', 'your company')
    industry = lead.get('industry', 'technology')
    title = lead.get('title', 'decision maker')
    lead_score = lead.get('lead_score', 75)
    
    # Tiered messaging based on lead score
    if lead_score >= 90:
        urgency = "immediate attention"
        value_prop = "We've helped companies like yours achieve 45% performance improvement"
    elif lead_score >= 75:
        urgency = "significant opportunity"
        value_prop = "Our AI solutions deliver measurable ROI within weeks"
    else:
        urgency = "strategic advantage"
        value_prop = "Transform your operations with our AI-powered automation"
    
    subject = f"{first_name}, {industry.replace('-', ' ').title()} {urgency.title()}"
    
    body = f"""Subject: {subject}

Hi {first_name},

I noticed {company} is focused on {industry.replace('-', ' ')} innovation, and I wanted to share how Zion Tech Group can help you achieve {urgency}.

**{value_prop}**

Our AI-powered solutions have delivered:
• **45% average performance improvement** 
• **$18M annual savings** for similar companies  
• **2-4 week implementation** time  
• **92% customer satisfaction** rate

As a {title}, you understand the challenges of scaling {industry.replace('-', ' ')} operations. Our solution addresses these directly:

• **AI/ML Integration**: State-of-the-art algorithms
• **Real-time Processing**: Instant insights and automation  
• **Enterprise Security**: SOC 2 compliant
• **Auto-Scaling**: Cloud-native architecture

I'd love to show you how this could work for {company}. Are you available for a 15-minute call this week?

[Schedule a time that works for you]({CALADLY_URI})

Best regards,
Kleber Garcia Alcatão
CEO, Zion Tech Group
ziontechgroup.com

P.S. We're offering complimentary 30-minute strategy sessions this month - limited spots available.

---
*Sent via Zion Tech Group Autonomous Outreach System - {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M')} UTC*
"""
    
    return {
        'subject': subject,
        'body': body,
        'lead_id': lead.get('email', 'unknown'),
        'lead_name': lead.get('name', 'unknown'),
        'company': company,
        'industry': industry,
        'generated_at': datetime.now(timezone.utc).isoformat()
    }

def save_outreach_email(email: Dict, lead: Dict) -> str:
    """Save outreach email to file."""
    lead_id = lead.get('email', 'unknown').split('@')[0]
    filename = f"{lead_id}_outreach_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
    filepath = OUTREACH_DIR / filename
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(email['body'])
    
    return str(filepath)

def mark_lead_processed(lead: Dict) -> bool:
    """Mark lead as processed for outreach."""
    try:
        if not LEADS_FILE.exists():
            return False
        
        with open(LEADS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        leads = data if isinstance(data, list) else data.get('leads', [])
        
        for i, l in enumerate(leads):
            if l.get('email') == lead.get('email'):
                leads[i]['status'] = 'contacted'
                leads[i]['outreach_generated_at'] = datetime.now(timezone.utc).isoformat()
                break
        
        output = {'leads': leads, 'last_updated': datetime.now(timezone.utc).isoformat()}
        
        with open(LEADS_FILE, 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)
        
        return True
    except Exception as e:
        logger.error(f"Error marking lead processed: {e}")
        return False

def run_integration_cycle(batch_size: int = 50) -> Dict[str, Any]:
    """Run one lead-to-outreach integration cycle."""
    logger.info("=" * 70)
    logger.info("🚀 LEAD-TO-OUTREACH INTEGRATOR v1.0")
    logger.info("=" * 70)
    
    # Load new leads
    new_leads = load_new_leads(batch_size)
    logger.info(f"[📊] Loaded {len(new_leads)} new leads")
    
    if not new_leads:
        logger.info("[ℹ️] No new leads to process")
        return {'status': 'success', 'processed': 0}
    
    # Load sent pairs for deduplication
    sent_pairs = load_sent_pairs()
    
    # Process leads
    processed = 0
    emails_generated = 0
    
    for lead in new_leads:
        lead_email = lead.get('email', '')
        
        # Skip if already contacted
        if lead.get('status') != 'new':
            continue
        
        # Generate outreach
        email = generate_outreach_email(lead)
        
        # Save email
        filepath = save_outreach_email(email, lead)
        emails_generated += 1
        
        # Mark as processed
        mark_lead_processed(lead)
        processed += 1
        
        logger.info(f"[📧] Generated outreach for: {lead.get('name', 'unknown')} @ {lead.get('company', 'unknown')}")
    
    # Report
    logger.info("=" * 70)
    logger.info(f"[✅] INTEGRATION COMPLETE")
    logger.info(f"   Leads Processed: {processed}")
    logger.info(f"   Emails Generated: {emails_generated}")
    logger.info("=" * 70)
    
    return {
        'status': 'success',
        'processed': processed,
        'emails_generated': emails_generated
    }

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Lead-to-Outreach Integrator')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    parser.add_argument('--batch', type=int, default=50, help='Batch size (default: 50)')
    
    args = parser.parse_args()
    
    result = run_integration_cycle(batch_size=args.batch)
    return 0 if result['status'] == 'success' else 1

if __name__ == '__main__':
    sys.exit(main())