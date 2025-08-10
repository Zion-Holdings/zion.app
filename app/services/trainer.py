import uuid
from fastapi import BackgroundTasks
from typing import Dict, Any, Optional

from app.models.schemas import ModelConfig, TrainingJob
from app.services.storage import save_job, load_job, load_config, save_config, list_corpus
from app.services.providers.base import get_provider
from app.config import DEFAULT_BASE_MODEL


DEFAULT_OPERATOR_PROMPT = (
    "You are ZionGPT, a helpful assistant for the Zion Africa ecosystem. "
    "Assist talent and communities using localized job posts, resumes, and a mixed English/French corpus. "
    "Tone should be professional yet inclusive, DAO-native when relevant. "
    "Follow community policies, constitutions, and industry guides uploaded for this nation."
)


def resolve_provider_name(base: str) -> str:
    base_lower = base.lower()
    if base_lower.startswith("gpt") or base_lower.startswith("o3"):
        return "gpt-4"
    if base_lower.startswith("mistral") or base_lower == "mistral":
        return "mistral"
    if base_lower == "local":
        return "local"
    return "gpt-4"


def ensure_config(nation_id: str, incoming: Optional[ModelConfig]) -> ModelConfig:
    existing = load_config(nation_id)
    if incoming is None and existing is not None:
        return ModelConfig(**existing)
    if incoming is None:
        cfg = ModelConfig(nation_id=nation_id, base=DEFAULT_BASE_MODEL, operator_prompt=DEFAULT_OPERATOR_PROMPT)
        save_config(nation_id, cfg.model_dump())
        return cfg
    if not incoming.operator_prompt:
        incoming.operator_prompt = DEFAULT_OPERATOR_PROMPT
    save_config(nation_id, incoming.model_dump())
    return incoming


def start_training_job(nation_id: str, base_model: str, background_tasks: BackgroundTasks) -> TrainingJob:
    job_id = str(uuid.uuid4())
    job = TrainingJob(job_id=job_id, nation_id=nation_id, status="queued", base_model=base_model)
    save_job(nation_id, job.model_dump())

    async def run_job() -> None:
        # Collect corpus paths
        corpus_files = list_corpus(nation_id)
        provider_name = resolve_provider_name(base_model)
        provider = get_provider(provider_name)
        # Simulate fine-tune
        try:
            result = await provider.start_fine_tune(corpus_files, base_model)
            tuned_model_id = result.get("model_id")
            finished = TrainingJob(job_id=job_id, nation_id=nation_id, status="succeeded", base_model=base_model, tuned_model_id=tuned_model_id)
            save_job(nation_id, finished.model_dump())
        except Exception as exc:  # pragma: no cover
            failed = TrainingJob(job_id=job_id, nation_id=nation_id, status="failed", base_model=base_model, message=str(exc))
            save_job(nation_id, failed.model_dump())

    background_tasks.add_task(run_job)
    running = TrainingJob(job_id=job_id, nation_id=nation_id, status="running", base_model=base_model)
    save_job(nation_id, running.model_dump())
    return running