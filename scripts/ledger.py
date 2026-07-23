#!/usr/bin/env python3
"""
Reply Ledger Utility
Tracks sent replies to avoid duplicates
"""

import json
import hashlib
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, Optional, List

class ReplyLedger:
    """Ledger for tracking sent replies to avoid duplicates."""
    
    def __init__(self, ledger_path: str):
        """Initialize ledger with file path."""
        self.ledger_path = Path(ledger_path)
        self.ledger_path.parent.mkdir(parents=True, exist_ok=True)
        self.entries: List[Dict[str, Any]] = []
        self._load()
    
    def _load(self) -> None:
        """Load existing ledger entries."""
        if self.ledger_path.exists():
            try:
                with open(self.ledger_path, 'r') as f:
                    for line in f:
                        line = line.strip()
                        if line:
                            try:
                                entry = json.loads(line)
                                self.entries.append(entry)
                            except json.JSONDecodeError:
                                continue
            except Exception as e:
                print(f"Error loading ledger: {e}")
                self.entries = []
    
    def _save(self) -> None:
        """Save ledger entries to file."""
        try:
            with open(self.ledger_path, 'w') as f:
                for entry in self.entries:
                    f.write(json.dumps(entry) + '\n')
        except Exception as e:
            print(f"Error saving ledger: {e}")
    
    def _hash_content(self, content: str) -> str:
        """Generate a hash of content for duplicate detection."""
        return hashlib.sha256(content.encode()).hexdigest()[:16]
    
    def record_reply(self, email_id: str, thread_id: str, reply: str, 
                     subject: str = '', additional_context: str = '') -> None:
        """Record a sent reply in the ledger."""
        entry = {
            'timestamp': datetime.now().isoformat(),
            'email_id': email_id,
            'thread_id': thread_id,
            'reply_hash': self._hash_content(reply),
            'subject': subject,
            'context_hash': self._hash_content(additional_context) if additional_context else '',
            'reply_length': len(reply),
            'reply_preview': reply[:200] if reply else ''
        }
        
        self.entries.append(entry)
        self._save()
    
    def has_replied(self, email_id: str, check_content: bool = False, 
                    content: str = '') -> bool:
        """Check if a reply has already been sent for this email."""
        for entry in self.entries:
            if entry.get('email_id') == email_id:
                if not check_content:
                    return True
                # If checking content, verify hash matches
                if content and entry.get('reply_hash') == self._hash_content(content):
                    return True
                # If no content to check, assume replied
                if not content:
                    return True
        return False
    
    def get_reply_count(self) -> int:
        """Get total number of replies recorded."""
        return len(self.entries)
    
    def get_replies_by_date(self, date: str) -> List[Dict[str, Any]]:
        """Get all replies for a specific date (YYYY-MM-DD format)."""
        return [e for e in self.entries if e.get('timestamp', '').startswith(date)]
    
    def get_stats(self) -> Dict[str, Any]:
        """Get statistics about the ledger."""
        if not self.entries:
            return {
                'total_replies': 0,
                'unique_threads': 0,
                'date_range': None
            }
        
        threads = set(e.get('thread_id') for e in self.entries if e.get('thread_id'))
        dates = [e.get('timestamp', '')[:10] for e in self.entries]
        
        return {
            'total_replies': len(self.entries),
            'unique_threads': len(threads),
            'date_range': {
                'start': min(dates) if dates else None,
                'end': max(dates) if dates else None
            }
        }
    
    def export_ledger(self, export_path: Optional[str] = None) -> str:
        """Export ledger to a JSON file."""
        if not export_path:
            export_path = self.ledger_path.with_suffix('.json')
        
        data = {
            'exported_at': datetime.now().isoformat(),
            'stats': self.get_stats(),
            'entries': self.entries
        }
        
        with open(export_path, 'w') as f:
            json.dump(data, f, indent=2)
        
        return str(export_path)
    
    def clear_old_entries(self, days_to_keep: int = 90) -> int:
        """Remove entries older than specified days."""
        cutoff = datetime.now().timestamp() - (days_to_keep * 24 * 60 * 60)
        
        original_count = len(self.entries)
        self.entries = [
            e for e in self.entries 
            if datetime.fromisoformat(e.get('timestamp', '1970-01-01')).timestamp() > cutoff
        ]
        
        removed_count = original_count - len(self.entries)
        if removed_count > 0:
            self._save()
        
        return removed_count

# Convenience function for quick access
def get_ledger(ledger_path: Optional[str] = None) -> ReplyLedger:
    """Get a reply ledger instance."""
    if not ledger_path:
        ledger_path = str(Path(__file__).parent.parent / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl')
    return ReplyLedger(ledger_path)