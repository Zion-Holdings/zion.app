import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EquipmentDetail from '@/pages/EquipmentDetail';
import { AppLayout } from '@/layout/AppLayout';
import * as router from 'react-router-dom';
jest.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ isAuthenticated: true }) }));
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('EquipmentDetail page', () => {
  it('displays equipment info', () => {
    (router.useParams as jest.Mock).mockReturnValue({ id: 'pro-camera-x1000' });

    const { asFragment, getByText, container } = render(
      <MemoryRouter>
        <AppLayout>
          <EquipmentDetail />
        </AppLayout>
      </MemoryRouter>
    );
    expect(getByText(/Pro Camera X1000/i)).toBeInTheDocument();
    expect(getByText(/Full-frame CMOS/i)).toBeInTheDocument();
    expect(container.querySelectorAll('.navbar')).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });
});


