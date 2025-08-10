from __future__ import annotations
import os
from typing import Optional, Dict, Any

from openai import AsyncOpenAI

from app.config import OPENAI_API_KEY
from app.services.providers.base import LanguageModelProvider, register_provider


@register_provider
class OpenAIProvider(LanguageModelProvider):
    name = "gpt-4"

    def __init__(self) -> None:
        if OPENAI_API_KEY:
            self.client = AsyncOpenAI(api_key=OPENAI_API_KEY)
        else:
            self.client = None

    async def chat(self, system_prompt: str, user_message: str, model: Optional[str] = None, max_tokens: int = 512) -> Dict[str, Any]:
        if not self.client:
            return {"response": "[OpenAI API key not configured] Simulated response.", "model": model or "gpt-4o-mini", "tokens_used": 64}
        m = model or "gpt-4o-mini"
        resp = await self.client.chat.completions.create(
            model=m,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message},
            ],
            max_tokens=max_tokens,
            temperature=0.2,
        )
        content = resp.choices[0].message.content or ""
        usage = getattr(resp, "usage", None)
        tokens = usage.total_tokens if usage else None
        return {"response": content, "model": m, "tokens_used": tokens}

    async def start_fine_tune(self, training_files: list[str], base_model: str) -> Dict[str, Any]:
        # For simplicity, we simulate fine-tuning and return a pseudo model id.
        # Integrate with OpenAI fine-tuning API here if desired.
        tuned_model_id = f"{base_model}-zion-tuned"
        return {"status": "succeeded", "model_id": tuned_model_id, "provider": self.name}