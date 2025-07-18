import { useRouter } from 'next/router'
import { useEffect, useState } from 'react;
import Link from 'next/link'
import { CategoryListingPage } from '@/components/CategoryListingPage // Ensure this path is correct;
import type { Listing } from '@/components/CategoryListingPage'
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton'
import { useRouterReady } from '@/hooks/useRouterReady'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;
'
interface CategoryData {
  name: string,
  slug: string"
  description?: string""
}"
;"
interface ApiResponse {'
  category: CategoryData,
  items: Listing[]
  message?: string // For API error messages
  available_categories?: string[]

export default function CategoryPage(): ;
  const router = useRouterReady(); // Use our custom hook;';;