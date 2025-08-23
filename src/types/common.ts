// Common TypeScript interfaces to replace 'any' types throughout the application

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  code?: string | number;
}

export interface ErrorResponse {
  error: string;
  message?: string;
  code?: string | number;
  timestamp?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface SearchParams {
  q?: string;
  category?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
  filters?: Record<string, unknown>;
}

export interface SearchFilters {
  query?: string;
  search?: string;
  category?: string;
  tags?: string[];
  priceRange?: { min: number; max: number };
  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number; max: number } | null;
  availability?: string | null;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role?: 'user' | 'admin' | 'moderator';
  preferences?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface FormData {
  [key: string]: string | number | boolean | File | null | undefined;
}

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  group?: string;
}

export interface TableColumn<T = unknown> {
  key: keyof T | string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: unknown, record: T) => React.ReactNode;
  width?: string | number;
}

export interface ChartDataPoint {
  x: string | number;
  y: string | number;
  label?: string;
  color?: string;
}

export interface NotificationData {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  actions?: Array<{
    label: string;
    action: () => void;
    style?: 'primary' | 'secondary';
  }>;
}

export interface FileUpload {
  file: File;
  progress?: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  url?: string;
  error?: string;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

export interface AsyncState<T = unknown> {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastFetch?: number;
}

export interface RouteParams {
  [key: string]: string | string[] | undefined;
}

export interface MetaData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export interface EnvironmentConfig {
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
  apiUrl: string;
  appUrl: string;
  version: string;
}

export interface LogContext {
  [key: string]: unknown;
}

export interface EventHandler<T = Event> {
  (event: T): void;
}

export interface KeyValuePair<T = unknown> {
  [key: string]: T;
}

export interface TimestampedRecord {
  createdAt: string;
  updatedAt: string;
}

export interface Identifiable {
  id: string | number;
}

export interface Sortable {
  sortOrder?: number;
}

export interface Searchable {
  searchTerms?: string[];
}

export interface SoftDeletable {
  deletedAt?: string | null;
  isDeleted?: boolean;
}

// Component-specific interfaces
export interface ModalProps extends ComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closable?: boolean;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: EventHandler<React.MouseEvent<HTMLButtonElement>>;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends ComponentProps {
  value?: string | number;
  onChange?: EventHandler<React.ChangeEvent<HTMLInputElement>>;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  type?: string;
  error?: string;
  label?: string;
}

export interface FormFieldProps extends ComponentProps {
  name: string;
  label?: string;
  error?: string;
  required?: boolean;
  description?: string;
}

// API-specific interfaces
export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number>;
  timeout?: number;
  retries?: number;
}

export interface WebhookPayload {
  event: string;
  timestamp: string;
  data: Record<string, unknown>;
  signature?: string;
}

export interface DatabaseConnection {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
  pool?: {
    min: number;
    max: number;
  };
}

// Utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type NonNullable<T> = T extends null | undefined ? never : T;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ValueOf<T> = T[keyof T];

export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// Event types
export interface CustomEvent<T = unknown> {
  type: string;
  payload: T;
  timestamp: number;
  source?: string;
}

export interface ErrorEvent extends CustomEvent<ErrorResponse> {
  type: 'error';
  payload: ErrorResponse;
}

export interface SuccessEvent<T = unknown> extends CustomEvent<T> {
  type: 'success';
  payload: T;
}

// Performance monitoring types
export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

export interface BundleAnalysis {
  totalSize: number;
  chunks: Array<{
    name: string;
    size: number;
    assets: string[];
  }>;
  dependencies: Array<{
    name: string;
    size: number;
    version: string;
  }>;
}

// Note: TypeScript interfaces cannot be used as values in export default
// This file exports types only, no runtime values 