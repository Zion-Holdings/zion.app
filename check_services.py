import os
import json

# Check services directory
services_dir = '/Users/klebergarciaalcatrao/zion-support.github.io/app/services'
if os.path.exists(services_dir):
    entries = os.listdir(services_dir)
    print(f"Services directory entries: {len(entries)}")
    print(f"First 10: {entries[:10]}")
else:
    print("Services directory does not exist")

# Check services count in JSON
json_file = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
with open(json_file, 'r') as f:
    data = json.load(f)
    if isinstance(data, list):
        print(f"Services in JSON: {len(data)}")
    elif isinstance(data, dict):
        print(f"Services in JSON: {len(data.get('services', []))}")

# Check progress file
progress_file = '/Users/klebergarciaalcatrao/.hermes/logs/service_pipeline_progress.txt'
if os.path.exists(progress_file):
    with open(progress_file, 'r') as f:
        print(f"Progress tracker: {f.read().strip()}")