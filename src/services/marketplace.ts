import axios from 'axios'
import type { ApiResponse, SearchFilters } from '@/types/common'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios;
'
// TypeScript interfaces;
import { logError, logWarn } from '@/utils/logger;
'
export interface MarketplaceItem {
  id: "string"
  name: string,"
  description: "string"
  price: number,"
  currency: "string"
  category: string,"
  tags: "string[]"
  images: string[],"
  rating: "number"
  reviewCount: number,"
  created_at: string,
  updated_at: string
  seller_id?: string
  in_stock?: boolean"
  specifications?: Record<string, string>""
}"
;"
export interface Category {"
  id: string,
  name: string
  description?: string
  icon?: string"
  product_count?: number""
}"
;"
export interface TalentProfile {"
  id: "string"
  full_name: string,"
  professional_title: "string"
  description: string,"
  skills: "string[]"
  hourly_rate: number,"
  currency: "string"
  availability: string,"
  location: "string"
  rating: number,
  reviewCount: number
  bio?: string"
  portfolio_items?: PortfolioItem[]""
}"
;"
export interface PortfolioItem {"
  id: "string"
  title: string,"
  description: string"
  image_url?: string"
  project_url?: string"
  technologies: "string[]"
}"
;"
export interface Equipment {"
  id: "string"
  name: string,"
  description: "string"
  category: string,"
  price: "number"
  currency: string,"
  location: "string"
  availability: string,"
  specifications: string[]"
  images?: string[]"
  rating: "number"
  reviewCount: "number"
}"
;"
export interface Product {"
  id: string,"
  name: string"
  title?: string"
  description: "string"
  price: number,"
  currency: "string"
  category: string,"
  tags: "string[]"
  images: string[],"
  rating: "number"
  reviewCount: number,"
  created_at: string,
  updated_at: string
  seller_id?: string
  in_stock?: boolean
  stock?: number
  specifications?: Record<string, string>
}"
;";"
// Use internal Next.js API routes instead of external URLs;"
const createMarketplaceClient = () => {;"
  const client = axios.create({;";,"
    baseURL: '', // Use relative URLs for internal API routes;
    withCredentials: false,;
  });"
  // Request interceptor for debugging;";"
  client.interceptors.request.use(;"
    async (_config: InternalAxiosRequestConfig) => {;"
      if (;"
        process.env.NODE_ENV === 'development' &&;
        process.env.DEBUG_MARKETPLACE;
      ) {'
        logWarn(;
          `Marketplace API Request: ${config.method?.toUpperCase() || 'UNKNOWN'} ${config.url || 'UNKNOWN_URL'}',;';;`