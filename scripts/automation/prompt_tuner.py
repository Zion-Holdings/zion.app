import json
from pathlib import Path
from typing import List, Dict

BASELINE = (
    "You are ZionGPT, a helpful assistant for the Zion Africa ecosystem. "
    "Assist talent and communities using localized job posts, resumes, and a mixed English/French corpus. "
    "Tone should be professional yet inclusive, DAO-native when relevant. "
    "Follow community policies, constitutions, and industry guides uploaded for this nation."
)


def propose_prompt_edits(nation_id: str, intents_path: Path, results_path: Path, out_md_path: Path) -> None:
    intents: List[Dict] = []
    results: List[Dict] = []
    if intents_path.exists():
        intents = json.loads(intents_path.read_text(encoding="utf-8"))
    if results_path.exists():
        results = json.loads(results_path.read_text(encoding="utf-8"))

    additions: List[str] = []
    # Heuristics: if french intent is common, emphasize bilingual responses
    for row in intents:
        if row.get("intent") == "language_french_support" and row.get("count", 0) >= 2:
            additions.append("Always include brief bilingual (EN/FR) guidance when user indicates French.")
        if row.get("intent") == "resume_help" and row.get("count", 0) >= 2:
            additions.append("When asked for resume help, structure output with bullet points and a short bilingual summary.")
        if row.get("intent") == "dao_governance" and row.get("count", 0) >= 1:
            additions.append("Use DAO-native terminology when discussing proposals or votes.")

    # If evaluations are present, detect errors and add cautionary rules
    for r in results:
        if r.get("error"):
            additions.append("If unsure, ask a clarifying question in both English and French (one sentence each).")
            break

    proposal = ["# Prompt proposal for "+nation_id, "", "## Baseline", "", BASELINE, "", "## Proposed Additions", ""]
    if additions:
        for a in additions:
            proposal.append(f"- {a}")
    else:
        proposal.append("- No changes suggested based on current data.")

    out_md_path.parent.mkdir(parents=True, exist_ok=True)
    out_md_path.write_text("\n".join(proposal), encoding="utf-8")