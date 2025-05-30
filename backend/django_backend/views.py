import os
from django.http import HttpResponse
from django.contrib.auth.decorators import user_passes_test
from prometheus_client import generate_latest, CONTENT_TYPE_LATEST


def metrics(request):
    data = generate_latest()
    return HttpResponse(data, content_type=CONTENT_TYPE_LATEST)


@user_passes_test(lambda u: u.is_staff)
def admin_metrics(request):
    grafana_url = os.environ.get('GRAFANA_URL', 'http://localhost:3000/d/overview')
    html = f'<iframe src="{grafana_url}" style="width:100%; height:800px; border:none;"></iframe>'
    return HttpResponse(html)
