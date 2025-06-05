import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../src/i18n/index'; // Adjust path if necessary
import LanguageSwitcher from '../../src/components/LanguageSwitcher'; // Adjust path if necessary
import Home from '../../src/pages/Home'; // Adjust path if necessary

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    // Reset language to English before each test
    i18n.changeLanguage('en');
  });

  test('renders language switcher buttons', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();
  });

  test('changes language when Spanish button is clicked', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <>
          <LanguageSwitcher />
          <Home />
        </>
      </I18nextProvider>
    );

    fireEvent.click(screen.getByText('Español'));
    // Wait for the language to change and component to re-render
    // Adjust the timeout if necessary based on your application's performance
    await screen.findByText('¡Hola Mundo!', {}, { timeout: 2000 });
    expect(screen.getByText('¡Hola Mundo!')).toBeInTheDocument();
  });

  test('changes language when Portuguese button is clicked', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <>
          <LanguageSwitcher />
          <Home />
        </>
      </I18nextProvider>
    );

    fireEvent.click(screen.getByText('Português'));
    await screen.findByText('Olá Mundo!', {}, { timeout: 2000 });
    expect(screen.getByText('Olá Mundo!')).toBeInTheDocument();
  });

  test('changes language back to English when English button is clicked', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <>
          <LanguageSwitcher />
          <Home />
        </>
      </I18nextProvider>
    );

    // Change to Spanish first
    fireEvent.click(screen.getByText('Español'));
    await screen.findByText('¡Hola Mundo!', {}, { timeout: 2000 });

    // Change back to English
    fireEvent.click(screen.getByText('English'));
    await screen.findByText('Hello, World!', {}, { timeout: 2000 });
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
