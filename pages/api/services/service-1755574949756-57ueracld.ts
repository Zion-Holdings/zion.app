import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      service: {"id":"service-1755574949756-57ueracld","category":"Mobile Development","template":"aiService","title":"AI-Powered Mobile Development Service","description":"Advanced Mobile Development solution powered by cutting-edge artificial intelligence","features":["Intelligent automation and optimization","Real-time data processing and analysis","Scalable cloud infrastructure","Advanced security and compliance","24/7 monitoring and support"],"pricing":[{"plan":"Starter","price":"$99/month","features":["Basic features","Email support"]},{"plan":"Professional","price":"$299/month","features":["Advanced features","Priority support","Custom integrations"]},{"plan":"Enterprise","price":"Custom","features":["Full customization","Dedicated support","SLA guarantee"]}],"createdAt":"2025-08-19T03:42:29.756Z","status":"active","metadata":{"generatedBy":"ultra-fast-service-generator","version":"1.0.0","priority":"high"}},
      timestamp: new Date().toISOString(),
      status: 'active'
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}