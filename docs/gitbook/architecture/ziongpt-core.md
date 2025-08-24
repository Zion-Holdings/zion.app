# ZionGPT Core

ZionGPT is the AI orchestration layer that routes intents, drafts proposals, and automates workflows across the marketplace and governance subsystems.

## Capabilities
- Retrieval-augmented generation (RAG) over profiles, jobs, reputations
- Matching and routing for jobs ↔ talent
- Contract and proposal drafting (quotes, milestones, DAO proposals)
- Safety: policy checks, red-team prompts, and audit logs
- Tool use: SDK actions (create job, post quote, start vote, disburse)

## Architecture
- Model: configurable LLMs (Open weights preferred), specialized small models
- Memory: vector store (pgvector/Weaviate/Elastic kNN)
- Orchestration: state machines and function-calling toolkits
- Observability: event logs, traces, prompt/version registry

## Inference Flow (example)
1. Parse intent → classify (job, quote, support, governance)
2. Retrieve context → profiles, history, policies
3. Plan → generate steps and choose tools
4. Act → call SDK/CLI or APIs
5. Verify → run policy/simulation checks; human-in-the-loop if needed
6. Record → store artifacts to IPFS and audit logs