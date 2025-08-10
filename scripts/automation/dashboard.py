from pathlib import Path
import json
from datetime import datetime

INDEX_HTML = """
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>ZionGPT Analytics</title>
<style>
body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; margin: 2rem; }
.card { border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
h2 { margin: 0 0 0.5rem 0; }
pre { background: #f6f8fa; padding: 0.75rem; border-radius: 8px; white-space: pre-wrap; }
</style>
</head>
<body>
<h1>ZionGPT Analytics</h1>
<p>Generated at {generated_at}</p>
<div class="card">
  <h2>Top Intents</h2>
  <pre>{intents}</pre>
</div>
<div class="card">
  <h2>Eval Results (latest)</h2>
  <pre>{evals}</pre>
</div>
<div class="card">
  <h2>Drift Report</h2>
  <pre>{drift}</pre>
</div>
</body>
</html>
"""


def generate_dashboard(analytics_dir: Path, out_dir: Path, nation_id: str) -> None:
    intents_path = analytics_dir / f"{nation_id}_intents.json"
    evals_path = analytics_dir / f"{nation_id}_eval_results.json"
    drift_path = analytics_dir / f"{nation_id}_drift.json"

    intents = intents_path.read_text(encoding="utf-8") if intents_path.exists() else "[]"
    evals = evals_path.read_text(encoding="utf-8") if evals_path.exists() else "[]"
    drift = drift_path.read_text(encoding="utf-8") if drift_path.exists() else "{}"

    out_dir.mkdir(parents=True, exist_ok=True)
    html = INDEX_HTML.format(
        generated_at=datetime.utcnow().isoformat() + "Z",
        intents=intents,
        evals=evals,
        drift=drift,
    )
    (out_dir / "index.html").write_text(html, encoding="utf-8")