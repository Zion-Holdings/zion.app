import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  data?: any;
  message?: string;
  timestamp: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed',
      timestamp: new Date().toISOString(
    });
  }

  try {
    // Iot Api API logic here
    const data = {
      id: Date.now(),
      type: 'iot-api',
      status: 'active',
      timestamp: new Date().toISOString(
    };

    res.status(200).json({
      success: true,
      data,
      timestamp: new Date().toISOString(
    });
  } catch (error) {
    console.error('Iot Api API Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      timestamp: new Date().toISOString(
    });
  }
}
))))