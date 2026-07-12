
# google_api.py
# Lightweight Gmail/People API auth builder for local outreach runs.

from __future__ import annotations

import os
from typing import Optional, Any

SCOPES = [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/gmail.modify",
    "https://www.googleapis.com/auth/contacts.readonly",
    "https://www.googleapis.com/auth/userinfo.email",
]

TOKEN_PATH = os.environ.get("GOOGLE_GMAIL_TOKEN_PATH", "outreach_monitor/processed/gmail_token.json")

def _token_exists() -> bool:
    try:
        return os.path.isfile(TOKEN_PATH)
    except Exception:
        return False


def build_service(api_name: str = "gmail", api_version: str = "v1"):
    """Return a googleapiclient service client if tokens/credentials are available.

    Supports Gmail by default and optional service/version passthrough for callers
    that explicitly pass `build_service('gmail', 'v1')`.
    """
    try:
        import googleapiclient.discovery
    except Exception as exc:
        raise ImportError("Missing google-api-python-client") from exc

    try:
        from google.oauth2.credentials import Credentials
    except Exception as exc:
        raise ImportError("Missing google-auth / google-auth-oauthlib") from exc

    if not _token_exists():
        raise FileNotFoundError("Missing Google OAuth token")

    creds = Credentials.from_authorized_user_file(TOKEN_PATH, scopes=SCOPES)

    return googleapiclient.discovery.build(api_name, api_version, credentials=creds)
