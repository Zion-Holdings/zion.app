from functools import lru_cache
from pydantic import BaseModel
import os


class Settings(BaseModel):
    env: str = os.getenv("ENV", "dev")
    log_level: str = os.getenv("LOG_LEVEL", "INFO")

    model_provider: str = os.getenv("MODEL_PROVIDER", "openai")
    openai_api_key: str | None = os.getenv("OPENAI_API_KEY")
    openai_fine_tune_org: str | None = os.getenv("OPENAI_FINE_TUNE_ORG")

    chat_model: str = os.getenv("CHAT_MODEL", "gpt-4o-mini")
    embedding_model: str = os.getenv("EMBEDDING_MODEL", "text-embedding-3-small")

    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./app/storage/zion_core.db")
    storage_dir: str = os.getenv("STORAGE_DIR", "./app/storage")

    admin_rate_limit_rpm: int = int(os.getenv("ADMIN_RATE_LIMIT_RPM", "60"))

    scheduler_enabled: bool = os.getenv("SCHEDULER_ENABLED", "0") == "1"
    # Cron-like env reserved for future; we hardcode monthly in scheduler for simplicity
    schedule_cron: str = os.getenv("SCHEDULE_CRON", "0 30 0 1 * *")


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()