from django.contrib import admin
from .models import Coupon, GiftCard

@admin.register(Coupon)
class CouponAdmin(admin.ModelAdmin):
    list_display = ('code', 'discount_type', 'value', 'expires', 'usage_limit', 'usage_count')
    search_fields = ('code',)

@admin.register(GiftCard)
class GiftCardAdmin(admin.ModelAdmin):
    list_display = ('code', 'balance')
    search_fields = ('code',)
