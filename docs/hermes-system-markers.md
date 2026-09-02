# Hermes Agent — System Messages / Markers: Technical Cheat Sheet

## 1. Purpose
This file classifies the system markers/metadata that appear in Hermes sessions, explains what they mean on the agent side vs the session side, and defines how to treat them as noise vs real instruction.

---

## 2. Marker Catalog

### 2.1 Real user/system instructions
| Marker / Message | Category | Meaning | Action |
|------------------|----------|---------|--------|
| `↪ Redirected current run. I'll adjust using your correction.` | User/system-captured instruction | Session was redirected mid-run; the model should adjust behavior and continue. | Treat as captured user intent, **not** session noise. Requires downstream trio to execute. |
| Explicit user text without markers | User instruction | Normal user request. | Execute according to policy. |
| `/compress`, `/compact`, `/new`, `/stop` | Slash commands | Session control / lifecycle. | Execute command semantics. |

### 2.2 Session noise / metadata (do not execute)
| Marker / Message | Category | Meaning | Action |
|------------------|----------|---------|--------|
| `[Context from the interrupted assistant response]` | Session metadata | Buffer carried over from an interrupted assistant turn. | Ignore for execution; context only. |
| `[This response was interrupted by a user correction.]` | Session metadata | Prior turn was interrupted by user. | Ignore for execution; context only. |
| `⏳ Compressing context — your message is queued...` | Compressor notice | Context compression is in progress or queued. | Ignore; no execution. |
| `⏳ Working — 3 min — receiving stream response` | Runtime status | Background work/streaming status. | Ignore; no execution. |
| `🔍 Searching the web for ...` | Tool progress | Search/read progress indicator. | Ignore; it is tool plumbing, not instruction. |
| `📖 Reading ...` | Tool progress | Read progress indicator. | Ignore; it is tool plumbing, not instruction. |
| `💻 terminal` | Tool progress | Terminal invocation header. | Ignore; plumbing. |
| `⚡ Interrupting current task. I'll respond to your message shortly.` | Interrupt notice | Task interrupt notice. | Ignore; no execution. |
| `Stopped waiting for another Hermes process...` | Process notice | Wait/process notice. | Ignore; no execution. |
| `Errno 104: Connection reset by peer` | Error notice | Network/socket error notice. | Ignore unless user asks for diagnosis/trio. |

---

## 3. Decision Rule

### 3.1 Noise vs instruction
- **Instruction**: explicit user text, slash commands, captured redirects with actionable trio downstream.
- **Noise**: system markers, tool progress, context buffers, compressor/watchdog notices.

### 3.2 Special case: `↪ Redirected current run`
- Treated as **captured user instruction**, not noise.
- Still requires a **concrete trio** (`file + action + parameters`) to execute.
- If no trio is present, do not invent execution; stand by.

### 3.3 When in doubt
- If the turn contains only markers/metadata and no concrete request → stand by.
- Do not narrate standby behavior repeatedly; keep response minimal.

---

## 4. Background Systems Context

### 4.1 Context Compression
- Dual system: gateway hygiene + in-loop agent compressor.
- Default threshold: 50% of context window.
- Summary model/provider configurable under `auxiliary.compression`.
- Timeouts: `context_timeout_seconds` default 120s; `context_total_ceiling_seconds` default 600s.
- On timeout: Hermes skips compaction and warns; no message loss by default.

### 4.2 Delegation / Subagents
- `delegate_task` spawns isolated contexts; background children are process-local.
- For durable work beyond process lifetime, use `cronjob` or `terminal(background=True)`.
- Subagent results re-enter conversation as new turns.

### 4.3 Cron
- Durable scheduler; jobs run in fresh sessions without current chat context.
- Delivery targets: `origin`, `local`, `platform:chat_id`, etc.
- Max interrupt per run: 3 minutes.

### 4.4 Gateway / Platforms
- Messaging platforms inject metadata/headers into turns.
- Some markers are platform-origin; others are gateway-internal.
- Role alternation is enforced; tool results can repeat, but user/assistant cannot.

---

## 5. Operational Rules
1. Never execute from markers alone.
2. Never break prompt caching by changing toolsets/config mid-conversation.
3. Never hand-edit `config.yaml`; use `hermes config set`.
4. Prefer local caches before web searches in constrained environments.
5. Confirm with the user before any external signup/credential action.

---

## 6. References
- Hermes skill: `hermes-agent` (`SKILL.md` + `references/*`)
- Docs: https://hermes-agent.nousresearch.com/docs/
- Config ref: https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- Compression internals: https://hermes-agent.nousresearch.com/docs/developer-guide/context-compression-and-caching
