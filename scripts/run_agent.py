#!/usr/bin/env python3
import argparse
import json
import os
import time
from datetime import datetime

try:
	import yaml  # type: ignore
except Exception as e:
	raise SystemExit("Missing dependency: PyYAML. Please add it to requirements.txt")


def read_config(path: str) -> dict:
	with open(path, "r", encoding="utf-8") as f:
		return yaml.safe_load(f) or {}


def ensure_parent_dir(path: str) -> None:
	parent = os.path.dirname(os.path.abspath(path))
	os.makedirs(parent, exist_ok=True)


def main() -> None:
	parser = argparse.ArgumentParser(description="Run an agent and emit metrics")
	parser.add_argument("--config", required=True, help="Path to agent config YAML")
	parser.add_argument("--output", required=True, help="Path to write metrics JSON")
	args = parser.parse_args()

	start = time.time()
	cfg = read_config(args.config)
	agent_id = cfg.get("id") or f"agent-{int(time.time())}"
	profile = cfg.get("profile", "unknown")
	delegation = float(cfg.get("delegation", 0.3))

	# Placeholder run: simulate work using delegation as a knob for latency and pass rate.
	simulated_latency_ms = int(500 + (1.0 - min(max(delegation, 0.0), 1.0)) * 1500)
	time.sleep(min(simulated_latency_ms / 1000.0, 2.5))

	# Very simple heuristic metrics; replace with real evals.
	pass_rate = round(min(0.95, 0.5 + delegation * 0.5), 2)
	cost_usd = round(0.5 + delegation * 1.5, 2)
	tool_usage = {
		"search": True,
		"code": profile in {"code", "ops"},
		"web": profile == "web",
		"data": profile == "data",
	}

	metrics = {
		"id": agent_id,
		"timestamp": datetime.utcnow().isoformat() + "Z",
		"profile": profile,
		"delegation": delegation,
		"pass_rate": pass_rate,
		"cost_usd": cost_usd,
		"latency_ms": int((time.time() - start) * 1000),
		"tool_usage": tool_usage,
		"regression": False,
	}

	ensure_parent_dir(args.output)
	with open(args.output, "w", encoding="utf-8") as f:
		json.dump(metrics, f, indent=2, sort_keys=True)
	print(f"Wrote metrics to {args.output}")


if __name__ == "__main__":
	main()