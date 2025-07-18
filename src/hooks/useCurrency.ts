import { useLanguage } from '@/context/LanguageContext;'
import { formatPriceByLocale } from '@/utils/currency;
;
export function useCurrency(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { _currentLanguage } = useLanguage();
;
  const formatPrice: unknown = (_amountUSD: number) => {;
    return formatPriceByLocale(amountUSD, currentLanguage);
  };'
;
  return { formatPrice };
};
;
};'
}
}'
}'