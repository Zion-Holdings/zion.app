import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Job } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'jobs.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;

  if (req.method === 'GET') {
    const jobs = readJsonFile<Job[]>(FILE, []);
    res.status(200).json({ jobs });
    return;
  }

  if (req.method === 'POST') {
    const {
      title,
      description,
      category,
      requiredSkills = [],
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      clientEmail,
    } = req.body || {};

    if (!title || !description || !clientEmail) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const nowIso = new Date().toISOString();

    const job: Job = {
      id: uuidv4(),
      title: String(title),
      description: String(description),
      category: String(category || ''),
      requiredSkills: Array.isArray(requiredSkills) ? requiredSkills.map(String) : [],
      budgetMinUsd: typeof budgetMinUsd === 'number' ? budgetMinUsd : undefined,
      budgetMaxUsd: typeof budgetMaxUsd === 'number' ? budgetMaxUsd : undefined,
      deliveryDeadlineIso: deliveryDeadlineIso ? String(deliveryDeadlineIso) : undefined,
      clientEmail: String(clientEmail),
      status: 'New',
      createdAtIso: nowIso,
      updatedAtIso: nowIso,
    };

    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.
    if (!job.category) {
      const skills = (job.requiredSkills || []).map((s) => s.toLowerCase());
      if (skills.some((s) => s.includes('openai') || s.includes('langchain') || s.includes('rag'))) job.category = 'LLM App';
      else if (skills.some((s) => s.includes('aws') || s.includes('kubernetes') || s.includes('terraform'))) job.category = 'Cloud';
      else job.category = 'General';
    }

    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);

    res.status(201).json({ job });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}