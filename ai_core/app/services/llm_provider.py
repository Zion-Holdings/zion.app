from typing import List
from ..config import get_settings


SYSTEM_PROMPT = (
    "You are ZionGPT Core, an expert assistant for a marketplace platform. "
    "Use the provided context to answer precisely. If context is insufficient, say you are unsure and suggest next steps."
)


class LLMProvider:
    def __init__(self) -> None:
        self._settings = get_settings()
        self._client = None
        if self._settings.model_provider == "openai" and self._settings.openai_api_key:
            from openai import OpenAI
            self._client = OpenAI(api_key=self._settings.openai_api_key)

    async def generate(self, prompt: str, context_chunks: List[str], tenant_id: str, model_version: str) -> str:
        if self._client is None:
            context = "\n\n".join(context_chunks[:8])
            return f"[DEV MODE]\nContext:\n{context}\n\nAnswer to: {prompt}"
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "system", "content": f"Tenant: {tenant_id} | Model version: {model_version}"},
        ]
        if context_chunks:
            messages.append({"role": "system", "content": "Context:\n" + "\n\n".join(context_chunks[:12])})
        messages.append({"role": "user", "content": prompt})
        resp = self._client.chat.completions.create(
            model=self._settings.chat_model,
            messages=messages,
            temperature=0.3,
        )
        return resp.choices[0].message.content or ""