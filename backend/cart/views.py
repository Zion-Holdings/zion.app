import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_GET
from django.shortcuts import get_object_or_404
from django.utils import timezone
from .models import CartSnapshot
from django.contrib.auth import get_user_model

@csrf_exempt
@require_POST
def snapshot(request):
    try:
        data = json.loads(request.body.decode())
    except Exception:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    email = data.get('email')
    user_id = data.get('user')
    items = data.get('items')
    if not isinstance(items, list):
        return JsonResponse({'error': 'Items required'}, status=400)

    user = None
    if user_id:
        User = get_user_model()
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            user = None

    snapshot = CartSnapshot.objects.create(
        user=user,
        email=email,
        items=items,
        updated_at=timezone.now(),
    )
    return JsonResponse({'token': snapshot.token})

@require_GET
def load_snapshot(request, token):
    snap = get_object_or_404(CartSnapshot, token=token)
    snap.restored = True
    snap.save(update_fields=['restored'])
    return JsonResponse({'items': snap.items})
