import json
from pathlib import Path
from typing import List, Dict

from app.services.storage import load_feedback
from app.services.intent_labeler import auto_label_intents


def mine_and_write_intents(nation_id: str, out_path: Path) -> None:
    rows: List[Dict] = load_feedback(nation_id)
    intents = auto_label_intents(rows, top_k=20)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(intents, ensure_ascii=False, indent=2), encoding="utf-8")