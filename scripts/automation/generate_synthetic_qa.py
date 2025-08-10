import asyncio
import json
from pathlib import Path
from typing import List

from app.services.storage import list_corpus, load_config
from app.services.providers.base import get_provider


async def _summarize_and_qa(provider, system_prompt: str, text: str, base: str, max_tokens: int) -> dict:
    prompt = (
        "Given the following domain text, extract 3-5 high-signal Q&A pairs that would help a talent or DAO member.\n"
        "Each Q should be concise; A should be grounded in the text.\n\n"
        f"TEXT:\n{text[:4000]}\n\nOutput as JSON list of objects with 'q' and 'a'."
    )
    resp = await provider.chat(system_prompt=system_prompt, user_message=prompt, model=base, max_tokens=max_tokens)
    content = resp.get("response") or "[]"
    try:
        # try to parse JSON portion
        import re, json
        match = re.search(r"\[.*\]", content, re.S)
        data = json.loads(match.group(0)) if match else []
    except Exception:
        data = []
    return {"items": data, "raw": content}


async def generate_synthetic_for_nation(nation_id: str, out_jsonl: Path) -> None:
    cfg = load_config(nation_id) or {}
    base = cfg.get("base", "local")
    max_tokens = int(cfg.get("output_length", 512))
    system_prompt = cfg.get("operator_prompt", "")
    provider = get_provider(base)

    files: List[str] = list_corpus(nation_id)
    out_jsonl.parent.mkdir(parents=True, exist_ok=True)

    for fp in files:
        try:
            text = Path(fp).read_text(encoding="utf-8")
        except Exception:
            continue
        result = await _summarize_and_qa(provider, system_prompt, text, base, max_tokens)
        items = result.get("items", [])
        with out_jsonl.open("a", encoding="utf-8") as f:
            for it in items:
                rec = {"nation_id": nation_id, "source": fp, "q": it.get("q"), "a": it.get("a")}
                f.write(json.dumps(rec, ensure_ascii=False) + "\n")