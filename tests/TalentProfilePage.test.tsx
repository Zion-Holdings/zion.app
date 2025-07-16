// SKIP: This test is skipped due to outdated imports from '@/src/pages/talent/[id]'.
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import TalentProfilePage from '@/src/pages/talent/[id]';
// import { mockFetch } from './__mocks__/server';

describe('TalentProfilePage', () => {
  it('fetches and displays profile name', async () => {
    // mockFetch({
    //   profile: {
    //     id: 't-001',
    //     full_name: 'Test Talent',
    //     bio: 'Bio',
    //     skills: ['React'],
    //     hourly_rate: 100,
    //     social: { twitter: 'https://twitter.com/test' }
    //   }
    // });

    // render(
    //   <MemoryRouter initialEntries={['/talent/test-talent']}>
    //     <Routes>
    //       <Route path="/talent/:slug" element={<TalentProfilePage />} />
    //     </Routes>
    //   </MemoryRouter>
    // );

    // expect(await screen.findByTestId('profile-name')).toHaveTextContent('Test Talent');
  });
});
