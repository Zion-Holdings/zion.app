export interface SupportTicket {
  id: string;
  customerId: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';
  category: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  customerSatisfaction?: number;
  tags: string[];
  attachments: string[];
}

export interface CustomerInteraction {
  id: string;
  customerId: string;
  channel: 'email' | 'chat' | 'phone' | 'social' | 'ticket';
  message: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  confidence: number;
  intent: string;
  entities: Record<string, any>;
  timestamp: Date;
  responseTime?: number;
}

export interface AutomatedResponse {
  id: string;
  triggerKeywords: string[];
  responseTemplate: string;
  category: string;
  isActive: boolean;
  successRate: number;
  lastUpdated: Date;
  createdBy: string;
}

export interface SupportAnalytics {
  totalTickets: number;
  averageResolutionTime: number;
  customerSatisfactionScore: number;
  firstResponseTime: number;
  ticketVolumeByCategory: Record<string, number>;
  agentPerformance: Record<string, {
    ticketsResolved: number;
    averageResolutionTime: number;
    customerSatisfaction: number;
  }>;
  sentimentTrends: Record<string, number>;
  peakHours: Record<string, number>;
}

export interface CustomerProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  plan: string;
  totalTickets: number;
  averageSatisfaction: number;
  lifetimeValue: number;
  lastInteraction: Date;
  preferences: Record<string, any>;
  tags: string[];
}

export interface SupportRequest {
  customerId: string;
  subject: string;
  description: string;
  category: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  attachments?: string[];
  customFields?: Record<string, any>;
}

export interface SupportResponse {
  success: boolean;
  ticketId: string;
  estimatedResolutionTime: number;
  suggestedSolutions: string[];
  automatedResponse?: string;
  assignedAgent?: string;
  nextSteps: string[];
}

export class AICustomerSupportService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async createTicket(request: SupportRequest): Promise<SupportResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/tickets`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating support ticket:', error);
      throw error;
    }
  }

  async getTicket(ticketId: string): Promise<SupportTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/tickets/${ticketId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.ticket;
    } catch (error) {
      console.error('Error getting ticket:', error);
      throw error;
    }
  }

  async updateTicket(ticketId: string, updates: Partial<SupportTicket>): Promise<SupportTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.ticket;
    } catch (error) {
      console.error('Error updating ticket:', error);
      throw error;
    }
  }

  async analyzeSentiment(message: string): Promise<{
    sentiment: 'positive' | 'neutral' | 'negative';
    confidence: number;
    intent: string;
    entities: Record<string, any>;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/sentiment`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.analysis;
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      throw error;
    }
  }

  async generateAutomatedResponse(ticket: SupportTicket): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/automated-response`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticketId: ticket.id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error generating automated response:', error);
      throw error;
    }
  }

  async routeTicket(ticketId: string): Promise<{
    assignedAgent: string;
    reason: string;
    estimatedWaitTime: number;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/route/${ticketId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.routing;
    } catch (error) {
      console.error('Error routing ticket:', error);
      throw error;
    }
  }

  async getCustomerProfile(customerId: string): Promise<CustomerProfile> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/customers/${customerId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error('Error getting customer profile:', error);
      throw error;
    }
  }

  async getAnalytics(timeframe: '24h' | '7d' | '30d' | '90d'): Promise<SupportAnalytics> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/analytics?timeframe=${timeframe}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting analytics:', error);
      throw error;
    }
  }

  async searchKnowledgeBase(query: string): Promise<{
    articles: Array<{
      id: string;
      title: string;
      content: string;
      relevance: number;
      category: string;
    }>;
    suggestedQueries: string[];
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/knowledge-base/search`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching knowledge base:', error);
      throw error;
    }
  }

  async createAutomatedResponse(automatedResponse: Omit<AutomatedResponse, 'id' | 'lastUpdated' | 'successRate'>): Promise<AutomatedResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/support/automated-responses`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(automatedResponse),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error creating automated response:', error);
      throw error;
    }
  }
}

export const aiCustomerSupportService = new AICustomerSupportService(process.env.CUSTOMER_SUPPORT_API_KEY || 'demo-key');