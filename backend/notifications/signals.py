from django.db.models.signals import post_save
from django.dispatch import receiver
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.conf import settings

from .models import Notification
from orders.models import Order
from messaging.models import Message
from quotes.models import QuoteReply


def send_email(to_email: str, subject: str, html: str):
    sg = SendGridAPIClient(settings.SENDGRID_API_KEY)
    msg = Mail(
        from_email=settings.DEFAULT_FROM_EMAIL,
        to_emails=to_email,
        subject=subject,
        html_content=html,
    )
    sg.send(msg)


@receiver(post_save, sender=Order)
def order_created_email(sender, instance: Order, created: bool, **kwargs):
    if not created:
        return
    Notification.objects.create(
        user=instance.user,
        title="Order Created",
        message=f"Your order #{instance.id} was received."
    )
    send_email(
        instance.user.email,
        "Order Created",
        f"Your order #{instance.id} has been placed."
    )


@receiver(post_save, sender=Message)
def message_received_email(sender, instance: Message, created: bool, **kwargs):
    if not created:
        return
    Notification.objects.create(
        user=instance.recipient,
        title="New Message",
        message=instance.content
    )
    send_email(
        instance.recipient.email,
        "New Message",
        instance.content
    )


@receiver(post_save, sender=QuoteReply)
def quote_reply_email(sender, instance: QuoteReply, created: bool, **kwargs):
    if not created:
        return
    Notification.objects.create(
        user=instance.quote.user,
        title="Quote Reply",
        message=instance.content
    )
    send_email(
        instance.quote.user.email,
        "Quote Reply",
        instance.content
    )
