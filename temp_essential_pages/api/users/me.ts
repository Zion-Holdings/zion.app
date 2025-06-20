import { withErrorLogging } from '@/utils/withErrorLogging';
import { users } from './data';

let mockUser = users['1'];

// Generic request/response types so this file works in Node or Next.js
interface Req {
  method?: string;
  body?: any;
}
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

function handler(req: Req, res: JsonRes) {
  if (req.method === 'GET') {
    res.status(200).json(mockUser);
    return;
  }

  if (req.method === 'PUT') {
    mockUser = { ...mockUser, ...req.body };
    users[mockUser.id] = mockUser;
    res.status(200).json(mockUser);
    return;
  }

  if (req.method === 'DELETE') {
    mockUser.softDeleted = true;
    users[mockUser.id] = mockUser;
    res.status(200).json({ success: true });
    return;
  }

  res.status(405).end();
}

export default withErrorLogging(handler);
