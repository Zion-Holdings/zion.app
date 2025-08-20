// Code Review Service Types
export interface CodeReviewRequest {
  code: string;
  language: 'javascript' | 'python' | 'typescript';
  options?: {
    includeSecurity?: boolean;
    includePerformance?: boolean;
    includeMaintainability?: boolean;
  };
}

export interface CodeReviewResponse {
  success: boolean;
  result: CodeReviewResult;
  timestamp: string;
}

export interface CodeReviewResult {
  score: number;
  issues: CodeIssue[];
  suggestions: CodeSuggestion[];
  complexity: ComplexityMetrics;
  security: SecurityAnalysis;
  performance: PerformanceAnalysis;
}

export interface CodeIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  line?: number;
  column?: number;
  severity: 'low' | 'medium' | 'high';
  category: 'security' | 'performance' | 'maintainability' | 'style';
}

export interface CodeSuggestion {
  message: string;
  line?: number;
  column?: number;
  replacement?: string;
  category: 'security' | 'performance' | 'maintainability' | 'style';
}

export interface ComplexityMetrics {
  cyclomaticComplexity: number;
  cognitiveComplexity: number;
  maintainabilityIndex: number;
  halsteadMetrics: {
    volume: number;
    difficulty: number;
    effort: number;
  };
}

export interface SecurityAnalysis {
  vulnerabilities: string[];
  riskScore: number;
  recommendations: string[];
  dependencies: {
    name: string;
    version: string;
    vulnerabilities: string[];
  }[];
}

export interface PerformanceAnalysis {
  bottlenecks: string[];
  optimizationSuggestions: string[];
  memoryUsage: {
    estimated: string;
    recommendations: string[];
  };
  executionTime: {
    estimated: string;
    optimizationTips: string[];
  };
}

// Rate Limiter Service Types
export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: any) => string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
  limit: number;
  current: number;
  blocked: boolean;
  message?: string;
}

// Email Validator Service Types
export interface EmailValidationRequest {
  email: string;
  options?: {
    checkMx?: boolean;
    checkDisposable?: boolean;
    checkSecurity?: boolean;
  };
}

export interface EmailValidationResponse {
  success: boolean;
  result: EmailValidationResult;
  timestamp: string;
}

export interface EmailValidationResult {
  isValid: boolean;
  syntax: {
    valid: boolean;
    errors: string[];
  };
  domain: {
    valid: boolean;
    mxRecords: string[];
    hasMx: boolean;
  };
  security: {
    disposable: boolean;
    riskScore: number;
    threats: string[];
  };
  deliverability: {
    score: number;
    recommendations: string[];
  };
}

// Password Strength Service Types
export interface PasswordStrengthRequest {
  password: string;
  options?: {
    checkBreach?: boolean;
    customPolicy?: PasswordPolicy;
  };
}

export interface PasswordStrengthResponse {
  success: boolean;
  result: PasswordStrengthResult;
  timestamp: string;
}

export interface PasswordStrengthResult {
  score: number;
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  factors: {
    length: { score: number; feedback: string };
    complexity: { score: number; feedback: string };
    uniqueness: { score: number; feedback: string };
    predictability: { score: number; feedback: string };
  };
  breaches: {
    found: boolean;
    count: number;
    sources: string[];
  };
  recommendations: string[];
  generatedPassword?: string;
}

export interface PasswordPolicy {
  minLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSymbols: boolean;
  maxLength?: number;
  forbiddenWords?: string[];
}

// URL Shortener Service Types
export interface UrlShortenerRequest {
  originalUrl: string;
  options?: {
    customAlias?: string;
    password?: string;
    expiresAt?: string;
    tags?: string[];
  };
}

export interface UrlShortenerResponse {
  success: boolean;
  result: ShortUrl;
  timestamp: string;
}

export interface ShortUrl {
  id: string;
  originalUrl: string;
  shortUrl: string;
  alias?: string;
  createdAt: string;
  expiresAt?: string;
  clicks: number;
  isActive: boolean;
  analytics: UrlAnalytics;
}

