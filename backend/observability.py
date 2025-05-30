import time
from prometheus_client import Counter, Histogram

request_latency = Histogram(
    'django_request_latency_seconds',
    'Latency of HTTP requests',
    ['method', 'path']
)

db_queries_total = Counter(
    'django_db_queries_total',
    'Total database queries'
)

celery_task_latency = Histogram(
    'celery_task_latency_seconds',
    'Latency of Celery tasks',
    ['task']
)

# Patch Django DB execute to increment counter
from django.db.backends.utils import CursorWrapper
_original_execute = CursorWrapper.execute

def _instrumented_execute(self, sql, params=None):
    db_queries_total.inc()
    return _original_execute(self, sql, params)

CursorWrapper.execute = _instrumented_execute

# Celery task signals
try:
    from celery.signals import task_prerun, task_postrun
    _task_start = {}

    @task_prerun.connect
    def _task_prerun(task_id, task, **kwargs):
        _task_start[task_id] = time.perf_counter()

    @task_postrun.connect
    def _task_postrun(task_id, task, **kwargs):
        start = _task_start.pop(task_id, None)
        if start:
            duration = time.perf_counter() - start
            celery_task_latency.labels(task=task.name).observe(duration)
except Exception:
    # Celery might not be installed
    pass
