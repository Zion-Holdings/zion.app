export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  intent?: string;
  confidence?: number;
  metadata?: {
    platform?: string;
    userId?: string;
    sessionId?: string;
    language?: string;
  };
}

export interface Conversation {
  id: string;
  sessionId: string;
  userId?: string;
  platform: string;
  messages: ChatMessage[];
  startedAt: Date;
  lastActivity: Date;
  status: 'active' | 'completed' | 'abandoned';
  summary?: string;
  tags: string[];
}

export interface TrainingData {
  id: string;
  intent: string;
  examples: string[];
  responses: string[];
  confidence: number;
  category: string;
  lastUpdated: Date;
}

export interface ChatbotAnalytics {
  totalConversations: number;
  totalMessages: number;
  averageConversationLength: number;
  userSatisfaction: number;
  commonIntents: Array<{ intent: string; count: number }>;
  responseTime: {
    average: number;
    p95: number;
    p99: number;
  };
  platformUsage: Record<string, number>;
  languageDistribution: Record<string, number>;
  dailyTrends: Array<{ date: string; conversations: number; messages: number }>;
}

export interface ChatbotConfig {
  name: string;
  personality: string;
  language: string;
  responseStyle: 'formal' | 'casual' | 'friendly' | 'professional';
  maxResponseLength: number;
  enableLearning: boolean;
  fallbackResponses: string[];
}

class AIChatbotService {
  private conversations: Map<string, Conversation> = new Map();
  private trainingData: Map<string, TrainingData> = new Map();
  private config: ChatbotConfig;
  private messageCounter = 0;

  constructor() {
    this.config = {
      name: 'Zion AI Assistant',
      personality: 'Helpful, knowledgeable, and professional',
      language: 'en',
      responseStyle: 'professional',
      maxResponseLength: 500,
      enableLearning: true,
      fallbackResponses: [
        "I'm not sure I understand. Could you rephrase that?",
        "I'm still learning about that topic. Can I help you with something else?",
        "That's an interesting question. Let me connect you with a human expert.",
        "I don't have enough information to answer that accurately."
      ]
    };
    
    this.initializeTrainingData();
  }

  private initializeTrainingData() {
    const initialTrainingData: TrainingData[] = [
      {
        id: 'greeting',
        intent: 'greeting',
        examples: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
        responses: [
          'Hello! How can I help you today?',
          'Hi there! Welcome to Zion Tech Group. What can I assist you with?',
          'Greetings! I\'m here to help. What would you like to know?'
        ],
        confidence: 0.95,
        category: 'conversation',
        lastUpdated: new Date()
      },
      {
        id: 'help',
        intent: 'help',
        examples: ['help', 'support', 'assist', 'what can you do', 'how does this work'],
        responses: [
          'I can help you with information about our services, answer questions, and guide you through various processes. What specific area do you need help with?',
          'I\'m here to assist you! I can provide information about our micro SaaS services, help with technical questions, or connect you with the right resources.',
          'I\'m your AI assistant for Zion Tech Group. I can help with service information, technical support, and general inquiries. What do you need?'
        ],
        confidence: 0.90,
        category: 'support',
        lastUpdated: new Date()
      },
      {
        id: 'services',
        intent: 'services',
        examples: ['services', 'what services do you offer', 'micro saas', 'ai content', 'seo tools'],
        responses: [
          'We offer a comprehensive suite of micro SaaS services including AI Content Generator Pro, SEO Automation Suite, AI Chatbot Platform, and many more. Each service is designed to solve specific business problems with immediate ROI.',
          'Our micro SaaS portfolio includes content creation tools, SEO automation, chatbot solutions, business intelligence, and more. Which service interests you most?',
          'We have specialized tools for content marketing, SEO, customer support, analytics, and business operations. Would you like me to explain any specific service in detail?'
        ],
        confidence: 0.88,
        category: 'business',
        lastUpdated: new Date()
      },
      {
        id: 'pricing',
        intent: 'pricing',
        examples: ['pricing', 'cost', 'how much', 'price', 'subscription'],
        responses: [
          'Our pricing is transparent and starts from $19/month for basic services. Most services range from $29-$149/month depending on features and usage. Would you like me to show you specific pricing for any service?',
          'We offer competitive pricing starting at $19/month. Each service has different tiers based on your needs. I can provide detailed pricing information for any service you\'re interested in.',
          'Our pricing is designed to be accessible for small businesses while providing enterprise-grade features. Most services offer free trials and flexible monthly plans.'
        ],
        confidence: 0.85,
        category: 'business',
        lastUpdated: new Date()
      },
      {
        id: 'technical',
        intent: 'technical',
        examples: ['technical', 'api', 'integration', 'setup', 'how to use'],
        responses: [
          'I can help with technical questions about our services, API documentation, integration guides, and setup instructions. What specific technical aspect do you need help with?',
          'For technical support, I can provide basic guidance and documentation. For complex technical issues, I\'ll connect you with our technical team.',
          'I have access to technical documentation and can help with common setup questions. For advanced technical support, I\'ll escalate to our engineering team.'
        ],
        confidence: 0.80,
        category: 'technical',
        lastUpdated: new Date()
      }
    ];

    initialTrainingData.forEach(data => {
      this.trainingData.set(data.intent, data);
    });
  }

