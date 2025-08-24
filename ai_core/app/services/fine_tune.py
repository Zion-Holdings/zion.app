import os
from ..config import get_settings


class FineTuneService:
    def __init__(self) -> None:
        self._settings = get_settings()
        self._client = None
        if self._settings.model_provider == "openai" and self._settings.openai_api_key:
            from openai import OpenAI

            self._client = OpenAI(api_key=self._settings.openai_api_key)

    def create_training_file(self, samples: list[dict]) -> str:
        # For OpenAI, we would upload a JSONL file. Here, write to storage and return path.
        storage_dir = os.path.join(self._settings.storage_dir, "datasets")
        os.makedirs(storage_dir, exist_ok=True)
        path = os.path.join(storage_dir, "train_dataset.jsonl")
        with open(path, "w", encoding="utf-8") as f:
            for s in samples:
                f.write(f"{s}\n")
        return path

    def fine_tune(self, training_file_path: str) -> dict:
        if self._client is None:
            # Mock fine-tune: return a new version without real training
            return {"status": "succeeded", "model": "local-mock", "id": "ft_mock_001"}
        # NOTE: For real fine-tuning, implement OpenAI FT APIs as needed.
        # Placeholder returns success
        return {"status": "succeeded", "model": "openai-finetuned-model", "id": "ft_123"}