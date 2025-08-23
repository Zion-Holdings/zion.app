from django.db import models
from django.contrib.auth import get_user_model

class ApiKey(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    prefix = models.CharField(max_length=8, unique=True)
    hashed_key = models.CharField(max_length=64)
    rate_limit = models.IntegerField(default=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    revoked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.prefix} for {self.user}" 
