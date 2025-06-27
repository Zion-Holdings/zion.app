import { getCurrencyForLocale, convertUSDToCurrency, formatPriceByLocale } from '@/utils/currency';

describe('currency utils', () => {
  it('maps locales to currencies', () => {
    expect(getCurrencyForLocale('en-US')).toBe('USD');
    expect(getCurrencyForLocale('es-ES')).toBe('EUR');
    expect(getCurrencyForLocale('pt-BR')).toBe('BRL');
  });

  it('converts USD amounts using exchange rates', () => {
    expect(convertUSDToCurrency(10, 'EUR')).toBeCloseTo(9.3);
    expect(convertUSDToCurrency(10, 'BRL')).toBeCloseTo(50);
  });

  it('formats prices using locale currency', () => {
    expect(formatPriceByLocale(10, 'en-US')).toBe('$10.00');
    expect(formatPriceByLocale(10, 'es-ES')).toBe('9,30\u00a0€');
  });
});

