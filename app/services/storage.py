import json
from pathlib import Path
from typing import Any, Dict, List, Optional
from app.config import DATA_DIR


def get_nation_dir(nation_id: str) -> Path:
    nation_dir = DATA_DIR / "nations" / nation_id
    nation_dir.mkdir(parents=True, exist_ok=True)
    (nation_dir / "corpus").mkdir(parents=True, exist_ok=True)
    (nation_dir / "feedback").mkdir(parents=True, exist_ok=True)
    (nation_dir / "versions").mkdir(parents=True, exist_ok=True)
    return nation_dir


def save_corpus_file(nation_id: str, category: str, filename: str, content: bytes) -> str:
    category_dir = get_nation_dir(nation_id) / "corpus" / category
    category_dir.mkdir(parents=True, exist_ok=True)
    target_path = category_dir / filename
    with open(target_path, "wb") as f:
        f.write(content)
    return str(target_path)


def write_json(path: Path, data: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def read_json(path: Path) -> Optional[Dict[str, Any]]:
    if not path.exists():
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_config(nation_id: str, config: Dict[str, Any]) -> None:
    write_json(get_nation_dir(nation_id) / "config.json", config)


def load_config(nation_id: str) -> Optional[Dict[str, Any]]:
    return read_json(get_nation_dir(nation_id) / "config.json")


def save_job(nation_id: str, job: Dict[str, Any]) -> None:
    write_json(get_nation_dir(nation_id) / "latest_job.json", job)


def load_job(nation_id: str) -> Optional[Dict[str, Any]]:
    return read_json(get_nation_dir(nation_id) / "latest_job.json")


def append_feedback(nation_id: str, feedback: Dict[str, Any]) -> None:
    fb_dir = get_nation_dir(nation_id) / "feedback"
    fb_dir.mkdir(parents=True, exist_ok=True)
    all_path = fb_dir / "all.jsonl"
    with open(all_path, "a", encoding="utf-8") as f:
        f.write(json.dumps(feedback, ensure_ascii=False) + "\n")


def load_feedback(nation_id: str) -> List[Dict[str, Any]]:
    all_path = get_nation_dir(nation_id) / "feedback" / "all.jsonl"
    if not all_path.exists():
        return []
    rows: List[Dict[str, Any]] = []
    with open(all_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                rows.append(json.loads(line))
            except Exception:
                continue
    return rows


def save_deployment(nation_id: str, model_id: str, limits: Dict[str, Any]) -> None:
    write_json(get_nation_dir(nation_id) / "deployment.json", {"model_id": model_id, **limits})


def load_deployment(nation_id: str) -> Optional[Dict[str, Any]]:
    return read_json(get_nation_dir(nation_id) / "deployment.json")


def list_corpus(nation_id: str) -> List[str]:
    corpus_dir = get_nation_dir(nation_id) / "corpus"
    if not corpus_dir.exists():
        return []
    paths: List[str] = []
    for p in corpus_dir.rglob("*"):
        if p.is_file():
            paths.append(str(p))
    return paths