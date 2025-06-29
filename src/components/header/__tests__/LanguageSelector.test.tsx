import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LanguageSelector } from '../LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from 'react-i18next';

jest.mock('@/context/LanguageContext');
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

const mockedUseLanguage = useLanguage as jest.MockedFunction<typeof useLanguage>;
const mockedUseTranslation = useTranslation as jest.MockedFunction<typeof useTranslation>;

const supportedLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const mockChangeLanguage = jest.fn().mockResolvedValue(undefined);

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
