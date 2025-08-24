from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from ..config import get_settings
import os

settings = get_settings()

# Ensure storage directory exists
os.makedirs(settings.storage_dir, exist_ok=True)

engine = create_engine(settings.database_url, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)


def init_db():
    with engine.begin() as conn:
        # Minimal tables for logs, runs, models
        conn.execute(text(
            """
            CREATE TABLE IF NOT EXISTS prompt_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tenant_id TEXT,
                api_key TEXT,
                prompt TEXT,
                answer TEXT,
                model_version TEXT,
                retrieved_sources TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            """
        ))
        conn.execute(text(
            """
            CREATE TABLE IF NOT EXISTS training_runs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                run_id TEXT,
                version TEXT,
                status TEXT,
                metrics TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            """
        ))
        conn.execute(text(
            """
            CREATE TABLE IF NOT EXISTS model_registry (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tenant_id TEXT,
                version TEXT,
                provider TEXT,
                path_or_name TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            """
        ))
        conn.execute(text(
            """
            CREATE TABLE IF NOT EXISTS current_model (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tenant_id TEXT UNIQUE,
                version TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            """
        ))