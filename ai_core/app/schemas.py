from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any


class ChatRequest(BaseModel):
    prompt: str
    tenant_id: str = Field(default="global")
    top_k: int = Field(default=5, ge=1, le=20)
    metadata: Optional[Dict[str, Any]] = None


class ChatResponse(BaseModel):
    answer: str
    sources: List[Dict[str, Any]] = []
    model_version: str


class TrainRequest(BaseModel):
    reason: str = "scheduled"
    tenant_id: Optional[str] = None


class TrainResponse(BaseModel):
    run_id: str
    version: str
    status: str


class SwapModelRequest(BaseModel):
    version: str


class RateLimitConfig(BaseModel):
    rpm: int


class TrainingRun(BaseModel):
    run_id: str
    version: str
    status: str
    metrics: Optional[Dict[str, Any]] = None


class ModelInfo(BaseModel):
    version: str
    provider: str
    created_at: str
    path_or_name: Optional[str] = None


class UpsertDoc(BaseModel):
    text: str
    metadata: Optional[Dict[str, Any]] = None


class UpsertDocsRequest(BaseModel):
    tenant_id: str
    documents: List[UpsertDoc]