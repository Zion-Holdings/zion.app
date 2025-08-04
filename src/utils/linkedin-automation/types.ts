export interface LinkedInConfig {
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  refreshToken: string;
  redirectUri: string;
  scopes: string[];
  rateLimit: {
    requestsPerHour: number;
    requestsPerMinute: number;
  };
  retryConfig: {
    maxRetries: number;
    retryDelay: number;
    backoffMultiplier: number;
  };
}

export interface LinkedInPost {
  id: string;
  content: string;
  media?: {
    type: 'image' | 'video' | 'document';
    url: string;
    altText?: string;
  };
  visibility: 'public' | 'connections' | 'group';
  scheduledFor?: Date;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  analytics?: {
    impressions: number;
    clicks: number;
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface LinkedInConnection {
  id: string;
  profileUrl: string;
  firstName: string;
  lastName: string;
  headline?: string;
  company?: string;
  location?: string;
  message?: string;
  status: 'pending' | 'accepted' | 'rejected' | 'failed';
  createdAt: Date;
}

export interface LinkedInMessage {
  id: string;
  recipientId: string;
  content: string;
  type: 'text' | 'rich' | 'template';
  status: 'draft' | 'sent' | 'delivered' | 'read' | 'failed';
  scheduledFor?: Date;
  createdAt: Date;
}

export interface LinkedInEngagement {
  id: string;
  type: 'like' | 'comment' | 'share';
  targetId: string;
  targetType: 'post' | 'article' | 'update';
  content?: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}

export interface LinkedInAnalytics {
  profileViews: number;
  postImpressions: number;
  connectionRequests: number;
  messagesSent: number;
  engagementRate: number;
  period: 'day' | 'week' | 'month';
  date: Date;
}

export interface LinkedInAutomationRule {
  id: string;
  name: string;
  type: 'post' | 'connect' | 'message' | 'engage';
  conditions: LinkedInCondition[];
  actions: LinkedInAction[];
  schedule: LinkedInSchedule;
  enabled: boolean;
  createdAt: Date;
}

export interface LinkedInCondition {
  field: string;
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'in';
  value: any;
}

export interface LinkedInAction {
  type: 'post' | 'connect' | 'message' | 'like' | 'comment';
  data: any;
  delay?: number;
}

export interface LinkedInSchedule {
  type: 'immediate' | 'scheduled' | 'recurring';
  time?: Date;
  frequency?: 'daily' | 'weekly' | 'monthly';
  daysOfWeek?: number[];
  dayOfMonth?: number;
}

export interface LinkedInError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

export interface LinkedInRateLimit {
  remaining: number;
  reset: Date;
  limit: number;
}

export interface LinkedInWebhookEvent {
  id: string;
  type: string;
  data: any;
  timestamp: Date;
  signature: string;
} 