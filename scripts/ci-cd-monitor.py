#!/usr/bin/env python3
"""
Zion CI/CD Monitor via Composio
- Fetch recent failure emails from Gmail
- Create/update GitHub issue with summary
- Send Telegram alert
"""
import os
import sys
import json
from datetime import datetime

# Config
COMPOSIO_API_KEY = os.environ.get('COMPOSIO_API_KEY', 'ak_EbwU3_9eFhvnlpQHN7Ny')
ACTUAL_USER_ID = 'pg-test-b311dcc6-03f6-4077-8774-c90cfd6fcf29'
GITHUB_OWNER = 'Zion-support'
GITHUB_REPO = 'zion-support.github.io'
TELEGRAM_CHAT_ID = -1003886112318

os.environ['COMPOSIO_API_KEY'] = COMPOSIO_API_KEY

from composio import Composio

client = Composio(dangerously_skip_version_check=True)

def fetch_emails(query='subject:"Run failed"', max_results=20):
    """Fetch failure emails from Gmail"""
    try:
        result = client.tools.execute(
            user_id=ACTUAL_USER_ID,
            slug='GMAIL_FETCH_EMAILS',
            arguments={
                'user_id': 'me',
                'query': query,
                'max_results': max_results,
                'verbose': False,
                'ids_only': False,
                'include_payload': False
            },
            dangerously_skip_version_check=True
        )
        messages = result.get('data', {}).get('messages', [])
        return messages
    except Exception as e:
        print(f'Error fetching emails: {e}')
        return []

def create_github_issue(title, body, labels='bug,ci/cd,priority/high'):
    """Create GitHub issue"""
    try:
        result = client.tools.execute(
            user_id=ACTUAL_USER_ID,
            slug='GITHUB_CREATE_AN_ISSUE',
            arguments={
                'owner': GITHUB_OWNER,
                'repo': GITHUB_REPO,
                'title': title,
                'body': body,
                'labels': labels
            },
            version='20260815_00'
        )
        return result.get('data', {}).get('html_url')
    except Exception as e:
        print(f'Error creating GitHub issue: {e}')
        return None

def send_telegram(text):
    """Send Telegram message"""
    try:
        result = client.tools.execute(
            user_id=ACTUAL_USER_ID,
            slug='TELEGRAM_SEND_MESSAGE',
            arguments={'chat_id': TELEGRAM_CHAT_ID, 'text': text},
            dangerously_skip_version_check=True
        )
        return result.get('data', {}).get('result', {}).get('message_id')
    except Exception as e:
        print(f'Error sending Telegram: {e}')
        return None

def main():
    print('Zion CI/CD Monitor - Starting...')
    
    # 1. Fetch failure emails
    print('Fetching failure emails...')
    emails = fetch_emails('subject:"Run failed"', 20)
    print(f'Found {len(emails)} failure emails')
    
    if not emails:
        print('No failure emails found')
        return
    
    # 2. Analyze patterns
    subjects = [m.get('subject', '') for m in emails]
    unique_subjects = list(set(subjects))
    
    # Group by commit
    commit_patterns = {}
    for subj in subjects:
        if '(' in subj and ')' in subj:
            commit = subj.split('(')[-1].replace(')', '')
            if commit not in commit_patterns:
                commit_patterns[commit] = []
            commit_patterns[commit].append(subj)
    
    # 3. Build report
    report = f'''# 🚨 Zion CI/CD Failure Report

## 📊 Statistics
- Total failure emails: {len(emails)}
- Unique failure types: {len(unique_subjects)}
- Affected commits: {len(commit_patterns)}

## 🔴 Failed Workflows by Commit

'''
    for commit, failures in commit_patterns.items():
        report += f'### Commit `{commit}` ({len(failures)} failures)\n'
        for f in failures[:10]:
            report += f'- {f}\n'
        report += '\n'
    
    report += f'''
## 🤖 Automation
- Monitoring: Composio Gmail (zion-gmail)
- Tracking: GitHub issue
- Alerts: Telegram

---
*Generated: {datetime.utcnow().isoformat()}Z*
'''
    
    # 4. Create GitHub issue
    issue_title = f'🚨 CI/CD Alert: {len(unique_subjects)} workflow failures detected'
    issue_url = create_github_issue(issue_title, report)
    if issue_url:
        print(f'✅ GitHub issue created: {issue_url}')
    
    # 5. Send Telegram alert
    telegram_msg = f'''🚨 Zion CI/CD Alert

📊 {len(emails)} failure emails found
🔴 {len(unique_subjects)} unique failure types
🔗 Commits affected: {', '.join(list(commit_patterns.keys())[:3])}

Issue: {issue_url or 'N/A'}
'''
    msg_id = send_telegram(telegram_msg)
    if msg_id:
        print(f'✅ Telegram alert sent: {msg_id}')
    
    print('Monitor completed successfully')

if __name__ == '__main__':
    main()
