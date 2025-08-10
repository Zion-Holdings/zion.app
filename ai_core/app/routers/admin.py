from fastapi import APIRouter
from ..schemas import SwapModelRequest, RateLimitConfig
from ..services.model_registry import ModelRegistry
from ..services.rate_limit import RateLimiter
from ..services.prompt_audit import PromptAuditLogger

router = APIRouter()

model_registry = ModelRegistry()
rate_limiter = RateLimiter()
prompt_audit = PromptAuditLogger()


@router.post("/models/swap")
async def swap_model(req: SwapModelRequest, tenant_id: str = "global"):
    model_registry.swap_current_version(tenant_id=tenant_id, version=req.version)
    return {"ok": True, "tenant_id": tenant_id, "version": req.version}


@router.post("/rate-limit")
async def set_rate_limit(cfg: RateLimitConfig):
    rate_limiter.set_limit(cfg.rpm)
    return {"ok": True, "rpm": cfg.rpm}


@router.get("/audit")
async def get_audit(tenant_id: str = "global", limit: int = 50):
    return prompt_audit.list_logs(tenant_id=tenant_id, limit=limit)


@router.get("")
async def info():
    return {"name": "ZionGPT Core - Admin", "endpoints": [
        "POST /dashboard/ai-core/models/swap",
        "POST /dashboard/ai-core/rate-limit",
        "GET /dashboard/ai-core/audit",
    ]}