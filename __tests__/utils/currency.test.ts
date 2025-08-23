import { describe, it, expect } from 'vitest';
import { getCurrencyForLocale, convertUSDToCurrency, formatPriceByLocale } from '@/utils/currency';

describe('currency utilities', () => {
  it('maps locales to currencies', () => {
    expect(getCurrencyForLocale('en-US')).toBe('USD');
    expect(getCurrencyForLocale('fr-FR')).toBe('EUR');
    expect(getCurrencyForLocale('pt-BR')).toBe('BRL');
  });

  it('converts USD amounts using exchange rates', () => {
    expect(convertUSDToCurrency(10, 'EUR')).toBeCloseTo(9.3);
    expect(convertUSDToCurrency(10, 'BRL')).toBeCloseTo(50);
  });

  it('formats prices by locale', () => {
    const formatted = formatPriceByLocale(10, 'en-US');
    expect(formatted).toBe('$10.00');
  });
});
