from typing import Dict, Any
from app.services.storage import save_deployment, load_deployment
from app.config import DEFAULT_MAX_TOKENS, DEFAULT_RATE_LIMIT_TPM


def deploy(nation_id: str, model_id: str, token_limit: int | None, throttle_tpm: int | None) -> Dict[str, Any]:
    limits = {
        "token_limit": token_limit if token_limit is not None else DEFAULT_MAX_TOKENS,
        "throttle_tpm": throttle_tpm if throttle_tpm is not None else DEFAULT_RATE_LIMIT_TPM,
    }
    save_deployment(nation_id, model_id, limits)
    return {"nation_id": nation_id, "model_id": model_id, **limits}


def get_deployment(nation_id: str) -> Dict[str, Any] | None:
    return load_deployment(nation_id)