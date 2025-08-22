export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  title: string;
  phone?: string;
  source: 'website' | 'referral' | 'cold-outreach' | 'event' | 'social' | 'other';
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  score: number;
  value: number;
  lastContact: Date;
  nextFollowUp: Date;
  tags: string[];
  notes: string[];
  interactions: LeadInteraction[];
}

export interface LeadInteraction {
  id: string;
  type: 'email' | 'call' | 'meeting' | 'demo' | 'proposal' | 'other';
  date: Date;
  summary: string;
  outcome: 'positive' | 'neutral' | 'negative';
  nextAction?: string;
  followUpDate?: Date;
}

export interface SalesPipeline {
  stage: string;
  leads: Lead[];
  conversionRate: number;
  averageValue: number;
  averageTimeInStage: number;
}

export interface SalesForecast {
  period: string;
  projectedRevenue: number;
  confidence: number;
  factors: {
    positive: string[];
    negative: string[];
  };
}

export interface LeadScoringCriteria {
  companySize: number;
  industry: string;
  budget: number;
  decisionMaker: boolean;
  timeline: number;
  painPoints: string[];
  engagement: number;
}

export interface SalesAutomation {
  id: string;
  name: string;
  trigger: 'lead-created' | 'lead-status-changed' | 'no-activity' | 'stage-entered';
  conditions: Record<string, any>;
  actions: {
    type: 'send-email' | 'schedule-call' | 'assign-task' | 'update-crm' | 'send-notification';
    details: Record<string, any>;
  }[];
  isActive: boolean;
}

class AISalesService {
  private leads: Lead[] = [
    {
      id: 'lead-1',
      name: 'John Smith',
      email: 'john.smith@techcorp.com',
      company: 'TechCorp Inc.',
      title: 'VP of Engineering',
      phone: '+1-555-0123',
      source: 'website',
      status: 'qualified',
      score: 85,
      value: 50000,
      lastContact: new Date('2025-01-15'),
      nextFollowUp: new Date('2025-01-20'),
      tags: ['enterprise', 'tech', 'high-value'],
      notes: ['Interested in AI solutions', 'Budget approved for Q1'],
      interactions: [
        {
          id: 'int-1',
          type: 'demo',
          date: new Date('2025-01-15'),
          summary: 'Product demo completed successfully',
          outcome: 'positive',
          nextAction: 'Send proposal',
          followUpDate: new Date('2025-01-20')
        }
      ]
    },
    {
      id: 'lead-2',
      name: 'Sarah Johnson',
      email: 'sarah.j@startupco.com',
      company: 'StartupCo',
      title: 'Founder & CEO',
      phone: '+1-555-0456',
      source: 'referral',
      status: 'contacted',
      score: 72,
      value: 25000,
      lastContact: new Date('2025-01-14'),
      nextFollowUp: new Date('2025-01-18'),
      tags: ['startup', 'saas', 'growth-stage'],
      notes: ['Referred by existing customer', 'Looking for growth solutions'],
      interactions: [
        {
          id: 'int-2',
          type: 'call',
          date: new Date('2025-01-14'),
          summary: 'Initial discovery call',
          outcome: 'positive',
          nextAction: 'Schedule demo',
          followUpDate: new Date('2025-01-18')
        }
      ]
    }
  ];

  private automations: SalesAutomation[] = [
    {
      id: 'auto-1',
      name: 'New Lead Welcome',
      trigger: 'lead-created',
      conditions: { source: 'website' },
      actions: [
        {
          type: 'send-email',
          details: {
            template: 'welcome-email',
            subject: 'Welcome to Zion Tech Group!',
            delay: 0
          }
        },
        {
          type: 'assign-task',
          details: {
            assignee: 'sales-team',
            task: 'Initial outreach within 24 hours',
            priority: 'high'
          }
        }
      ],
      isActive: true
    },
    {
      id: 'auto-2',
      name: 'Follow-up Reminder',
      trigger: 'no-activity',
      conditions: { daysWithoutActivity: 7 },
      actions: [
        {
          type: 'send-notification',
          details: {
            recipient: 'sales-rep',
            message: 'Lead has been inactive for 7 days',
            priority: 'medium'
          }
        }
      ],
      isActive: true
    }
  ];

