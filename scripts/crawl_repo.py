import argparse
import json
import os
from pathlib import Path

EXCLUDE_DIRS = {".git", ".github", "node_modules", ".venv", "venv", "dist", "build"}
CODE_EXTS = (".ts", ".tsx", ".js", ".jsx", ".py", ".go", ".java", ".rb", ".rs", ".php")
DOC_EXTS = (".md", ".mdx")


def should_skip_dir(path: str) -> bool:
	parts = set(Path(path).parts)
	return any(ex in parts for ex in EXCLUDE_DIRS)


def index_repo(root: str) -> dict:
	index = {"modules": [], "docs": []}
	for dirpath, dirnames, filenames in os.walk(root):
		if should_skip_dir(dirpath):
			continue
		for filename in filenames:
			file_path = os.path.join(dirpath, filename)
			if filename.endswith(DOC_EXTS):
				index["docs"].append(file_path)
			elif filename.endswith(CODE_EXTS):
				index["modules"].append(file_path)
	return index


if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	parser.add_argument("--root", default=".")
	parser.add_argument("--out", default="content_index.json")
	parser.add_argument("--arch", default="docs/architecture.md")
	args = parser.parse_args()

	idx = index_repo(args.root)
	Path("docs").mkdir(parents=True, exist_ok=True)
	with open(args.out, "w", encoding="utf-8") as f:
		json.dump(idx, f, indent=2)

	with open(args.arch, "w", encoding="utf-8") as f:
		f.write("# Architecture\n\n")
		f.write(f"- Modules: {len(idx['modules'])}\n")
		f.write(f"- Docs: {len(idx['docs'])}\n")