import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      service: {"id":"service-1755575009754-gd85ryy56","category":"Digital Transformation","template":"aiService","title":"AI-Powered Digital Transformation Service","description":"Advanced Digital Transformation solution powered by cutting-edge artificial intelligence","features":["Intelligent automation and optimization","Real-time data processing and analysis","Scalable cloud infrastructure","Advanced security and compliance","24/7 monitoring and support"],"pricing":[{"plan":"Starter","price":"$99/month","features":["Basic features","Email support"]},{"plan":"Professional","price":"$299/month","features":["Advanced features","Priority support","Custom integrations"]},{"plan":"Enterprise","price":"Custom","features":["Full customization","Dedicated support","SLA guarantee"]}],"createdAt":"2025-08-19T03:43:29.754Z","status":"active","metadata":{"generatedBy":"ultra-fast-service-generator","version":"1.0.0","priority":"high"}},
      timestamp: new Date().toISOString(),
      status: 'active'
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}