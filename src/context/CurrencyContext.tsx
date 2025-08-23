import React, { createContext, useContext, useEffect, useState } from 'react';

export type SupportedCurrency = 'USD' | 'EUR' | 'GBP';

interface CurrencyInfo {
  code: SupportedCurrency;
  symbol: string;
  fx_rate: number;
}

interface CurrencyContextType {
  currency: CurrencyInfo;
  setCurrency: (code: SupportedCurrency) => void;
}

const DEFAULT_CURRENCY: CurrencyInfo = {
  code: 'USD',
  symbol: '$',
  fx_rate: 1,
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: DEFAULT_CURRENCY,
  setCurrency: () => {},
});

const CURRENCY_COOKIE = 'zion_currency';

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 30}`;
}

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyInfo>(DEFAULT_CURRENCY);

  useEffect(() => {
    const stored = readCookie(CURRENCY_COOKIE) as SupportedCurrency | null;
    if (stored) {
      setCurrencyState(c => ({ ...c, code: stored }));
    }
  }, []);

  const setCurrency = (code: SupportedCurrency) => {
    writeCookie(CURRENCY_COOKIE, code);
    setCurrencyState(c => ({ ...c, code }));
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
