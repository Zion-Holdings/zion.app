import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
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
};

export default meta;

export const Default: StoryObj<typeof TalentProfilePage> = {
  render: () => {
    // Mock fetch to return the sample talent data
    window.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ profile: sampleTalent }),
      }) as any;

    return (
      <MemoryRouter initialEntries={[`/talent/${sampleTalent.id}`]}>
        <Routes>
          <Route path="/talent/:id" element={<TalentProfilePage />} />
        </Routes>
      </MemoryRouter>
    );
  },
};
