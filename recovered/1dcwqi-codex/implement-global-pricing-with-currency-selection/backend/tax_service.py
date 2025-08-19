import os
import requests

class TaxService:
    """Utility for interacting with the TaxJar API."""

    def __init__(self, api_key: str | None = None):
        self.api_key = api_key or os.environ.get('TAXJAR_API_KEY')
        self.base_url = 'https://api.taxjar.com/v2'
        self.headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }

    def calculate_tax(self, **payload):
        """Calculate taxes using the TaxJar API.

        Required payload keys include from_country, from_zip, to_country,
        to_zip, amount, shipping, and optionally nexus addresses.
        """
        url = f'{self.base_url}/taxes'
        response = requests.post(url, json={'transaction': payload}, headers=self.headers)
        response.raise_for_status()
        return response.json().get('tax', {})
