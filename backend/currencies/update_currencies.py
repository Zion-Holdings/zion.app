#!/usr/bin/env python
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_backend.settings')
django.setup()

from django.core.management import call_command

if __name__ == '__main__':
    call_command('update_currencies')
