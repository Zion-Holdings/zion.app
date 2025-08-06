import type { NextApiRequest, NextApiResponse } from 'next';

interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    text: string;
  }>;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, title, bio, skills, experience, projects, testimonials, contact } = req.body;
    
    // Mock AI generation (replace with real AI integration as needed)
    const portfolioData: PortfolioData = {
      name: name || 'John Doe',
      title: title || 'Full Stack Developer',
      bio: bio || 'Passionate developer with 5+ years of experience building scalable web applications.',
      skills: skills || ['React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
      experience: experience || [
        {
          company: 'Tech Corp',
          position: 'Senior Developer',
          duration: '2022 - Present',
          description: 'Led development of multiple web applications using React and Node.js'
        }
      ],
      projects: projects || [
        {
          name: 'E-commerce Platform',
          description: 'Built a full-stack e-commerce platform with React and Node.js',
          technologies: ['React', 'Node.js', 'MongoDB'],
          link: 'https://github.com/johndoe/ecommerce'
        }
      ],
      testimonials: testimonials || [
        {
          name: 'Jane Smith',
          role: 'CTO',
          company: 'Tech Corp',
          text: 'John is an exceptional developer who consistently delivers high-quality work.'
        }
      ],
      contact: contact || {
        email: 'john@example.com',
        phone: '+1-555-0123',
        linkedin: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe'
      }
    };

    return res.status(200).json({
      success: true,
      data: portfolioData
    });
  } catch (error) {
    console.error('Error processing portfolio request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}