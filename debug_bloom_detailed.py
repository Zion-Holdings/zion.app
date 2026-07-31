#!/usr/bin/env python3
"""Debug bloom filter hash collisions."""
import json
import math
import hashlib
from datetime import datetime, timezone
import re

SERVICES_FILE = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'

# Bloom filter implementation (same as in the script)
class BloomFilter:
    def __init__(self, capacity=500000, error_rate=0.001):
        self.capacity = capacity
        self.error_rate = error_rate
        self.bit_array_size = int(-capacity * math.log(error_rate) / (math.log(2) ** 2))
        self.hash_count = int(self.bit_array_size * math.log(2) / capacity)
        self.bit_array = [0] * self.bit_array_size
        print(f"Bloom filter init: bit_array_size={self.bit_array_size}, hash_count={self.hash_count}")
    
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

# Load existing services
with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
    services_data = json.load(f)

print(f"Services in file: {len(services_data)}")

# Initialize bloom filter
bf = BloomFilter(capacity=500000, error_rate=0.001)

# Load existing IDs into bloom filter
existing_ids = set()
for item in services_data:
    if 'id' in item and item['id']:
        existing_ids.add(item['id'])
        bf.add(item['id'])
    if 'name' in item and item['name']:
        name_lower = item['name'].lower()
        existing_ids.add(name_lower)
        bf.add(name_lower)
    if 'title' in item and item['title']:
        title_lower = item['title'].lower()
        existing_ids.add(title_lower)
        bf.add(title_lower)

print(f"Unique entries in existing_ids: {len(existing_ids)}")
print(f"Bits set in bloom filter: {sum(bf.bit_array)}")

# Check if existing IDs are in the bloom filter
print("\n--- Checking existing IDs are in bloom filter ---")
test_ids = list(existing_ids)[:5]
for tid in test_ids:
    result = bf.might_contain(tid)
    print(f"  {tid[:50]}... -> {result}")

# Generate a new service ID and check
print("\n--- Generating new service IDs ---")
def generate_service_id(service_name):
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "").replace("---", "-")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    if not base_id:
        base_id = "service"
    hash_part = hashlib.md5(f"{service_name}{datetime.now().isoformat()}".encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"

# Generate 10 new IDs and check
for i in range(10):
    name = f"Test Service {i} {datetime.now().isoformat()}"
    new_id = generate_service_id(name)
    in_existing = new_id in existing_ids
    in_bloom = bf.might_contain(new_id)
    print(f"  New ID {i}: {new_id}")
    print(f"    in_existing: {in_existing}, in_bloom: {in_bloom}")
    
    # Check the hash values
    hashes = [bf._hash(new_id, j) for j in range(bf.hash_count)]
    bits_set = sum(1 for h in hashes if bf.bit_array[h] == 1)
    print(f"    Hashes: {hashes[:3]}... (showing first 3)")
    print(f"    Bits set: {bits_set}/{bf.hash_count}")