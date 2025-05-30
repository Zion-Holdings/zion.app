import json
import os
import shutil
import tempfile
import zipfile
from django.core.management.base import BaseCommand
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone

from privacy.models import (
    DataExportRequest,
    DeletionRequest,
    AuditLog,
    UserExtra,
)
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = "Process data export and deletion requests"

    def handle(self, *args, **options):
        self.process_exports()
        self.process_deletions()

    def process_exports(self):
        for req in DataExportRequest.objects.filter(processed=False):
            data = self.build_data(req.user)
            with tempfile.TemporaryDirectory() as tmpdir:
                json_path = os.path.join(tmpdir, 'data.json')
                with open(json_path, 'w') as f:
                    json.dump(data, f, default=str)
                zip_path = os.path.join(tmpdir, 'data.zip')
                with zipfile.ZipFile(zip_path, 'w') as z:
                    z.write(json_path, 'data.json')
                final_dir = os.path.join(settings.BASE_DIR, 'exports')
                os.makedirs(final_dir, exist_ok=True)
                final_path = os.path.join(final_dir, f'{req.token}.zip')
                shutil.copy(zip_path, final_path)
            req.file_path = final_path
            req.processed = True
            req.expires_at = timezone.now() + timezone.timedelta(hours=24)
            req.save()
            AuditLog.objects.create(user=req.user, action='export_generated')
            send_mail(
                'Your data export',
                f'Download link: {settings.SITE_URL}/exports/{req.token}.zip',
                settings.DEFAULT_FROM_EMAIL,
                [req.user.email],
                fail_silently=True,
            )

    def build_data(self, user: User):
        orders = getattr(user, 'order_set', None)
        messages = getattr(user, 'message_set', None)
        return {
            'user': {'id': user.id, 'username': user.username, 'email': user.email},
            'orders': list(orders.all().values()) if orders else [],
            'messages': list(messages.all().values()) if messages else [],
        }

    def process_deletions(self):
        for req in DeletionRequest.objects.filter(approved=True, processed_at__isnull=True):
            user = req.user
            AuditLog.objects.create(user=user, action='deletion_processed')
            user.username = f'deleted-{user.id}'
            user.email = ''
            user.save()
            extra, _ = UserExtra.objects.get_or_create(user=user)
            extra.pending_delete = False
            extra.save()
            req.processed_at = timezone.now()
            req.save()