  async getLeads(status?: string, source?: string): Promise<Lead[]> {
    try {
      let filtered = this.leads;
      
      if (status) {
        filtered = filtered.filter(l => l.status === status);
      }
      
      if (source) {
        filtered = filtered.filter(l => l.source === source);
      }
      
      return filtered.sort((a, b) => b.score - a.score);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
      throw new Error('Failed to fetch leads');
    }
  }

  async getLeadById(id: string): Promise<Lead | null> {
    try {
      return this.leads.find(l => l.id === id) || null;
    } catch (error) {
      console.error('Failed to fetch lead:', error);
      throw new Error('Failed to fetch lead');
    }
  }

  async createLead(leadData: Omit<Lead, 'id' | 'score' | 'lastContact' | 'nextFollowUp' | 'notes' | 'interactions'>): Promise<Lead> {
    try {
      const score = this.calculateLeadScore(leadData);
      const lead: Lead = {
        ...leadData,
        id: `lead-${Date.now()}`,
        score,
        lastContact: new Date(),
        nextFollowUp: this.calculateNextFollowUp(leadData.source),
        notes: [],
        interactions: []
      };
      
      this.leads.push(lead);
      
      // Trigger automation
      await this.triggerAutomations('lead-created', lead);
      
      return lead;
    } catch (error) {
      console.error('Failed to create lead:', error);
      throw new Error('Failed to create lead');
    }
  }

  async updateLeadStatus(id: string, status: Lead['status']): Promise<Lead> {
    try {
      const lead = this.leads.find(l => l.id === id);
      if (!lead) {
        throw new Error('Lead not found');
      }
      
      const oldStatus = lead.status;
      lead.status = status;
      lead.lastContact = new Date();
      
      // Trigger automation for status change
      await this.triggerAutomations('lead-status-changed', lead, { oldStatus, newStatus: status });
      
      return lead;
    } catch (error) {
      console.error('Failed to update lead status:', error);
      throw new Error('Failed to update lead status');
    }
  }

  async addInteraction(leadId: string, interaction: Omit<LeadInteraction, 'id'>): Promise<LeadInteraction> {
    try {
      const lead = this.leads.find(l => l.id === leadId);
      if (!lead) {
        throw new Error('Lead not found');
      }
      
      const newInteraction: LeadInteraction = {
        ...interaction,
        id: `int-${Date.now()}`
      };
      
      lead.interactions.push(newInteraction);
      lead.lastContact = new Date();
      lead.score = this.recalculateLeadScore(lead);
      
      return newInteraction;
    } catch (error) {
      console.error('Failed to add interaction:', error);
      throw new Error('Failed to add interaction');
    }
  }

