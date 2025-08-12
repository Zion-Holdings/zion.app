import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { LanguageSelector } from '../LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from 'react-i18next';

vi.mock('@/context/LanguageContext');
vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}));

const mockedUseLanguage = useLanguage as vi.MockedFunction<typeof useLanguage>;
const mockedUseTranslation = useTranslation as vi.MockedFunction<typeof useTranslation>;

const supportedLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const mockChangeLanguage = vi.fn().mockResolvedValue(undefined);

beforeEach(() => {
  mockedUseLanguage.mockReturnValue({
    currentLanguage: 'en',
    changeLanguage: mockChangeLanguage,
    isRTL: false,
    supportedLanguages,
  });
  mockedUseTranslation.mockReturnValue({ t: (key: string) => key } as any);
  mockChangeLanguage.mockClear();
});

describe('LanguageSelector', () => {
  it('lists available languages and calls changeLanguage on selection', async () => {
    render(<LanguageSelector />);

    const trigger = screen.getByTestId('language-selector');
    fireEvent.click(trigger);

    supportedLanguages.forEach(lang => {
      expect(screen.getByText(`language.${lang.code}`)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(`language.es`));

    await waitFor(() => expect(mockChangeLanguage).toHaveBeenCalledWith('es'));
  });
});
