from __future__ import annotations
from typing import Optional, Dict, Any

from app.services.providers.base import LanguageModelProvider, register_provider


@register_provider
class LocalProvider(LanguageModelProvider):
    name = "local"

    async def chat(self, system_prompt: str, user_message: str, model: Optional[str] = None, max_tokens: int = 512) -> Dict[str, Any]:
        # Very naive local echo model for development
        reply = f"[LOCAL MODEL]\nSystem: {system_prompt[:120]}...\nUser: {user_message[:200]}\nAnswer: This is a placeholder response tuned to your tone and policies."
        return {"response": reply, "model": model or "local-sim", "tokens_used": len(user_message.split())}

    async def start_fine_tune(self, training_files: list[str], base_model: str) -> Dict[str, Any]:
        tuned_model_id = f"{base_model}-local-tuned"
        return {"status": "succeeded", "model_id": tuned_model_id, "provider": self.name}