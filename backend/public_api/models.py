from django.db import models
from django.contrib.auth import get_user_model

class ApiKey(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=True)
    prefix = models.CharField(max_length=8, unique=True)
    hashed_key = models.CharField(max_length=64)
    rate_limit = models.IntegerField(default=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    revoked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.prefix} for {self.user}"

    @staticmethod
    def generate_key():
        """Return a tuple of **(unique prefix, secret)** for a new API key.

        Although the odds of a collision are low (8-byte hex string), it *can*
        still raise an `IntegrityError` if two keys are created at roughly the
        same time. We make the operation idempotent by looping until we find a
        prefix that does **not** already exist in the database. This keeps the
        method self-contained so callers don't need to worry about catching and
        retrying integrity errors themselves.
        """
        import secrets

        # Keep generating until we hit a unique prefix. Given the 32-bit entropy
        # space the loop will rarely iterate more than once.
        while True:
            prefix = secrets.token_hex(4)  # 8-char / 32-bit random prefix
            if not ApiKey.objects.filter(prefix=prefix).exists():
                break

        secret = secrets.token_hex(16)  # 32-byte secret
        return prefix, secret

    @staticmethod
    def hash_secret(secret: str) -> str:
        from hashlib import sha256

        return sha256(secret.encode()).hexdigest()
