#!/usr/bin/env python3
"""Fix corrupted servicesData.json file by removing null bytes and extra content."""

import json
import sys

file_path = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'

with open(file_path, 'rb') as f:
    content = f.read()

# Find the position of the first null byte
null_pos = content.find(b'\x00')
print(f"First null byte at position: {null_pos}")

# Extract content before null bytes
valid_content = content[:null_pos]

# Verify it's valid JSON
try:
    data = json.loads(valid_content.decode('utf-8'))
    print(f"Valid JSON with {len(data)} services")
    
    # Write back only the valid JSON
    with open(file_path, 'wb') as f:
        f.write(valid_content)
    print("File fixed successfully")
    sys.exit(0)
except json.JSONDecodeError as e:
    print(f"JSON decode error: {e}")
    # Try to find a valid JSON end
    # Look for the last ] that closes the array
    last_bracket = valid_content.rfind(b']')
    if last_bracket != -1:
        test_content = valid_content[:last_bracket+1]
        try:
            data = json.loads(test_content.decode('utf-8'))
            print(f"Found valid JSON ending at position {last_bracket+1}")
            with open(file_path, 'wb') as f:
                f.write(test_content)
            print(f"File fixed with {len(data)} services")
            sys.exit(0)
        except json.JSONDecodeError as e2:
            print(f"Still invalid: {e2}")
            sys.exit(1)