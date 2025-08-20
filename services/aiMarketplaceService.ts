export interface AIModel {
  id: string;
  name: string;
  description: string;
  category: 'text' | 'image' | 'audio' | 'video' | 'multimodal';
  provider: string;
  version: string;
  price: number;
  currency: 'USD' | 'EUR' | 'GBP';
  performance: {
    accuracy: number;
    speed: number;
    efficiency: number;
  };
  tags: string[];
  documentation: string;
  apiEndpoint?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIMarketplaceService {
  // Model Management
  listModels(filters?: ModelFilters): Promise<AIModel[]>;
  getModel(id: string): Promise<AIModel>;
  createModel(model: Omit<AIModel, 'id' | 'createdAt' | 'updatedAt'>): Promise<AIModel>;
  updateModel(id: string, updates: Partial<AIModel>): Promise<AIModel>;
  deleteModel(id: string): Promise<void>;
  
  // Marketplace Operations
  purchaseModel(modelId: string, userId: string): Promise<PurchaseResult>;
  sellModel(modelId: string, userId: string, price: number): Promise<SellResult>;
  getMarketplaceStats(): Promise<MarketplaceStats>;
  
  // AI Model Testing
  testModel(modelId: string, input: any): Promise<TestResult>;
  benchmarkModel(modelId: string): Promise<BenchmarkResult>;
  
  // Revenue & Analytics
  getRevenueAnalytics(userId: string, period: 'daily' | 'weekly' | 'monthly' | 'yearly'): Promise<RevenueAnalytics>;
  getPopularModels(limit: number): Promise<PopularModel[]>;
}

export interface ModelFilters {
  category?: string;
  priceRange?: { min: number; max: number };
  provider?: string;
  tags?: string[];
  performance?: { minAccuracy?: number; minSpeed?: number };
}

export interface PurchaseResult {
  success: boolean;
  transactionId: string;
  modelId: string;
  price: number;
  currency: string;
  purchasedAt: Date;
  license: string;
}

export interface SellResult {
  success: boolean;
  listingId: string;
  modelId: string;
  price: number;
  currency: string;
  listedAt: Date;
  status: 'active' | 'sold' | 'expired';
}

export interface MarketplaceStats {
  totalModels: number;
  totalTransactions: number;
  totalRevenue: number;
  activeListings: number;
  topCategories: { category: string; count: number }[];
}

export interface TestResult {
  success: boolean;
  output: any;
  latency: number;
  cost: number;
  errors?: string[];
}

export interface BenchmarkResult {
  modelId: string;
  accuracy: number;
  speed: number;
  efficiency: number;
  costPerRequest: number;
  comparison: { metric: string; score: number; rank: number }[];
}

export interface RevenueAnalytics {
  period: string;
  totalRevenue: number;
  revenueByModel: { modelId: string; revenue: number }[];
  revenueByCategory: { category: string; revenue: number }[];
  growthRate: number;
}

export interface PopularModel {
  modelId: string;
  name: string;
  category: string;
  salesCount: number;
  revenue: number;
  rating: number;
}

// Implementation
export class AIMarketplaceServiceImpl implements AIMarketplaceService {
  private models: Map<string, AIModel> = new Map();
  private transactions: any[] = [];
  private listings: any[] = [];

  async listModels(filters?: ModelFilters): Promise<AIModel[]> {
    let models = Array.from(this.models.values());
    
    if (filters) {
      if (filters.category) {
        models = models.filter(m => m.category === filters.category);
      }
      if (filters.priceRange) {
        models = models.filter(m => m.price >= filters.priceRange!.min && m.price <= filters.priceRange!.max);
      }
      if (filters.provider) {
        models = models.filter(m => m.provider === filters.provider);
      }
      if (filters.tags && filters.tags.length > 0) {
        models = models.filter(m => filters.tags!.some(tag => m.tags.includes(tag)));
      }
      if (filters.performance) {
        if (filters.performance.minAccuracy) {
          models = models.filter(m => m.performance.accuracy >= filters.performance!.minAccuracy!);
        }
        if (filters.performance.minSpeed) {
          models = models.filter(m => m.performance.speed >= filters.performance!.minSpeed!);
        }
      }
    }
    
    return models;
  }

  async getModel(id: string): Promise<AIModel> {
    const model = this.models.get(id);
    if (!model) {
      throw new Error(`Model with id ${id} not found`);
    }
    return model;
  }

  async createModel(model: Omit<AIModel, 'id' | 'createdAt' | 'updatedAt'>): Promise<AIModel> {
    const newModel: AIModel = {
      ...model,
      id: `model_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.models.set(newModel.id, newModel);
    return newModel;
  }

  async updateModel(id: string, updates: Partial<AIModel>): Promise<AIModel> {
    const model = await this.getModel(id);
    const updatedModel = { ...model, ...updates, updatedAt: new Date() };
    this.models.set(id, updatedModel);
    return updatedModel;
  }

  async deleteModel(id: string): Promise<void> {
    if (!this.models.has(id)) {
      throw new Error(`Model with id ${id} not found`);
    }
    this.models.delete(id);
  }

  async purchaseModel(modelId: string, userId: string): Promise<PurchaseResult> {
    const model = await this.getModel(modelId);
    
    const transaction = {
      id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      modelId,
      userId,
      price: model.price,
      currency: model.currency,
      timestamp: new Date()
    };
    
    this.transactions.push(transaction);
    
    return {
      success: true,
      transactionId: transaction.id,
      modelId,
      price: model.price,
      currency: model.currency,
      purchasedAt: transaction.timestamp,
      license: `LICENSE_${transaction.id}`
    };
  }

  async sellModel(modelId: string, userId: string, price: number): Promise<SellResult> {
    const listing = {
      id: `listing_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      modelId,
      userId,
      price,
      currency: 'USD',
      listedAt: new Date(),
      status: 'active' as const
    };
    
    this.listings.push(listing);
    
    return {
      success: true,
      listingId: listing.id,
      modelId,
      price,
      currency: listing.currency,
      listedAt: listing.listedAt,
      status: listing.status
    };
  }

  async getMarketplaceStats(): Promise<MarketplaceStats> {
    const totalModels = this.models.size;
    const totalTransactions = this.transactions.length;
    const totalRevenue = this.transactions.reduce((sum, t) => sum + t.price, 0);
    const activeListings = this.listings.filter(l => l.status === 'active').length;
    
    const categoryCounts = new Map<string, number>();
    this.models.forEach(model => {
      categoryCounts.set(model.category, (categoryCounts.get(model.category) || 0) + 1);
    });
    
    const topCategories = Array.from(categoryCounts.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    
    return {
      totalModels,
      totalTransactions,
      totalRevenue,
      activeListings,
      topCategories
    };
  }

  async testModel(modelId: string, input: any): Promise<TestResult> {
    const model = await this.getModel(modelId);
    const startTime = Date.now();
    
    try {
      // Simulate AI model processing
      await new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50));
      
      const latency = Date.now() - startTime;
      const cost = model.price * 0.01; // 1% of model price per request
      
      return {
        success: true,
        output: `AI output for ${model.name}: ${JSON.stringify(input)}`,
        latency,
        cost
      };
    } catch (error) {
      return {
        success: false,
        output: null,
        latency: Date.now() - startTime,
        cost: 0,
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  async benchmarkModel(modelId: string): Promise<BenchmarkResult> {
    const model = await this.getModel(modelId);
    
    // Simulate benchmarking
    const accuracy = 0.85 + Math.random() * 0.1;
    const speed = 100 + Math.random() * 200;
    const efficiency = 0.7 + Math.random() * 0.2;
    const costPerRequest = model.price * 0.01;
    
    const comparison = [
      { metric: 'accuracy', score: accuracy, rank: Math.floor(Math.random() * 10) + 1 },
      { metric: 'speed', score: speed, rank: Math.floor(Math.random() * 10) + 1 },
      { metric: 'efficiency', score: efficiency, rank: Math.floor(Math.random() * 10) + 1 }
    ];
    
    return {
      modelId,
      accuracy,
      speed,
      efficiency,
      costPerRequest,
      comparison
    };
  }

  async getRevenueAnalytics(userId: string, period: 'daily' | 'weekly' | 'monthly' | 'yearly'): Promise<RevenueAnalytics> {
    const userTransactions = this.transactions.filter(t => t.userId === userId);
    const totalRevenue = userTransactions.reduce((sum, t) => sum + t.price, 0);
    
    const revenueByModel = new Map<string, number>();
    userTransactions.forEach(t => {
      revenueByModel.set(t.modelId, (revenueByModel.get(t.modelId) || 0) + t.price);
    });
    
    const revenueByCategory = new Map<string, number>();
    userTransactions.forEach(t => {
      const model = this.models.get(t.modelId);
      if (model) {
        revenueByCategory.set(model.category, (revenueByCategory.get(model.category) || 0) + t.price);
      }
    });
    
    return {
      period,
      totalRevenue,
      revenueByModel: Array.from(revenueByModel.entries()).map(([modelId, revenue]) => ({ modelId, revenue })),
      revenueByCategory: Array.from(revenueByCategory.entries()).map(([category, revenue]) => ({ category, revenue })),
      growthRate: Math.random() * 0.5 - 0.25 // Random growth rate between -25% and +25%
    };
  }

  async getPopularModels(limit: number): Promise<PopularModel[]> {
    const modelSales = new Map<string, { sales: number; revenue: number; ratings: number[] }>();
    
    this.transactions.forEach(t => {
      const current = modelSales.get(t.modelId) || { sales: 0, revenue: 0, ratings: [] };
      current.sales += 1;
      current.revenue += t.price;
      current.ratings.push(4 + Math.random() * 2); // Random rating between 4-6
      modelSales.set(t.modelId, current);
    });
    
    return Array.from(modelSales.entries())
      .map(([modelId, stats]) => {
        const model = this.models.get(modelId);
        return {
          modelId,
          name: model?.name || 'Unknown Model',
          category: model?.category || 'unknown',
          salesCount: stats.sales,
          revenue: stats.revenue,
          rating: stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length
        };
      })
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, limit);
  }
}

export const aiMarketplaceService = new AIMarketplaceServiceImpl();