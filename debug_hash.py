#!/usr/bin/env python3
"""Debug hash function collisions."""
import json
import math

SERVICES_FILE = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'

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

# Load services
with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
    services_data = json.load(f)

print(f"Services in file: {len(services_data)}")

# Initialize bloom filter
bf = BloomFilter(capacity=500000, error_rate=0.001)
print(f"Bit array size: {bf.bit_array_size}")
print(f"Hash count: {bf.hash_count}")

# Load existing IDs
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

print(f"Unique entries: {len(existing_ids)}")
print(f"Bits set: {sum(bf.bit_array)}")

# Check hash function consistency
print("\n--- Testing hash function consistency ---")
test_id = "test-id-123"
hashes1 = [bf._hash(test_id, i) for i in range(bf.hash_count)]
print(f"Hashes for '{test_id}': {hashes1}")

# Check if different IDs produce overlapping hash positions
print("\n--- Checking hash overlap between different IDs ---")
# Get a few existing IDs
existing_sample = list(existing_ids)[:100]
new_ids = [f"new-id-{i}" for i in range(100)]

# Check overlap
all_hashes_existing = set()
for eid in existing_sample:
    for i in range(bf.hash_count):
        all_hashes_existing.add(bf._hash(eid, i))

all_hashes_new = set()
for nid in new_ids:
    for i in range(bf.hash_count):
        all_hashes_new.add(bf._hash(nid, i))

overlap = all_hashes_existing & all_hashes_new
print(f"Existing hash positions: {len(all_hashes_existing)}")
print(f"New hash positions: {len(all_hashes_new)}")
print(f"Overlap: {len(overlap)} ({100*len(overlap)/len(all_hashes_new):.1f}%)")

# Check why new IDs are returning True
print("\n--- Checking why new IDs are in bloom filter ---")
for nid in new_ids[:10]:
    hashes = [bf._hash(nid, i) for i in range(bf.hash_count)]
    bits_set = sum(1 for h in hashes if bf.bit_array[h] == 1)
    print(f"  {nid}: bits_set={bits_set}/{bf.hash_count}, might_contain={bf.might_contain(nid)}")