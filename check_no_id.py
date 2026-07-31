import json

data = json.load(open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'))

# Find services without ID
no_id = [s for s in data if 'id' not in s]
print(f"Services without ID: {len(no_id)}")

if no_id:
    print("\nFirst 3 services without ID:")
    for i, s in enumerate(no_id[:3]):
        print(f"\nService {i+1}:")
        print(f"  Keys: {list(s.keys())}")
        print(f"  Name: {s.get('name', 'N/A')}")