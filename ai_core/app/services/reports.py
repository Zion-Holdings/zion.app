import os
from datetime import datetime
from typing import Dict
from ..config import get_settings


class ReportService:
    def __init__(self) -> None:
        self._settings = get_settings()

    def write_training_report(self, version: str, stats: Dict) -> str:
        reports_dir = os.path.join(self._settings.storage_dir, "reports")
        os.makedirs(reports_dir, exist_ok=True)
        path = os.path.join(reports_dir, f"report_{version}.md")
        with open(path, "w", encoding="utf-8") as f:
            f.write(f"# Training Report: {version}\n\n")
            f.write(f"Date: {datetime.utcnow().isoformat()}Z\n\n")
            f.write("## Summary\n\n")
            f.write(f"- Samples: {stats.get('num_samples', 0)}\n")
            f.write(f"- Added vectors: {stats.get('num_vectors', 0)}\n")
            f.write(f"- Provider: {stats.get('provider', 'unknown')}\n")
            f.write("\n## Notes\n\n")
            f.write(stats.get("notes", ""))
        return path