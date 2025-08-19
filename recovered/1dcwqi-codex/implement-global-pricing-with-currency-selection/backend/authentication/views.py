from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login

@csrf_exempt
@require_POST
def forgot_password(request):
    data = json_from_request(request)
    email = data.get('email')
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return JsonResponse({'detail': 'Email sent'}, status=200)
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = default_token_generator.make_token(user)
    reset_link = f"{request.scheme}://{request.get_host()}/reset-password/{uid}/{token}"
    html = render_to_string('emails/password_reset.html', {'reset_link': reset_link})
    from django.core.mail import send_mail
    send_mail('Password reset', '', 'no-reply@example.com', [user.email], html_message=html)
    return JsonResponse({'detail': 'Email sent'}, status=200)

@csrf_exempt
@require_POST
def reset_password(request, uidb64, token):
    data = json_from_request(request)
    password = data.get('password')
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)
    except (User.DoesNotExist, ValueError, TypeError):
        return JsonResponse({'detail': 'Invalid link'}, status=400)
    if not default_token_generator.check_token(user, token):
        return JsonResponse({'detail': 'Invalid or expired token'}, status=400)
    user.set_password(password)
    user.save()
    return JsonResponse({'detail': 'Password updated'}, status=200)

import json

def json_from_request(request):
    try:
        return json.loads(request.body.decode())
    except Exception:
        return {}
