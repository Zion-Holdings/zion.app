import json
from pathlib import Path
from typing import Dict, List

from app.services.storage import load_config
from app.services.providers.base import get_provider


async def run_benchmarks(nation_id: str, benchmarks_dir: Path, out_path: Path) -> None:
    cfg = load_config(nation_id) or {}
    base = cfg.get("base", "local")
    system_prompt = cfg.get("operator_prompt", "")
    provider = get_provider(base)

    prompts: List[str] = []
    if benchmarks_dir.exists():
        for p in benchmarks_dir.glob("*.txt"):
            prompts.append(p.read_text(encoding="utf-8").strip())
    else:
        prompts = [
            "Summarize this constitution excerpt for talent onboarding.",
            "Draft a DAO-native reply to a governance proposal in English and French (short).",
        ]
    results: List[Dict] = []
    for prompt in prompts:
        try:
            resp = await provider.chat(system_prompt=system_prompt, user_message=prompt, model=base, max_tokens=int(cfg.get("output_length", 512)))
            results.append({"prompt": prompt, "model": resp.get("model"), "response": resp.get("response"), "tokens_used": resp.get("tokens_used")})
        except Exception as exc:
            results.append({"prompt": prompt, "error": str(exc)})

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")