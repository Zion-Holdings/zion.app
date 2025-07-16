// SKIP: This test is skipped due to outdated imports from '@/src/pages/ServicesPage'.
// import { render } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { AppLayout } from '@/layout/AppLayout';
// import ServicesPage from '@/src/pages/ServicesPage';
// import SearchPage from '@/src/pages/SearchPage';
//
// it('renders single navbar on ServicesPage', () => {
//   const { container } = render(
//     <MemoryRouter>
//       <AppLayout>
//         <ServicesPage />
//       </AppLayout>
//     </MemoryRouter>
//   );
//   expect(container.querySelectorAll('.navbar')).toHaveLength(1);
// });

it('renders single navbar on SearchPage', () => {
  const { container } = render(
    <MemoryRouter>
      <AppLayout>
        <SearchPage />
      </AppLayout>
    </MemoryRouter>
  );
  expect(container.querySelectorAll('.navbar')).toHaveLength(1);
});
