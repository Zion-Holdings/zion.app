#!/usr/bin/env python3
import re
import sys

# Read the file
with open('app/data/servicesData.ts', 'r') as f:
    lines = f.readlines()

# We'll process the lines and look for service objects.
# We'll use a simple state machine: we are inside an object when we have seen an opening brace
# and not yet seen the closing brace that matches.
# We'll keep a stack of brace counts for nested objects? Actually service objects are not nested.
# We'll assume that when we see a line that starts with whitespace and then '{' and we are not already in an object, we enter an object.
# We'll also assume that the object ends with a line that contains '},' (with possible whitespace before the comma).

in_object = False
object_start = 0
brace_count = 0
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    stripped = line.strip()
    
    # Detect start of a service object: a line that contains '{' and the previous non-empty line is not part of an object?
    # We'll use a simpler approach: we know that each service object is an element in an array, so it starts with '  {' (two spaces and then {)
    # and ends with '  },' (two spaces, then }, then comma).
    # We'll rely on the fact that the file is formatted consistently.
    
    if not in_object and stripped.startswith('{') and (i == 0 or lines[i-1].strip().endswith('[') or lines[i-1].strip().endswith(',')):
        # Potential start of an object
        in_object = True
        brace_count = 1
        object_start = i
        new_lines.append(line)
        i += 1
        continue
    
    if in_object:
        # Count braces in this line
        for ch in line:
            if ch == '{':
                brace_count += 1
            elif ch == '}':
                brace_count -= 1
        new_lines.append(line)
        if brace_count == 0:
            # End of object
            in_object = False
            # Now we have the object lines from object_start to i
            # Check if the object already has an industry field
            object_lines = lines[object_start:i+1]
            object_text = ''.join(object_lines)
            if not re.search(r'\bindustry\s*:', object_text):
                # We need to add an industry field. We'll add it before the closing brace line.
                # We'll insert a line with appropriate indentation.
                # Determine the indentation of the line before the closing brace (the last line of the object content)
                # Actually, we can look at the line before the closing brace (which is at index i-1 in the original lines, but we have already added lines to new_lines)
                # Instead, we'll just add the industry line with the same indentation as the other fields.
                # We'll look at the line that contains 'popular:' to get the indentation.
                # We'll search for the line that contains 'popular:' in the object lines.
                indent = '    '  # default assumption: 4 spaces
                for j, ol in enumerate(object_lines):
                    if 'popular:' in ol:
                        # Extract the indentation
                        indent = ol[:len(ol) - len(ol.lstrip())]
                        break
                # Insert the industry line after the popular line? Actually we can insert before the closing brace.
                # We'll insert at the position of the closing brace line in new_lines? But we have already added the closing brace line to new_lines.
                # We'll instead not add the closing brace line yet, and then add the industry line, then add the closing brace line.
                # We need to adjust: we have not yet added the closing brace line? Actually we have added the line to new_lines when we processed it.
                # We'll remove the last line we added (the closing brace line) and then add the industry line and then the closing brace line.
                # But we have already added the line to new_lines. Let's pop it.
                new_lines.pop()  # remove the closing brace line
                # Add the industry line with the same indentation as the popular line, plus 2 spaces? Actually the property inside the object should be at the same indentation as other properties.
                # We'll use the same indent as the popular line.
                new_lines.append(indent + 'industry: \'General\',\\n')
                # Add the closing brace line back
                new_lines.append(line)
            i += 1
            continue
        i += 1
        continue
    
    # Not in object
    new_lines.append(line)
    i += 1

# Write back
with open('app/data/servicesData.ts', 'w') as f:
    f.writelines(new_lines)

print("Added missing industry fields to service objects.")