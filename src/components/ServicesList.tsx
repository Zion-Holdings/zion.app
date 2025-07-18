import useSWR from 'swr'
import type { ProductListing } from '@/types/listings'
import { ProductListingCard } from '@/components/ProductListingCard'
import ErrorBoundary from '@/components/GlobalErrorBoundary'
import { SkeletonCard } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { captureException } from '@/utils/sentry'

async function fetchServices(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<ProductListing[]> {'
  try {'
    const res = await fetch('/api/services')'
    if (!res.ok) {'
      // Gracefully handle 404 by returning an empty list'
      if (res.status === 404) {;
        return []'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}'
      throw new Error(`Failed to fetch services: "${res.status}`);""
    };""
;"";
    const contentType = res.headers.get('content-type') || 
    if (!contentType.includes('application/json')) {'
      throw new Error(`Invalid content type: ${contentType"}`);