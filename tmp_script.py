import subprocess, os, sys

os.chdir('/data/data/com.termux/files/home/zion-support.github.io')

print('--- gmail_thread_get ---')
p = subprocess.run(['python3','commands/google_workspace.py','gmail_thread_get','19f3df60bc1cf2ed'], capture_output=True, text=True)
print(p.stdout)
if p.stderr:
    print(p.stderr)
print('EXIT', p.returncode)

print('\n--- ledger head/tail ---')
ledger_path = 'lead-crm/outreach_monitor/processed/hot_followup_reply_ledger.jsonl'
if os.path.exists(ledger_path):
    with open(ledger_path, 'r', errors='ignore') as f:
        lines = f.readlines()
    for line in lines[-20:]:
        print(line.rstrip())
else:
    print('NO LEDGER')
