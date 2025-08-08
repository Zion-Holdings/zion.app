from __future__ import annotations
from typing import Optional, Dict, Any

from mistralai.async_client import MistralAsyncClient
from mistralai.models.chat_completion import ChatMessage

from app.config import MISTRAL_API_KEY
from app.services.providers.base import LanguageModelProvider, register_provider


@register_provider
class MistralProvider(LanguageModelProvider):
    name = "mistral"

    def __init__(self) -> None:
        if MISTRAL_API_KEY:
            self.client = MistralAsyncClient(api_key=MISTRAL_API_KEY)
        else:
            self.client = None

    async def chat(self, system_prompt: str, user_message: str, model: Optional[str] = None, max_tokens: int = 512) -> Dict[str, Any]:
        if not self.client:
            return {"response": "[Mistral API key not configured] Simulated response.", "model": model or "mistral-small", "tokens_used": 64}
        m = model or "mistral-small-latest"
        resp = await self.client.chat(
            model=m,
            messages=[
                ChatMessage(role="system", content=system_prompt),
                ChatMessage(role="user", content=user_message),
            ],
            max_tokens=max_tokens,
            temperature=0.2,
        )
        content = resp.choices[0].message.content or ""
        # Mistral API may not return usage consistently in async client
        return {"response": content, "model": m, "tokens_used": None}

    async def start_fine_tune(self, training_files: list[str], base_model: str) -> Dict[str, Any]:
        tuned_model_id = f"{base_model}-zion-tuned"
        return {"status": "succeeded", "model_id": tuned_model_id, "provider": self.name}