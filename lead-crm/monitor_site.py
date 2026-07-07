#!/usr/bin/env python3
""" lightweight site monitor for static Next.js export / dev server """
import json, os, re, sys
from datetime import datetime, timezone
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

BASE = os.environ.get("SITE_BASE", "http://localhost:3000")
TIMEOUT = 10
ROUTES = [
    "/",
    "/pricing",
    "/contact",
    "/dashboard",
    "/careers",
    "/partners",
    "/portal",
    "/press",
    "/status",
    "/faq",
    "/case-studies",
    "/privacy",
    "/terms",
    "/cookies",
    "/sla",
    "/configurator",
    "/services/it-workspace-analytics",
    "/services/ai-observability",
    "/services/ai-insurance-claims",
    "/services/ai-edge-cdn-connectivity",
    "/services/ai-observability-aiops",
    "/blog/ai-first-msp-pricing-model-for-ai-support-automation-in-2026",
    "/blog/cyber-incident-response-retainer-services-for-it-teams-in-2026",
    "/blog/it-cost-optimization-report-for-managed-cloud-spend",
    "/blog/ai-first-customer-success-and-churn-prevention-for-saas-in-2026",
    "/blog/edge-ai-video-analytics-for-retail-operations-in-2026",
    "/blog/ai-insurance-claims-automation-guide-for-operations-leaders",
    "/blog/ai-first-device-management-and-iot-operations-in-2026",
    "/blog/ai-first-digital-twins-and-asset-simulation-for-industry-in-2026",
    "/blog/ai-anti-fraud-and-payment-intelligence-for-fintech-in-2026",
]

def probe(path: str):
    url = BASE.rstrip("/") + path
    req = Request(url, headers={"User-Agent": "site-monitor/1.0"})
    try:
        with urlopen(req, timeout=TIMEOUT) as r:
            code = r.getcode()
            # treat redirects as unhealthy for direct-route check
            final = r.getheader("Location")
            return {
                "ok": code == 200 and not final,
                "code": code,
                "final": final,
                "reason": None,
            }
    except HTTPError as e:
        return {"ok": False, "code": e.code, "final": None, "reason": str(e)}
    except URLError as e:
        return {"ok": False, "code": None, "final": None, "reason": str(e.reason)}
    except Exception as e:
        return {"ok": False, "code": None, "final": None, "reason": str(e)}


def main():
    checked_at = datetime.now(timezone.utc).isoformat()
    results = {path: probe(path) for path in ROUTES}

    healthy = [p for p, r in results.items() if r["ok"]]
    unhealthy = [p for p, r in results.items() if not r["ok"]]
    report = {
        "checkedAt": checked_at,
        "base": BASE,
        "summary": {
            "healthyDirectRoutes": healthy,
            "redirectRoutes": [p for p, r in results.items() if r.get("final")],
            "unhealthyDirectRoutes": unhealthy,
            "first3Unhealthy": unhealthy[:3],
            "healthy": len(healthy),
            "unhealthy": len(unhealthy),
            "total": len(results),
        },
        "details": results,
    }

    out_dir = os.path.join(os.path.dirname(__file__), "..", "automation", "reports")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "site-monitor-latest.json")
    with open(out_path, "w") as f:
        json.dump(report, f, indent=2)

    text = (
        f"site-monitor: checked {len(results)} routes at {checked_at}\n"
        f"healthy={len(healthy)} unhealthy={len(unhealthy)}\n"
    )
    if unhealthy:
        text += "first3Unhealthy=" + ", ".join(unhealthy[:3]) + "\n"
    print(text)
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
