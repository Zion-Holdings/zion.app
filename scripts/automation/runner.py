import asyncio
import sys
from pathlib import Path
import yaml
import typer
from rich import print

# Local imports
from app.services.storage import load_feedback
from scripts.automation.fetch_sources import fetch_all_sources
from scripts.automation.mine_intents import mine_and_write_intents
from scripts.automation.evaluate import run_benchmarks
from scripts.automation.prompt_tuner import propose_prompt_edits
from scripts.automation.gh_pr import ensure_git_identity, commit_all_changes, open_pr

app = typer.Typer()

DEFAULT_CONFIG = {
    "nation_id": "zion-africa",
    "sources": [],
    "benchmarks_dir": "benchmarks",
    "auto_pr": True,
}


def load_config(config_path: str | Path) -> dict:
    path = Path(config_path)
    if not path.exists():
        return DEFAULT_CONFIG
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f) or DEFAULT_CONFIG


@app.command()
def run(config: str = typer.Option("automation.yaml", help="Path to automation config")):
    cfg = load_config(config)
    nation_id: str = cfg.get("nation_id", "zion-africa")
    sources: list[dict] = cfg.get("sources", [])
    benchmarks_dir = Path(cfg.get("benchmarks_dir", "benchmarks"))
    auto_pr: bool = bool(cfg.get("auto_pr", True))

    print(f"[bold]Automation start[/bold] for nation: {nation_id}")

    # 1) Fetch sources
    if sources:
        print("[cyan]Fetching sources...[/cyan]")
        asyncio.run(fetch_all_sources(sources))

    # 2) Mine intents from feedback
    print("[cyan]Mining intents...[/cyan]")
    intents_path = Path("analytics") / f"{nation_id}_intents.json"
    mine_and_write_intents(nation_id, intents_path)

    # 3) Run benchmarks/evaluations
    print("[cyan]Running evaluations...[/cyan]")
    results_path = Path("analytics") / f"{nation_id}_eval_results.json"
    asyncio.run(run_benchmarks(nation_id, benchmarks_dir, results_path))

    # 4) Propose prompt changes
    print("[cyan]Proposing prompt edits...[/cyan]")
    proposal_path = Path("analytics") / f"{nation_id}_prompt_proposal.md"
    propose_prompt_edits(nation_id, intents_path, results_path, proposal_path)

    # 5) Commit and PR if changes
    ensure_git_identity()
    changed = commit_all_changes("ci: automation updates (intents, evals, prompt proposals)")
    if changed and auto_pr:
        pr_url = open_pr(title="Automation: analytics and prompt proposals", body="Automated updates from scheduled run.")
        print(f"[green]Opened PR:[/green] {pr_url}")
    else:
        print("[yellow]No changes to commit or PR disabled[/yellow]")

    print("[bold green]Automation complete[/bold green]")


if __name__ == "__main__":
    app()