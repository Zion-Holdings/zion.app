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
export { aiCodeReviewService } from './aiCodeReviewService';
export { apiDocGeneratorService } from './apiDocGeneratorService';
export { databasePerformanceMonitorService } from './databasePerformanceMonitorService';

// New innovative services
export { aiMarketplaceService } from './aiMarketplaceService';
export { quantumComputingService } from './quantumComputingService';
export { blockchainService } from './blockchainService';
export { AIEvalService } from './aiEvalService';
export { AIAgentOrchestratorService } from './aiAgentOrchestratorService';
export { AIGuardrailsService } from './aiGuardrailsService';
export { AgenticRAGService } from './agenticRAGService';

// Advanced AI & IT Services
export { aiCybersecurityService } from './aiCybersecurityService';
export { aiDevOpsService } from './aiDevOpsService';
export { aiDataEngineeringService } from './aiDataEngineeringService';
export { aiFintechService } from './aiFintechService';
export { aiHealthcareService } from './aiHealthcareService';

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
  DataSource as BIDataSource,
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
  ComplianceCheck as LegalComplianceCheck,
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

export type {
  CodeReview,
  CodeIssue,
  CodeRecommendation,
  CodeMetrics
} from './aiCodeReviewService';

export type {
  APIDocumentation,
  APIEndpoint,
  APIParameter,
  APIRequestBody,
  APIContent,
  APIResponse,
  APIHeader,
  APISchema,
  APIExample,
  ExampleRequest,
  ExampleResponse,
  RateLimit,
  AuthenticationRequirement,
  DocumentationConfig
} from './apiDocGeneratorService';

export type {
  DatabaseConnection,
  ConnectionMetrics,
  QueryPerformance,
  ExecutionPlan,
  PlanNode,
  QueryMetrics,
  QueryRecommendation,
  DatabaseMetrics,
  DatabasePerformanceAlert,
  IndexRecommendation
} from './databasePerformanceMonitorService';

// New service types
export type {
  AIModel,
  ModelFilters,
  PurchaseResult,
  SellResult,
  MarketplaceStats,
  TestResult,
  BenchmarkResult,
  RevenueAnalytics,
  PopularModel
} from './aiMarketplaceService';

export type {
  QuantumCircuit,
  QuantumGate,
  QuantumParameter,
  QuantumJob,
  QuantumResult,
  QuantumBackend,
  QuantumAlgorithm,
  QuantumMLModel,
  QuantumPrediction,
  QuantumStats,
  JobAnalytics
} from './quantumComputingService';

export type {
  SmartContract,
  NFT,
  NFTMetadata,
  NFTAttribute,
  DeFiPool,
  BlockchainTransaction,
  TransactionResult,
  BlockchainStats,
  WalletAnalytics,
  NetworkStatus
} from './blockchainService';

// Advanced AI & IT Service types
export type {
  SecurityThreat,
  VulnerabilityAssessment,
  SecurityIncident,
  SecurityEvent,
  SecurityPolicy,
  SecurityRule,
  ComplianceReport as SecurityComplianceReport,
  ComplianceRequirement
} from './aiCybersecurityService';

export type {
  PipelineConfig,
  PipelineStage,
  PipelineTrigger,
  PerformanceThresholds,
  InfrastructureConfig,
  DeploymentMetrics,
  CodeQualityReport,
  SecurityScanResult,
  Vulnerability,
  ComplianceCheck,
  MonitoringAlert
} from './aiDevOpsService';

export type {
  DataPipeline,
  DataSource,
  DataDestination,
  DataTransformation,
  PipelineSchedule,
  PipelineMetrics,
  DataQualityMetrics,
  DataQualityIssue,
  CostMetrics,
  ConnectionConfig,
  DataSchema,
  SchemaField,
  SchemaIndex,
  SchemaConstraint,
  PartitioningStrategy,
  ValidationRule,
  DataCatalog,
  Dataset,
  DataLineage,
  DatasetUsage,
  QueryStats
} from './aiDataEngineeringService';

export type {
  FinancialInstrument,
  Portfolio,
  PortfolioPosition,
  RiskMetrics,
  PerformancePoint,
  RebalancingSchedule,
  TradingSignal,
  MarketAnalysis,
  TechnicalIndicator,
  FundamentalFactor,
  AIInsight,
  RiskAssessment,
  RiskFactor as FintechRiskFactor,
  StressTestResult,
  ComplianceReport,
  ComplianceViolation
} from './aiFintechService';

export type {
  Patient,
  MedicalRecord,
  Medication,
  VitalSigns,
  RiskFactor,
  InsuranceInfo,
  EmergencyContact,
  Diagnosis,
  AIAnalysis,
  DifferentialDiagnosis,
  TreatmentPlan,
  FollowUpSchedule,
  FollowUpAppointment,
  HealthAnalytics,
  RiskAssessment as HealthRiskAssessment,
  TrendAnalysis,
  VitalSignsTrend,
  MedicationTrend,
  SymptomTrend,
  HealthTrend,
  PredictiveInsight
} from './aiHealthcareService';
