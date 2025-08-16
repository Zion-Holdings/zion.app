import argparse
import json
import os
from collections import defaultdict
from pathlib import Path

import yaml


def group_by_top_level(files):
	groups = defaultdict(list)
	for file_path in files:
		parts = file_path.split(os.sep)
		if parts:
			groups[parts[0]].append(file_path)
	return groups


if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	parser.add_argument("--index", required=True)
	parser.add_argument("--out-dir", default="agents")
	args = parser.parse_args()

	index = json.load(open(args.index, encoding="utf-8"))
	groups = group_by_top_level(index.get("modules", []))
	Path(args.out_dir).mkdir(parents=True, exist_ok=True)

	for name, paths in groups.items():
		spec = {
			"name": f"{name}-agent",
			"description": f"Agent for {name} domain",
			"owner": "eng",
			"triggers": ["schedule", "push"],
			"scope": {"paths": paths[:100]},
			"capabilities": ["summarize", "propose_pr"],
			"model": "gpt-4o",
		}
		with open(os.path.join(args.out_dir, f"{name}-agent.yaml"), "w", encoding="utf-8") as f:
			yaml.safe_dump(spec, f, sort_keys=False)