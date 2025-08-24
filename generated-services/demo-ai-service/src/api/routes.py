"""
API routes for {{SERVICE_NAME}}
"""

from fastapi import APIRouter, HTTPException
from src.models.ml_model import MLModel

router = APIRouter()
model = MLModel()

@router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "{{SERVICE_NAME}}"}

@router.post("/predict")
async def predict(data: dict):
    try:
        result = model.predict(data)
        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
