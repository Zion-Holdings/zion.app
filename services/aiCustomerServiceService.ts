export interface CustomerInquiry {
  id: string;
  customerId: string;
  customerName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  category: 'technical' | 'billing' | 'general' | 'feature-request' | 'bug-report';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  sentiment: 'positive' | 'negative' | 'neutral';
  estimatedResolutionTime: number; // in hours
}

export interface SupportTicket {
  id: string;
  inquiryId: string;
  ticketNumber: string;
  title: string;
  description: string;
  customer: {
    id: string;
    name: string;
    email: string;
    tier: 'basic' | 'premium' | 'enterprise';
  };
  category: string;
  priority: string;
  status: string;
  assignedAgent?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  resolutionTime: number; // in hours
  customerSatisfaction?: number; // 1-5 rating
  followUpRequired: boolean;
  tags: string[];
}

export interface KnowledgeBaseArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  helpful: number;
  notHelpful: number;
  lastReviewed: Date;
  status: 'draft' | 'published' | 'archived';
}

export interface CustomerServiceMetrics {
  totalInquiries: number;
  resolvedInquiries: number;
  averageResolutionTime: number;
  customerSatisfaction: number;
  firstResponseTime: number;
  ticketVolume: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  categoryDistribution: Record<string, number>;
  priorityDistribution: Record<string, number>;
  agentPerformance: Record<string, {
    ticketsResolved: number;
    averageResolutionTime: number;
    customerSatisfaction: number;
  }>;
}

export class AICustomerServiceService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async createCustomerInquiry(inquiry: Omit<CustomerInquiry, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'sentiment' | 'estimatedResolutionTime'>): Promise<CustomerInquiry> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(inquiry),
      });

      if (!response.ok) {
        throw new Error(`Failed to create customer inquiry: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
      };
    } catch (error) {
      console.error('Error creating customer inquiry:', error);
      throw error;
    }
  }

  async getCustomerInquiries(filters?: {
    status?: string;
    category?: string;
    priority?: string;
    customerId?: string;
  }): Promise<CustomerInquiry[]> {
    try {
      const queryParams = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value) queryParams.append(key, value);
        });
      }

      const response = await fetch(`${this.baseUrl}/api/customer-service/inquiries?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch customer inquiries: ${response.statusText}`);
      }

      const data = await response.json();
      return data.inquiries.map((inquiry: any) => ({
        ...inquiry,
        createdAt: new Date(inquiry.createdAt),
        updatedAt: new Date(inquiry.updatedAt),
      }));
    } catch (error) {
      console.error('Error fetching customer inquiries:', error);
      throw error;
    }
  }

  async updateInquiryStatus(inquiryId: string, status: string, assignedTo?: string): Promise<CustomerInquiry> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/inquiries/${inquiryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ status, assignedTo }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update inquiry status: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
      };
    } catch (error) {
      console.error('Error updating inquiry status:', error);
      throw error;
    }
  }

  async createSupportTicket(inquiryId: string, ticketData: Omit<SupportTicket, 'id' | 'inquiryId' | 'ticketNumber' | 'createdAt' | 'updatedAt' | 'resolutionTime'>): Promise<SupportTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ inquiryId, ...ticketData }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create support ticket: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined,
      };
    } catch (error) {
      console.error('Error creating support ticket:', error);
      throw error;
    }
  }

  async resolveTicket(ticketId: string, resolution: string, customerSatisfaction?: number): Promise<SupportTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/resolve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ resolution, customerSatisfaction }),
      });

      if (!response.ok) {
        throw new Error(`Failed to resolve ticket: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined,
      };
    } catch (error) {
      console.error('Error resolving ticket:', error);
      throw error;
    }
  }

  async createKnowledgeBaseArticle(article: Omit<KnowledgeBaseArticle, 'id' | 'createdAt' | 'updatedAt' | 'views' | 'helpful' | 'notHelpful' | 'lastReviewed'>): Promise<KnowledgeBaseArticle> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/knowledge-base`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        throw new Error(`Failed to create knowledge base article: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
        lastReviewed: new Date(data.lastReviewed),
      };
    } catch (error) {
      console.error('Error creating knowledge base article:', error);
      throw error;
    }
  }

  async searchKnowledgeBase(query: string, category?: string): Promise<KnowledgeBaseArticle[]> {
    try {
      const queryParams = new URLSearchParams({ query });
      if (category) queryParams.append('category', category);

      const response = await fetch(`${this.baseUrl}/api/customer-service/knowledge-base/search?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to search knowledge base: ${response.statusText}`);
      }

      const data = await response.json();
      return data.articles.map((article: any) => ({
        ...article,
        createdAt: new Date(article.createdAt),
        updatedAt: new Date(article.updatedAt),
        lastReviewed: new Date(article.lastReviewed),
      }));
    } catch (error) {
      console.error('Error searching knowledge base:', error);
      throw error;
    }
  }

  async getCustomerServiceMetrics(timeRange: 'day' | 'week' | 'month' = 'month'): Promise<CustomerServiceMetrics> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/metrics?timeRange=${timeRange}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch customer service metrics: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching customer service metrics:', error);
      throw error;
    }
  }

  async autoAssignInquiries(): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/auto-assign`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to auto-assign inquiries: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error auto-assigning inquiries:', error);
      throw error;
    }
  }

  async generateCustomerServiceReport(timeRange: 'day' | 'week' | 'month' = 'month'): Promise<{
    metrics: CustomerServiceMetrics;
    insights: string[];
    recommendations: string[];
  }> {
    try {
      const metrics = await this.getCustomerServiceMetrics(timeRange);
      
      const insights = this.generateInsights(metrics);
      const recommendations = this.generateRecommendations(metrics);

      return {
        metrics,
        insights,
        recommendations,
      };
    } catch (error) {
      console.error('Error generating customer service report:', error);
      throw error;
    }
  }

  private generateInsights(metrics: CustomerServiceMetrics): string[] {
    const insights: string[] = [];

    if (metrics.averageResolutionTime > 24) {
      insights.push('Resolution time is above industry average. Consider adding more support agents or improving processes.');
    }

    if (metrics.customerSatisfaction < 4.0) {
      insights.push('Customer satisfaction is below target. Review recent resolutions and agent training.');
    }

    if (metrics.firstResponseTime > 4) {
      insights.push('First response time is slow. Implement auto-responders or increase agent availability.');
    }

    return insights;
  }

  private generateRecommendations(metrics: CustomerServiceMetrics): string[] {
    const recommendations: string[] = [];

    if (metrics.averageResolutionTime > 24) {
      recommendations.push('Implement automated ticket routing based on agent expertise');
      recommendations.push('Create more comprehensive knowledge base articles');
      recommendations.push('Provide additional training for support agents');
    }

    if (metrics.customerSatisfaction < 4.0) {
      recommendations.push('Implement customer feedback surveys after ticket resolution');
      recommendations.push('Review and improve resolution processes');
      recommendations.push('Consider implementing customer success managers');
    }

    return recommendations;
  }
}

export const aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY || '');