from fastapi import APIRouter
from ..schemas import TrainRequest, TrainResponse, TrainingRun, ModelInfo, UpsertDocsRequest
from ..services.training_orchestrator import TrainingOrchestrator
from ..services.model_registry import ModelRegistry
from ..services.vector_store import VectorStore

router = APIRouter()

training = TrainingOrchestrator()
model_registry = ModelRegistry()
vector_store = VectorStore()


@router.post("/train", response_model=TrainResponse)
async def trigger_train(req: TrainRequest):
    run = training.start_training(tenant_id=req.tenant_id, reason=req.reason)
    return TrainResponse(run_id=run["run_id"], version=run["version"], status=run["status"])


@router.get("/runs", response_model=list[TrainingRun])
async def list_runs():
    return training.list_runs()


@router.get("/models/current", response_model=ModelInfo)
async def current_model(tenant_id: str = "global"):
    return model_registry.get_current_model_info(tenant_id)


@router.post("/tenant/upsert-docs")
async def upsert_docs(req: UpsertDocsRequest):
    texts = [d.text for d in req.documents]
    metas = []
    for d in req.documents:
        meta = (d.metadata or {}).copy()
        meta["tenant_id"] = req.tenant_id
        metas.append(meta)
    if texts:
        vector_store.upsert_texts(tenant_id=req.tenant_id, texts=texts, metadatas=metas)
    return {"ok": True, "tenant_id": req.tenant_id, "added": len(texts)}


@router.post("/tenant/train", response_model=TrainResponse)
async def tenant_train(tenant_id: str):
    run = training.start_training(tenant_id=tenant_id, reason="tenant-train")
    return TrainResponse(run_id=run["run_id"], version=run["version"], status=run["status"])


@router.get("")
async def info():
    return {"name": "ZionGPT Core - Training", "endpoints": [
        "POST /dashboard/ai-core/train",
        "POST /dashboard/ai-core/tenant/upsert-docs",
        "POST /dashboard/ai-core/tenant/train",
        "GET /dashboard/ai-core/runs",
        "GET /dashboard/ai-core/models/current",
    ]}