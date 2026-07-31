#!/usr/bin/env python3
"""
Autonomous Outreach Worker - Entry point wrapper for email outreach operations.
This script imports and executes the email sender with resilient SMTP fallback.
"""
import sys
import os

# Add scripts directory to path
sys.path.insert(0, '/Users/klebergarciaalcatrao/scripts')

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
            return 0
        else:
            print(f"⚠️  Partial completion: {result.get('status', 'error')}")
            return 1
            
    except ImportError as e:
        print(f"❌ Import error: {e}")
        print("   Falling back to send_email_drafts.py...")
        
        # Fallback to send_email_drafts.py
        from send_email_drafts import main as send_drafts_main
        send_drafts_main()
        return 0
        
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        return 1

if __name__ == '__main__':
    sys.exit(main())