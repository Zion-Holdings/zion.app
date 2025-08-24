#!/usr/bin/env python3
import subprocess

print('Checking for outdated pip packages...')
subprocess.run(['pip', 'list', '--outdated'])
print('Updating pip packages...')
subprocess.run(['pip', 'install', '--upgrade', 'pip'])
subprocess.run(['pip', 'list', '--outdated'], capture_output=True)
print('Dependency update complete.') 