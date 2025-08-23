import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import EquipmentDetail from '@/pages/EquipmentDetail';

it('renders equipment detail from slug', async () => {
  render(
    <MemoryRouter initialEntries={['/equipment/2u-rack-mount-server']}>
      <Routes>
        <Route path='/equipment/:id' element={<EquipmentDetail />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByText(/2U Rack Mount Server/i)).toBeInTheDocument();
});
