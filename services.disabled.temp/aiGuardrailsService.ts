export interface SafetyCheckInput {
  text?: string;
  imageUrl?: string;
  url?: string;
  categories?: Array<'toxicity' | 'violence' | 'self-harm' | 'sexual' | 'hate' | 'pii' | 'jailbreak' | 'malware'>;
}

export interface SafetyCheckResult {
  passed: boolean;
  violations: Array<{
    category: string;
    score: number;
    threshold: number;
    details?: string;
  }>;
  redactions?: { type: 'pii' | 'sensitive'; value: string; replacement: string }[];
}

export interface Policy {
  id: string;
  name: string;
  description?: string;
  rules: Array<{ id: string; pattern: string; action: 'block' | 'flag' | 'redact'; severity: 'low' | 'medium' | 'high' }>;
  createdAt: string;
}

export class AIGuardrailsService {
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

  async check(input: SafetyCheckInput): Promise<SafetyCheckResult> {
    const res = await fetch(`${this.baseUrl}/api/ai-guardrails/check`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(input),
    });
    if (!res.ok) throw new Error(`Guardrails check failed: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async listPolicies(): Promise<Policy[]> {
    const res = await fetch(`${this.baseUrl}/api/ai-guardrails/policies`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Failed to list policies: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async createPolicy(policy: Omit<Policy, 'id' | 'createdAt'>): Promise<Policy> {
    const res = await fetch(`${this.baseUrl}/api/ai-guardrails/policies`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(policy),
    });
    if (!res.ok) throw new Error(`Failed to create policy: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async deletePolicy(policyId: string): Promise<{ success: boolean }> {
    const res = await fetch(`${this.baseUrl}/api/ai-guardrails/policies/${encodeURIComponent(policyId)}`, {
      method: 'DELETE',
      headers: this.headers(),
    });
    if (!res.ok) throw new Error(`Failed to delete policy: ${res.status} ${res.statusText}`);
    return await res.json();
  }
}