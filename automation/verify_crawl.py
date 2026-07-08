import json
import run_crawl
from io import StringIO
import sys

expected_keys = {"base", "total_crawled", "http_200_count", "broken_count", "first_10_broken", "status_counts", "link_graph_count"}

old_stdout = sys.stdout
sys.stdout = buffer = StringIO()
run_crawl.main()
sys.stdout = old_stdout
raw = buffer.getvalue().strip()
report = json.loads(raw)
missing = expected_keys - set(report.keys())
assert not missing, f"missing keys: {missing}"
assert isinstance(report["first_10_broken"], list)
assert isinstance(report["status_counts"], dict)
assert isinstance(report["link_graph_count"], dict)
print(json.dumps({"tests": "passed", "report": report}, indent=2))
