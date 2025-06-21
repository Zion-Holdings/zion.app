export interface CareerJob {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

export const CAREER_JOBS: Record<string, CareerJob[]> = {
  engineering: [
    {
      id: 'senior-frontend-engineer',
      title: 'Senior Frontend Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace.'
    },
    {
      id: 'ai-research-engineer',
      title: 'AI Research Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems.'
    },
    {
      id: 'full-stack-developer',
      title: 'Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL.'
    }
  ],
  product: [
    {
      id: 'product-manager',
      title: 'Product Manager',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Product',
      description:
        'Lead product development initiatives to enhance our marketplace experience for both talent and clients.'
    },
    {
      id: 'ux-ui-designer',
      title: 'UX/UI Designer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Product',
      description:
        'Create intuitive and engaging user experiences that make complex technology accessible to all users.'
    }
  ],
  marketing: [
    {
      id: 'growth-marketing-manager',
      title: 'Growth Marketing Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      description:
        'Drive user acquisition and engagement strategies across multiple channels to grow our marketplace.'
    },
    {
      id: 'content-strategist',
      title: 'Content Strategist',
      location: 'London, UK',
      type: 'Full-time',
      department: 'Marketing',
      description:
        'Develop compelling content that educates and inspires our audience about the future of AI and technology.'
    }
  ],
  operations: [
    {
      id: 'community-manager',
      title: 'Community Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Operations',
      description:
        'Build and nurture our growing community of AI specialists, developers, and tech enthusiasts.'
    },
    {
      id: 'talent-acquisition-specialist',
      title: 'Talent Acquisition Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Operations',
      description:
        'Help connect the right talent with the right opportunities on our platform through personalized matching.'
    }
  ]
};

export function findCareerJob(id: string | string[] | undefined): CareerJob | undefined {
  if (!id) return undefined;
  const slug = Array.isArray(id) ? id[0] : id;
  return Object.values(CAREER_JOBS).flat().find(job => job.id === slug);
}
