import React from 'react'

type Data = {
  success: boolean;
  data?: any;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {'
    return res.status(405).json({ success: false, message: 'Method not allowed' });'
  }

  // Mock analytics data
  const analyticsData = {
    pageViews: 1250,
    uniqueVisitors: 890,
    conversionRate: 12.5,
    topPages: [
      { path: '/dashboard', views: 450 },'
      { path: '/analytics', views: 320 },'
      { path: '/reports', views: 280 }'
    ],
    trends: {
      daily: [120, 135, 142, 128, 156, 145, 138],
      weekly: [850, 920, 890, 950, 880, 910, 925]
    }
  };

  res.status(200).json({ success: true, data: analyticsData });
} 