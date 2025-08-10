from typing import List
from fastapi import APIRouter, UploadFile, File, Form, BackgroundTasks, HTTPException

from app.models.schemas import (
    UploadCorpusResponse,
    ModelConfig,
    StartTrainingRequest,
    TrainingJob,
    ChatRequest,
    ChatResponse,
    FeedbackRequest,
    DeployRequest,
)
from app.services.storage import save_corpus_file, save_config, load_config, append_feedback, list_corpus
from app.services.trainer import ensure_config, start_training_job
from app.services.providers.base import get_provider
from app.services.deployer import deploy, get_deployment

router = APIRouter()


@router.post("/train/zion-gpt/upload", response_model=UploadCorpusResponse)
async def upload_corpus(
    nation_id: str = Form(...),
    category: str = Form(...),
    files: List[UploadFile] = File(...),
):
    paths: List[str] = []
    for f in files:
        content = await f.read()
        path = save_corpus_file(nation_id, category, f.filename, content)
        paths.append(path)
    return UploadCorpusResponse(nation_id=nation_id, category=category, files=paths)


@router.post("/train/zion-gpt/config", response_model=ModelConfig)
async def set_config(config: ModelConfig):
    save_config(config.nation_id, config.model_dump())
    return config


@router.post("/train/zion-gpt/start", response_model=TrainingJob)
async def start_training(req: StartTrainingRequest, background_tasks: BackgroundTasks):
    cfg_dict = load_config(req.nation_id)
    if not cfg_dict:
        raise HTTPException(status_code=400, detail="Nation model config not set. POST /train/zion-gpt/config first.")
    base_model = cfg_dict.get("base")
    job = start_training_job(req.nation_id, base_model, background_tasks)
    return job


@router.post("/train/zion-gpt/test", response_model=ChatResponse)
async def test_chat(req: ChatRequest):
    cfg_dict = load_config(req.nation_id)
    if not cfg_dict:
        raise HTTPException(status_code=400, detail="Nation model config not set. POST /train/zion-gpt/config first.")
    cfg = ModelConfig(**cfg_dict)
    system_prompt = cfg.operator_prompt or ""
    provider = get_provider(cfg.base)
    result = await provider.chat(system_prompt=system_prompt, user_message=req.message, model=cfg.base, max_tokens=cfg.output_length)
    return ChatResponse(nation_id=req.nation_id, model_id=result.get("model"), response=result.get("response"), tokens_used=result.get("tokens_used"))


@router.post("/train/zion-gpt/feedback")
async def submit_feedback(fb: FeedbackRequest):
    append_feedback(fb.nation_id, fb.model_dump())
    return {"status": "ok"}


@router.post("/nation/deploy")
async def deploy_model(req: DeployRequest):
    cfg_dict = load_config(req.nation_id)
    if not cfg_dict:
        raise HTTPException(status_code=400, detail="Nation model config not set. POST /train/zion-gpt/config first.")
    tuned_model_id = cfg_dict.get("base")
    job = start_training_job.__globals__.get("load_job")(req.nation_id)  # type: ignore
    if job and job.get("tuned_model_id"):
        tuned_model_id = job.get("tuned_model_id")
    result = deploy(req.nation_id, tuned_model_id, req.token_limit, req.throttle_tpm)
    return result