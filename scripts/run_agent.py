import argparse
import os
import subprocess
import textwrap
import shutil

import yaml


def propose_pr(branch: str, title: str, body: str, files_to_touch):
	# Create branch, commit, push, and open PR using gh if available.
	subprocess.run(["git", "config", "user.name", os.environ.get("GIT_AUTHOR_NAME", "github-actions[bot]")], check=True)
	subprocess.run(["git", "config", "user.email", os.environ.get("GIT_AUTHOR_EMAIL", "41898282+github-actions[bot]@users.noreply.github.com")], check=True)
	subprocess.run(["git", "checkout", "-b", branch], check=True)
	for file_path in files_to_touch:
		os.makedirs(os.path.dirname(file_path), exist_ok=True)
		with open(file_path, "a", encoding="utf-8") as handle:
			handle.write("\n")
	subprocess.run(["git", "add", "-A"], check=True)
	subprocess.run(["git", "commit", "-m", title], check=True)
	subprocess.run(["git", "push", "--set-upstream", "origin", branch], check=True)
	if shutil.which("gh"):
		subprocess.run(["gh", "pr", "create", "--fill", "--title", title, "--body", body], check=True)
	else:
		print("gh not available; PR creation step skipped.")


if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	parser.add_argument("--agent", required=True)
	args = parser.parse_args()

	spec = yaml.safe_load(open(args.agent, encoding="utf-8"))
	out_file = f"docs/agents/{spec['name']}.md"
	os.makedirs(os.path.dirname(out_file), exist_ok=True)
	summary = textwrap.dedent(
		f"""
		# {spec['name']}
		{spec.get('description', '')}
		- Owner: {spec.get('owner')}
		- Paths: {len(spec.get('scope', {}).get('paths', []))} tracked
		"""
	)
	with open(out_file, "w", encoding="utf-8") as handle:
		handle.write(summary)

	propose_pr(
		branch=f"agent/{spec['name']}/update",
		title=f"chore({spec['name']}): sync outputs",
		body="Automated update by agent runner.",
		files_to_touch=[out_file],
	)