from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
from .training_orchestrator import TrainingOrchestrator
from ..config import get_settings


class ZionScheduler:
    def __init__(self) -> None:
        self._settings = get_settings()
        self._scheduler: BackgroundScheduler | None = None
        self._orchestrator = TrainingOrchestrator()

    def start(self) -> None:
        if self._scheduler is not None:
            return
        self._scheduler = BackgroundScheduler()
        # Run on the 1st of every month at 00:30 UTC
        self._scheduler.add_job(self._run_monthly, "cron", day=1, hour=0, minute=30, timezone="UTC")
        self._scheduler.start()

    def _run_monthly(self):
        try:
            self._orchestrator.start_training(tenant_id=None, reason="scheduled-monthly")
        except Exception as e:
            # In production, route to proper logging
            print(f"[Scheduler] Training run failed at {datetime.utcnow().isoformat()}Z: {e}")

    def shutdown(self) -> None:
        if self._scheduler is not None:
            self._scheduler.shutdown(wait=False)
            self._scheduler = None