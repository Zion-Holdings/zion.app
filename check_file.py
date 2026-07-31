#!/usr/bin/env python3
import json

path = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'

# Check file size
import os
size = os.path.getsize(path)
print(f"File size: {size} bytes")

# Try to read and parse
with open(path, 'r') as f:
    content = f.read()
    print(f"Content length: {len(content)}")
    print(f"Last 200 chars: {repr(content[-200:])}")
    
# Try to parse
try:
    with open(path, 'r') as f:
        data = json.load(f)
    print(f"Parsed successfully: {len(data)} services")
except json.JSONDecodeError as e:
    print(f"JSON error: {e}")
    # Try to find where the error is
    print(f"Error at position: {e.pos}")
    print(f"Context around error: {repr(content[max(0, e.pos-100):e.pos+100])}")