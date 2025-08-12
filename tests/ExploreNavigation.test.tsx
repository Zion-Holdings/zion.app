import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { CategoriesSection } from '@/components/CategoriesSection';
import ServicesPage from '@/pages/ServicesPage';
import TalentDirectory from '@/pages/TalentDirectory';
import EquipmentPage from '@/pages/EquipmentPage';
import InnovationPage from '@/pages/InnovationPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function renderWithRouter() {
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CategoriesSection />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/talent" element={<TalentDirectory />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
}

describe('Explore navigation from categories', () => {
  it.each([
    { label: /services/i, heading: /services/i },
    { label: /talents/i, heading: /talent directory/i },
    { label: /equipment/i, heading: /datacenter equipment/i },
    { label: /innovation/i, heading: /innovation/i },
  ])('navigates to $label page', async ({ label, heading }) => {
    renderWithRouter();
    // Click the first link that matches the label to avoid duplicate name collisions
    const links = screen.getAllByRole('link', { name: label });
    fireEvent.click(links[0]);
    // Use findAllByRole and ensure at least one heading matches
    const headings = await screen.findAllByRole('heading', { name: heading });
    expect(headings.length).toBeGreaterThan(0);
  });
});
