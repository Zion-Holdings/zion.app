import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLayout } from '@/layout/AppLayout';
import ServicesPage from '@/pages/ServicesPage';
import SearchPage from '@/pages/SearchPage';
import AIMatcherPage from '@/pages/AIMatcher';

it('renders single navbar on ServicesPage', () => {
  const { container } = render(
    <MemoryRouter>
      <AppLayout>
        <ServicesPage />
      </AppLayout>
    </MemoryRouter>
  );
  expect(container.querySelectorAll('.navbar')).toHaveLength(1);
});

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

it('renders single navbar on Match page', () => {
  const { container, asFragment } = render(
    <MemoryRouter>
      <AppLayout>
        <AIMatcherPage />
      </AppLayout>
    </MemoryRouter>
  );
  expect(container.querySelectorAll('.navbar')).toHaveLength(1);
  expect(asFragment()).toMatchSnapshot();
});