export interface UrlAnalytics {
  totalClicks: number;
  uniqueClicks: number;
  clickHistory: ClickEvent[];
  geographicData: {
    country: string;
    clicks: number;
  }[];
  referrerData: {
    source: string;
    clicks: number;
  }[];
}

export interface ClickEvent {
  timestamp: string;
  ip: string;
  userAgent: string;
  referrer?: string;
  country?: string;
  city?: string;
}

// JSON Formatter Service Types
export interface JsonFormatterRequest {
  json: string;
  options?: {
    format?: 'pretty' | 'minified' | 'compact';
    validate?: boolean;
    transform?: JsonTransformOptions;
  };
}

export interface JsonFormatterResponse {
  success: boolean;
  result: JsonFormatResult;
  timestamp: string;
}

export interface JsonFormatResult {
  formatted: string;
  original: string;
  validation: {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  };
  statistics: JsonStatistics;
  schema?: any;
}

export interface JsonStatistics {
  size: {
    original: number;
    formatted: number;
    compressed: number;
  };
  structure: {
    depth: number;
    keyCount: number;
    arrayCount: number;
    objectCount: number;
  };
}

export interface JsonTransformOptions {
  sortKeys?: boolean;
  removeNulls?: boolean;
  removeUndefined?: boolean;
  flatten?: boolean;
  customTransform?: (key: string, value: any) => any;
}

// QR Code Service Types
export interface QrCodeRequest {
  content: string;
  options?: QRCodeOptions;
}

export interface QrCodeResponse {
  success: boolean;
  result: QRCodeResult;
  timestamp: string;
}

export interface QRCodeResult {
  qrCode: string; // Base64 encoded image
  content: string;
  size: {
    width: number;
    height: number;
  };
  format: 'PNG' | 'JPEG' | 'SVG';
  errorCorrection: 'L' | 'M' | 'Q' | 'H';
  analytics: QRCodeAnalytics;
}

export interface QRCodeOptions {
  size?: number;
  format?: 'PNG' | 'JPEG' | 'SVG';
  errorCorrection?: 'L' | 'M' | 'Q' | 'H';
  foregroundColor?: string;
  backgroundColor?: string;
  logo?: string;
  logoSize?: number;
}

export interface QRCodeAnalytics {
  scans: number;
  lastScanned?: string;
  geographicData: {
    country: string;
    scans: number;
  }[];
}

// File Type Detector Service Types
export interface FileTypeRequest {
  file: File | Buffer | string;
  options?: {
    includeMetadata?: boolean;
    securityScan?: boolean;
    maxFileSize?: number;
  };
}

export interface FileTypeResponse {
  success: boolean;
  result: FileTypeInfo;
  timestamp: string;
}

export interface FileTypeInfo {
  type: string;
  mimeType: string;
  extension: string;
  category: FileCategory;
  size: number;
  metadata: {
    [key: string]: any;
  };
  security: FileSecurityAnalysis;
  magicNumbers: string[];
  description: string;
}

export interface FileCategory {
  primary: 'image' | 'document' | 'audio' | 'video' | 'archive' | 'executable' | 'data' | 'other';
  secondary: string;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface FileSecurityAnalysis {
  isSafe: boolean;
  threats: string[];
  riskScore: number;
  recommendations: string[];
  virusScan?: {
    clean: boolean;
    engine: string;
    lastUpdated: string;
  };
}

// Git Service Types
export interface GitFileStatus {
  path: string;
  status: 'staged' | 'modified' | 'untracked' | 'deleted' | 'renamed';
  diff?: string;
}

export interface GitCommit {
  hash: string;
  message: string;
  author: string;
  date: string;
  files: string[];
}

export interface GitBranch {
  name: string;
  isCurrent: boolean;
  ahead: number;
  behind: number;
  lastCommit: string;
}

export interface GitRemote {
  name: string;
  url: string;
  type: 'HTTPS' | 'SSH';
}

export interface GitStatus {
  branch: string;
  ahead: number;
  behind: number;
  staged: GitFileStatus[];
  unstaged: GitFileStatus[];
  untracked: GitFileStatus[];
  lastCommit: GitCommit;
  isClean: boolean;
}