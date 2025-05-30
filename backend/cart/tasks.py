from datetime import timedelta
from django.utils import timezone
from celery import shared_task
from django.conf import settings
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.template.loader import render_to_string
from .models import CartSnapshot

@shared_task
def send_abandoned_cart_emails():
    cutoff = timezone.now() - timedelta(hours=2)
    snapshots = CartSnapshot.objects.filter(
        updated_at__lte=cutoff,
        restored=False,
        ordered_at__isnull=True,
    )
    for snap in snapshots:
        if not snap.email:
            continue
        link = f"{settings.SITE_URL}/cart?token={snap.token}"
        html = render_to_string('emails/restore_cart.html', {'restore_link': link})
        sg = SendGridAPIClient(settings.SENDGRID_API_KEY)
        message = Mail(
            from_email=settings.DEFAULT_FROM_EMAIL,
            to_emails=snap.email,
            subject="Complete your purchase",
            html_content=html,
        )
        try:
            sg.send(message)
        except Exception:
            pass
