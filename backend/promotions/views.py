from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone

from .models import Coupon, GiftCard

@csrf_exempt
@require_POST
def validate_coupon(request):
    data = json_from_request(request)
    code = (data.get('code') or '').strip()
    amount = data.get('amount')
    if not code:
        return JsonResponse({'error': 'Code required'}, status=400)

    try:
        gift = GiftCard.objects.get(code__iexact=code)
        discount = float(min(float(amount or 0), gift.balance))
        return JsonResponse({'discount': discount})
    except GiftCard.DoesNotExist:
        pass

    try:
        coupon = Coupon.objects.get(code__iexact=code)
    except Coupon.DoesNotExist:
        return JsonResponse({'error': 'Invalid code'}, status=400)

    if coupon.expires and coupon.expires < timezone.now():
        return JsonResponse({'error': 'Expired'}, status=400)
    if coupon.usage_limit and coupon.usage_count >= coupon.usage_limit:
        return JsonResponse({'error': 'Usage limit reached'}, status=400)

    if amount is None:
        amount = 0
    if coupon.discount_type == 'percent':
        discount = float(amount) * float(coupon.value) / 100
    else:
        discount = float(coupon.value)
    return JsonResponse({'discount': discount})

import json

def json_from_request(request):
    try:
        return json.loads(request.body.decode())
    except Exception:
        return {}
