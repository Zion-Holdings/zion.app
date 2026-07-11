import json
import subprocess
from pathlib import Path
from datetime import datetime
from collections import Counter

PROJECT_ROOT = Path(__file__).resolve().parents[0].parent
LEADS_PATH = PROJECT_ROOT / "data" / "discovered_leads.json"
OUTPUT_PATH = LEADS_PATH
VENV_PY = PROJECT_ROOT.parent / ".hermes" / "hermes-agent" / "venv" / "bin" / "python3"


def parse_verify(text):
    results = {}
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("─"):
            continue
        parts = line.split()
        if len(parts) < 6:
            continue
        email = parts[1].replace("~PG", "").strip().lower()
        status = parts[2]
        try:
            score = int(parts[4])
        except Exception:
            score = 0
        results[email] = {"status": status, "score": score}
    return results


def batch_verify(emails, size=20):
    all_results = {}
    for i in range(0, len(emails), size):
        chunk = emails[i : i + size]
        print(f"[Cron] Verifying {i + 1}-{i + len(chunk)}/{len(emails)}...")
        cmd = [str(VENV_PY), "-m", "openleads", "verify"] + chunk
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
        if r.returncode != 0:
            print(f"Batch failed code={r.returncode}: {r.stderr[:200]}")
            continue
        all_results.update(parse_verify(r.stdout))
    return all_results


def main():
    print(f"[Cron] Load leads: {LEADS_PATH}")
    data = json.loads(LEADS_PATH.read_text())
    total = len(data)
    needs = [l for l in data if l.get("status") == "New" and not l.get("verified")]
    emails = sorted({str(l.get("email", "")).lower() for l in needs if l.get("email")})
    print(f"[Cron] New leads needing verification by email count: {len(emails)}/{total}")
    if not emails:
        print("[Cron] No qualifying emails to verify; stop.")
        return

    print(f"[Cron] Backed up discovered_leads.json externally by cron in earlier step; verify in place next.")
    results = batch_verify(emails, size=20)
    print(f"[Cron] Verified results returned for {len(results)} emails.")

    changed = 0
    for lead in data:
        email = str(lead.get("email", "")).lower()
        if not email or email not in results:
            continue
        v = results[email]
        is_verified_now = v["status"] in ("safe", "risky")
        was_verified = bool(lead.get("verified"))
        action = (
            lead.get("verification_status") != v["status"]
            or lead.get("verification") != v
            or was_verified != is_verified_now
        )
        if action:
            lead["verified"] = is_verified_now
            lead["verification_status"] = v["status"]
            lead["verification"] = {"status": v["status"], "score": v["score"]}
            changed += 1

    if changed:
        OUTPUT_PATH.write_text(json.dumps(data, indent=2, sort_keys=False))
        print(f"[Cron] Updated verification state for {changed} leads.")
    else:
        print("[Cron] No state changes needed after re-verification.")

    c_verified = Counter(l.get("verified") for l in data)
    c_status = Counter(l.get("verification_status") for l in data)
    usable = [
        l
        for l in data
        if l.get("verified")
        or l.get("verification", {}).get("status") in ("safe", "risky")
    ]
    print("[Cron] Coverage ==, verified:", dict(c_verified), "status:", dict(c_status))
    print(f"[Cron] Usable verified leads: {len(usable)}/{len(data)}")
    print(f"[Cron] Wrote ==, {OUTPUT_PATH.str()}")


if __name__ == "__main__":
    main()
