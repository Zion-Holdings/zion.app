#!/usr/bin/env python3
import subprocess, json, time, sys, os
from concurrent.futures import ThreadPoolExecutor, as_completed

TOKEN = subprocess.run(['gh','auth','token'],capture_output=True,text=True).stdout.strip()
HEADERS = [
    '-H', f'Authorization: Bearer {TOKEN}',
    '-H', 'Accept: application/vnd.github+json',
    '-H', 'X-GitHub-Api-Version: 2022-11-28'
]

def close_issue(n):
    r = subprocess.run(['curl','-s','-X','PATCH',
        f'https://api.github.com/repos/Zion-support/zion-support.github.io/issues/{n}',
        *HEADERS, '-d','{"state":"closed"}'],
        capture_output=True, text=True)
    if '"state":"closed"' in r.stdout or '"state": "closed"' in r.stdout:
        return True
    return False

closed = 0
page = 1
with ThreadPoolExecutor(max_workers=3) as executor:
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
        print(f'Page {page}: {len(data)} issues', flush=True)
        futures = {}
        for i in data:
            if 'pull_request' in i:
                continue
            n = i['number']
            f = executor.submit(close_issue, n)
            futures[f] = n
        for f in as_completed(futures):
            if f.result():
                closed += 1
        page += 1
        if page % 5 == 0:
            print(f'Progress: {closed} closed so far', flush=True)

print(f'DONE: {closed} issues closed')
