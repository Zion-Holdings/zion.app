# AI GitHub Actions Reliability Report

Date: 2026-07-08
Source: GitHub Actions failure notifications in Gmail

## Summary
Multiple AI-related workflows on `zion-support/zion-support.github.io` failed recently on branch `main`.

## Failing Workflows
- AI PM2 static checks
- AI Broken Link Fixer Agent
- AI Content Burst
- AI App Improvement On Push
- AI Content Velocity
- AI Advanced-AI Content
- AI CI Recovery
- AI Content Burst High Frequency
- AI Build Fixer
- AI GitHub integrity fix factory
- AI GitHub workflow integrity audit (daily)
- AI lead form routing guard (daily)
- AI autonomous self-heal factory
- AI lead gen contact route guard
- AI autonomous runtime guardian
- AI Openclaw Skill Cadence Audit
- Run failed: AI Smart Release Notes - main
- Run failed: AI PM2 static checks - main
- Run failed: AI Broken Link Fixer Agent - main
- Run failed: AI Content Burst - main
- Run failed: AI App Improvement On Push - main
- Run failed: AI Content Velocity - main
- Run failed: AI Advanced-AI Content - main
- Run failed: AI CI Recovery - main
- Run failed: AI Content Burst High Frequency - main
- Run failed: AI Build Fixer - main
- Run failed: AI Broken Link Fixer Agent - main
- Run failed: AI App Improvement On Push - main
- Run failed: AI GitHub integrity fix factory - main
- Run failed: AI Content Velocity - main
- Run failed: AI GitHub workflow integrity audit (daily) - main
- Run failed: AI lead form routing guard (daily) - main
- Run failed: AI autonomous self-heal factory - main
- Run failed: AI lead gen contact route guard - main
- Run failed: AI autonomous runtime guardian - main
- Run failed: AI Openclaw Skill Cadence Audit - main

## Recommended Actions
1. Inspect workflow run logs for each failing workflow.
2. Identify common failure modes: missing inputs, broken scripts, permission issues, and timeout/billing limits.
3. Normalize workflow yaml files and fix auth/secret expressions.
4. Stabilize high-frequency jobs with backoff, retries, and guard conditions.
5. Re-run audits after fixes and confirm green before relying on them for content/lead gen.
