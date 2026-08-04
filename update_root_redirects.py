import base64
import json
import urllib.request
import urllib.error
import ssl
from pathlib import Path

REPO = "Zion-support/zion-support.github.io"
BRANCH = "gh-pages"
TOKEN = Path.home().joinpath(".gh_token").read_text().strip()
BASE_URL = f"https://api.github.com/repos/{REPO}/contents"
REDIRECTS = """# Service and content routes
/services/ai-cybersecurity/ /docs/services/ai-cybersecurity/index.html 200
/services/ai-development-acceleration/ /docs/services/ai-development-acceleration/index.html 200
/services/ai-email-intelligence/ /docs/services/ai-email-intelligence/index.html 200
/services/cloud-cost-optimization-platform/ /docs/services/cloud-cost-optimization-platform/index.html 200

# Core site routes
/ /docs/index.html 200
/services/ /docs/services/index.html 200
/blog/ /docs/blog/index.html 200
/contact /docs/contact/index.html 200
/contact/ /docs/contact/index.html 200
/search /docs/search/index.html 200
/search/ /docs/search/index.html 200
/api-development/ /docs/api-development/index.html 200
/blockchain-solutions/ /docs/blockchain-solutions/index.html 200
/analytics/ /docs/analytics/index.html 200

# Tools
/tools/base64/ /docs/tools/base64/index.html 200
/tools/json-formatter/ /docs/tools/json-formatter/index.html 200
/tools/roi-calculator/ /docs/tools/roi-calculator/index.html 200
/tools/unit-converter/ /docs/tools/unit-converter/index.html 200
/tools/favicon-generator/ /docs/tools/favicon-generator/index.html 200

# Tools aliases
/tools/ai-quick-audit /docs/tools/ai-quick-audit/index.html 200
/tools/ai-quick-audit/ /docs/tools/ai-quick-audit/index.html 200
/tools/phishing-analyzer /docs/tools/phishing-analyzer/index.html 200
/tools/phishing-analyzer/ /docs/tools/phishing-analyzer/index.html 200

# Free tools aliases
/free-ai-tools/ /free-tools/ 301
/free-ai-itools /free-ai-it-tools/ 302
/free-ai-itools/ /free-ai-it-tools/ 302

# Canonical sitemap
/sitemap.xml /sitemap-0.xml 301

# Legacy aliases
/free-consultation /free-consultation/index.html 200
/free-consultation/ /free-consultation/index.html 200
/free-audit /free-audit/index.html 200
/free-audit/ /free-audit/index.html 200
/proposal /proposal/index.html 200
/proposal/ /proposal/index.html 200

# Industries
/industries/insurance/ /industries/insurance/index.html 200
/industries/healthcare/ /industries/healthcare/index.html 200
/industries/legal/ /industries/legal/index.html 200

# Missing service pages -> services home
/services /services/ 301
/services/automation-multi-channel-campaign-orchestrator/ /services/ 301
/services/it-backup-disaster-recovery-solution/ /services/ 301
/services/cloud-data-lakehouse-platform/ /services/ 301
/services/cloud-edge-ai-deployment-platform/ /services/ 301
/services/automation-integrated-commerce-flows/ /services/ 301
/services/data-graph-analytics-platform/ /services/ 301
/services/automation-document-intelligence-pipeline/ /services/ 301
/services/security-web-application-firewall/ /services/ 301
/services/data-realtime-trending-aggregator/ /services/ 301
/services/it-api-management-gateway/ /services/ 301
/services/security-supply-chain-sbom-manager/ /services/ 301
/services/cloud-event-driven-microservices/ /services/ 301
/services/automation-multi-channel-campaign-manager/ /services/ 301
/services/ai-sustainable-supply-chain-radar/ /services/ 301
/services/ai-fintech-fraud-graph/ /services/ 301
/services/security-sbom-supply-chain/ /services/ 301
/services/it-api-gateway-openapi/ /services/ 301
/services/cloud-hybrid-multicloud-networking/ /services/ 301
/services/it-backup-dr-bc-as-a-service/ /services/ 301
/services/ai-contract-lifecycle-intelligence/ /services/ 301
/services/cloud-migration/ /services/ 301
/services/cybersecurity/ /services/ 301
/services/devops-cicd/ /services/ 301
/services/micro-saas-ai-translation-engine/ /services/ 301
/services/micro-saas-ai-expense-tracker/ /services/ 301
/services/micro-saas-ai-hr-recruitment/ /services/ 301
/services/micro-saas-ai-customer-onboarding/ /services/ 301
/services/micro-saas-ai-social-media-manager/ /services/ 301
/services/advanced-ai-enterprise-intelligence-hub/ /services/ 301
/services/ai-3d-asset-generator/ /services/ 301
/services/ai-accessibility-auditor/ /services/ 301
/services/ai-accessibility-optimizer/ /services/ 301
/services/ai-ad-copy-generator/ /services/ 301
/services/ai-agent-safety-evaluation/ /services/ 301
/services/ai-agent-tool-builder/ /services/ 301
/services/ai-agentic-workflows/ /services/ 301
/services/ai-agents-autonomous/ /services/ 301
/services/ai-aiops-anomaly-detection/ /services/ 301
/services/ai-api-orchestration-layer/ /services/ 301
/services/ai-automated-reporting/ /services/ 301
/services/ai-automation/ /services/ 301
/services/ai-autonomous-code-deployment/ /services/ 301
/services/ai-autonomous-qa-engineering/ /services/ 301
/services/ai-bdr-sdr/ /services/ 301
/services/ai-bom-procurement/ /services/ 301
/services/ai-brand-voice-guardian/ /services/ 301
/services/accessibility-compliance/ /services/ 301
/services/ai-performance-monitoring/ /services/ 301
/services/api-gateway-management/ /services/ 301
/services/api-integration/ /services/ 301
/services/api-management-gateway/ /services/ 301
/services/apm-application-performance/ /services/ 301
/services/chaos-engineering-svc/ /services/ 301
/services/cloud-cost-ai-optimizer/ /services/ 301
/services/cloud-finops-1/ /services/ 301
/services/cloud-native-app-dev/ /services/ 301
/services/container-security-lifecycle/ /services/ 301
/services/cyber-threat-intelligence/ /services/ 301
/services/data-warehouse-modernization/ /services/ 301
/services/db-migration-service/ /services/ 301
/services/devops-gen-ai-ci-cd/ /services/ 301
/services/devsecops-pipeline/ /services/ 301
/services/edge-computing-deploy/ /services/ 301
/services/endpoint-management/ /services/ 301
/services/enterprise-backup-dr/ /services/ 301
/services/etl-pipeline-optimization/ /services/ 301
/services/event-driven-architecture/ /services/ 301
/services/evm-smart-contract-audit/ /services/ 301
/services/graphql-federation-platform/ /services/ 301
/services/incident-response-retainer/ /services/ 301
/services/it-api-gateway-ai/ /services/ 301
/services/it-api-gateway-management/ /services/ 301
/services/it-api-gateway-openapi/ /services/ 301
/services/it-api-management-gateway/ /services/ 301
/services/it-api-performance-testing/ /services/ 301
/services/it-apisec-testing/ /services/ 301
/services/micro-saas-ai-data-backup/ /services/ 301
/services/api-development/ /services/ 301
/services/aws-serverless-migration/ /services/ 301
/services/backup-disaster-recovery/ /services/ 301
/services/cdn-edge-cache/ /services/ 301
/services/cloud-ai-mlops-platform/ /services/ 301
/services/cloud-api-gateway-enterprise/ /services/ 301
/services/cloud-blob-intelligent-tiering/ /services/ 301
/services/cloud-bom-visualiser/ /services/ 301
/services/cloud-chaos-engineering-platform/ /services/ 301
/services/cloud-container-registry-trivy-scan/ /services/ 301
/services/cloud-cost-anomaly-detector/ /services/ 301
/services/cloud-cost-anomaly-detector-ml/ /services/ 301
/services/cloud-cost-optimization-service/ /services/ 301
/services/cloud-data-lakehouse-platform/ /services/ 301
/services/cloud-disaster-recovery-orchestration/ /services/ 301
/services/cloud-edge-ai-deployment-platform/ /services/ 301
/services/cloud-edge-computing-global/ /services/ 301
/services/cloud-event-driven-microservices/ /services/ 301
/services/cloud-gitops-enterprise-platform/ /services/ 301
/services/cloud-hybrid-multi-cloud-orchestrator/ /services/ 301
/services/cloud-hybrid-multicloud-networking/ /services/ 301
/services/cloud-kubernetes-cost-optimizer/ /services/ 301
/services/cloud-kubernetes-gitops-platform/ /services/ 301
"""
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def gh(method, url, data=None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(url, data=body, method=method)
    req.add_header("Authorization", f"token {TOKEN}")
    req.add_header("Accept", "application/vnd.github+json")
    if body:
        req.add_header("Content-Type", "application/json")
    try:
        r = urllib.request.urlopen(req, timeout=20, context=ctx)
        return r.getcode(), json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())


def sha(path):
    url = f"{BASE_URL}/{path}?ref={BRANCH}"
    c, d = gh("GET", url)
    return d.get("sha") if c == 200 else None


def upload(path_str, content: str):
    payload = {
        "message": f"deploy: update {path_str}",
        "content": base64.b64encode(content.encode("utf-8")).decode("ascii"),
        "branch": BRANCH,
    }
    s = sha(Path(path_str))
    if s:
        payload["sha"] = s
        action = "update"
    else:
        action = "create"
    c, d = gh("PUT", f"{BASE_URL}/{path_str}", payload)
    ok = c in (200, 201)
    print(f"[{'ok' if ok else 'FAIL'}] {action} {path_str} -> {c}")
    return ok


def main():
    upload("_redirects", REDIRECTS)


if __name__ == "__main__":
    main()
