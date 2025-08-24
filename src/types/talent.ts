export interface TalentProfile {
  id: string;
  full_name: string;
  bio: string;
  hourly_rate: number;
  skills: string[];
  experience_years: number;
  location: string;
  avatar_url: string;
  portfolio_url?: string;
  linkedin_url?: string;
  github_url?: string;
  rating: number;
  review_count: number;
  completed_projects: number;
  availability: 'available' | 'busy' | 'unavailable';
  languages: string[];
  certifications: string[];
  education: Education[];
  work_history: WorkExperience[];
  created_at: string;
  updated_at: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date?: string;
  description?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  start_date: string;
  end_date?: string;
  description: string;
  technologies: string[];
}

export interface TalentProfileWithSocial extends TalentProfile {
  social_links: {
    twitter?: string;
    website?: string;
    dribbble?: string;
    behance?: string;
  };
}

export const SAMPLE_TALENT_PROFILE: TalentProfileWithSocial = {
  id: '1',
  full_name: 'John Doe',
  bio: 'Experienced full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
  hourly_rate: 75,
  skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'],
  experience_years: 8,
  location: 'San Francisco, CA',
  avatar_url: '/avatars/john-doe.jpg',
  portfolio_url: 'https://johndoe.dev',
  linkedin_url: 'https://linkedin.com/in/johndoe',
  github_url: 'https://github.com/johndoe',
  rating: 4.9,
  review_count: 127,
  completed_projects: 45,
  availability: 'available',
  languages: ['English', 'Spanish'],
  certifications: ['AWS Certified Developer', 'Google Cloud Professional'],
  education: [
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      start_date: '2012-09-01',
      end_date: '2016-06-01',
      description: 'Focused on software engineering and algorithms',
    },
  ],
  work_history: [
    {
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      start_date: '2020-01-01',
      end_date: '2023-12-01',
      description: 'Led development of enterprise SaaS platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    },
  ],
  created_at: '2023-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  social_links: {
    twitter: 'https://twitter.com/johndoe',
    website: 'https://johndoe.dev',
    dribbble: 'https://dribbble.com/johndoe',
    behance: 'https://behance.net/johndoe',
  },
};