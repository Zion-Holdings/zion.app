import useSWR from 'swr'
import { captureException } from '@/utils/sentry'
import { logErrorToProduction } from '@/utils/productionLogger';
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