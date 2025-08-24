import os
import requests
from django.core.management.base import BaseCommand
from currencies.models import Currency

SYMBOLS = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'CAD': '$',
    'AUD': '$',
}

class Command(BaseCommand):
    help = 'Update currency exchange rates from openexchangerates.org'

    def handle(self, *args, **options):
        app_id = os.environ.get('OPENEXCHANGERATES_APP_ID')
        if not app_id:
            self.stderr.write('OPENEXCHANGERATES_APP_ID not set')
            return
        try:
            resp = requests.get(
                f'https://openexchangerates.org/api/latest.json?app_id={app_id}'
            )
            resp.raise_for_status()
            data = resp.json()
        except Exception as e:
            self.stderr.write(f'Failed to fetch rates: {e}')
            return

        rates = data.get('rates', {})
        for code, rate in rates.items():
            Currency.objects.update_or_create(
                code=code,
                defaults={
                    'symbol': SYMBOLS.get(code, code),
                    'fx_rate': rate,
                },
            )
        self.stdout.write('Currencies updated')
