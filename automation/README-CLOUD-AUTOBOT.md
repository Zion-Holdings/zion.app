# Autonomous Cloud Bot

This repository includes a fully autonomous GitHub Actions workflow that runs on a schedule (every 30 minutes) and on-demand to perform useful maintenance and improvement tasks, commit changes back to the repository, and open pull requests when needed.

## What it does
- Runs selected npm automation scripts
- Applies fixes and improvements (lint, responsive and design analyzers, maintenance)
- Commits changes and pushes to a branch or main (depending on branch protections)
- Opens a pull request automatically (when not pushing to main)

## Files
- `.github/workflows/autonomous-cloud-bot.yml` — GitHub Actions workflow
- `automation/cloud-autobot.cjs` — Orchestrator executed in CI

## Configure tasks
The list of tasks is provided via `AUTOBOT_TASKS` env in the workflow. Each line should be an npm script name. Defaults provided:
```
syntax:build-check
linting:fix
maintenance:run
sync-health:run
responsive:analyze
design:analyze
```
You can adjust the list in the workflow file or pass via workflow_dispatch inputs if desired.

## Permissions
The workflow grants `contents: write` and `pull-requests: write` to push commits and open PRs using the default `GITHUB_TOKEN`.

## Branch behavior
- If the workflow runs on a non-main branch, commits are pushed directly to that branch.
- If it runs on `main`/`master`, the bot creates a new branch `autobot/<timestamp>` and opens a PR.