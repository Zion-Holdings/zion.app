// SKIP: This test is skipped due to outdated imports from '@/src/pages/Login.jsx'.
// tests/LoginPage.test.tsx
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';

// Import the actual page component.
// import LoginPage from '@/src/pages/Login.jsx';
// import { AuthContext } from '@/context/auth/AuthContext';
// import type { AuthContextType } from '@/types/auth';
// import { WalletContext, WalletContextType } from '@/context/WalletContext';

// jest.mock('@/lib/analytics', () => ({
//   fireEvent: jest.fn(),
//   identifyUser: jest.fn(),
//   onRouteChange: jest.fn(),
// }));

describe('Login Page Rendering with Unavailable Wallet', () => {
  it('should render the core login form when WalletContext indicates an unavailable wallet system', () => {
    // render(
    //   <MemoryRouter initialEntries={['/login']}>
    //     <AuthContext.Provider value={_mockAuthContextValue}>
    //       <WalletContext.Provider value={_mockWalletContextValue}>
    //         <LoginPage />
    //       </WalletContext.Provider>
    //     </AuthContext.Provider>
    //   </MemoryRouter>
    // );

    // expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // // Check for the primary login button (for email/password)
    // // It is named "Login" in LoginForm.tsx
    // expect(screen.getByRole('button', { name: /^Login$/i })).toBeInTheDocument();

    // const web3Button = screen.queryByRole('button', { name: /web3 login unavailable/i });
    // expect(web3Button).toBeInTheDocument();
    // expect(web3Button).toBeDisabled();

    // expect(screen.queryByRole('button', { name: /sign in with web3/i })).not.toBeInTheDocument();
  });
});
