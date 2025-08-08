import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';

interface ReportingData {
  byTenant: Record<string, {
    funnel: { stage: string; count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string;
  }>;
}

const FILE = 'reporting.json';
const FALLBACK: ReportingData = { byTenant: {} };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'GET').toUpperCase();
  const auth = authenticateRequest(req, method === 'GET');
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const tenantId = auth.tenantId!;

  if (method === 'GET') {
    const data = readJsonFile<ReportingData>(FILE, FALLBACK);
    const entry = data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() };
    return res.status(200).json(entry);
  }

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr.byTenant || {};
      next[tenantId] = {
        funnel: funnel || next[tenantId]?.funnel || [],
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays || 0),
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd,
        updatedAt: new Date().toISOString(),
      };
      return { byTenant: next };
    }, FALLBACK);
    return res.status(200).json(updated.byTenant[tenantId]);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}