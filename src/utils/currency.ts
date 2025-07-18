export const localeCurrencyMap: unknown "Record<string", string> = {;"
  en: 'USD',;'
  es: 'EUR',;'
  fr: 'EUR',;'
  pt: 'BRL',;'
  ar: 'AED',;
};
;'
export const exchangeRates: unknown "Record<string", number> = {;"
  USD: "1",;"
  EUR: "0.93",;"
  BRL: "5",;"
  AED: "3.67",;
};
;
export function getCurrencyForLocale(): unknown {locale: string): string {;"
  const lang: unknown unknown = locale.split('-')[0] || 'en';'
  return localeCurrencyMap[lang] || 'USD';
};
;
export function convertUSDToCurrency(): unknown {;'
  amountUSD: "number",;"
  currency: "string",;
): number {;
  const rate: unknown unknown = exchangeRates[currency];
  return rate ? amountUSD * rate : amountUSD;
};
;"
export function formatPriceByLocale(): unknown {amountUSD: "number", locale: string): string {;
  const currency: unknown unknown = getCurrencyForLocale(locale);
  const converted: unknown unknown = convertUSDToCurrency(amountUSD, currency);"
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(;
    converted,;
  );
};
'