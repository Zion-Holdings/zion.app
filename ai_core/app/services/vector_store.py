import os
import json
import numpy as np
from typing import List, Dict
from ..config import get_settings
from .embeddings import EmbeddingClient


class VectorStore:
    def __init__(self) -> None:
        self._settings = get_settings()
        self._embed = EmbeddingClient()
        self._tenant_matrix: dict[str, np.ndarray] = {}
        self._tenant_texts: dict[str, list[dict]] = {}
        os.makedirs(self._settings.storage_dir, exist_ok=True)

    def _paths(self, tenant_id: str):
        base = os.path.join(self._settings.storage_dir, f"vs_{tenant_id}")
        return base + ".npy", base + ".json"

    def _load(self, tenant_id: str):
        npy_path, json_path = self._paths(tenant_id)
        if tenant_id in self._tenant_matrix:
            return
        if os.path.exists(npy_path) and os.path.exists(json_path):
            self._tenant_matrix[tenant_id] = np.load(npy_path)
            with open(json_path, "r", encoding="utf-8") as f:
                self._tenant_texts[tenant_id] = json.load(f)

    def _save(self, tenant_id: str):
        npy_path, json_path = self._paths(tenant_id)
        np.save(npy_path, self._tenant_matrix[tenant_id])
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(self._tenant_texts[tenant_id], f)

    def upsert_texts(self, tenant_id: str, texts: List[str], metadatas: List[Dict] | None = None):
        self._load(tenant_id)
        vectors = self._embed.embed(texts)
        # Normalize for cosine similarity
        norms = np.linalg.norm(vectors, axis=1, keepdims=True) + 1e-12
        vectors = vectors / norms
        if tenant_id not in self._tenant_matrix:
            self._tenant_matrix[tenant_id] = vectors
            self._tenant_texts[tenant_id] = []
        else:
            self._tenant_matrix[tenant_id] = np.vstack([self._tenant_matrix[tenant_id], vectors])
        entries = metadatas or [{} for _ in texts]
        for t, m in zip(texts, entries):
            self._tenant_texts[tenant_id].append({"text": t, **m})
        self._save(tenant_id)

    def similarity_search(self, tenant_id: str, query: str, top_k: int = 5) -> List[Dict]:
        self._load(tenant_id)
        if tenant_id not in self._tenant_matrix or self._tenant_matrix[tenant_id].shape[0] == 0:
            return []
        q = self._embed.embed([query])
        q = q / (np.linalg.norm(q, axis=1, keepdims=True) + 1e-12)
        matrix = self._tenant_matrix[tenant_id]
        scores = (matrix @ q.T).ravel()
        if top_k >= len(scores):
            top_idx = np.argsort(-scores)
        else:
            top_idx = np.argpartition(-scores, top_k)[:top_k]
            top_idx = top_idx[np.argsort(-scores[top_idx])]
        results: List[Dict] = []
        for idx in top_idx:
            meta = self._tenant_texts[tenant_id][int(idx)]
            results.append({"score": float(scores[int(idx)]), **meta})
        return results