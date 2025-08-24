export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';
  category: string;
  customerId: string;
  assignedAgentId?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  closedAt?: Date;
  responseTime: number; // in minutes
  satisfactionScore?: number; // 1-5
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  totalTickets: number;
  resolvedTickets: number;
  averageResponseTime: number;
  lastContactAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupportAgent {
  id: string;
  name: string;
  email: string;
  role: 'agent' | 'senior_agent' | 'supervisor' | 'manager';
  isActive: boolean;
  assignedTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  satisfactionScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface KnowledgeBaseArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  viewCount: number;
  helpfulCount: number;
  notHelpfulCount: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupportAnalytics {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  averageResponseTime: number;
  averageResolutionTime: number;
  customerSatisfactionScore: number;
  topCategories: {
    category: string;
    ticketCount: number;
    averageResolutionTime: number;
  }[];
  agentPerformance: {
    agentId: string;
    agentName: string;
    ticketsResolved: number;
    averageResolutionTime: number;
    satisfactionScore: number;
  }[];
  ticketTrends: {
    date: string;
    opened: number;
    resolved: number;
  }[];
}

export interface CustomerSupportServiceConfig {
  maxResponseTime: number; // in minutes
  autoAssignmentEnabled: boolean;
  knowledgeBaseEnabled: boolean;
  chatbotEnabled: boolean;
  webhookUrl?: string;
}

class CustomerSupportService {
  private config: CustomerSupportServiceConfig;
  private tickets: SupportTicket[] = [];
  private customers: Customer[] = [];
  private agents: SupportAgent[] = [];
  private knowledgeBase: KnowledgeBaseArticle[] = [];

  constructor(config: CustomerSupportServiceConfig) {
    this.config = config;
    this.initializeMockData();
  }

  private initializeMockData(): void {
    // Initialize mock agents
    this.agents = [
      {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@zion.app',
        role: 'senior_agent',
        isActive: true,
        assignedTickets: 12,
        resolvedTickets: 156,
        averageResolutionTime: 4.2,
        satisfactionScore: 4.8,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Mike Chen',
        email: 'mike.chen@zion.app',
        role: 'agent',
        isActive: true,
        assignedTickets: 8,
        resolvedTickets: 89,
        averageResolutionTime: 5.1,
        satisfactionScore: 4.6,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '3',
        name: 'Lisa Rodriguez',
        email: 'lisa.rodriguez@zion.app',
        role: 'supervisor',
        isActive: true,
        assignedTickets: 5,
        resolvedTickets: 234,
        averageResolutionTime: 3.8,
        satisfactionScore: 4.9,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];

    // Initialize mock customers
    this.customers = [
      {
        id: '1',
        email: 'john.doe@company.com',
        firstName: 'John',
        lastName: 'Doe',
        company: 'TechCorp Inc.',
        plan: 'professional',
        totalTickets: 5,
        resolvedTickets: 4,
        averageResponseTime: 2.5,
        lastContactAt: new Date('2025-01-15'),
        createdAt: new Date('2024-06-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        email: 'jane.smith@startup.io',
        firstName: 'Jane',
        lastName: 'Smith',
        company: 'Startup.io',
        plan: 'starter',
        totalTickets: 3,
        resolvedTickets: 3,
        averageResponseTime: 3.2,
        lastContactAt: new Date('2025-01-10'),
        createdAt: new Date('2024-08-01'),
        updatedAt: new Date()
      }
    ];

    // Initialize mock knowledge base
    this.knowledgeBase = [
      {
        id: '1',
        title: 'Getting Started with Zion Platform',
        content: 'Complete guide to setting up your account and first project...',
        category: 'Getting Started',
        tags: ['setup', 'onboarding', 'first-steps'],
        isPublished: true,
        viewCount: 1250,
        helpfulCount: 89,
        notHelpfulCount: 12,
        authorId: '1',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        title: 'Troubleshooting Common Issues',
        content: 'Solutions to frequently encountered problems...',
        category: 'Troubleshooting',
        tags: ['troubleshooting', 'common-issues', 'solutions'],
        isPublished: true,
        viewCount: 890,
        helpfulCount: 67,
        notHelpfulCount: 8,
        authorId: '1',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date()
      }
    ];
  }

  async createTicket(
    customerId: string,
    title: string,
    description: string,
    category: string,
    priority: 'low' | 'medium' | 'high' | 'urgent' = 'medium',
    tags: string[] = []
  ): Promise<SupportTicket> {
    const customer = this.customers.find(c => c.id === customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }

    const ticket: SupportTicket = {
      id: this.generateId(),
      title,
      description,
      priority,
      status: 'open',
      category,
      customerId,
      tags,
      createdAt: new Date(),
      updatedAt: new Date(),
      responseTime: 0
    };

    this.tickets.push(ticket);
    
    // Auto-assign if enabled
    if (this.config.autoAssignmentEnabled) {
      await this.autoAssignTicket(ticket.id);
    }

    // Update customer stats
    customer.totalTickets++;
    customer.lastContactAt = new Date();
    customer.updatedAt = new Date();

    return ticket;
  }

  private async autoAssignTicket(ticketId: string): Promise<void> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (!ticket) return;

    // Find agent with least assigned tickets
    const availableAgents = this.agents.filter(a => a.isActive);
    if (availableAgents.length === 0) return;

    const bestAgent = availableAgents.reduce((best, current) => 
      current.assignedTickets < best.assignedTickets ? current : best
    );

    ticket.assignedAgentId = bestAgent.id;
    bestAgent.assignedTickets++;
    bestAgent.updatedAt = new Date();
  }

  async assignTicket(ticketId: string, agentId: string): Promise<void> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    const agent = this.agents.find(a => a.id === agentId);

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    if (!agent) {
      throw new Error('Agent not found');
    }

    if (!agent.isActive) {
      throw new Error('Agent is not active');
    }

    // Remove from previous agent if assigned
    if (ticket.assignedAgentId) {
      const previousAgent = this.agents.find(a => a.id === ticket.assignedAgentId);
      if (previousAgent) {
        previousAgent.assignedTickets--;
        previousAgent.updatedAt = new Date();
      }
    }

    ticket.assignedAgentId = agentId;
    ticket.status = 'in_progress';
    ticket.updatedAt = new Date();

    agent.assignedTickets++;
    agent.updatedAt = new Date();
  }

  async updateTicketStatus(ticketId: string, status: SupportTicket['status']): Promise<void> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (!ticket) {
      throw new Error('Ticket not found');
    }

    const previousStatus = ticket.status;
    ticket.status = status;
    ticket.updatedAt = new Date();

    if (status === 'resolved' && previousStatus !== 'resolved') {
      ticket.resolvedAt = new Date();
      ticket.responseTime = this.calculateResponseTime(ticket);
      
      // Update agent stats
      if (ticket.assignedAgentId) {
        const agent = this.agents.find(a => a.id === ticket.assignedAgentId);
        if (agent) {
          agent.assignedTickets--;
          agent.resolvedTickets++;
          agent.averageResolutionTime = this.calculateAverageResolutionTime(agent);
          agent.updatedAt = new Date();
        }
      }

      // Update customer stats
      const customer = this.customers.find(c => c.id === ticket.customerId);
      if (customer) {
        customer.resolvedTickets++;
        customer.averageResponseTime = this.calculateCustomerAverageResponseTime(customer);
        customer.updatedAt = new Date();
      }
    }

    if (status === 'closed' && previousStatus !== 'closed') {
      ticket.closedAt = new Date();
    }
  }

  private calculateResponseTime(ticket: SupportTicket): number {
    if (ticket.resolvedAt) {
      return Math.round((ticket.resolvedAt.getTime() - ticket.createdAt.getTime()) / (1000 * 60));
    }
    return 0;
  }

  private calculateAverageResolutionTime(agent: SupportAgent): number {
    const resolvedTickets = this.tickets.filter(t => 
      t.assignedAgentId === agent.id && t.status === 'resolved'
    );
    
    if (resolvedTickets.length === 0) return 0;
    
    const totalTime = resolvedTickets.reduce((sum, t) => sum + t.responseTime, 0);
    return Math.round(totalTime / resolvedTickets.length * 10) / 10;
  }

  private calculateCustomerAverageResponseTime(customer: Customer): number {
    const resolvedTickets = this.tickets.filter(t => 
      t.customerId === customer.id && t.status === 'resolved'
    );
    
    if (resolvedTickets.length === 0) return 0;
    
    const totalTime = resolvedTickets.reduce((sum, t) => sum + t.responseTime, 0);
    return Math.round(totalTime / resolvedTickets.length * 10) / 10;
  }

  async addCustomerSatisfactionScore(ticketId: string, score: number): Promise<void> {
    if (score < 1 || score > 5) {
      throw new Error('Satisfaction score must be between 1 and 5');
    }

    const ticket = this.tickets.find(t => t.id === ticketId);
    if (!ticket) {
      throw new Error('Ticket not found');
    }

    ticket.satisfactionScore = score;
    ticket.updatedAt = new Date();

    // Update agent satisfaction score
    if (ticket.assignedAgentId) {
      const agent = this.agents.find(a => a.id === ticket.assignedAgentId);
      if (agent) {
        const agentTickets = this.tickets.filter(t => 
          t.assignedAgentId === agent.id && t.satisfactionScore
        );
        
        if (agentTickets.length > 0) {
          const totalScore = agentTickets.reduce((sum, t) => sum + (t.satisfactionScore || 0), 0);
          agent.satisfactionScore = Math.round(totalScore / agentTickets.length * 10) / 10;
          agent.updatedAt = new Date();
        }
      }
    }
  }

  async createKnowledgeBaseArticle(
    title: string,
    content: string,
    category: string,
    tags: string[],
    authorId: string
  ): Promise<KnowledgeBaseArticle> {
    const article: KnowledgeBaseArticle = {
      id: this.generateId(),
      title,
      content,
      category,
      tags,
      isPublished: false,
      viewCount: 0,
      helpfulCount: 0,
      notHelpfulCount: 0,
      authorId,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.knowledgeBase.push(article);
    return article;
  }

  async publishKnowledgeBaseArticle(articleId: string): Promise<void> {
    const article = this.knowledgeBase.find(a => a.id === articleId);
    if (!article) {
      throw new Error('Article not found');
    }

    article.isPublished = true;
    article.updatedAt = new Date();
  }

  async searchKnowledgeBase(query: string): Promise<KnowledgeBaseArticle[]> {
    const searchTerms = query.toLowerCase().split(' ');
    
    return this.knowledgeBase
      .filter(article => article.isPublished)
      .filter(article => {
        const searchableText = `${article.title} ${article.content} ${article.tags.join(' ')}`.toLowerCase();
        return searchTerms.some(term => searchableText.includes(term));
      })
      .sort((a, b) => b.viewCount - a.viewCount);
  }

  async getAnalytics(startDate?: Date, endDate?: Date): Promise<SupportAnalytics> {
    let filteredTickets = this.tickets;
    
    if (startDate) {
      filteredTickets = filteredTickets.filter(t => t.createdAt >= startDate);
    }
    
    if (endDate) {
      filteredTickets = filteredTickets.filter(t => t.createdAt <= endDate);
    }

    const totalTickets = filteredTickets.length;
    const openTickets = filteredTickets.filter(t => ['open', 'in_progress', 'waiting_customer'].includes(t.status)).length;
    const resolvedTickets = filteredTickets.filter(t => t.status === 'resolved').length;
    
    const resolvedTicketsWithTime = filteredTickets.filter(t => t.status === 'resolved' && t.responseTime > 0);
    const averageResponseTime = resolvedTicketsWithTime.length > 0 
      ? resolvedTicketsWithTime.reduce((sum, t) => sum + t.responseTime, 0) / resolvedTicketsWithTime.length 
      : 0;
    
    const averageResolutionTime = resolvedTicketsWithTime.length > 0 
      ? resolvedTicketsWithTime.reduce((sum, t) => sum + t.responseTime, 0) / resolvedTicketsWithTime.length 
      : 0;

    const ticketsWithSatisfaction = filteredTickets.filter(t => t.satisfactionScore);
    const customerSatisfactionScore = ticketsWithSatisfaction.length > 0
      ? ticketsWithSatisfaction.reduce((sum, t) => sum + (t.satisfactionScore || 0), 0) / ticketsWithSatisfaction.length
      : 0;

    const topCategories = this.getTopCategories(filteredTickets);
    const agentPerformance = this.getAgentPerformance(filteredTickets);
    const ticketTrends = this.generateTicketTrends(filteredTickets);

    return {
      totalTickets,
      openTickets,
      resolvedTickets,
      averageResponseTime: Math.round(averageResponseTime * 10) / 10,
      averageResolutionTime: Math.round(averageResolutionTime * 10) / 10,
      customerSatisfactionScore: Math.round(customerSatisfactionScore * 10) / 10,
      topCategories,
      agentPerformance,
      ticketTrends
    };
  }

  private getTopCategories(tickets: SupportTicket[]): { category: string; ticketCount: number; averageResolutionTime: number }[] {
    const categoryMap = new Map();
    
    tickets.forEach(ticket => {
      if (!categoryMap.has(ticket.category)) {
        categoryMap.set(ticket.category, { tickets: [], totalTime: 0 });
      }
      
      const category = categoryMap.get(ticket.category);
      category.tickets.push(ticket);
      if (ticket.responseTime > 0) {
        category.totalTime += ticket.responseTime;
      }
    });
    
    return Array.from(categoryMap.entries()).map(([category, data]: [string, any]) => ({
      category,
      ticketCount: data.tickets.length,
      averageResolutionTime: data.tickets.length > 0 ? Math.round(data.totalTime / data.tickets.length * 10) / 10 : 0
    })).sort((a, b) => b.ticketCount - a.ticketCount).slice(0, 5);
  }

  private getAgentPerformance(tickets: SupportTicket[]): { agentId: string; agentName: string; ticketsResolved: number; averageResolutionTime: number; satisfactionScore: number }[] {
    const agentMap = new Map();
    
    tickets.forEach(ticket => {
      if (ticket.assignedAgentId && ticket.status === 'resolved') {
        if (!agentMap.has(ticket.assignedAgentId)) {
          agentMap.set(ticket.assignedAgentId, { tickets: [], totalTime: 0, totalScore: 0, scoreCount: 0 });
        }
        
        const agent = agentMap.get(ticket.assignedAgentId);
        agent.tickets.push(ticket);
        if (ticket.responseTime > 0) {
          agent.totalTime += ticket.responseTime;
        }
        if (ticket.satisfactionScore) {
          agent.totalScore += ticket.satisfactionScore;
          agent.scoreCount++;
        }
      }
    });
    
    return Array.from(agentMap.entries()).map(([agentId, data]: [string, any]) => {
      const agent = this.agents.find(a => a.id === agentId);
      return {
        agentId,
        agentName: agent?.name || 'Unknown Agent',
        ticketsResolved: data.tickets.length,
        averageResolutionTime: data.tickets.length > 0 ? Math.round(data.totalTime / data.tickets.length * 10) / 10 : 0,
        satisfactionScore: data.scoreCount > 0 ? Math.round(data.totalScore / data.scoreCount * 10) / 10 : 0
      };
    }).sort((a, b) => b.ticketsResolved - a.ticketsResolved);
  }

  private generateTicketTrends(tickets: SupportTicket[]): { date: string; opened: number; resolved: number }[] {
    const trends = [];
    const today = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayTickets = tickets.filter(t => 
        t.createdAt.toISOString().split('T')[0] === dateStr
      );
      
      const opened = dayTickets.length;
      const resolved = dayTickets.filter(t => 
        t.resolvedAt && t.resolvedAt.toISOString().split('T')[0] === dateStr
      ).length;
      
      trends.push({ date: dateStr, opened, resolved });
    }
    
    return trends;
  }

  async getTickets(status?: string, priority?: string, assignedAgentId?: string): Promise<SupportTicket[]> {
    let filteredTickets = [...this.tickets];
    
    if (status) {
      filteredTickets = filteredTickets.filter(t => t.status === status);
    }
    
    if (priority) {
      filteredTickets = filteredTickets.filter(t => t.priority === priority);
    }
    
    if (assignedAgentId) {
      filteredTickets = filteredTickets.filter(t => t.assignedAgentId === assignedAgentId);
    }
    
    return filteredTickets.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getCustomers(): Promise<Customer[]> {
    return [...this.customers];
  }

  async getAgents(): Promise<SupportAgent[]> {
    return [...this.agents];
  }

  async getKnowledgeBase(category?: string): Promise<KnowledgeBaseArticle[]> {
    let filteredArticles = this.knowledgeBase.filter(a => a.isPublished);
    
    if (category) {
      filteredArticles = filteredArticles.filter(a => a.category === category);
    }
    
    return filteredArticles.sort((a, b) => b.viewCount - a.viewCount);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default CustomerSupportService;