export type NavigationLink = {
  name: string;
  href: string;
  aliases?: readonly string[];
};

export const PRIMARY_NAV_LINKS: readonly NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/services/' },
  { name: 'Services', href: '/services/' },
  { name: 'Partners', href: '/partners/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Pricing', href: '/pricing/' },
  { name: 'Contact', href: '/contact/' },
];

export const SOLUTION_LINKS: readonly NavigationLink[] = [
  { name: 'All Solutions', href: '/services/' },
  { name: 'AI & Automation', href: '/services/?category=ai' },
  { name: 'IT & Infrastructure', href: '/services/?category=it' },
  { name: 'Cloud & DevOps', href: '/services/?category=cloud' },
  { name: 'Security & Compliance', href: '/services/?category=security' },
  { name: 'Data & Analytics', href: '/services/?category=data' },
  { name: 'Industry Solutions', href: '/industry-solutions/' },
];
// Resource Links
export const RESOURCE_LINKS: readonly NavigationLink[] = [
  { name: 'Partners', href: '/partners/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Search', href: '/search/' },
  { name: 'Proposal Generator', href: '/proposal-generator/' },
  { name: 'ROI Calculator', href: '/tools/roi-calculator/' },
  { name: 'Service Comparison', href: '/tools/service-comparison/' },
  { name: 'Service Recommender', href: '/tools/service-recommender/' },
  { name: 'AI Service Router', href: '/tools/ai-service-router/' },
  { name: 'Port Scanner', href: '/tools/port-scanner/' },
  { name: 'SSL Checker', href: '/tools/ssl-checker/' },
  { name: 'Platform Status', href: '/tools/health-check/' },
  { name: 'Client Portal', href: '/portal/' },
];

export const FEATURED_AI_SERVICE_LINKS: readonly NavigationLink[] = [
  {
    name: 'AI-Powered DevOps',
    href: '/services/devops-gen-ai-ci-cd/',
    aliases: ['/services/it-devops-platform-toolchain'],
  },
  {
    name: 'AI Email Analyzer',
    href: '/services/ai-email-intelligence/',
    aliases: ['/services/ai-email-marketing'],
  },
  { name: 'Zion AI Customer Support Pro', href: '/services/ai-customer-support/' },
  { name: 'Zion AI Predictive Analytics', href: '/services/ai-analytics/' },
];

