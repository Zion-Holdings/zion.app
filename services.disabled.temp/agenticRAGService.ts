export interface IngestionSource {
  id: string;
  type: 'web' | 'pdf' | 'docx' | 'markdown' | 'github' | 's3' | 'gcs' | 'azure-blob';
  uri: string;
  status: 'pending' | 'ingested' | 'failed';
  chunks?: number;
  createdAt: string;
}

export interface IndexConfig {
  indexId: string;
  embeddingModel: string;
  chunkSize: number;
  chunkOverlap: number;
  reranker?: string;
  filters?: Record<string, any>;
}

export interface QueryRequest {
  query: string;
  topK?: number;
  filters?: Record<string, any>;
  withSources?: boolean;
  withThoughts?: boolean;
}

export interface QueryResponse {
  answer: string;
  sources?: Array<{ id: string; uri: string; snippet: string; score: number }>;
  costUsd?: number;
  latencyMs?: number;
  thoughts?: string[];
}

export class AgenticRAGService {
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

  async ingest(source: Omit<IngestionSource, 'id' | 'status' | 'chunks' | 'createdAt'>): Promise<IngestionSource> {
    const res = await fetch(`${this.baseUrl}/api/agentic-rag/ingest`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(source),
    });
    if (!res.ok) throw new Error(`Failed to ingest: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async createIndex(config: Omit<IndexConfig, 'indexId'>): Promise<IndexConfig> {
    const res = await fetch(`${this.baseUrl}/api/agentic-rag/indexes`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(config),
    });
    if (!res.ok) throw new Error(`Failed to create index: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async query(indexId: string, request: QueryRequest): Promise<QueryResponse> {
    const res = await fetch(`${this.baseUrl}/api/agentic-rag/indexes/${encodeURIComponent(indexId)}/query`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(request),
    });
    if (!res.ok) throw new Error(`Query failed: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  async evaluate(indexId: string, datasetId: string): Promise<{ accuracy: number; faithfulness: number; completeness: number }> {
    const res = await fetch(`${this.baseUrl}/api/agentic-rag/indexes/${encodeURIComponent(indexId)}/evaluate?datasetId=${encodeURIComponent(datasetId)}`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Evaluation failed: ${res.status} ${res.statusText}`);
    return await res.json();
  }
}