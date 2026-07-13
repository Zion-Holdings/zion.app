# google_api.py
# Lightweight Gmail service wrapper for local outreach runs.

from __future__ import annotations

import os
import urllib.request
import urllib.parse
import base64
import json
from pathlib import Path

from commands.google_workspace import gog_headers

SCOPES = [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/gmail.modify",
    "https://www.googleapis.com/auth/contacts.readonly",
    "https://www.googleapis.com/auth/userinfo.email",
]

def _api(req):
    data = None
    method = "GET"
    headers = dict(gog_headers())
    if isinstance(req, tuple):
        method, url, payload = req
        data = json.dumps(payload).encode("utf-8") if payload is not None else None
    else:
        url = req
    if data is not None:
        headers["Content-Type"] = "application/json"
    r = urllib.request.Request(url, data=data, headers=headers, method=method)
    with urllib.request.urlopen(r, timeout=60) as resp:
        body = resp.read()
    return json.loads(body)

try:
    import json
except Exception:
    pass


class _Labels:
    def __init__(self, http):
        self._http = http
    def list(self, **kwargs):
        url = "https://gmail.googleapis.com/gmail/v1/users/me/labels"
        return self._http(url)


class _Messages:
    def __init__(self, http):
        self._http = http

    def list(self, **kwargs):
        userId = kwargs.get("userId", "me")
        q = kwargs.get("q")
        labelIds = kwargs.get("labelIds")
        maxResults = kwargs.get("maxResults", 20)
        params = [f"maxResults={maxResults}"]
        if q:
            params.append(f"q={urllib.parse.quote(q)}")
        if labelIds:
            for lid in labelIds:
                params.append(f"labelIds={urllib.parse.quote(lid)}")
        url = f"https://gmail.googleapis.com/gmail/v1/users/{userId}/messages?" + "&".join(params)
        return self._http(url)

    def get(self, **kwargs):
        userId = kwargs.get("userId", "me")
        mid = kwargs.get("id")
        fmt = kwargs.get("format", "full")
        meta = kwargs.get("metadataHeaders") or []
        url = f"https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{mid}?format={fmt}"
        if meta:
            url += "&" + "&".join(f"metadataHeaders={urllib.parse.quote(h)}" for h in meta)
        return self._http(url)

    def send(self, **kwargs):
        userId = kwargs.get("userId", "me")
        body = kwargs.get("body") or {}
        url = f"https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/send"
        return self._http(("POST", url, body))

    def batchModify(self, **kwargs):
        userId = kwargs.get("userId", "me")
        body = kwargs.get("body") or {}
        url = f"https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/batchModify"
        return self._http(("POST", url, body))


class _Threads:
    def __init__(self, http):
        self._http = http

    def get(self, **kwargs):
        userId = kwargs.get("userId", "me")
        tid = kwargs.get("id")
        fmt = kwargs.get("format", "full")
        url = f"https://gmail.googleapis.com/gmail/v1/users/{userId}/threads/{tid}?format={fmt}"
        return self._http(url)


class _Users:
    def __init__(self, http):
        self._http = http
        self.labels = _Labels(http)
        self.messages = _Messages(http)
        self.threads = _Threads(http)


class _GmailService:
    def __init__(self):
        self.users = _Users(_api)


def build_service(api_name: str = "gmail", api_version: str = "v1"):
    if api_name != "gmail" or api_version != "v1":
        raise ValueError("Only gmail v1 is supported in lightweight wrapper")
    return _GmailService()
