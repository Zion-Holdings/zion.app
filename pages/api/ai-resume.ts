import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { personalInfo, experience, education } = req.body;

    // Simulate resume generation
    const resume = {
      personalInfo: {
        name: `${personalInfo.firstName} ${personalInfo.lastName}`,
        email: personalInfo.email,
        phone: personalInfo.phone,
        location: personalInfo.location
      },
      experience: experience || [],
      education: education || [],
      generatedAt: new Date().toISOString()
    };

    res.status(200).json(resume);
  } catch (error) {
    console.error('Error generating resume:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 