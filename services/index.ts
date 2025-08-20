// Export all micro SaaS services
export { aiContentGeneratorService } from './aiContentGeneratorService';
export { seoAutomationService } from './seoAutomationService';
export { aiChatbotService } from './aiChatbotService';
export { businessIntelligenceService } from './businessIntelligenceService';
export { cloudCostOptimizerService } from './cloudCostOptimizerService';
export { gitService } from './gitService';
export { aiContentService } from './aiContentService';
export { cloudCostService } from './cloudCostService';
export { aiLegalService } from './aiLegalService';
export { aiSalesService } from './aiSalesService';
export { aiHrService } from './aiHrService';
export { designSystemBuilderService } from './designSystemBuilderService';
export { performanceMonitorService } from './performanceMonitorService';
export { videoEditingService } from './videoEditingService';

// Export types
export type {
  ContentTemplate,
  GeneratedContent,
  ContentAnalytics
} from './aiContentGeneratorService';

export type {
  KeywordData,
  OnPageOptimization,
  TechnicalSEOAudit,
  CompetitorAnalysis,
  SEORanking
} from './seoAutomationService';

export type {
  ChatMessage,
  Conversation,
  TrainingData,
  ChatbotAnalytics,
  ChatbotConfig
} from './aiChatbotService';

export type {
  DataSource,
  Dashboard,
  Widget,
  Filter,
  Report,
  KPI
} from './businessIntelligenceService';

export type {
  CloudResource,
  CostOptimization,
  CostAlert,
  CostBudget,
  CostReport,
  ResourceRecommendation
} from './cloudCostOptimizerService';

export type {
  GitFileStatus,
  GitCommit,
  GitBranch,
  GitRemote,
  GitStatus
} from './gitService';

export type {
  ContentRequest,
  ContentResponse,
  ContentTemplate as ContentTemplateLegacy
} from './aiContentService';

export type {
  CloudResource as CloudResourceLegacy,
  CostAnalysis,
  BudgetAlert,
  OptimizationRecommendation
} from './cloudCostService';

export type {
  LegalDocument,
  ContractTemplate,
  LegalReview,
  ComplianceCheck,
  DocumentGenerationRequest
} from './aiLegalService';

export type {
  Lead,
  LeadInteraction,
  SalesPipeline,
  SalesForecast,
  LeadScoringCriteria,
  SalesAutomation
} from './aiSalesService';

export type {
  Candidate,
  JobPosting,
  Employee,
  PerformanceReview,
  TrainingRecord,
  Document,
  RecruitmentMetrics
} from './aiHrService';

export type {
  DesignComponent,
  ComponentVariant,
  ComponentProp,
  DesignToken,
  ComponentUsage,
  DesignSystem
} from './designSystemBuilderService';

export type {
  PerformanceMetric,
  CoreWebVitals,
  PerformanceAlert,
  PerformanceReport,
  ResourceTiming,
  ErrorEvent
} from './performanceMonitorService';

export type {
  VideoProject,
  VideoResolution,
  VideoFormat,
  VideoClip,
  VideoEffect,
  VideoTimeline,
  VideoTrack,
  VideoExportOptions,
  VideoAnalytics
} from './videoEditingService';
