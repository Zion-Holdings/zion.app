from pathlib import Path
from app.services.storage import get_nation_dir


def next_version_name(nation_id: str, region: str | None) -> str:
    base = f"ZionGPT-{region}" if region else "ZionGPT"
    versions_dir: Path = get_nation_dir(nation_id) / "versions"
    existing = [p.name for p in versions_dir.glob("*") if p.is_dir()]
    # Find max vX.Y where X and Y are ints
    major = 1
    minor = 0
    while True:
        candidate = f"{base}-v{major}.{minor}"
        if candidate not in existing:
            # create dir for record-keeping
            (versions_dir / candidate).mkdir(parents=True, exist_ok=True)
            return candidate
        minor += 1