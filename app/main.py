from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.train import router as train_router
from app.routes.nation import router as nation_router
from app.routes.infer import router as infer_router

# Import providers to register them at startup
from app.services.providers import openai_provider as _openai_provider  # noqa: F401
from app.services.providers import mistral_provider as _mistral_provider  # noqa: F401
from app.services.providers import local_provider as _local_provider  # noqa: F401

app = FastAPI(title="ZionGPT Trainer Suite", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(train_router, prefix="")
app.include_router(nation_router, prefix="")
app.include_router(infer_router, prefix="")

@app.get("/")
async def root():
    return {"service": "ZionGPT Trainer Suite", "status": "ok"}