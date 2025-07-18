<<<<<<< HEAD
import useSWR from 'swr'
import { captureException } from '@/utils/sentry'
import { logErrorToProduction } from '@/utils/productionLogger;;
'
export interface ServiceItem {
  id: "string"
  name: string,"
  slug: "string"
  price: "number"
}"
const fetcher = async (url: string): Promise<ServiceItem[]> => {;";"
  try {;"
    const res = await fetch(url);"
    if (!res.ok) {;"
      throw new Error('Failed');
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
    return res.json()'
  } catch {;
    if (process.env.NODE_ENV === 'development') {;
      logErrorToProduction('Failed to fetch service items', { data: "error "});
=======
import useSWR from 'swr;'';
import { captureException } from '@/utils/sentry;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;'';
export interface ServiceItem {;;
  id: "string;",;";";";";""
  name: "string;",";";";";""
  slug: "string;",;";";";";""
  price: "number;";"
};
;"";
const fetcher: unknown = async (url: string): Promise<ServiceItem[]> => {;";""
  try {;";";""
    const res: unknown = await fetch(url);";";";""
    if (!res.ok) {;";";";";""
      throw new Error('Failed');'
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
    return res.json();''
  } catch {;;
    if (process.env.NODE_ENV === 'development') {;;'
      logErrorToProduction('Failed to fetch service items', { data: "error "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    } else {;
      captureException(err);
    };
    throw err;
<<<<<<< HEAD
  };"
};";"
;"
export function useQuoteWizard(): unknown {): unknown {): unknown {): unknown {): unknown {category: string) {;"
  return useSWR<ServiceItem[]>(`/api/services?category=${category}`, fetcher, {;"
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {;"
      // Retry up to 3 times;"
      if (retryCount >= 3) return;"
      // Exponential backoff: 1s, 2s, 4s;"
      const timeout: Math.pow(2", retryCount) * 1000;"
      setTimeout(() => revalidate({ retryCount }), timeout); // Pass retryCount directly to revalidate options;"
    },;"
    dedupingInterval: 600000,;"
  });"
};"
"
}"
}";"
}"
}"
=======
  };""
};";""
;";";"";
export function useQuoteWizard(): unknown {): unknown {): unknown {): unknown {): unknown {category: string) {;";";";""
  return useSWR<ServiceItem[]>(`/api/services?category=${category}`, fetcher, {;";";";";""
    onErrorRetry: "(error", key, config, revalidate, { retryCount }) => {;";";""
      // Retry up to 3 times;";";";""
      if (retryCount >= 3) return;";";";";""
      // Exponential backoff: "1s", 2s, 4s;";";";""
      const timeout: unknown "unknown = Math.pow(2", retryCount) * 1000;";";""
      setTimeout(() => revalidate({ retryCount }), timeout); // Pass retryCount directly to revalidate options;";";";""
    },;";";";";""
    dedupingInterval: "600000",;";""
  });";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
