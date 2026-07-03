"""Lead deduplication enforcer for Zion Tech Group outreach."""
import json, sys
from pathlib import Path

base = Path('lead-crm')
registry_path = base / 'recipient_dedup_registry.json'

def load_registry():
    if registry_path.exists():
        data = json.loads(registry_path.read_text())
        return {r['email']: r for r in data.get('recipients', [])}
    return {}

def dedupe_file(filepath: Path):
    data = json.loads(filepath.read_text())
    recipients = data.get('recipients', data.get('emails', []))
    registry = load_registry()
    
    original_count = len(recipients)
    cleaned = []
    skipped = []
    
    for r in recipients:
        addr = (r.get('to') or r.get('email') or '').lower().strip()
        if addr in registry:
            skipped.append({
                'email': addr,
                'reason': 'already_in_registry',
                'send_count': registry[addr].get('send_count', 0)
            })
        else:
            cleaned.append(r)
    
    # Update file
    if 'recipients' in data:
        data['recipients'] = cleaned
    elif 'emails' in data:
        data['emails'] = cleaned
    data['dedupe'] = {
        'generatedAt': __import__('datetime').datetime.now(__import__('datetime').timezone.utc).isoformat(),
        'original_count': original_count,
        'cleaned_count': len(cleaned),
        'skipped_count': len(skipped),
        'skipped': skipped
    }
    filepath.write_text(json.dumps(data, indent=2), encoding='utf-8')
    return len(cleaned), len(skipped)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('usage: py dedupe_candidates_before_send.py <ready_file>')
        sys.exit(1)
    p = Path(sys.argv[1])
    if not p.exists():
        print(f'not_found: {p}')
        sys.exit(1)
    kept, skipped = dedupe_file(p)
    print(f'kept={kept} skipped={skipped}')
