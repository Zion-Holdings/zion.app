import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { authenticateRequest, isRateLimited, logApiRequest, respondWithError, getUserIdFromRequest } from '../../utils/devportal/auth';
import { getQuotes, saveQuotes } from '../../utils/devportal/storage';
import { QuoteRequest } from '../../utils/devportal/types';
import { dispatchEvent } from '../../utils/devportal/webhooks';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
  const auth = authenticateRequest(req, ['create_quotes']);
  if (!auth.ok) return respondWithError(res, req, auth.status, auth.errorCode!, auth.errorMessage!, auth.key);
  if (isRateLimited(auth.key!)) return respondWithError(res, req, 429, 'rate_limited', 'Too many requests', auth.key);

  const { jobId, details, budgetUsd } = req.body || {};
  if (!details) {
    return respondWithError(res, req, 400, 'invalid_request', 'Missing details', auth.key);
  }
  const quotes = getQuotes();
  const newQuote: QuoteRequest = {
    id: uuidv4(),
    jobId,
    details,
    budgetUsd: typeof budgetUsd === 'number' ? budgetUsd : undefined,
    createdAt: new Date().toISOString(),
    createdByUserId: getUserIdFromRequest(req),
  };
  quotes.unshift(newQuote);
  saveQuotes(quotes);

  // Fire webhook for quote_received
  await dispatchEvent(auth.key!.userId, 'quote_received', { quote: newQuote });

  logApiRequest(req, 201, true, auth.key);
  return res.status(201).json({ data: newQuote });
}