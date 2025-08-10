import json
from pathlib import Path
from typing import List, Dict, Tuple


def _extract_texts(results: List[Dict]) -> List[str]:
    texts: List[str] = []
    for r in results:
        if r.get("response"):
            texts.append(str(r.get("response")))
        elif r.get("error"):
            texts.append(str(r.get("error")))
        else:
            texts.append("")
    return texts


def _cosine_sim(a: Dict[str, int], b: Dict[str, int]) -> float:
    import math
    dot = sum(a.get(k, 0) * b.get(k, 0) for k in set(a) | set(b))
    na = math.sqrt(sum(v * v for v in a.values()))
    nb = math.sqrt(sum(v * v for v in b.values()))
    return (dot / (na * nb)) if na and nb else 0.0


def _tf(text: str) -> Dict[str, int]:
    from collections import Counter
    tokens = [t.lower() for t in text.split() if t.strip()]
    return dict(Counter(tokens))


def compute_drift(prev_results: List[Dict], curr_results: List[Dict]) -> Tuple[float, List[Tuple[int, float]]]:
    prev_texts = _extract_texts(prev_results)
    curr_texts = _extract_texts(curr_results)
    n = min(len(prev_texts), len(curr_texts))
    if n == 0:
        return 0.0, []
    sims: List[Tuple[int, float]] = []
    total = 0.0
    for i in range(n):
        s = _cosine_sim(_tf(prev_texts[i]), _tf(curr_texts[i]))
        sims.append((i, s))
        total += s
    return (total / n), sims


def write_drift_report(prev_path: Path, curr_path: Path, out_path: Path, threshold: float = 0.75) -> Dict:
    if not prev_path.exists() or not curr_path.exists():
        return {"status": "missing_data"}
    prev = json.loads(prev_path.read_text(encoding="utf-8"))
    curr = json.loads(curr_path.read_text(encoding="utf-8"))
    avg, sims = compute_drift(prev, curr)
    drift = 1.0 - avg
    report = {
        "previous": str(prev_path),
        "current": str(curr_path),
        "avg_similarity": round(avg, 4),
        "drift": round(drift, 4),
        "below_threshold": avg < threshold,
        "pairs": [{"index": i, "similarity": round(s, 4)} for i, s in sims[:50]],
    }
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    return report