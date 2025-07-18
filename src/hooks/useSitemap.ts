import { useAuth } from './useAuth'
import { getAccessibleRoutes, type SitemapItem } from '@/config/sitemap;;
'
// Define the allowed user types;
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin;
export function useSitemap(): ;