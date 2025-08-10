from fastapi import APIRouter, Depends, HTTPException, Header
from typing import Optional

from ..schemas import ChatRequest, ChatResponse
from ..services.rate_limit import RateLimiter
from ..services.prompt_audit import PromptAuditLogger
from ..services.vector_store import VectorStore
from ..services.llm_provider import LLMProvider
from ..services.model_registry import ModelRegistry

router = APIRouter()

rate_limiter = RateLimiter()
prompt_audit = PromptAuditLogger()
vector_store = VectorStore()
llm_provider = LLMProvider()
model_registry = ModelRegistry()


@router.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest, x_api_key: Optional[str] = Header(default="public")):
    if not rate_limiter.allow(api_key=x_api_key):
        raise HTTPException(status_code=429, detail="Rate limit exceeded")

    model_version = model_registry.get_current_version(tenant_id=req.tenant_id)

    retrieved = vector_store.similarity_search(
        tenant_id=req.tenant_id, query=req.prompt, top_k=req.top_k
    )

    context_chunks = [r["text"] for r in retrieved]

    answer = await llm_provider.generate(
        prompt=req.prompt,
        context_chunks=context_chunks,
        tenant_id=req.tenant_id,
        model_version=model_version,
    )

    prompt_audit.log(
        tenant_id=req.tenant_id,
        api_key=x_api_key or "public",
        prompt=req.prompt,
        answer=answer,
        model_version=model_version,
        retrieved_sources=retrieved,
    )

    return ChatResponse(answer=answer, sources=retrieved, model_version=model_version)


@router.get("")
async def info():
    return {
        "name": "ZionGPT Core - Inference",
        "endpoints": ["POST /zion-gpt/chat"],
        "powers": [
            "Resume writer",
            "Proposal AI",
            "Job builder",
            "Marketplace assistant",
            "Help center AI",
            "Investor deck generator",
            "DAO proposal writer",
        ],
    }