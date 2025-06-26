import { useLanguage } from '@/context/LanguageContext';
import { formatPriceByLocale } from '@/utils/currency';

export function useCurrency() {
  const { currentLanguage } = useLanguage();

  const formatPrice = (amountUSD: number) => {
    return formatPriceByLocale(amountUSD, currentLanguage);
  };

  return { formatPrice };
}
