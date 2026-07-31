#!/usr/bin/env python3
import json
import sys
import os
import math

# Simulate what the script does
SERVICES_FILE = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'

# Check file exists
print(f"File exists: {os.path.exists(SERVICES_FILE)}")

# Load services
try:
    with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
        services = json.load(f)
    print(f"Services loaded: {len(services) if isinstance(services, list) else 'not a list'}")
except Exception as e:
    print(f"Error loading: {type(e).__name__}: {e}")

# Check bloom filter issue
print("\n--- Testing bloom filter logic ---")

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

# Test
bf = BloomFilter()
test_ids = ["test-id-1", "test-id-2", "test-id-3"]
for tid in test_ids:
    bf.add(tid)
    
for tid in test_ids:
    print(f"{tid} in bloom filter: {bf.might_contain(tid)}")
    
print(f"test-id-4 in bloom filter: {bf.might_contain('test-id-4')}")