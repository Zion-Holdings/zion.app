#!/usr/bin/env python3
import subprocess, json, time, sys

TOKEN = subprocess.run(['gh','auth','token'],capture_output=True,text=True).stdout.strip()
HEADERS = ['-H', f'Authorization: Bearer {TOKEN}', '-H', 'Accept: application/vnd.github+json']

def close_issue(n):
    r = subprocess.run(['curl','-s','-X','PATCH',
        f'https://api.github.com/repos/Zion-support/zion-support.github.io/issues/{n}',
        *HEADERS, '-d','{"state":"closed"}'],
        capture_output=True, text=True)
    return n

closed = 0
page = 1
while True:
    r = subprocess.run(['curl','-s'] + HEADERS + [
        f'https://api.github.com/repos/Zion-support/zion-support.github.io/issues?state=open&per_page=100&page={page}'
    ], capture_output=True, text=True)
    try:
        data = json.loads(r.stdout)
    except:
        break
    if not data:
        break
    nums = [i['number'] for i in data if 'pull_request' not in i]
    if not nums:
        break
    for n in nums:
        close_issue(n)
        closed += 1
    if page % 5 == 0:
        print(f'Page {page}: {closed} closed so far', flush=True)
    page += 1

print(f'DONE: {closed} issues closed')
