interface Req {
  method?: string;
  body?: any;
}
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
}

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  console.log('Push subscription received', req.body);
  res.status(200).json({ success: true });
}
