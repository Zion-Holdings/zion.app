export interface AgentDefinition {
  id: string;
  name: string;
  role: string;
  tools: string[];
  model: string;
  routingHints?: string[];
}

export interface OrchestrationPlan {
  id: string;
  title: string;
  goal: string;
  steps: Array<{
    id: string;
    agentId: string;
    input: string;
    expectedOutput?: string;
    dependencies?: string[];
  }>;
  createdAt: string;
}

export interface ExecutionEvent {
  stepId: string;
  timestamp: string;
  agentId: string;
  type: 'start' | 'tool_call' | 'tool_result' | 'message' | 'complete' | 'error';
  detail?: any;
}

export interface ExecutionResult {
  runId: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  startedAt?: string;
  completedAt?: string;
  output?: string;
  events?: ExecutionEvent[];
  error?: string;
}

export class AIAgentOrchestratorService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  private headers(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
  }

  async registerAgent(agent: Omit<AgentDefinition, 'id'>): Promise<AgentDefinition> {
    const res = await fetch(`${this.baseUrl}/api/ai-agents/agents`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(agent),
    });
    if (!res.ok) throw new Error(`Failed to register agent: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async listAgents(): Promise<AgentDefinition[]> {
    const res = await fetch(`${this.baseUrl}/api/ai-agents/agents`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Failed to list agents: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async createPlan(plan: Omit<OrchestrationPlan, 'id' | 'createdAt'>): Promise<OrchestrationPlan> {
    const res = await fetch(`${this.baseUrl}/api/ai-agents/plans`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(plan),
    });
    if (!res.ok) throw new Error(`Failed to create plan: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async startExecution(planId: string, input: { variables?: Record<string, any> } = {}): Promise<ExecutionResult> {
    const res = await fetch(`${this.baseUrl}/api/ai-agents/plans/${encodeURIComponent(planId)}/execute`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(input),
    });
    if (!res.ok) throw new Error(`Failed to start execution: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async getExecution(runId: string): Promise<ExecutionResult> {
    const res = await fetch(`${this.baseUrl}/api/ai-agents/runs/${encodeURIComponent(runId)}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Failed to fetch execution: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  // Streaming variant can be provided in environments with Web Streams API.
  // For Node/browser compatibility in this repo, use polling instead.
  async pollExecution(runId: string, onUpdate: (result: ExecutionResult) => void, intervalMs: number = 1500): Promise<void> {
    let lastStatus: ExecutionResult['status'] | undefined;
    // Simple polling loop; caller can race-cancel via AbortController in their code
    // Here we just stop on terminal states
    for (;;) {
      const res = await this.getExecution(runId);
      if (res.status !== lastStatus) {
        lastStatus = res.status;
        onUpdate(res);
      }
      if (res.status === 'completed' || res.status === 'failed') return;
      await new Promise((r) => setTimeout(r, intervalMs));
    }
  }
}