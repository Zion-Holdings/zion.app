import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import EquipmentDetail from '@/pages/EquipmentDetail';

test('renders equipment details', async () => {
  render(
    <MemoryRouter initialEntries={['/equipment/pro-camera-x1000']}>
      <Routes>
        <Route path='/equipment/:equipmentId' element={<EquipmentDetail />} />
      </Routes>
    </MemoryRouter>
  );

  expect(await screen.findByRole('heading', { name: /pro camera x1000/i })).toBeInTheDocument();
  expect(screen.getByText('$6,999')).toBeInTheDocument();
  const images = screen.getAllByRole('img');
  expect(images.length).toBeGreaterThan(0);
});
