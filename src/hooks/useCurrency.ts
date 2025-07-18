<<<<<<< HEAD
import { useLanguage } from '@/context/LanguageContext'
import  { formatPriceByLocale }  from '@/utils/currency'
export function useCurrency(): ;
=======
import { useLanguage } from '@/context/LanguageContext;'';
import { formatPriceByLocale } from '@/utils/currency;'
;
export function useCurrency(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  const { _currentLanguage } = useLanguage();
  const formatPrice = (_amountUSD: number) => {;
    return formatPriceByLocale(amountUSD, currentLanguage);
<<<<<<< HEAD
  }'
'
  return { formatPrice };
};
}'
=======
  };''
;
  return { formatPrice };
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''