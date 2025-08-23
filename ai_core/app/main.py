from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from .routers.inference import router as inference_router
from .routers.training import router as training_router
from .routers.admin import router as admin_router
from .config import Settings, get_settings
from .services.scheduler import ZionScheduler

load_dotenv()

settings: Settings = get_settings()

app = FastAPI(title="ZionGPT Core", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inference surface
app.include_router(inference_router, prefix="/zion-gpt", tags=["inference"])  # public surface

# Operator/admin surfaces
app.include_router(training_router, prefix="/dashboard/ai-core", tags=["training"])  # operator
app.include_router(admin_router, prefix="/dashboard/ai-core", tags=["admin"])  # admin


@app.get("/")
def root():
    return {"service": "ZionGPT Core", "routes": ["/zion-gpt", "/dashboard/ai-core"]}


@app.on_event("startup")
def _start_scheduler_if_enabled():
    if settings.scheduler_enabled:
        ZionScheduler().start()