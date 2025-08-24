import os
import requests
from typing import Any, Dict, Optional


class ZionClient:
    def __init__(self, base_url: str, api_key: Optional[str] = None, auth_token: Optional[str] = None):
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key
        self.auth_token = auth_token
        self.session = requests.Session()

    def _headers(self) -> Dict[str, str]:
        headers = {"Content-Type": "application/json"}
        if self.api_key:
            headers["x-api-key"] = self.api_key
        if self.auth_token:
            headers["Authorization"] = f"Bearer {self.auth_token}"
        return headers

    def _request(self, method: str, path: str, json: Optional[Dict[str, Any]] = None, params: Optional[Dict[str, Any]] = None):
        url = f"{self.base_url}{path if path.startswith('/') else '/' + path}"
        resp = self.session.request(method, url, json=json, params=params, headers=self._headers())
        resp.raise_for_status()
        if resp.status_code == 204:
            return None
        return resp.json()

    # Marketplace
    def marketplace_list_jobs(self, limit: Optional[int] = None, offset: Optional[int] = None):
        params = {"limit": limit, "offset": offset}
        params = {k: v for k, v in params.items() if v is not None}
        return self._request("GET", "/marketplace/jobs", params=params)

    # DAO
    def dao_create_proposal(self, proposal: Dict[str, Any]):
        return self._request("POST", "/dao/proposals", json=proposal)

    # Token
    def token_get_balances(self, address: Optional[str] = None):
        params = {"address": address} if address else None
        return self._request("GET", "/token/balances", params=params)