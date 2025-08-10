from fastapi import APIRouter
from app.models.schemas import NationStatus, IntentLabel
from app.services.storage import load_config, load_job, load_feedback
from app.services.intent_labeler import auto_label_intents
from app.services.deployer import get_deployment

router = APIRouter()


@router.get("/nation/ai", response_model=NationStatus)
async def nation_ai(nation_id: str):
    cfg = load_config(nation_id)
    job = load_job(nation_id)
    fb = load_feedback(nation_id)
    intents_raw = auto_label_intents(fb, top_k=10)
    intents = [IntentLabel(**x) for x in intents_raw]
    deployment = get_deployment(nation_id)
    return NationStatus(
        nation_id=nation_id,
        config=cfg,
        latest_job=job,
        deployed_model_id=(deployment or {}).get("model_id") if deployment else None,
        intents=intents,
    )