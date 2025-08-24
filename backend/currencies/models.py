from django.db import models

class Currency(models.Model):
    code = models.CharField(max_length=3, primary_key=True)
    symbol = models.CharField(max_length=5)
    fx_rate = models.DecimalField(max_digits=20, decimal_places=6)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.code
