export interface EvalDataset {
  id: string;
  name: string;
  description?: string;
  size: number;
  labels?: string[];
  createdAt: string;
}

export interface EvalRunConfig {
  model: string;
  datasetId: string;
  metrics: Array<'accuracy' | 'bleu' | 'rouge' | 'f1' | 'latency' | 'cost'>;
  maxRequestsPerMinute?: number;
  prompts?: string[];
  guardrails?: {
    toxicity?: boolean;
    pii?: boolean;
    jailbreak?: boolean;
  };
}

export interface EvalRunResult {
  runId: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  startedAt?: string;
  completedAt?: string;
  metrics?: Record<string, number>;
  samplesEvaluated?: number;
  failures?: number;
  costUsd?: number;
  latencyMsP50?: number;
  latencyMsP95?: number;
  error?: string;
}

export class AIEvalService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  private authHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
  }

  async createDataset(input: Omit<EvalDataset, 'id' | 'createdAt' | 'size'> & { samples: Array<{ prompt: string; expected: string; label?: string }> }): Promise<EvalDataset> {
    const response = await fetch(`${this.baseUrl}/api/ai-evals/datasets`, {
      method: 'POST',
      headers: this.authHeaders(),
      body: JSON.stringify(input),
    });
    if (!response.ok) {
      throw new Error(`Failed to create dataset: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }

  async listDatasets(): Promise<EvalDataset[]> {
    const response = await fetch(`${this.baseUrl}/api/ai-evals/datasets`, { headers: this.authHeaders() });
    if (!response.ok) {
      throw new Error(`Failed to list datasets: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }

  async deleteDataset(datasetId: string): Promise<{ success: boolean }> {
    const response = await fetch(`${this.baseUrl}/api/ai-evals/datasets/${encodeURIComponent(datasetId)}`, {
      method: 'DELETE',
      headers: this.authHeaders(),
    });
    if (!response.ok) {
      throw new Error(`Failed to delete dataset: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }

  async runEvaluation(config: EvalRunConfig): Promise<EvalRunResult> {
    const response = await fetch(`${this.baseUrl}/api/ai-evals/runs`, {
      method: 'POST',
      headers: this.authHeaders(),
      body: JSON.stringify(config),
    });
    if (!response.ok) {
      throw new Error(`Failed to start evaluation: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }

  async getRun(runId: string): Promise<EvalRunResult> {
    const response = await fetch(`${this.baseUrl}/api/ai-evals/runs/${encodeURIComponent(runId)}`, { headers: this.authHeaders() });
    if (!response.ok) {
      throw new Error(`Failed to fetch run: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }

  async listRuns(params?: { datasetId?: string; model?: string; status?: EvalRunResult['status'] }): Promise<EvalRunResult[]> {
    const query = new URLSearchParams();
    if (params?.datasetId) query.set('datasetId', params.datasetId);
    if (params?.model) query.set('model', params.model);
    if (params?.status) query.set('status', params.status);
    const response = await fetch(`${this.baseUrl}/api/ai-evals/runs?${query.toString()}`, { headers: this.authHeaders() });
    if (!response.ok) {
      throw new Error(`Failed to list runs: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }
}