export const localeCurrencyMap: Record<string, string> = {
  en: 'USD',
  es: 'EUR',
  fr: 'EUR',
  pt: 'BRL',
  ar: 'AED'
};

export const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.93,
  BRL: 5,
  AED: 3.67
};

export function getCurrencyForLocale(locale: string): string {
  const lang = locale.split('-')[0] || 'en';
  return localeCurrencyMap[lang] || 'USD';
}

export function convertUSDToCurrency(amountUSD: number, currency: string): number {
  const rate = exchangeRates[currency];
  return rate ? amountUSD * rate : amountUSD;
}

export function formatPriceByLocale(amountUSD: number, locale: string): string {
  const currency = getCurrencyForLocale(locale);
  const converted = convertUSDToCurrency(amountUSD, currency);
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(converted);
}
