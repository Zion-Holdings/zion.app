import json
import run_crawl
from unittest.mock import MagicMock

# Basic import/smoke
assert hasattr(run_crawl, "classify"), "classify missing"

# Smoke test classify logic
url = "https://example.com/broken"

class DummyResp:
    def __init__(self, status, headers=None):
        self.status_code = status
        self.headers = headers or {}

r = DummyResp(404)
assert run_crawl.classify(url, r) == "missing page"

r = DummyResp(500)
assert run_crawl.classify(url, r) == "missing page"

r = DummyResp(302, headers={"location": "https://example.com/dead"})
session_mock = MagicMock()
session_mock.head.return_value.status_code = 404
assert run_crawl.classify(url, r) == "stale redirect"

# Run main crawler and verify JSON shape
import io, sys
old_stdout = sys.stdout
sys.stdout = buf = io.StringIO()
run_crawl.main()
sys.stdout = old_stdout
out = buf.getvalue().strip()
report = json.loads(out)
assert "base" in report
assert "total_crawled" in report
assert "http_200_count" in report
assert "broken_count" in report
assert isinstance(report["first_10_broken"], list)
print(json.dumps({"tests": "passed", "report": report}, indent=2))
