import { AdminEntity } from './types';
import { v4 as uuidv4 } from 'uuid';

function nowIso() { return new Date().toISOString(); }

export const MOCK_DATA: Record<string, AdminEntity[]> = {
  users: [
    { __type: 'users', id: uuidv4(), name: 'Ava Chen', email: 'ava@example.com', role: 'talent', status: 'active', verified: true, created_at: nowIso() },
    { __type: 'users', id: uuidv4(), name: 'Marco Silva', email: 'marco@example.com', role: 'client', status: 'active', verified: false, created_at: nowIso() },
    { __type: 'users', id: uuidv4(), name: 'Admin User', email: 'admin@example.com', role: 'admin', status: 'active', verified: true, created_at: nowIso() },
  ],
  cvs: [
    { __type: 'cvs', id: uuidv4(), user_id: 'u1', title: 'Senior LLM Engineer CV', skills: ['OpenAI','RAG','TS'], status: 'active', verified: true, created_at: nowIso() },
  ],
  projects: [
    { __type: 'projects', id: uuidv4(), title: 'GenAI Chatbot', client: 'Acme Co', budget_usd: 50000, status: 'active', verified: false, created_at: nowIso() },
  ],
  services: [
    { __type: 'services', id: uuidv4(), title: 'AI Model Development', category: 'AI', price_usd: 12000, status: 'active', verified: true, created_at: nowIso() },
  ],
  job_posts: [
    { __type: 'job_posts', id: uuidv4(), title: 'LLM Engineer', company: 'Zion', location: 'Remote', employment_type: 'contract', status: 'active', verified: false, created_at: nowIso() },
  ],
  equipment: [
    { __type: 'equipment', id: uuidv4(), name: 'A100 GPU Node', category: 'GPU', daily_rate_usd: 350, status: 'active', verified: true, created_at: nowIso() },
  ],
};