#!/usr/bin/env python3
import json

# Read the file
with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Try to parse
try:
    data = json.loads(content)
    print('JSON is valid')
    print(f'Number of services: {len(data)}')
except json.JSONDecodeError as e:
    print(f'JSON error at position {e.pos}')
    
    # Find the last valid ] that closes the array
    bracket_count = 0
    last_valid_pos = 0
    in_string = False
    escape_next = False
    
    for i, char in enumerate(content):
        if escape_next:
            escape_next = False
            continue
        if char == '\\':
            escape_next = True
            continue
        if char == '"' and not escape_next:
            in_string = not in_string
            continue
        if in_string:
            continue
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
            if bracket_count == 0:
                last_valid_pos = i + 1
    
    # Truncate at the last valid position
    valid_content = content[:last_valid_pos]
    
    # Verify it's valid JSON
    try:
        data = json.loads(valid_content)
        print(f'Fixed JSON - {len(data)} services')
        
        # Write back
        with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print('File fixed and saved')
    except Exception as e2:
        print(f'Still invalid: {e2}')