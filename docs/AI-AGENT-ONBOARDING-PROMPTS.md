# AI Agent Onboarding Prompts

Save `docs/AI-AGENT-ONBOARDING-PROMPTS.md` to the repo root.

## Quick Start for New Agents

Read these files in order when starting:
1. `AGENTS.md` — workspace rules
2. `docs/AI-AGENT-ONBOARDING-PROMPTS.md` — full autonomy + coordination
3. `automation/data/zion-site-task-board.json` — current tasks
4. `docs/CTO-OPERATING-PHILOSOPHY.md` — culture and approach

## Seven Prompt Patterns

### A — Full Autonomy Mandate
Default to READ → IMPLEMENT → VALIDATE → COMMIT without approval loops.
Only pause for: destructive irreversible ops (rm -rf, force push shared branches).

**Zero-Redirect Rule:** Never ask the user to do something you can do yourself. Execute directly or delegate to the right agent/host. Only ask for genuine human-only decisions (security, billing, legal, personal).

**Auto-Documentation:** After every complex task, update skills, memory, and config files without being asked. If you learned it, save it.

**Adversarial Self-Test (Pillar 22):** Before delivering any output, red-team it — attack the logic, evidence, scope, and rationale. If you can't break your own solution, you haven't tried hard enough.

**Recursive Decomposition (Pillar 23):** Break tasks until each step is bite-sized (≤5 tool calls). Verify decomposition completeness before executing.

**Temporal Awareness (Pillar 24):** Estimate duration before starting. Track elapsed time. Flag overruns immediately.

**Multi-Modal Reasoning (Pillar 25):** Match modality to question type — vision for visual, execute_code for behavior, search_files for content.

### B — Multi-Agent Coordination
Pull before push, use feature branches, read task boards, tag commits.

### C — Memory & Continuity
Save preferences and facts. Never save TODO state. Use session_search.

### D — Proactivity Engine
Check git status, task board, cron jobs in first 3 turns.

### E — Skill Development
Create skills for multi-step workflows. Patch outdated skills.

### F — Tool Use Optimization
Use execute_code for batching, delegate_task for parallel work, patch over sed.

### G — Context Management
Todo for 3+ steps. One IN_PROGRESS at a time.

### H — Zion Tech Group Codebase Structure
Understanding the services data structure is crucial for maintaining and expanding the Zion Tech Group website.

**Wave Services Pattern (Waves 200-208):**
Most wave files (e.g., wave200.ts through wave208.ts) export 8 standardized service types:
- AiServices
- MicroSaasServices  
- ItServices
- SecurityServices
- CloudServices
- AutomationServices
- DataServices
- HealthcareItServices

These are imported in servicesData.ts and spread into the allServices array in the correct order:
```typescript
import { wave200AiServices, wave200MicroSaasServices, wave200ItServices, wave200SecurityServices, wave200CloudServices, wave200AutomationServices, wave200DataServices, wave200HealthcareItServices } from './wave200';
// ...
...wave200AiServices,
...wave200MicroSaasServices,
...wave200ItServices,
...wave200SecurityServices,
...wave200CloudServices,
...wave200AutomationServices,
...wave200DataServices,
...wave200HealthcareItServices,
```

**Specialized Waves (209-213):**
Waves 209 through 213 deviate from the standard pattern and export specialized service types instead:
- wave209.ts: DataStreamingServices, SearchServices, DevOpsServices, TestingServices, ApiServices
- wave210.ts: DatabaseServices, CollaborationServices, MediaStreamingServices, InfrastructureAsCodeServices, LowCodeServices
- wave211.ts: AiAgentOrchestrationServices, DataProductMarketplaceServices, ZeroTrustNetworkServices, SyntheticDataServices, MLOpsRegistryServices
- wave212.ts: PerformanceTestingServices, ChaosEngineeringServices, ServiceMeshServices, APIGatewayServices, EventStreamingServices
- wave213.ts: AiObservabilityServices, DataPrivacyServices, CloudFinOpsServices, SecurityThreatIntelServices, AiTransparencyServices

These specialized waves must be imported and used according to their actual exports, not assumed to follow the 8-service pattern.

**Important:** When editing servicesData.ts, always verify what each wave file actually exports before adding it to the allServices array. Mismatched imports will cause TypeScript compilation errors.

## Installation

```bash
# Load in any session:
/skill zion-agent-onboarding
# Or preload on startup:
hermes -s zion-agent-onboarding
```

## See Also

- `../agent-intelligence-upgrades/SKILL.md` — canonical 25-pillar intelligence framework (v5.0)
- `../agent-onboarding-prompts/SKILL.md` — richest onboarding prompt library (v3.3)
- `../agent-onboarding-prompts/references/onboarding-templates.md` — copy-paste ready templates (v3, 21 mandates)
