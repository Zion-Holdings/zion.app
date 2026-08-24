#!/usr/bin/env python3
import json, os, re, sys

sys.path.insert(0, "/Users/klebergarciaalcatrao/.hermes/scripts")
import importlib.util

spec = importlib.util.spec_from_file_location(
    "gen", "/Users/klebergarciaalcatrao/.hermes/scripts/eval-gated-service-generator.py")
gen = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gen)

# Test 1: Synthetic page
html = "<html><title>Test Service | Zion Tech Group</title><meta name='description' content='A test service description for quality check.'><h1>Main heading</h1><link rel='canonical' href='https://example.com'><script type='application/ld+json'>{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"Test\"}</script><meta property='og:title' content='Test'><meta name='twitter:card' content='summary'><p>Body text here to make word count sufficient for quality gate. This paragraph adds words to satisfy minimum threshold.</p></html>"
r = gen.grade_landing_page(html)
print("=== Synthetic test ===")
print(f"Score: {r['score']}, Passed: {r['passed']}, Words: {r['metrics']['word_count']}")
print(f"Errors: {r['errors']}, Warnings: {r['warnings']}")

# Test 2: Real deployed page
svc_dir = "/Users/klebergarciaalcatrao/zion-support.github.io/app/services"
for d in os.listdir(svc_dir):
    if d.startswith("ai-powered-predictive-analytics"):
        p = os.path.join(svc_dir, d, "page.tsx")
        with open(p) as f:
            content = f.read()
        r2 = gen.grade_landing_page(content)
        print(f"\n=== Real page ===")
        print(f"File: {d}/page.tsx")
        print(f"Score: {r2['score']}, Passed: {r2['passed']}, Words: {r2['metrics']['word_count']}")
        print(f"Errors: {r2['errors']}, Warnings: {r2['warnings']}")
        break
else:
    print("\nNo real page found")
