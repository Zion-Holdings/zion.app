# ZionGPT Core

ZionGPT Core is a self-improving AI service fine-tuned on marketplace data, user interactions, and platform knowledge to power custom assistants, automation, and internal decision-making.

## Routes
- Public inference: `/zion-gpt` (under-the-hood provides `/zion-gpt/chat`)
- Admin/Operator: `/dashboard/ai-core` (training, model registry, reports)

## Features
- Data pipeline ingest from marketplace artifacts (job posts, questions, prompts, chats, reviews, resumes)
- Embeddings + vector search, GPT refinement
- Fine-tuning workflow (OpenAI API or pluggable private models)
- Operator workflow (scheduled or on-demand), versioning, reports
- Per-tenant "Train My Assistant"
- Admin controls: rate limits, model swapping, prompt audit log

## Quick start

1) Create a virtual environment and install dependencies:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2) Configure environment variables (copy `.env.example` to `.env` and fill as needed):

```bash
cp .env.example .env
```

3) Run the server:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

4) Open the docs at: http://localhost:8000/docs

## Training (operator)

- On-demand via API:
  - `POST /dashboard/ai-core/train` to start a training cycle
  - `POST /dashboard/ai-core/tenant/upsert-docs` to add custom per-tenant docs
  - `POST /dashboard/ai-core/tenant/train?tenant_id=TENANT` to train a tenant model/version
  - `GET /dashboard/ai-core/runs` to list runs
  - `GET /dashboard/ai-core/models/current` to see active model

- Script:

```bash
python scripts/run_training.py
```

- Scheduler (monthly):
  - Enable via `.env`: `SCHEDULER_ENABLED=1`
  - Runs on the 1st of every month at 00:30 UTC

## Notes
- By default, uses SQLite for metadata and NumPy-based cosine search (stored under `app/storage/`)
- Fine-tuning can be mocked if no OpenAI credentials are provided
- Replace data connectors in `app/services/data_pipeline.py` to pull real marketplace data