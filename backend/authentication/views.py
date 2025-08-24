import json
import logging
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.core.cache import cache
from django.core.mail import send_mail
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError as DjangoValidationError # Alias to avoid confusion
from django.contrib.auth import password_validation # For password strength

logger = logging.getLogger(__name__)

FORGOT_PW_LIMIT = getattr(settings, 'FORGOT_PASSWORD_RATE_LIMIT', 5)
FORGOT_PW_WINDOW = getattr(settings, 'FORGOT_PASSWORD_RATE_WINDOW', 15 * 60)

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        return x_forwarded_for.split(',')[0]
    return request.META.get('REMOTE_ADDR')

@csrf_exempt
@require_POST
def forgot_password(request):
    ip = get_client_ip(request)
    key = f"forgot_pw:{ip}"
    attempts = cache.get(key, 0)
    if attempts >= FORGOT_PW_LIMIT:
        return JsonResponse({'error': 'Too many requests. Please try again later.'}, status=429)
    cache.set(key, attempts + 1, FORGOT_PW_WINDOW)
    data = json_from_request(request)
    email = data.get('email')

    if not email:
        return JsonResponse({'error': 'Email address is required.'}, status=400)

    validator = EmailValidator()
    try:
        validator(email)
    except DjangoValidationError:
        return JsonResponse({'error': 'Invalid email address format.'}, status=400)

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        # Do not reveal whether the user exists or not
        logger.info(f"Password reset requested for non-existent email: {email}")
        return JsonResponse({'detail': 'If an account with this email exists, a reset link has been sent.'}, status=200)

    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = default_token_generator.make_token(user)

    # Build reset_link securely
    # In production, ensure your web server (e.g., Nginx) correctly sets X-Forwarded-Proto
    # or Django's SECURE_PROXY_SSL_HEADER is configured if behind a proxy.
    scheme = 'https' if not settings.DEBUG or request.is_secure() else request.scheme
    reset_link = f"{scheme}://{request.get_host()}/reset-password/{uid}/{token}"

    context = {'reset_link': reset_link, 'user': user} # Added user to context for more personalized email
    html_message = render_to_string('emails/password_reset.html', context)

    from_email = getattr(settings, 'PASSWORD_RESET_FROM_EMAIL', getattr(settings, 'DEFAULT_FROM_EMAIL', None))
    if not from_email:
        logger.warning("PASSWORD_RESET_FROM_EMAIL or DEFAULT_FROM_EMAIL is not set in Django settings. Using fallback 'webmaster@localhost'.")
        from_email = 'webmaster@localhost'

    try:
        send_mail(
            'Password Reset Request',
            f'Please click the link to reset your password: {reset_link}', # Plain text part
            from_email,
            [user.email],
            html_message=html_message
        )
        logger.info(f"Password reset email sent to {user.email}")
    except Exception as e: # Catch broader SMTP exceptions, specific ones can be added
        logger.error(f"Error sending password reset email to {user.email}: {e}", exc_info=True)
        return JsonResponse({'error': 'An error occurred while trying to send the reset email. Please try again later.'}, status=500)

    return JsonResponse({'detail': 'If an account with this email exists, a reset link has been sent.'}, status=200)

@csrf_exempt
@require_POST
def reset_password(request, uidb64, token):
    data = json_from_request(request)
    password = data.get('password')

    if not password:
        return JsonResponse({'error': 'Password is required.'}, status=400)

    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)
    except (User.DoesNotExist, ValueError, TypeError, OverflowError): # Added OverflowError for invalid base64
        logger.warning(f"Password reset attempt with invalid uidb64: {uidb64}", exc_info=True)
        return JsonResponse({'error': 'Invalid reset link.'}, status=400)

    if not default_token_generator.check_token(user, token):
        logger.warning(f"Password reset attempt with invalid or expired token for user {user.email}")
        return JsonResponse({'error': 'Invalid or expired token. Please request a new reset link.'}, status=400)

    try:
        # Validate password strength
        # If settings.AUTH_PASSWORD_VALIDATORS is empty, this will only check if it's not empty.
        password_validation.validate_password(password, user=user)
    except DjangoValidationError as e:
        logger.info(f"Password reset attempt for user {user.email} failed due to weak password.")
        return JsonResponse({'errors': list(e.messages)}, status=400)

    # Additional basic check if AUTH_PASSWORD_VALIDATORS is empty (it is in current settings)
    if not settings.AUTH_PASSWORD_VALIDATORS and len(password) < 8:
        logger.info(f"Password reset attempt for user {user.email} failed due to short password (fallback check).")
        return JsonResponse({'errors': ['Password must be at least 8 characters long.']}, status=400)

    user.set_password(password)
    user.save()
    logger.info(f"Password successfully reset for user {user.email}")
    return JsonResponse({'detail': 'Password has been successfully updated.'}, status=200)


def json_from_request(request):
    """Helper function to parse JSON from request body."""
    if not request.body:
        logger.debug("json_from_request called with empty body.")
        return {}
    try:
        return json.loads(request.body.decode('utf-8'))
    except json.JSONDecodeError as e:
        logger.warning(f"Failed to decode JSON from request body: {e.msg}", exc_info=True)
        # Depending on strictness, could raise an error or return a specific signal
        # For now, returning {} and letting views handle missing keys.
        # Consider returning a custom exception or JsonResponse(status=400) if JSON is always expected.
        return {}
    except Exception as e:
        # Catch any other unexpected errors during parsing, e.g., UnicodeDecodeError
        logger.error(f"Unexpected error decoding request body: {e}", exc_info=True)
        return {}