export const AI_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'Advanced AI & Enterprise Intelligence Hub', href: '/services/advanced-ai-enterprise-intelligence-hub/' },
  { name: 'Ai 3D Asset Generator', href: '/services/ai-3d-asset-generator/' },
  { name: 'AI Accessibility Auditor', href: '/services/ai-accessibility-auditor/' },
  { name: 'AI Accessibility Content Optimizer', href: '/services/ai-accessibility-optimizer/' },
  { name: 'Ai Ad Copy Generator', href: '/services/ai-ad-copy-generator/' },
  { name: 'Ai Agent Safety Evaluation', href: '/services/ai-agent-safety-evaluation/' },
  { name: 'AI Agent Tool Builder', href: '/services/ai-agent-tool-builder/' },
  { name: 'AI Agentic Workflow Automation', href: '/services/ai-agentic-workflows/' },
  { name: 'AI Agents & Autonomous Workflows', href: '/services/ai-agents-autonomous/' },
  { name: 'AI-AIOps Anomaly Detection', href: '/services/ai-aiops-anomaly-detection/' },
  { name: 'AI Analytics & BI', href: '/services/ai-analytics/' },
  { name: 'Ai Api Orchestration Layer', href: '/services/ai-api-orchestration-layer/' },
  { name: 'Automated Reporting Engine', href: '/services/ai-automated-reporting/' },
  { name: 'AI Automation', href: '/services/ai-automation/' },
  { name: 'Autonomous Code Deployment Agent', href: '/services/ai-autonomous-code-deployment/' },
  { name: 'Autonomous QA Engineering Platform', href: '/services/ai-autonomous-qa-engineering/' },
  { name: 'AI BDR/SDR Agent', href: '/services/ai-bdr-sdr/' },
  { name: 'AI BOM & Procurement Optimiser', href: '/services/ai-bom-procurement/' },
  { name: 'AI Brand Voice Guardian', href: '/services/ai-brand-voice-guardian/' },
  { name: 'AI Carbon Footprint Optimizer', href: '/services/ai-carbon-optimizer/' },
  { name: 'Contract Lifecycle Intelligence', href: '/services/ai-contract-lifecycle-intelligence/' },
  { name: 'AI Customer Support', href: '/services/ai-customer-support/' },
  { name: 'AI Document Intelligence', href: '/services/ai-document-intelligence/' },
  { name: 'Fintech Fraud Graph', href: '/services/ai-fintech-fraud-graph/' },
  { name: 'AI Knowledge Graph Search Engine', href: '/services/ai-knowledge-graph-search-deep/' },
  { name: 'AI Knowledge Management', href: '/services/ai-knowledge-management/' },
  { name: 'AI Lead Generation & Enrichment', href: '/services/ai-lead-generation/' },
  { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence/' },
  { name: 'Sustainable Supply Chain Radar', href: '/services/ai-sustainable-supply-chain-radar/' },
  { name: 'Voice-First CRM & Sales Assistant', href: '/services/ai-voice-first-crm/' },
  { name: 'HR Analytics & People Intelligence', href: '/services/ai-analytics/' },
  { name: 'AI Chronic Disease Progression Tracker', href: '/services/ai-chronic-disease-tracker/' },
];

export const FEATURED_PRODUCT_LINKS: readonly NavigationLink[] = [
  { name: 'Zion Analytics Pro', href: '/services/ai-analytics/' },
  { name: 'Zion CRM Intelligence', href: '/services/ai-crm-automation-suite/' },
  { name: 'Zion Lead Magnet', href: '/services/ai-lead-generation/' },
];

export const AUTOMATION_LINKS: readonly NavigationLink[] = [
  {
    name: 'Smart CRM Automation',
    href: '/services/ai-crm-automation-suite/',
    aliases: ['/services/ai-crm-automation-suite'],
  },
];

export const PRODUCT_LINKS: readonly NavigationLink[] = [
  { name: 'Zion Analytics Pro', href: '/services/ai-analytics/' },
  { name: 'Zion CRM Intelligence', href: '/services/ai-crm-automation-suite/' },
  { name: 'Zion Lead Magnet', href: '/services/ai-lead-generation/' },
];

