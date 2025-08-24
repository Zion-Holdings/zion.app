from django.db import models
from django.contrib.auth import get_user_model

class Favorite(models.Model):
    """Item a user has saved for later."""

    ITEM_TYPE_CHOICES = [
        ("product", "Product"),
        ("service", "Service"),
        ("talent", "Talent"),
    ]

    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    item_type = models.CharField(max_length=20, choices=ITEM_TYPE_CHOICES)
    item_id = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "item_type", "item_id")

    def __str__(self) -> str:
        return f"{self.user_id} -> {self.item_type}:{self.item_id}"


class PointsLedger(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    delta = models.IntegerField()
    reason = models.CharField(max_length=255, blank=True)
    order_id = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.user_id}: {self.delta}"
