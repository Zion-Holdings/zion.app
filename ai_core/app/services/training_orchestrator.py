import uuid
from typing import Dict, List
from sqlalchemy import text

from .db import SessionLocal, init_db
from .data_pipeline import DataPipeline
from .vector_store import VectorStore
from .fine_tune import FineTuneService
from .model_registry import ModelRegistry
from .reports import ReportService
from ..config import get_settings


class TrainingOrchestrator:
    def __init__(self) -> None:
        self._settings = get_settings()
        init_db()
        self._pipeline = DataPipeline()
        self._vs = VectorStore()
        self._ft = FineTuneService()
        self._registry = ModelRegistry()
        self._reports = ReportService()

    def start_training(self, tenant_id: str | None, reason: str) -> Dict:
        tenant = tenant_id or "global"
        version = self._next_version(tenant)
        run_id = str(uuid.uuid4())

        samples = self._pipeline.collect_documents(tenant_id=tenant)
        texts = [s["text"] for s in samples]
        metas = [{k: v for k, v in s.items() if k != "text"} for s in samples]
        if texts:
            self._vs.upsert_texts(tenant_id=tenant, texts=texts, metadatas=metas)

        training_file = self._ft.create_training_file(samples)
        ft_result = self._ft.fine_tune(training_file)

        provider = "openai" if self._settings.openai_api_key else "local"
        self._registry.register(tenant_id=tenant, version=version, provider=provider, path_or_name=ft_result.get("model"))
        self._registry.swap_current_version(tenant_id=tenant, version=version)

        stats = {
            "num_samples": len(samples),
            "num_vectors": len(texts),
            "provider": provider,
            "notes": f"Reason: {reason}; FT status: {ft_result.get('status')} id={ft_result.get('id')}",
        }
        report_path = self._reports.write_training_report(version=version, stats=stats)

        with SessionLocal.begin() as s:
            s.execute(
                text("INSERT INTO training_runs (run_id, version, status, metrics) VALUES (:run_id, :version, :status, :metrics)"),
                {"run_id": run_id, "version": version, "status": "completed", "metrics": str(stats)},
            )

        return {"run_id": run_id, "version": version, "status": "completed", "report": report_path}

    def list_runs(self) -> List[Dict]:
        with SessionLocal.begin() as s:
            rows = s.execute(text("SELECT run_id, version, status, metrics, created_at FROM training_runs ORDER BY id DESC LIMIT 100")).all()
        return [
            {
                "run_id": r.run_id,
                "version": r.version,
                "status": r.status,
                "metrics": {"raw": r.metrics},
            }
            for r in rows
        ]

    def _next_version(self, tenant_id: str) -> str:
        with SessionLocal.begin() as s:
            row = s.execute(
                text("SELECT version FROM model_registry WHERE tenant_id = :tenant_id ORDER BY id DESC LIMIT 1"),
                {"tenant_id": tenant_id},
            ).first()
        if not row:
            return "ZionGPT-Core-v1.0"
        try:
            base, ver = row.version.rsplit("-v", 1)
            major_minor = ver.split(".")
            major = int(major_minor[0])
            minor = int(major_minor[1]) if len(major_minor) > 1 else 0
            minor += 1
            return f"{base}-v{major}.{minor}"
        except Exception:
            return f"{row.version}-next"