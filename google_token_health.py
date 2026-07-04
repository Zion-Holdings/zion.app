import os, json
from datetime import datetime, timezone
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

token_path = os.path.join(os.environ["LOCALAPPDATA"], "hermes", "google_token.json")
print("token_path:", token_path)
with open(token_path, "r", encoding="utf-8") as f:
    data = json.load(f)
print("keys:", list(data.keys()))
print("has_token:", bool(data.get("token")))
print("has_refresh_token:", bool(data.get("refresh_token")))

creds = Credentials(
    token=data.get("token"),
    refresh_token=data.get("refresh_token"),
    token_uri=data.get("token_uri", "https://oauth2.googleapis.com/token"),
    client_id=data.get("client_id"),
    client_secret=data.get("client_secret"),
    scopes=data.get("scopes", []),
)
print("valid:", creds.valid)
print("expired:", creds.expired)
print("expiry_raw:", getattr(creds, "expiry", None))
renovated = False
new_expiry = None
if creds.expired and data.get("refresh_token"):
    req = Request()
    creds.refresh(req)
    data["token"] = creds.token
    if creds.expiry:
        data["expiry"] = creds.expiry.isoformat()
        new_expiry = creds.expiry
    else:
        data.pop("expiry", None)
    with open(token_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    renovated = True

with open(token_path, "r", encoding="utf-8") as f:
    refreshed = json.load(f)
creds2 = Credentials(
    token=refreshed.get("token"),
    refresh_token=refreshed.get("refresh_token"),
    token_uri=refreshed.get("token_uri", "https://oauth2.googleapis.com/token"),
    client_id=refreshed.get("client_id"),
    client_secret=refreshed.get("client_secret"),
    scopes=refreshed.get("scopes", []),
)
print("final_valid:", creds2.valid)
print("renovated:", renovated)
print("final_expiry:", getattr(creds2, "expiry", None))

svc = build("gmail", "v1", credentials=creds2, cache_discovery=False)
profile = svc.users().getProfile(userId="me").execute()
print("gmail_profile:", {
    "email": profile.get("emailAddress"),
    "messagesTotal": profile.get("messagesTotal"),
    "historyId": profile.get("historyId"),
})
