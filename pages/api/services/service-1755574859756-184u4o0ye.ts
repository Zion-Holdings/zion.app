import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      service: {"id":"service-1755574859756-184u4o0ye","category":"Data Analytics","template":"cloudService","title":"Cloud Data Analytics Solution","description":"Enterprise-grade Data Analytics delivered through secure cloud infrastructure","features":["High availability and redundancy","Global CDN and edge computing","Advanced security protocols","Comprehensive analytics","API-first architecture"],"pricing":[{"plan":"Basic","price":"$49/month","features":["Core features","Community support"]},{"plan":"Standard","price":"$199/month","features":["Full features","Technical support","API access"]},{"plan":"Premium","price":"$499/month","features":["Advanced features","Premium support","Custom SLA"]}],"createdAt":"2025-08-19T03:40:59.756Z","status":"active","metadata":{"generatedBy":"ultra-fast-service-generator","version":"1.0.0","priority":"high"}},
      timestamp: new Date().toISOString(),
      status: 'active'
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}