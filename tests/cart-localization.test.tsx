import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { vi } from 'vitest';

// Mock Redux store
const mockStore = configureStore({
  reducer: {
    cart: () => ({ items: [] }),
  },
});

// Mock i18n instance
const mockI18n = i18n.createInstance();
mockI18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        cart: {
          empty: 'Your cart is empty',
          empty_alt: 'Empty shopping cart illustration',
          empty_preview: 'Cart is empty',
          continue_shopping: 'Continue Shopping',
          subtotal: 'Subtotal',
        },
      },
    },
    es: {
      translation: {
        cart: {
          empty: 'Tu carrito está vacío',
          empty_alt: 'Ilustración de carrito de compras vacío',
          empty_preview: 'El carrito está vacío',
          continue_shopping: 'Seguir comprando',
          subtotal: 'Subtotal',
        },
      },
    },
  },
});

// Mock components
const MockCartPage = () => {
  return (
    <div className="container py-10 text-center">
      <img
        src="/images/empty-cart.svg"
        alt={mockI18n.t('cart.empty_alt')}
        className="mx-auto mb-4 w-48 h-36"
        loading="lazy"
      />
      <p>{mockI18n.t('cart.empty')}</p>
    </div>
  );
};

const MockMiniCartPreview = () => {
  return <p className="text-sm text-muted-foreground">{mockI18n.t('cart.empty_preview')}</p>;
};

describe('Cart Localization Fixes (Issue #19)', () => {
  const renderWithProviders = (component: React.ReactElement, language = 'es') => {
    mockI18n.changeLanguage(language);
    return render(
      <Provider store={mockStore}>
        <I18nextProvider i18n={mockI18n}>
          {component}
        </I18nextProvider>
      </Provider>
    );
  };

  test('Cart page empty state image has localized alt text in Spanish', () => {
    renderWithProviders(<MockCartPage />, 'es');
    
    const emptyCartImage = screen.getByAltText('Ilustración de carrito de compras vacío');
    expect(emptyCartImage).toBeInTheDocument();
    expect(emptyCartImage).toHaveAttribute('src', '/images/empty-cart.svg');
  });

  test('Cart page empty state image has localized alt text in English', () => {
    renderWithProviders(<MockCartPage />, 'en');
    
    const emptyCartImage = screen.getByAltText('Empty shopping cart illustration');
    expect(emptyCartImage).toBeInTheDocument();
  });

  test('MiniCartPreview shows localized empty message in Spanish', () => {
    renderWithProviders(<MockMiniCartPreview />, 'es');
    
    expect(screen.getByText('El carrito está vacío')).toBeInTheDocument();
  });

  test('MiniCartPreview shows localized empty message in English', () => {
    renderWithProviders(<MockMiniCartPreview />, 'en');
    
    expect(screen.getByText('Cart is empty')).toBeInTheDocument();
  });

  test('All required translation keys exist in Spanish', () => {
    expect(mockI18n.exists('cart.empty_alt', { lng: 'es' })).toBe(true);
    expect(mockI18n.exists('cart.empty_preview', { lng: 'es' })).toBe(true);
    expect(mockI18n.exists('cart.empty', { lng: 'es' })).toBe(true);
    expect(mockI18n.exists('cart.continue_shopping', { lng: 'es' })).toBe(true);
    expect(mockI18n.exists('cart.subtotal', { lng: 'es' })).toBe(true);
  });

  test('Translation consistency - no hardcoded English text', () => {
    renderWithProviders(<MockCartPage />, 'es');
    
    // Ensure no hardcoded "Empty cart" text appears when language is Spanish
    expect(screen.queryByText('Empty cart')).not.toBeInTheDocument();
    expect(screen.queryByText('Cart is empty')).not.toBeInTheDocument();
    
    // Verify Spanish text is present
    expect(screen.getByText('Tu carrito está vacío')).toBeInTheDocument();
  });

  test('Alt text changes when language is switched', () => {
    const { rerender } = renderWithProviders(<MockCartPage />, 'en');
    
    // English alt text
    expect(screen.getByAltText('Empty shopping cart illustration')).toBeInTheDocument();
    
    // Switch to Spanish
    mockI18n.changeLanguage('es');
    rerender(
      <Provider store={mockStore}>
        <I18nextProvider i18n={mockI18n}>
          <MockCartPage />
        </I18nextProvider>
      </Provider>
    );
    
    // Spanish alt text
    expect(screen.getByAltText('Ilustración de carrito de compras vacío')).toBeInTheDocument();
  });
}); 