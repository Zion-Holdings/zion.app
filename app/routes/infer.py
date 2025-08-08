import time
from fastapi import APIRouter, HTTPException
from app.models.schemas import ChatRequest, ChatResponse
from app.services.storage import load_config
from app.services.deployer import get_deployment
from app.services.providers.base import get_provider

router = APIRouter()

# crude in-memory token budget tracker per nation
_TOKEN_BUCKETS: dict[str, dict[str, float]] = {}


def _allow_tokens(nation_id: str, tokens: int, tpm: int) -> bool:
    now = time.time()
    bucket = _TOKEN_BUCKETS.setdefault(nation_id, {"tokens": float(tpm), "timestamp": now})
    elapsed = now - bucket["timestamp"]
    # refill
    bucket["tokens"] = min(float(tpm), bucket["tokens"] + (elapsed * (tpm / 60.0)))
    bucket["timestamp"] = now
    if bucket["tokens"] >= tokens:
        bucket["tokens"] -= tokens
        return True
    return False


@router.post("/gpt/{nation_id}/chat", response_model=ChatResponse)
async def nation_chat(nation_id: str, req: ChatRequest):
    deployment = get_deployment(nation_id)
    if not deployment:
        raise HTTPException(status_code=400, detail="Nation not deployed. Use POST /nation/deploy first.")
    cfg = load_config(nation_id)
    if not cfg:
        raise HTTPException(status_code=400, detail="Nation config missing.")
    base = cfg.get("base")
    provider = get_provider(base)
    system_prompt = cfg.get("operator_prompt") or ""
    max_tokens = min(int(cfg.get("output_length", 512)), int(deployment.get("token_limit", 512)))
    tpm = int(deployment.get("throttle_tpm", 20000))

    # Approximate tokens by words * 1.3
    approx_in_tokens = int(len((req.message or "").split()) * 1.3)
    if not _allow_tokens(nation_id, approx_in_tokens, tpm):
        raise HTTPException(status_code=429, detail="Token throttle exceeded. Try later.")

    result = await provider.chat(system_prompt=system_prompt, user_message=req.message, model=deployment.get("model_id"), max_tokens=max_tokens)

    approx_out_tokens = int(len((result.get("response") or "").split()) * 1.3)
    _allow_tokens(nation_id, approx_out_tokens, tpm)  # consume

    return ChatResponse(nation_id=nation_id, model_id=result.get("model"), response=result.get("response"), tokens_used=(approx_in_tokens + approx_out_tokens))