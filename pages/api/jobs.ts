import { JOB_POSTS, JobPost } from '@/data/jobsData'; // Assuming JobPost type is exported from jobsData
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for error responses (can be shared across API routes)
interface ErrorResponse {
  error: string;
}

// The handler expects to return an array of JobPost items or an error
export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse<JobPost[] | ErrorResponse>
) {
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
  
  // Assuming JOB_POSTS is already correctly typed as JobPost[]
  // If JOB_POSTS were of type any[], this would be an implicit any source.
  return res.status(200).json(JOB_POSTS);
}
