import json

def normalize_email(email):
    return email.strip().lower()

with open('/Users/miami2/zion.app/out/free-leads-discovered-github.json') as f:
    new_data = json.load(f)

with open('/Users/miami2/zion.app/app/data/discovered_leads.json') as f:
    existing = json.load(f)

# Existing is a list. New data has a "leads" list.
new_leads = new_data.get('leads', [])
email_leads = [lead for lead in new_leads if lead.get('email')]

# Build existing lookup by normalized email
existing_emails = set()
existing_gh_handles = set()

for lead in existing:
    email = lead.get('email', '')
    if email:
        existing_emails.add(normalize_email(email))
    github = lead.get('github', '')
    if github and 'github.com/' in github:
        existing_gh_handles.add(github.split('github.com/')[-1].lower())

added = []
skipped = 0
for lead in email_leads:
    email = lead.get('email', '')
    norm_email = normalize_email(email)
    gh_handle = lead.get('github_handle', '').lower()
    
    is_dup = False
    if norm_email in existing_emails:
        is_dup = True
    if gh_handle and gh_handle in existing_gh_handles:
        is_dup = True
    
    if is_dup:
        skipped += 1
    else:
        added.append(lead)
        if norm_email:
            existing_emails.add(norm_email)
        if gh_handle:
            existing_gh_handles.add(gh_handle)

if added:
    existing.extend(added)
    with open('/Users/miami2/zion.app/app/data/discovered_leads.json', 'w') as f:
        json.dump(existing, f, indent=2)

print(f"added={len(added)} skipped={skipped} total_email_leads={len(email_leads)}")
