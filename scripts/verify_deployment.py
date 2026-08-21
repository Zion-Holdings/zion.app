#!/usr/bin/env python3
"""Independent verification of newly deployed service pages.
Re-runs grade_landing_page() on each deployed file and confirms all pass."""
import json, os, sys, importlib.util

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
RESULTS_FILE = os.path.join(BASE, "cron_output", "eval-gated-services-2026-08-21T06:06:39Z.json")

# Load the hermes script's grade function
spec = importlib.util.spec_from_file_location('evggen', os.path.expanduser('~/.hermes/scripts/eval-gated-service-generator.py'))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

# Load results from the cron run
with open(RESULTS_FILE) as f:
    report = json.load(f)

deployed = report['deployed']
print(f"Verifying {len(deployed)} deployed pages from cron run {report['timestamp']}")
print(f"{'Service':70s} {'Exists':7s} {'Passes':7s} {'Score':6s} {'Words':6s}")
print("=" * 100)

all_pass = True
all_exist = True
for entry in deployed:
    filepath = entry['file']
    name = entry['service'][:68]
    exists = os.path.exists(filepath)
    if not exists:
        all_exist = False
        print(f"  {name:70s} MISSING!  N/A     N/A    N/A")
        continue
    content = open(filepath).read()
    result = mod.grade_landing_page(content)
    passes = result['passed'] and result['score'] >= 0.8
    if not passes:
        all_pass = False
    wc = result['metrics']['word_count']
    print(f"  {name:70s} {'✓' if exists else '✗':7s} {'✓' if passes else '✗':7s} {result['score']:.2f}   {wc:6d}")

print("=" * 100)
print(f"Total deployed:  {len(deployed)}")
print(f"All files exist: {all_exist}")
print(f"All pass eval:   {all_pass}")
print(f"Deployed score range: {min(e['score'] for e in deployed):.2f} - {max(e['score'] for e in deployed):.2f}")
print(f"Blocked: {len(report['blocked'])}")
print(f"Skipped (duplicates): {report['skipped_duplicates']}")
print(f"Skipped (timeout): {len(report['skipped_timeout'])}")
