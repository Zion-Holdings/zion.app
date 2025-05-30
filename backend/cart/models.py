from django.conf import settings
from django.db import models
import secrets


def generate_token() -> str:
    return secrets.token_urlsafe(32)

class CartSnapshot(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    email = models.EmailField(null=True, blank=True)
    items = models.JSONField()
    token = models.CharField(max_length=64, unique=True, default=generate_token)
    restored = models.BooleanField(default=False)
    ordered_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']

    def __str__(self):
        return f"{self.email or self.user_id} @ {self.updated_at}"
