import os
from typing import List


WORKFLOWS_DIR = "/workspace/.github/workflows"


def convert_file(path: str) -> bool:
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    changed = False
    out: List[str] = []
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.lstrip()

        if stripped.startswith("run: '"):
            indent_len = len(line) - len(stripped)
            indent = line[:indent_len]

            # Single-line case: run: '...'
            if stripped.rstrip("\n").endswith("'") and stripped.strip() != "run: '":
                # Extract the content between the quotes
                inner = stripped.strip()[len("run: '"):-1]
                out.append(f"{indent}run: {inner}\n")
                changed = True
                i += 1
                continue

            # Multi-line case: run: '<maybe first content>' then lines until a line that is just a single quote
            first_after = stripped[len("run:"):].lstrip()
            # remove the leading single quote
            first_after = first_after[1:]
            content_lines: List[str] = []
            if first_after.strip() != "":
                content_lines.append(first_after.rstrip("\n"))
            j = i + 1
            while j < len(lines):
                if lines[j].strip() == "'":
                    j += 1
                    break
                content_lines.append(lines[j].rstrip("\n"))
                j += 1

            out.append(f"{indent}run: |\n")
            content_indent = indent + "  "
            for cl in content_lines:
                out.append(f"{content_indent}{cl}\n")

            changed = True
            i = j
            continue

        out.append(line)
        i += 1

    if changed:
        with open(path, "w", encoding="utf-8") as f:
            f.writelines(out)
    return changed


def main() -> None:
    for root, _, files in os.walk(WORKFLOWS_DIR):
        for fname in files:
            if not fname.endswith((".yml", ".yaml")):
                continue
            path = os.path.join(root, fname)
            if convert_file(path):
                print(f"Fixed {path}")


if __name__ == "__main__":
    main()