  async getPipeline(): Promise<SalesPipeline[]> {
    try {
      const stages = ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'closed-won', 'closed-lost'];
      
      return stages.map(stage => {
        const stageLeads = this.leads.filter(l => l.status === stage);
        const conversionRate = this.calculateConversionRate(stage);
        const averageValue = stageLeads.length > 0 
          ? stageLeads.reduce((sum, l) => sum + l.value, 0) / stageLeads.length 
          : 0;
        const averageTimeInStage = this.calculateAverageTimeInStage(stage);
        
        return {
          stage,
          leads: stageLeads,
          conversionRate,
          averageValue,
          averageTimeInStage
        };
      });
    } catch (error) {
      console.error('Failed to get pipeline:', error);
      throw new Error('Failed to get pipeline');
    }
  }

  async generateForecast(months: number = 3): Promise<SalesForecast[]> {
    try {
      const forecasts: SalesForecast[] = [];
      const currentDate = new Date();
      
      for (let i = 1; i <= months; i++) {
        const forecastDate = new Date(currentDate);
        forecastDate.setMonth(forecastDate.getMonth() + i);
        
        const monthName = forecastDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const projectedRevenue = this.calculateProjectedRevenue(i);
        const confidence = this.calculateConfidence(i);
        const factors = this.identifyForecastFactors(i);
        
        forecasts.push({
          period: monthName,
          projectedRevenue,
          confidence,
          factors
        });
      }
      
      return forecasts;
    } catch (error) {
      console.error('Failed to generate forecast:', error);
      throw new Error('Failed to generate forecast');
    }
  }

  async getAutomations(): Promise<SalesAutomation[]> {
    try {
      return this.automations.filter(a => a.isActive);
    } catch (error) {
      console.error('Failed to fetch automations:', error);
      throw new Error('Failed to fetch automations');
    }
  }

  async createAutomation(automation: Omit<SalesAutomation, 'id'>): Promise<SalesAutomation> {
    try {
      const newAutomation: SalesAutomation = {
        ...automation,
        id: `auto-${Date.now()}`
      };
      
      this.automations.push(newAutomation);
      return newAutomation;
    } catch (error) {
      console.error('Failed to create automation:', error);
      throw new Error('Failed to create automation');
    }
  }

  private calculateLeadScore(leadData: any): number {
    let score = 0;
    
    // Company size scoring
    if (leadData.companySize > 1000) score += 25;
    else if (leadData.companySize > 100) score += 20;
    else if (leadData.companySize > 10) score += 15;
    
    // Budget scoring
    if (leadData.budget > 100000) score += 30;
    else if (leadData.budget > 50000) score += 25;
    else if (leadData.budget > 25000) score += 20;
    
    // Decision maker scoring
    if (leadData.decisionMaker) score += 15;
    
    // Timeline scoring
    if (leadData.timeline <= 3) score += 20;
    else if (leadData.timeline <= 6) score += 15;
    
    // Source scoring
    if (leadData.source === 'referral') score += 10;
    else if (leadData.source === 'website') score += 5;
    
    return Math.min(score, 100);
  }

  private recalculateLeadScore(lead: Lead): number {
    let score = lead.score;
    
    // Adjust score based on interactions
    const recentInteractions = lead.interactions
      .filter(i => i.date > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
    
    recentInteractions.forEach(interaction => {
      if (interaction.outcome === 'positive') score += 5;
      else if (interaction.outcome === 'negative') score -= 10;
    });
    
    // Adjust score based on engagement
    if (lead.interactions.length > 5) score += 10;
    else if (lead.interactions.length > 2) score += 5;
    
    return Math.max(0, Math.min(score, 100));
  }

  private calculateNextFollowUp(source: string): Date {
    const followUpDate = new Date();
    
    switch (source) {
      case 'website':
        followUpDate.setHours(followUpDate.getHours() + 1); // Within 1 hour
        break;
      case 'referral':
        followUpDate.setDate(followUpDate.getDate() + 1); // Within 1 day
        break;
      case 'cold-outreach':
        followUpDate.setDate(followUpDate.getDate() + 3); // Within 3 days
        break;
      default:
        followUpDate.setDate(followUpDate.getDate() + 2); // Within 2 days
    }
    
    return followUpDate;
  }

  private calculateConversionRate(stage: string): number {
    const stageIndex = ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'closed-won', 'closed-lost'].indexOf(stage);
    if (stageIndex === 0) return 100;
    
    const previousStage = ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'closed-won', 'closed-lost'][stageIndex - 1];
    const previousCount = this.leads.filter(l => l.status === previousStage).length;
    const currentCount = this.leads.filter(l => l.status === stage).length;
    
    return previousCount > 0 ? (currentCount / previousCount) * 100 : 0;
  }

  private calculateAverageTimeInStage(stage: string): number {
    const stageLeads = this.leads.filter(l => l.status === stage);
    if (stageLeads.length === 0) return 0;
    
    const totalDays = stageLeads.reduce((sum, lead) => {
      const lastInteraction = lead.interactions.length > 0 
        ? lead.interactions[lead.interactions.length - 1].date 
        : lead.lastContact;
      const daysInStage = (new Date().getTime() - lastInteraction.getTime()) / (1000 * 60 * 60 * 24);
      return sum + daysInStage;
    }, 0);
    
    return Math.round(totalDays / stageLeads.length);
  }

  private calculateProjectedRevenue(monthOffset: number): number {
    const qualifiedLeads = this.leads.filter(l => l.status === 'qualified');
    const proposalLeads = this.leads.filter(l => l.status === 'proposal');
    const negotiationLeads = this.leads.filter(l => l.status === 'negotiation');
    
    const totalPipelineValue = [...qualifiedLeads, ...proposalLeads, ...negotiationLeads]
      .reduce((sum, l) => sum + l.value, 0);
    
    // Apply conversion rates and timing factors
    const conversionRate = 0.3; // 30% conversion rate
    const timingFactor = 1 - (monthOffset * 0.1); // Revenue decreases over time
    
    return Math.round(totalPipelineValue * conversionRate * timingFactor);
  }

  private calculateConfidence(monthOffset: number): number {
    // Confidence decreases as we look further into the future
    const baseConfidence = 85;
    const monthlyDecrease = 15;
    
    return Math.max(30, baseConfidence - (monthOffset * monthlyDecrease));
  }

  private identifyForecastFactors(monthOffset: number): {
    positive: string[];
    negative: string[];
  } {
    const positive: string[] = [];
    const negative: string[] = [];
    
    if (monthOffset === 1) {
      positive.push('Strong pipeline in qualified stage');
      positive.push('Recent proposal submissions');
    } else {
      negative.push('Pipeline conversion uncertainty');
      negative.push('Seasonal business patterns');
    }
    
    const qualifiedLeads = this.leads.filter(l => l.status === 'qualified');
    if (qualifiedLeads.length > 10) {
      positive.push('High volume of qualified leads');
    } else {
      negative.push('Limited qualified pipeline');
    }
    
    return { positive, negative };
  }

  private async triggerAutomations(trigger: string, lead: Lead, context?: any): Promise<void> {
    try {
      const relevantAutomations = this.automations.filter(a => 
        a.trigger === trigger && a.isActive
      );
      
      for (const automation of relevantAutomations) {
        if (this.evaluateConditions(automation.conditions, lead, context)) {
          await this.executeActions(automation.actions, lead);
        }
      }
    } catch (error) {
      console.error('Failed to trigger automations:', error);
    }
  }

  private evaluateConditions(conditions: Record<string, any>, lead: Lead, context?: any): boolean {
    // Simple condition evaluation
    if (conditions.source && lead.source !== conditions.source) return false;
    if (conditions.daysWithoutActivity) {
      const daysSinceLastActivity = (new Date().getTime() - lead.lastContact.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceLastActivity < conditions.daysWithoutActivity) return false;
    }
    return true;
  }

  private async executeActions(actions: SalesAutomation['actions'], lead: Lead): Promise<void> {
    for (const action of actions) {
      try {
        switch (action.type) {
          case 'send-email':
            console.log(`Sending email to ${lead.email}: ${action.details.subject}`);
            break;
          case 'assign-task':
            console.log(`Assigning task: ${action.details.task}`);
            break;
          case 'send-notification':
            console.log(`Sending notification: ${action.details.message}`);
            break;
          default:
            console.log(`Executing action: ${action.type}`);
        }
      } catch (error) {
        console.error(`Failed to execute action ${action.type}:`, error);
      }
    }
  }
}

export const aiSalesService = new AISalesService();