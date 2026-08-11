import subprocess, json, sys
from datetime import datetime, timezone

BASE = "https://ziontechgroup.com"
PATHS = ["/", "/services/", "/tools/", "/contact/", "/pricing/", "/solutions/", "/blog/", "/about/"]
results = {}
for p in PATHS:
    url = BASE + p
    try:
        # Use curl on Windows; suppress progress, follow redirects, show final HTTP code
        cmd = [
            "curl", "-s", "-o", "NUL", "-w", "%{http_code}", "-L", "--max-time", "20", url
        ]
        out = subprocess.check_output(cmd, stderr=subprocess.STDOUT, text=True, timeout=25)
        code = int(out.strip()) if out.strip().isdigit() else 0
        results[p] = {"http_code": code, "ok": code == 200}
    except Exception as e:
        results[p] = {"http_code": 0, "ok": False, "error": str(e)}

artifact = {
    "ts": datetime.now(timezone.utc).isoformat(),
    "base": BASE,
    "results": results,
}
out_path = "artifacts/crawl_probe_2026-08-11.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(artifact, f, indent=2)
print(json.dumps(artifact, indent=2))
