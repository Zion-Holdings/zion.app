import { JOB_POSTS } from '@/data/jobsData';

// Generic request/response types so this handler works in Node or Next.js
interface Req { method?: string }
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

export default function handler(req: Req, res: JsonRes) {
  if (req.method && req.method !== 'GET') {
    res.status(405).end();
    return;
  }
  res.status(200).json(JOB_POSTS);
}