  async startConversation(sessionId: string, platform: string, userId?: string): Promise<Conversation> {
    const conversation: Conversation = {
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sessionId,
      userId,
      platform,
      messages: [],
      startedAt: new Date(),
      lastActivity: new Date(),
      status: 'active',
      tags: []
    };

    this.conversations.set(conversation.id, conversation);
    return conversation;
  }

  async sendMessage(conversationId: string, content: string, metadata?: ChatMessage['metadata']): Promise<ChatMessage> {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error('Conversation not found');
    }

    // Add user message
    const userMessage: ChatMessage = {
      id: `msg_${++this.messageCounter}`,
      content,
      sender: 'user',
      timestamp: new Date(),
      metadata
    };

    conversation.messages.push(userMessage);
    conversation.lastActivity = new Date();

    // Generate bot response
    const botResponse = await this.generateResponse(content, conversation);
    
    const botMessage: ChatMessage = {
      id: `msg_${++this.messageCounter}`,
      content: botResponse.content,
      sender: 'bot',
      timestamp: new Date(),
      intent: botResponse.intent,
      confidence: botResponse.confidence,
      metadata: {
        ...metadata,
        platform: conversation.platform
      }
    };

    conversation.messages.push(botMessage);
    conversation.lastActivity = new Date();

    return botMessage;
  }

  private async generateResponse(userInput: string, conversation: Conversation): Promise<{ content: string; intent: string; confidence: number }> {
    const intent = this.detectIntent(userInput);
    const trainingData = this.trainingData.get(intent);
    
    if (trainingData && trainingData.confidence > 0.7) {
      const response = this.selectResponse(trainingData.responses);
      return {
        content: response,
        intent: intent,
        confidence: trainingData.confidence
      };
    }

    // Handle unknown intent
    if (conversation.messages.length < 3) {
      return {
        content: this.config.fallbackResponses[0],
        intent: 'unknown',
        confidence: 0.3
      };
    }

    // Try to provide contextual help
    const contextualResponse = this.generateContextualResponse(conversation);
    return {
      content: contextualResponse,
      intent: 'contextual',
      confidence: 0.5
    };
  }

  private detectIntent(userInput: string): string {
    const input = userInput.toLowerCase();
    
    // Check each training data intent
    for (const [intent, data] of this.trainingData) {
      for (const example of data.examples) {
        if (input.includes(example.toLowerCase())) {
          return intent;
        }
      }
    }

    // Check for specific keywords
    if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      return 'pricing';
    }
    if (input.includes('service') || input.includes('offer') || input.includes('tool')) {
      return 'services';
    }
    if (input.includes('help') || input.includes('support') || input.includes('assist')) {
      return 'help';
    }
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'greeting';
    }
    if (input.includes('api') || input.includes('integration') || input.includes('setup')) {
      return 'technical';
    }

    return 'unknown';
  }

  private selectResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private generateContextualResponse(conversation: Conversation): string {
    const recentMessages = conversation.messages.slice(-4);
    const userMessages = recentMessages.filter(msg => msg.sender === 'user');
    
    if (userMessages.length === 0) {
      return this.config.fallbackResponses[1];
    }

    const lastUserMessage = userMessages[userMessages.length - 1];
    const content = lastUserMessage.content.toLowerCase();

    if (content.includes('service') || content.includes('tool')) {
      return 'I can tell you\'re interested in our services. We offer AI-powered tools for content creation, SEO automation, customer support, and more. Which area would you like to explore?';
    }

    if (content.includes('price') || content.includes('cost')) {
      return 'I understand you\'re asking about pricing. Our services start from $19/month and offer great value for businesses of all sizes. Would you like specific pricing details?';
    }

    if (content.includes('help') || content.includes('support')) {
      return 'I\'m here to help! I can provide information about our services, answer questions, or connect you with the right resources. What do you need assistance with?';
    }

    return this.config.fallbackResponses[2];
  }

  async addTrainingData(trainingData: Omit<TrainingData, 'id' | 'lastUpdated'>): Promise<TrainingData> {
    const newTrainingData: TrainingData = {
      ...trainingData,
      id: `training_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      lastUpdated: new Date()
    };

    this.trainingData.set(trainingData.intent, newTrainingData);
    return newTrainingData;
  }

  async updateTrainingData(intent: string, updates: Partial<TrainingData>): Promise<TrainingData | null> {
    const existing = this.trainingData.get(intent);
    if (!existing) return null;

    const updated: TrainingData = {
      ...existing,
      ...updates,
      lastUpdated: new Date()
    };

    this.trainingData.set(intent, updated);
    return updated;
  }

  async getConversation(conversationId: string): Promise<Conversation | null> {
    return this.conversations.get(conversationId) || null;
  }

  async getConversationHistory(userId: string, limit: number = 10): Promise<Conversation[]> {
    const userConversations = Array.from(this.conversations.values())
      .filter(conv => conv.userId === userId)
      .sort((a, b) => b.lastActivity.getTime() - a.lastActivity.getTime());
    
    return userConversations.slice(0, limit);
  }

  async endConversation(conversationId: string, summary?: string): Promise<boolean> {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) return false;

    conversation.status = 'completed';
    conversation.summary = summary;
    conversation.lastActivity = new Date();

    return true;
  }

  async getAnalytics(timeRange: 'day' | 'week' | 'month' = 'week'): Promise<ChatbotAnalytics> {
    const now = new Date();
    const conversations = Array.from(this.conversations.values());
    
    let filteredConversations = conversations;
    if (timeRange === 'day') {
      const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      filteredConversations = conversations.filter(conv => conv.startedAt >= dayAgo);
    } else if (timeRange === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      filteredConversations = conversations.filter(conv => conv.startedAt >= weekAgo);
    } else if (timeRange === 'month') {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      filteredConversations = conversations.filter(conv => conv.startedAt >= monthAgo);
    }

    const totalConversations = filteredConversations.length;
    const totalMessages = filteredConversations.reduce((sum, conv) => sum + conv.messages.length, 0);
    const averageConversationLength = totalConversations > 0 ? totalMessages / totalConversations : 0;

    // Calculate response times
    const responseTimes: number[] = [];
    filteredConversations.forEach(conv => {
      for (let i = 0; i < conv.messages.length - 1; i++) {
        if (conv.messages[i].sender === 'user' && conv.messages[i + 1].sender === 'bot') {
          const responseTime = conv.messages[i + 1].timestamp.getTime() - conv.messages[i].timestamp.getTime();
          responseTimes.push(responseTime);
        }
      }
    });

    const averageResponseTime = responseTimes.length > 0 
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length 
      : 0;

    // Platform usage
    const platformUsage: Record<string, number> = {};
    filteredConversations.forEach(conv => {
      platformUsage[conv.platform] = (platformUsage[conv.platform] || 0) + 1;
    });

    // Language distribution
    const languageDistribution: Record<string, number> = {};
    filteredConversations.forEach(conv => {
      conv.messages.forEach(msg => {
        const lang = msg.metadata?.language || 'en';
        languageDistribution[lang] = (languageDistribution[lang] || 0) + 1;
      });
    });

    // Daily trends
    const dailyTrends: Array<{ date: string; conversations: number; messages: number }> = [];
    const days = timeRange === 'day' ? 1 : timeRange === 'week' ? 7 : 30;
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      
      const dayConversations = filteredConversations.filter(conv => {
        const convDate = new Date(conv.startedAt);
        return convDate.toDateString() === date.toDateString();
      });
      
      const dayMessages = dayConversations.reduce((sum, conv) => sum + conv.messages.length, 0);
      
      dailyTrends.push({
        date: dateStr,
        conversations: dayConversations.length,
        messages: dayMessages
      });
    }

    return {
      totalConversations,
      totalMessages,
      averageConversationLength: Math.round(averageConversationLength),
      userSatisfaction: 85, // Mock satisfaction score
      commonIntents: this.getCommonIntents(filteredConversations),
      responseTime: {
        average: Math.round(averageResponseTime),
        p95: Math.round(averageResponseTime * 1.5),
        p99: Math.round(averageResponseTime * 2)
      },
      platformUsage,
      languageDistribution,
      dailyTrends
    };
  }

  private getCommonIntents(conversations: Conversation[]): Array<{ intent: string; count: number }> {
    const intentCounts: Record<string, number> = {};
    
    conversations.forEach(conv => {
      conv.messages.forEach(msg => {
        if (msg.intent && msg.intent !== 'unknown') {
          intentCounts[msg.intent] = (intentCounts[msg.intent] || 0) + 1;
        }
      });
    });

    return Object.entries(intentCounts)
      .map(([intent, count]) => ({ intent, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }

  async updateConfig(updates: Partial<ChatbotConfig>): Promise<ChatbotConfig> {
    this.config = { ...this.config, ...updates };
    return this.config;
  }

  async getConfig(): Promise<ChatbotConfig> {
    return this.config;
  }
}

export const aiChatbotService = new AIChatbotService();