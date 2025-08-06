import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  data?: any;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const analyticsData = {
    pageViews: 1250,
    uniqueVisitors: 890,
    conversionRate: 2.3,
    topPages: [
      { path: '/', views: 450 },
      { path: '/services', views: 320 },
      { path: '/about', views: 180 },
    ],
    userEngagement: {
      averageSessionDuration: '2m 45s',
      bounceRate: 35.2,
      pagesPerSession: 3.1,
    },
  };

  return res.status(200).json({ success: true, data: analyticsData });
}
