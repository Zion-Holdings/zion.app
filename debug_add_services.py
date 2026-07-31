#!/usr/bin/env python3
"""Debug script to trace why no services are being added."""
import json
import sys
import os
import math
import hashlib
import random
from datetime import datetime, timezone
import re

# Bloom filter implementation
class BloomFilter:
    def __init__(self, capacity=500000, error_rate=0.001):
        self.capacity = capacity
        self.error_rate = error_rate
        self.bit_array_size = int(-capacity * math.log(error_rate) / (math.log(2) ** 2))
        self.hash_count = int(self.bit_array_size * math.log(2) / capacity)
        self.bit_array = [0] * self.bit_array_size
    
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

print(f"Services in file: {len(services_data)}")

# Initialize bloom filter
bloom_filter = BloomFilter(capacity=500000, error_rate=0.001)

# Load existing IDs into bloom filter
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

print(f"Unique entries in existing_ids: {len(existing_ids)}")

# Generate a test service ID
def generate_service_id(service_name):
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "").replace("---", "-")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    if not base_id:
        base_id = "service"
    hash_part = hashlib.md5(f"{service_name}{datetime.now().isoformat()}".encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"

# Test with a few generated IDs
test_service_ids = []
for i in range(5):
    name = f"Test Service {i}"
    sid = generate_service_id(name)
    test_service_ids.append(sid)
    print(f"\nGenerated ID {i}: {sid}")
    print(f"  In existing_ids: {sid in existing_ids}")
    print(f"  In bloom_filter: {bloom_filter.might_contain(sid)}")
    print(f"  Would be added: {sid not in existing_ids and not bloom_filter.might_contain(sid)}")

# Now check if there's an issue with the bloom filter hash function
print("\n--- Checking hash function consistency ---")
test_key = "test-key-123"
hashes1 = [bloom_filter._hash(test_key, i) for i in range(bloom_filter.hash_count)]
print(f"Hashes for '{test_key}': {hashes1[:5]}...")

# Check if the bloom filter is working correctly
print("\n--- Testing bloom filter ---")
test_new_id = "completely-new-id-abc123"
print(f"Before adding '{test_new_id}': {bloom_filter.might_contain(test_new_id)}")
bloom_filter.add(test_new_id)
print(f"After adding '{test_new_id}': {bloom_filter.might_contain(test_new_id)}")