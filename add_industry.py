#!/usr/bin/env python3
import re
import sys

# Read the servicesData.ts file
with open('app/data/servicesData.ts', 'r') as f:
    content = f.read()

# We want to find each service object (the contents between { and } that are inside the arrays)
# This is a bit tricky because of nested braces. We'll do a simple approach: 
# We'll look for patterns that start with '{' and end with '},' but we need to be careful.

# Instead, we can use the fact that each service object ends with a line that has '  },' (two spaces, then }, then comma)
# and we know that each service object has an 'id' field.

# We'll split the content by lines and process.

lines = content.splitlines(keepends=True)
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    new_lines.append(line)
    # We are going to look for the start of a service object? Not easy.

    # We'll do a different approach: we'll use regex to find each service object and replace it.
    # But we'll do it on the whole content.

    i += 1

# Instead, let's use regex to find each service object and add industry if missing.
# We'll define a pattern that matches a service object (from '{' to the next '},' that is at the same indentation level?)
# This is complex.

# Given the time, we'll do a simpler approach: we know that the service objects are in the arrays aiServices, itServices, etc.
# We can split the content by the array names and then process each array.

# We'll split the content by 'export const aiServices: Service[] = [' and then by '];' etc.

# But there are multiple arrays.

# Let's just write a script that adds industry to every service object that doesn't have it, by parsing the TypeScript with a simple state machine.

# We'll iterate through the lines and keep track of when we are inside an array and inside an object.

in_array = False
in_object = False
object_start_line = 0
braces = 0
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped.startswith('export const') and 'Service[] =' in stripped:
        in_array = True
        continue
    if in_array and stripped.startswith('];'):
        in_array = False
        continue
    if in_array and stripped.startswith('{'):
        in_object = True
        braces = 1
        object_start_line = i
        continue
    if in_object:
        # Count braces
        for ch in line:
            if ch == '{':
                braces += 1
            elif ch == '}':
                braces -= 1
        if braces == 0:
            # End of object
            in_object = False
            # Now we have the object lines from object_start_line to i
            # We can check if the object has an industry field
            object_lines = lines[object_start_line:i+1]
            object_text = ''.join(object_lines)
            # Check if there is a line that contains 'industry:' (with possible spaces)
            if not re.search(r'\bindustry\s*:', object_text):
                # We need to add an industry field. We'll add it before the closing brace.
                # We'll insert a line with appropriate indentation.
                # Determine the indentation of the opening brace line.
                indent = len(lines[object_start_line]) - len(lines[object_start_line].lstrip())
                # We'll add the industry line just before the last line (the closing brace line)
                # But we must be careful not to break the formatting.
                # We'll insert at position i (the line of the closing brace) a new line with the industry field.
                # The industry line should have the same indentation as the other fields.
                # We'll look at the line before the closing brace to see the indentation.
                # Actually, the closing brace line is at index i, and the line before it is i-1.
                # We'll insert at index i (so before the closing brace line).
                industry_line = ' ' * (indent + 2) + 'industry: \'General\','  # assuming 2 spaces for the property inside the object
                lines.insert(i, industry_line)
                # Adjust indices because we inserted a line
                i += 1
                object_start_line += 1  # because we inserted a line before the object start? Actually we inserted inside the object, so the start line is still the same.
                # We'll continue.

# Write back
with open('app/data/servicesData.ts', 'w') as f:
    f.writelines(lines)

print("Added missing industry fields.")