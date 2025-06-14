import { TalentProfile } from '@/types/talent';

export const TALENT_SEEDS: TalentProfile[] = [
  {
    id: 'seed-1',
    user_id: 'user-seed-1',
    full_name: 'Alice Johnson',
    professional_title: 'Full Stack Developer',
    profile_picture_url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&h=200',
    skills: ['React', 'Node.js', 'TypeScript'],
    hourly_rate: 120,
    availability_type: 'full_time'
  },
  {
    id: 'seed-2',
    user_id: 'user-seed-2',
    full_name: 'Brian Lee',
    professional_title: 'Data Scientist',
    profile_picture_url: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&h=200',
    skills: ['Python', 'TensorFlow', 'Data Analysis'],
    hourly_rate: 150,
    availability_type: 'part_time'
  },
  {
    id: 'seed-3',
    user_id: 'user-seed-3',
    full_name: 'Carla Gomez',
    professional_title: 'DevOps Engineer',
    profile_picture_url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    hourly_rate: 140,
    availability_type: 'project'
  }
];
