#!/usr/bin/env python3
"""Reset rotation and run outreach generator"""

# Reset rotation to 0
with open('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_rotation.txt', 'w') as f:
    f.write('0')

print("Rotation reset to 0")

# Now run the outreach generator
import subprocess
result = subprocess.run(
    ['python3', '/Users/klebergarciaalcatrao/scripts/growth-automation/rapid_outreach_generator.py'],
    capture_output=True,
    text=True,
    timeout=300
)

print("=== STDOUT ===")
print(result.stdout)
print("\n=== STDERR ===")
print(result.stderr)
print("\n=== EXIT CODE ===")
print(result.returncode)