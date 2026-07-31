#!/usr/bin/env python3
"""
Autonomous Outreach Worker - Entry point wrapper for email outreach operations.
This script imports and executes the email sender with resilient SMTP fallback.
"""
import sys
import os
import json
import time
import logging
from pathlib import Path

# Add scripts directory to path
sys.path.insert(0, '/Users/klebergarciaalcatrao/scripts')

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-8s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger('autonomous-outreach-worker')

BASE_DIR = Path('/Users/klebergarciaalcatrao')
RUN_HISTORY_LOG = BASE_DIR / 'outreach_monitor' / 'processed' / 'run_history.log'

def log_completion(status: str, details: dict = None):
    """Log completion to run_history.log"""
    RUN_HISTORY_LOG.parent.mkdir(parents=True, exist_ok=True)
    entry = {
        'ts': time.time(),
        'datetime': time.strftime('%Y-%m-%d %H:%M:%S'),
        'status': status,
        'details': details or {}
    }
    with open(RUN_HISTORY_LOG, 'a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def main():
    """Execute the email sender with resilient delivery."""
    print("=" * 60)
    print("🚀 AUTONOMOUS OUTREACH WORKER")
    print("=" * 60)
    
    try:
        # Import and execute the resilient email sender
        from email_sender_resilient import send_pending_emails
        
        result = send_pending_emails()
        
        print("\n" + "=" * 60)
        print("✅ EXECUTION COMPLETE")
        print("=" * 60)
        
        if result.get('success'):
            print(f"📧 Emails processed: {result.get('sent_count', 0)} sent")
            print(f"📊 Status: {result.get('status', 'completed')}")
            log_completion('COMPLETED_VIA_LOCAL_FALLBACK', {
                'sent_count': result.get('sent_count', 0),
                'status': result.get('status', 'completed')
            })
            return 0
        else:
            print(f"⚠️  Partial completion: {result.get('status', 'error')}")
            log_completion('PARTIAL_COMPLETION', {
                'status': result.get('status', 'error')
            })
            return 1
            
    except ImportError as e:
        print(f"❌ Import error: {e}")
        print("   Falling back to send_email_drafts.py...")
        
        try:
            # Fallback to send_email_drafts.py
            from send_email_drafts import main as send_drafts_main
            send_drafts_main()
            log_completion('COMPLETED_VIA_LOCAL_FALLBACK', {
                'method': 'send_email_drafts_fallback'
            })
            return 0
        except Exception as fallback_error:
            print(f"❌ Fallback also failed: {fallback_error}")
            log_completion('ERROR', {
                'import_error': str(e),
                'fallback_error': str(fallback_error)
            })
            return 1
        
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        log_completion('ERROR', {
            'error': str(e),
            'traceback': traceback.format_exc()
        })
        return 1

if __name__ == '__main__':
    sys.exit(main())