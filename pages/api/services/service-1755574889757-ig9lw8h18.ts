import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      service: {"id":"service-1755574889757-ig9lw8h18","category":"Cloud Infrastructure","template":"dataService","title":"Data Cloud Infrastructure Platform","description":"Comprehensive Cloud Infrastructure platform for modern data-driven organizations","features":["Real-time data streaming","Advanced analytics and ML","Data governance and compliance","Multi-cloud support","Enterprise integration"],"pricing":[{"plan":"Developer","price":"$79/month","features":["Core platform","Documentation","Community support"]},{"plan":"Business","price":"$299/month","features":["Full platform","Technical support","Custom connectors"]},{"plan":"Enterprise","price":"Custom","features":["Full customization","Dedicated support","On-premise option"]}],"createdAt":"2025-08-19T03:41:29.757Z","status":"active","metadata":{"generatedBy":"ultra-fast-service-generator","version":"1.0.0","priority":"high"}},
      timestamp: new Date().toISOString(),
      status: 'active'
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}