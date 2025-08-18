import os
import re
from typing import List


WORKFLOWS_DIR = "/workspace/.github/workflows"


def transform_lines(lines: List[str]) -> List[str]:
	i = 0
	output: List[str] = []
	changed = False

	while i < len(lines):
		line = lines[i]

		# Case A: run: 'echo "..."  (single line) with dangling closing quote later
		m = re.match(r'^(\s*)run:\s*\'\s*echo\s+"([^"]*)"\s*$', line)
		if m:
			indent = m.group(1)
			msg = m.group(2)
			# Skip any blank lines and a lone closing quote line
			j = i + 1
			while j < len(lines) and lines[j].strip() == "":
				j += 1
			if j < len(lines) and lines[j].strip() == "'":
				j += 1
			output.append(f"{indent}run: echo \"{msg}\"\n")
			i = j
			changed = True
			continue

		# Case B: run: ' (on its own line) followed by multiline until a line that is just a single quote
		m2 = re.match(r"^(\s*)run:\s*'\s*$", line)
		if m2:
			indent = m2.group(1)
			content_lines: List[str] = []
			j = i + 1
			while j < len(lines):
				if lines[j].strip() == "'":
					j += 1
					break
				content_lines.append(lines[j].rstrip("\n"))
				j += 1
			output.append(f"{indent}run: |\n")
			content_indent = indent + "  "
			for cl in content_lines:
				output.append(f"{content_indent}{cl}\n")
			i = j
			changed = True
			continue

		# Case C: run: '<first line content ... (not closed on same line), closing quote on its own line later
		m3 = re.match(r"^(\s*)run:\s*'(.*)\n$", line)
		if m3 and not line.rstrip("\n").endswith("'"):
			indent = m3.group(1)
			first_content = m3.group(2)
			content_lines = [first_content]
			j = i + 1
			while j < len(lines) and lines[j].strip() != "'":
				content_lines.append(lines[j].rstrip("\n"))
				j += 1
			if j < len(lines) and lines[j].strip() == "'":
				j += 1
			output.append(f"{indent}run: |\n")
			content_indent = indent + "  "
			for cl in content_lines:
				output.append(f"{content_indent}{cl}\n")
			i = j
			changed = True
			continue

		output.append(line)
		i += 1

	return output if changed else lines


def main() -> None:
	for root, _, files in os.walk(WORKFLOWS_DIR):
		for fname in files:
			if not fname.endswith((".yml", ".yaml")):
				continue
			path = os.path.join(root, fname)
			with open(path, "r", encoding="utf-8") as f:
				original = f.readlines()
			transformed = transform_lines(original)
			if transformed != original:
				with open(path, "w", encoding="utf-8") as f:
					f.writelines(transformed)
				print(f"Fixed {path}")


if __name__ == "__main__":
	main()