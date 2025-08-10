from __future__ import annotations
from typing import Optional, Dict, Any


class LanguageModelProvider:
    name: str = "base"

    async def chat(self, system_prompt: str, user_message: str, model: Optional[str] = None, max_tokens: int = 512) -> Dict[str, Any]:
        raise NotImplementedError

    async def start_fine_tune(self, training_files: list[str], base_model: str) -> Dict[str, Any]:
        raise NotImplementedError


_PROVIDER_REGISTRY: dict[str, type[LanguageModelProvider]] = {}


def register_provider(cls: type[LanguageModelProvider]) -> type[LanguageModelProvider]:
    _PROVIDER_REGISTRY[cls.name] = cls
    return cls


def get_provider(name: str) -> LanguageModelProvider:
    cls = _PROVIDER_REGISTRY.get(name)
    if not cls:
        raise ValueError(f"Unknown provider: {name}")
    return cls()