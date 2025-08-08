from .db import SessionLocal, init_db
from sqlalchemy import text
import json


class PromptAuditLogger:
    def __init__(self) -> None:
        init_db()

    def log(self, tenant_id: str, api_key: str, prompt: str, answer: str, model_version: str, retrieved_sources: list[dict]):
        with SessionLocal.begin() as s:
            s.execute(
                text(
                    "INSERT INTO prompt_logs (tenant_id, api_key, prompt, answer, model_version, retrieved_sources)\n                     VALUES (:tenant_id, :api_key, :prompt, :answer, :model_version, :retrieved_sources)"
                ),
                {
                    "tenant_id": tenant_id,
                    "api_key": api_key,
                    "prompt": prompt,
                    "answer": answer,
                    "model_version": model_version,
                    "retrieved_sources": json.dumps(retrieved_sources),
                },
            )

    def list_logs(self, tenant_id: str, limit: int = 50):
        with SessionLocal.begin() as s:
            rows = s.execute(
                text(
                    "SELECT tenant_id, api_key, prompt, answer, model_version, retrieved_sources, created_at\n                     FROM prompt_logs WHERE tenant_id = :tenant_id ORDER BY id DESC LIMIT :limit"
                ),
                {"tenant_id": tenant_id, "limit": limit},
            ).all()
        return [
            {
                "tenant_id": r.tenant_id,
                "api_key": r.api_key,
                "prompt": r.prompt,
                "answer": r.answer,
                "model_version": r.model_version,
                "retrieved_sources": json.loads(r.retrieved_sources or "[]"),
                "created_at": str(r.created_at),
            }
            for r in rows
        ]