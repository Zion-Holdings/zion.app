import asyncio
import sys
from pathlib import Path
import yaml
import typer
from rich import print

# Local imports
from app.services.storage import load_feedback
from scripts.automation.fetch_sources import fetch_all_sources
from scripts.automation.rss_ingest import ingest_feeds
from scripts.automation.mine_intents import mine_and_write_intents
from scripts.automation.evaluate import run_benchmarks
from scripts.automation.prompt_tuner import propose_prompt_edits
from scripts.automation.generate_synthetic_qa import generate_synthetic_for_nation
from scripts.automation.create_issues import issues_from_intents, issues_from_eval
from scripts.automation.dashboard import generate_dashboard
from scripts.automation.gh_pr import ensure_git_identity, commit_all_changes, open_pr

app = typer.Typer()

DEFAULT_CONFIG = {
    "nation_id": "zion-africa",
    "sources": [],
    "benchmarks_dir": "benchmarks",
    "auto_pr": True,
    "generate_synthetic": True,
    "open_issues": True,
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
    rss: list[dict] = cfg.get("rss", [])
    benchmarks_dir = Path(cfg.get("benchmarks_dir", "benchmarks"))
    auto_pr: bool = bool(cfg.get("auto_pr", True))

    print(f"[bold]Automation start[/bold] for nation: {nation_id}")

    # 1) Fetch sources
    if sources:
        print("[cyan]Fetching sources...[/cyan]")
        asyncio.run(fetch_all_sources(sources))
    if rss:
        print("[cyan]Ingesting RSS feeds...[/cyan]")
        ingest_feeds(rss)

    # 2) Mine intents from feedback
    print("[cyan]Mining intents...[/cyan]")
    intents_path = Path("analytics") / f"{nation_id}_intents.json"
    mine_and_write_intents(nation_id, intents_path)

    # 3) Run benchmarks/evaluations
    print("[cyan]Running evaluations...[/cyan]")
    analytics_dir = Path("analytics")
    analytics_dir.mkdir(parents=True, exist_ok=True)
    results_path = analytics_dir / f"{nation_id}_eval_results.json"
    asyncio.run(run_benchmarks(nation_id, benchmarks_dir, results_path))

    # 3a) Drift detection against previous snapshot
    previous = sorted(analytics_dir.glob(f"{nation_id}_eval_results_*.json"))[-1:] or []
    timestamped = analytics_dir / f"{nation_id}_eval_results_{__import__('time').strftime('%Y%m%d%H%M%S')}.json"
    if results_path.exists():
        timestamped.write_text(results_path.read_text(encoding='utf-8'), encoding='utf-8')
    try:
        from scripts.automation.drift_detector import write_drift_report
        if previous:
            drift_report = analytics_dir / f"{nation_id}_drift.json"
            write_drift_report(previous[0], results_path, drift_report)
    except Exception:
        pass

    # 3b) Generate synthetic Q&A for fine-tuning
    if cfg.get("generate_synthetic", True):
        print("[cyan]Generating synthetic Q&A...[/cyan]")
        out_jsonl = Path("data/synthetic") / f"{nation_id}.jsonl"
        asyncio.run(generate_synthetic_for_nation(nation_id, out_jsonl))

    # 4) Propose prompt changes
    print("[cyan]Proposing prompt edits...[/cyan]")
    proposal_path = Path("analytics") / f"{nation_id}_prompt_proposal.md"
    propose_prompt_edits(nation_id, intents_path, results_path, proposal_path)

    # 4b) Open issues for high-signal findings
    if cfg.get("open_issues", True):
        print("[cyan]Opening issues (if any)...[/cyan]")
        issues_from_intents(intents_path)
        issues_from_eval(results_path)

    # 5) Generate dashboard
    print("[cyan]Generating analytics dashboard...[/cyan]")
    generate_dashboard(Path("analytics"), Path("analytics/dashboard"), nation_id)

    # 6) Commit and PR if changes
    ensure_git_identity()
    changed = commit_all_changes("ci: automation updates (intents, evals, prompt proposals, dashboard)")
    if changed and auto_pr:
        pr_url = open_pr(title="Automation: analytics and prompt proposals", body="Automated updates from scheduled run.")
        print(f"[green]Opened PR:[/green] {pr_url}")
    else:
        print("[yellow]No changes to commit or PR disabled[/yellow]")

    print("[bold green]Automation complete[/bold green]")


if __name__ == "__main__":
    app()