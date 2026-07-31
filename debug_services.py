#!/usr/bin/env python3
"""Debug script to understand why no services are being added."""
import json
import sys
import os
import math
import hashlib
import random
from datetime import datetime, timezone
import re

# Bloom filter implementation (same as in the script)
class BloomFilter:
    def __init__(self, capacity=500000, error_rate=0.001):
        self.capacity = capacity
        self.error_rate = error_rate
        self.bit_array_size = int(-capacity * math.log(error_rate) / (math.log(2) ** 2))
        self.hash_count = int(self.bit_array_size * math.log(2) / capacity)
        self.bit_array = [0] * self.bit_array_size
        print(f"Bloom filter: bit_array_size={self.bit_array_size}, hash_count={self.hash_count}")
    
    def _hash(self, item, seed):
        return hash(f"{item}{seed}") % self.bit_array_size
    
    def add(self, item):
        for i in range(self.hash_count):
            index = self._hash(item, i)
            self.bit_array[index] = 1
    
    def might_contain(self, item):
        for i in range(self.hash_count):
            index = self._hash(item, i)
            if self.bit_array[index] == 0:
                return False
        return True

SERVICES_FILE = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'

# Load existing services
with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
    services_data = json.load(f)

print(f"Total services in file: {len(services_data)}")

# Initialize bloom filter
bloom_filter = BloomFilter(capacity=500000, error_rate=0.001)

# Load existing IDs into bloom filter (simulating get_existing_ids)
existing_ids = set()
for item in services_data:
    if 'id' in item and item['id']:
        existing_ids.add(item['id'])
        bloom_filter.add(item['id'])
    if 'name' in item and item['name']:
        name_lower = item['name'].lower()
        existing_ids.add(name_lower)
        bloom_filter.add(name_lower)
    if 'title' in item and item['title']:
        title_lower = item['title'].lower()
        existing_ids.add(title_lower)
        bloom_filter.add(title_lower)

print(f"Unique IDs in existing_ids set: {len(existing_ids)}")

# Now generate a few test service IDs
def generate_service_id(service_name):
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "").replace("---", "-")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    if not base_id:
        base_id = "service"
    hash_part = hashlib.md5(f"{service_name}{datetime.now().isoformat()}".encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"

# Generate test services
test_names = [
    "AI-Powered Analytics for Healthcare",
    "Intelligent Automation Platform - Finance",
    "Predictive Data Processing Engine - Retail",
    "Smart Cloud Management System - Technology",
    "Autonomous Optimization Suite - Manufacturing"
]

print("\n--- Testing generated service IDs ---")
for name in test_names:
    service_id = generate_service_id(name)
    in_existing = service_id in existing_ids
    in_bloom = bloom_filter.might_contain(service_id)
    print(f"Name: {name}")
    print(f"  ID: {service_id}")
    print(f"  in existing_ids: {in_existing}")
    print(f"  in bloom_filter: {in_bloom}")
    print(f"  Would be added: {not in_existing and not in_bloom}")
    print()