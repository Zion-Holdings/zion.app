import type { Meta, StoryObj } from '@storybook/react';
import TalentProfilePage from '../pages/talent/[id]';

const sampleTalent = {
  id: 't-001',
  user_id: 'user-001',
  full_name: 'Sample Talent',
  professional_title: 'Software Engineer',
  skills: ['React', 'TypeScript'],
  availability_type: 'full_time',
};

const meta: Meta<typeof TalentProfilePage> = {
  title: 'Pages/TalentProfilePage',
  component: TalentProfilePage,
  parameters: {
    nextjs: {
      router: {
        query: { id: 't-001' },
      },
    },
    mockData: {
      profile: sampleTalent,
    },
  },
};

export default meta;
export const Default: StoryObj<typeof TalentProfilePage> = {};
