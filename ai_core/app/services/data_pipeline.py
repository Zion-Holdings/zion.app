import os
import json
from typing import List, Dict
from ..config import get_settings


SOURCES = [
    "job_posts.jsonl",
    "common_questions.jsonl",
    "assistant_prompts.jsonl",
    "chat_sessions.jsonl",
    "reviews.jsonl",
    "resumes.jsonl",
]


class DataPipeline:
    def __init__(self) -> None:
        self._settings = get_settings()
        self._data_dir = os.path.join(self._settings.storage_dir, "data_sources")
        os.makedirs(self._data_dir, exist_ok=True)

    def _read_jsonl(self, path: str) -> List[Dict]:
        docs: List[Dict] = []
        if not os.path.exists(path):
            return docs
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    docs.append(json.loads(line))
                except json.JSONDecodeError:
                    continue
        return docs

    def collect_documents(self, tenant_id: str | None = None) -> List[Dict]:
        docs: List[Dict] = []
        for src in SOURCES:
            path = os.path.join(self._data_dir, src)
            docs += self._read_jsonl(path)
        # Minimal normalization
        normalized: List[Dict] = []
        for d in docs:
            text = (
                d.get("text")
                or d.get("content")
                or d.get("message")
                or d.get("review")
                or d.get("summary")
                or ""
            )
            if not text:
                continue
            meta = {k: v for k, v in d.items() if k not in {"text", "content", "message", "review", "summary"}}
            if tenant_id is not None:
                meta["tenant_id"] = tenant_id
            normalized.append({"text": text, **meta})
        return normalized