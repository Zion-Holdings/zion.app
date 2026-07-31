#!/usr/bin/env python3
import os

services_dir = '/Users/klebergarciaalcatrao/zion-support.github.io/app/services'
count = 0
for root, dirs, files in os.walk(services_dir):
    if 'page.tsx' in files:
        count += 1
print(f'Total landing pages created: {count}')