import json
import os
import requests
import sys

def sync_allowlist():
    allowlist_file = 'infra/allowlist.json'
    api_token = os.getenv('CLOUD_REOWN_TOKEN')
    project_id = os.getenv('CLOUD_REOWN_PROJECT_ID')

    if not api_token:
        print("Error: CLOUD_REOWN_TOKEN secret not found.")
        sys.exit(1)

    if not project_id:
        print("Error: CLOUD_REOWN_PROJECT_ID secret not found.")
        sys.exit(1)

    try:
        with open(allowlist_file, 'r') as f:
            data = json.load(f)
            allowed_origins = data.get('allowed_origins', [])
    except FileNotFoundError:
        print(f"Error: {allowlist_file} not found.")
        sys.exit(1)
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {allowlist_file}.")
        sys.exit(1)

    if not allowed_origins:
        print("No origins found in allowlist.json. Nothing to sync.")
        sys.exit(0)

    api_url = f"https://api.cloudreown.com/projects/{project_id}/allowlist"

    headers = {
        'Authorization': f'Bearer {api_token}',
        'Content-Type': 'application/json'
    }

    payload = allowed_origins

    print(f"Syncing {len(allowed_origins)} origins to {api_url}")
    print(f"Payload: {json.dumps(payload)}")

    try:
        response = requests.post(api_url, headers=headers, json=payload)
        response.raise_for_status()
        print("Successfully synced allowlist to Cloud Reown.")
        print(f"Response status: {response.status_code}")
        # print(f"Response body: {response.text}") # Avoid printing potentially sensitive info in real runs
        return True # Indicate success for testing
    except requests.exceptions.RequestException as e:
        print(f"Error syncing to Cloud Reown: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response status: {e.response.status_code}")
            print(f"Response body: {e.response.text}")
        sys.exit(1)

if __name__ == '__main__':
    sync_allowlist()
