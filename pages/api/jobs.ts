import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { authenticateRequest, isRateLimited, logApiRequest, respondWithError, getUserIdFromRequest } from '../../utils/devportal/auth';
import { getJobs, saveJobs } from '../../utils/devportal/storage';
import { Job } from '../../utils/devportal/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') return getHandler(req, res);
  if (req.method === 'POST') return postHandler(req, res);
  return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}

function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const auth = authenticateRequest(req, ['view_jobs']);
  if (!auth.ok) return respondWithError(res, req, auth.status, auth.errorCode!, auth.errorMessage!, auth.key);
  if (isRateLimited(auth.key!)) return respondWithError(res, req, 429, 'rate_limited', 'Too many requests', auth.key);

  const jobs = getJobs();
  logApiRequest(req, 200, true, auth.key);
  return res.status(200).json({ data: jobs });
}

function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const auth = authenticateRequest(req, ['post_jobs']);
  if (!auth.ok) return respondWithError(res, req, auth.status, auth.errorCode!, auth.errorMessage!, auth.key);
  if (isRateLimited(auth.key!)) return respondWithError(res, req, 429, 'rate_limited', 'Too many requests', auth.key);

  const { title, description } = req.body || {};
  if (!title || !description) {
    return respondWithError(res, req, 400, 'invalid_request', 'Missing title or description', auth.key);
  }
  const jobs = getJobs();
  const newJob: Job = {
    id: uuidv4(),
    title,
    description,
    createdAt: new Date().toISOString(),
    createdByUserId: getUserIdFromRequest(req),
  };
  jobs.unshift(newJob);
  saveJobs(jobs);
  logApiRequest(req, 201, true, auth.key);
  return res.status(201).json({ data: newJob });
}