import secrets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

from .models import DataExportRequest, DeletionRequest, UserExtra, AuditLog

@csrf_exempt
@login_required
def request_export(request):
    if request.method != 'POST':
        return JsonResponse({'detail': 'Method not allowed'}, status=405)
    token = secrets.token_urlsafe(32)
    DataExportRequest.objects.create(user=request.user, token=token)
    AuditLog.objects.create(user=request.user, action='export_requested')
    return JsonResponse({'detail': 'Export requested'}, status=200)

@csrf_exempt
@login_required
def request_deletion(request):
    if request.method != 'POST':
        return JsonResponse({'detail': 'Method not allowed'}, status=405)
    extra, _ = UserExtra.objects.get_or_create(user=request.user)
    extra.pending_delete = True
    extra.save()
    DeletionRequest.objects.create(user=request.user)
    AuditLog.objects.create(user=request.user, action='deletion_requested')
    return JsonResponse({'detail': 'Deletion requested'}, status=200)
