import numpy as np
from typing import List
from ..config import get_settings


class EmbeddingClient:
    def __init__(self) -> None:
        self._settings = get_settings()
        self._provider = self._settings.model_provider
        self._model = self._settings.embedding_model
        self._client = None
        if self._provider == "openai" and self._settings.openai_api_key:
            from openai import OpenAI
            self._client = OpenAI(api_key=self._settings.openai_api_key)
        # else: fallback to hashing trick embeddings
        self._dim = 768

    def _hash_embed(self, texts: List[str]) -> np.ndarray:
        dim = self._dim
        vectors = np.zeros((len(texts), dim), dtype=np.float32)
        for i, text in enumerate(texts):
            if not text:
                continue
            tokens = text.lower().split()
            for tok in tokens:
                h = hash(tok) % dim
                vectors[i, h] += 1.0
        # tf-idf-ish dampening
        vectors = np.log1p(vectors)
        return vectors

    def embed(self, texts: List[str]) -> np.ndarray:
        if self._client is not None:
            resp = self._client.embeddings.create(model=self._model, input=texts)
            vectors = [item.embedding for item in resp.data]
            return np.array(vectors, dtype=np.float32)
        else:
            return self._hash_embed(texts)