export const IT_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'Accessibility & WCAG Compliance', href: '/services/accessibility-compliance/' },
  { name: 'API Gateway & Management', href: '/services/api-gateway-management/' },
  { name: 'API Development & Integration', href: '/services/api-integration/' },
  { name: 'API Management & Developer Gateway', href: '/services/api-management-gateway/' },
  { name: 'APM Application Performance', href: '/services/apm-application-performance/' },
  { name: 'Chaos Engineering & Resilience Testing', href: '/services/chaos-engineering-svc/' },
  { name: 'Cloud FinOps & Cost Intelligence', href: '/services/cloud-finops-1/' },
  { name: 'Cloud-Native Application Development', href: '/services/cloud-native-app-dev/' },
  { name: 'Container & Kubernetes Security', href: '/services/container-security-lifecycle/' },
  { name: 'AI Cyber Threat Intelligence Platform', href: '/services/cyber-threat-intelligence/' },
  { name: 'AI Data Warehouse Modernization', href: '/services/data-warehouse-modernization/' },
  { name: 'Database Migration Service', href: '/services/db-migration-service/' },
  { name: 'Generative AI for DevOps & CI/CD', href: '/services/devops-gen-ai-ci-cd/' },
  { name: 'DevSecOps Pipeline Automation', href: '/services/devsecops-pipeline/' },
  { name: 'Edge Computing & Edge AI Deployment', href: '/services/edge-computing-deploy/' },
  { name: 'Unified Endpoint Management (UEM)', href: '/services/endpoint-management/' },
  { name: 'Enterprise Backup & Disaster Recovery', href: '/services/enterprise-backup-dr/' },
  { name: 'ETL Pipeline Optimization & Modernization', href: '/services/etl-pipeline-optimization/' },
  { name: 'Event-Driven Architecture (EDA) Platform', href: '/services/event-driven-architecture/' },
  { name: 'EVM Smart Contract Audit', href: '/services/evm-smart-contract-audit/' },
  { name: 'Incident Response Retainer (IR)', href: '/services/incident-response-retainer/' },
  { name: 'AI API Gateway', href: '/services/api-gateway-management/' },
  { name: 'API Gateway Management', href: '/services/api-gateway-management/' },
  { name: 'API Gateway + OpenAPI Management', href: '/services/it-api-gateway-openapi/' },
  { name: 'API Management & Gateway', href: '/services/it-api-management-gateway/' },
  { name: 'It Api Performance Testing', href: '/services/it-api-performance-testing/' },
  { name: 'API Security Testing', href: '/services/it-apisec-testing/' },
  { name: 'Backup & Disaster Recovery Solution', href: '/services/it-backup-disaster-recovery-solution/' },
  { name: 'Backup / DR/BCaaS', href: '/services/it-backup-dr-bc-as-a-service/' },
  { name: 'AI-Powered Performance Monitoring', href: '/services/ai-performance-monitoring/' },
  { name: 'GraphQL Federation & API Composition Platform', href: '/services/graphql-federation-platform/' },
 ];
export const CLOUD_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'API Development & Integration', href: '/services/api-integration/' },
  { name: 'Data Lakehouse Platform', href: '/services/cloud-data-lakehouse-platform/' },
  { name: 'Edge AI Deployment Platform', href: '/services/cloud-edge-ai-deployment-platform/' },
  { name: 'Event-Driven Microservices Platform', href: '/services/cloud-event-driven-microservices/' },
  { name: 'Hybrid + Multi-Cloud Networking', href: '/services/cloud-hybrid-multicloud-networking/' },
  { name: 'Cloud Migration & Modernization', href: '/services/cloud-migration/' },
  { name: 'Hybrid Multi-Cloud Networking', href: '/services/cloud-hybrid-multicloud-networking/' },
 ];
export const SECURITY_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'Cybersecurity & Penetration Testing', href: '/services/cybersecurity/' },
  { name: 'SBOM & Supply Chain Security', href: '/services/security-sbom-supply-chain/' },
  { name: 'Software Bill-of-Materials Manager', href: '/services/security-supply-chain-sbom-manager/' },
  { name: 'Web Application Firewall', href: '/services/security-web-application-firewall/' },
 ];
export const DATA_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'Graph Analytics & Network Intelligence', href: '/services/data-graph-analytics-platform/' },
  { name: 'Data Lakehouse Platform', href: '/services/cloud-data-lakehouse-platform/' },
  { name: 'Real-time Event & Trending Aggregator', href: '/services/data-realtime-trending-aggregator/' },
 ];
export const AUTOMATION_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'Legal Document Intelligence Pipeline', href: '/services/automation-document-intelligence-pipeline/' },
  { name: 'Integrated Commerce Flow Orchestrator', href: '/services/automation-integrated-commerce-flows/' },
  { name: 'Multi-Channel Campaign Manager', href: '/services/automation-multi-channel-campaign-manager/' },
  { name: 'Multi-Channel Campaign Orchestrator', href: '/services/automation-multi-channel-campaign-orchestrator/' },
  { name: 'DevOps & CI/CD Automation', href: '/services/devops-cicd/' },
 ];