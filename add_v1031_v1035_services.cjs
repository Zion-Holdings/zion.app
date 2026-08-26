const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'app', 'data', 'servicesData.json');
const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const existingIds = new Set(data.map(s => s.id));

const CONTACT = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

const newServices = [
  // V1031 - Email Analytics Services
  {
    id: "email-analytics-dashboard-v1031",
    name: "Email Analytics Dashboard",
    category: "AI Services",
    description: "AI-powered comprehensive email performance analytics with real-time dashboards, engagement heatmaps, sentiment tracking, and reply-all compliance monitoring. Get actionable insights to optimize every email interaction.",
    features: ["Real-time metrics dashboard", "Engagement heatmaps", "Sentiment analytics", "Reply-all compliance tracking", "Response time benchmarking", "Custom KPIs per team"],
    price: "From $89/mo",
    icon: "📊",
    contactInfo: CONTACT,
    link: "/services/email-analytics-dashboard-v1031"
  },
  {
    id: "email-engagement-optimizer",
    name: "Email Engagement Optimizer",
    category: "AI Services",
    description: "AI analyzes open rates, click patterns, and reply behaviors to automatically optimize email content, timing, and subject lines for maximum engagement across all your campaigns.",
    features: ["Open rate optimization", "Click pattern analysis", "Subject line AI scoring", "Send time optimization", "A/B test automation", "Engagement prediction"],
    price: "From $79/mo",
    icon: "📈",
    contactInfo: CONTACT,
    link: "/services/email-engagement-optimizer"
  },
  // V1032 - Backup & Recovery Services
  {
    id: "email-backup-recovery-v1032",
    name: "Email Backup & Disaster Recovery",
    category: "IT Services",
    description: "Enterprise-grade automated email backup with AES-256 encryption, SHA-256 integrity verification, and instant disaster recovery. Zero data loss guarantee with HIPAA, GDPR, SOC2 compliance.",
    features: ["AES-256-GCM encryption", "SHA-256 integrity verification", "Instant disaster recovery", "365-day retention policies", "Cross-platform support", "Compliance-ready"],
    price: "From $69/mo",
    icon: "💾",
    contactInfo: CONTACT,
    link: "/services/email-backup-recovery-v1032"
  },
  {
    id: "email-archival-compliance",
    name: "Email Archival & Compliance Service",
    category: "IT Services",
    description: "Long-term email archival with full-text search, legal hold capabilities, eDiscovery support, and automated compliance retention for regulated industries.",
    features: ["Unlimited archival storage", "Full-text search engine", "Legal hold management", "eDiscovery workflows", "Retention automation", "Audit trail logging"],
    price: "From $59/mo",
    icon: "🗄️",
    contactInfo: CONTACT,
    link: "/services/email-archival-compliance"
  },
  // V1033 - Campaign Services
  {
    id: "ai-email-campaign-manager-v1033",
    name: "AI Email Campaign Manager",
    category: "AI Services",
    description: "AI-powered email campaign creation with intelligent subject line generation, timezone-aware scheduling, automated A/B testing, and real-time performance optimization.",
    features: ["AI subject line generation", "Smart timezone scheduling", "Automated A/B testing", "Personalization engine", "CAN-SPAM compliance", "Performance analytics"],
    price: "From $129/mo",
    icon: "📣",
    contactInfo: CONTACT,
    link: "/services/ai-email-campaign-manager-v1033"
  },
  {
    id: "email-drip-campaign-builder",
    name: "AI Drip Campaign Builder",
    category: "Micro SaaS",
    description: "Build automated multi-step email drip campaigns with AI-optimized timing, content personalization, lead scoring integration, and conversion tracking.",
    features: ["Visual campaign builder", "AI timing optimization", "Lead scoring integration", "Conversion tracking", "Conditional branching", "Multi-channel triggers"],
    price: "From $99/mo",
    icon: "💧",
    contactInfo: CONTACT,
    link: "/services/email-drip-campaign-builder"
  },
  // V1034 - Security Services
  {
    id: "email-encryption-service-v1034",
    name: "Enterprise Email Encryption",
    category: "Security Services",
    description: "End-to-end AES-256-GCM email encryption with real-time DLP scanning, automatic PII/PHI redaction, key management, and multi-framework compliance (HIPAA, GDPR, SOC2, PCI-DSS).",
    features: ["AES-256-GCM encryption", "DLP scanning engine", "PII/PHI auto-redaction", "Key management system", "Multi-compliance framework", "Audit trail"],
    price: "From $149/mo",
    icon: "🔐",
    contactInfo: CONTACT,
    link: "/services/email-encryption-service-v1034"
  },
  {
    id: "email-phishing-defense-pro",
    name: "AI Phishing Defense Pro",
    category: "Security Services",
    description: "Advanced AI-powered phishing detection with real-time URL scanning, sender verification, attachment sandboxing, and automated threat response with SOC integration.",
    features: ["Real-time URL scanning", "Sender SPF/DKIM/DMARC verification", "Attachment sandboxing", "AI threat scoring", "Automated quarantine", "SOC integration"],
    price: "From $119/mo",
    icon: "🛡️",
    contactInfo: CONTACT,
    link: "/services/email-phishing-defense-pro"
  },
  {
    id: "email-zero-trust-gateway",
    name: "Email Zero Trust Gateway",
    category: "Security Services",
    description: "Zero-trust email security gateway that verifies every sender, scans every attachment, and enforces granular policies per user, department, and email type.",
    features: ["Zero-trust architecture", "Per-email policy enforcement", "Advanced threat protection", "URL rewriting & sandboxing", "Data loss prevention", "Quarantine management"],
    price: "From $199/mo",
    icon: "🔒",
    contactInfo: CONTACT,
    link: "/services/email-zero-trust-gateway"
  },
  // V1035 - Collaboration Services
  {
    id: "email-collaboration-tools-v1035",
    name: "Email Collaboration Suite",
    category: "Micro SaaS",
    description: "Shared team inboxes with smart assignments, internal notes, @mentions, SLA tracking, intelligent routing, and mandatory reply-all enforcement for seamless team email workflows.",
    features: ["Shared team inboxes", "Smart auto-assignment", "Internal notes & @mentions", "SLA tracking", "Department auto-routing", "Reply-all enforcement"],
    price: "From $99/mo",
    icon: "👥",
    contactInfo: CONTACT,
    link: "/services/email-collaboration-tools-v1035"
  },
  {
    id: "ai-email-assistant-chatbot",
    name: "AI Email Assistant Chatbot",
    category: "AI Services",
    description: "Conversational AI chatbot that helps teams manage emails through natural language — draft replies, search emails, schedule sends, and get email summaries via chat.",
    features: ["Natural language email management", "AI draft generation", "Email search via chat", "Send scheduling", "Summary generation", "Slack/Teams integration"],
    price: "From $79/mo",
    icon: "🤖",
    contactInfo: CONTACT,
    link: "/services/ai-email-assistant-chatbot"
  },
  // New Diversified Services - IT
  {
    id: "kubernetes-autoscaling-service",
    name: "Kubernetes Intelligent Autoscaling",
    category: "IT Services",
    description: "AI-driven Kubernetes autoscaling that predicts traffic spikes, optimizes resource allocation, and reduces cloud costs by up to 40% with predictive HPA/VPA/KEDA integration.",
    features: ["Predictive HPA/VPA scaling", "Cost optimization engine", "Traffic spike prediction", "Multi-cluster management", "Resource right-sizing", "Real-time monitoring"],
    price: "From $299/mo",
    icon: "⚙️",
    contactInfo: CONTACT,
    link: "/services/kubernetes-autoscaling-service"
  },
  {
    id: "database-performance-tuning",
    name: "AI Database Performance Tuning",
    category: "IT Services",
    description: "Autonomous database optimization using AI to analyze query patterns, recommend index changes, detect slow queries, and auto-tune PostgreSQL, MySQL, and MongoDB for peak performance.",
    features: ["Query pattern analysis", "Index recommendation engine", "Slow query detection", "Auto-tuning for PostgreSQL/MySQL/MongoDB", "Performance baselining", "Cost-based optimization"],
    price: "From $199/mo",
    icon: "🗃️",
    contactInfo: CONTACT,
    link: "/services/database-performance-tuning"
  },
  {
    id: "cdn-optimization-service",
    name: "Global CDN Optimization Service",
    category: "IT Services",
    description: "AI-powered CDN optimization that automatically selects edge locations, configures caching rules, optimizes image delivery, and reduces global latency by up to 60%.",
    features: ["Smart edge location selection", "AI caching rules", "Image optimization pipeline", "Real-time latency monitoring", "Multi-CDN failover", "Cost analytics"],
    price: "From $149/mo",
    icon: "🌐",
    contactInfo: CONTACT,
    link: "/services/cdn-optimization-service"
  },
  // New Diversified Services - AI
  {
    id: "ai-document-extraction-api",
    name: "AI Document Data Extraction API",
    category: "AI Services",
    description: "Extract structured data from any document type — invoices, contracts, receipts, IDs — using multimodal AI with 99%+ accuracy. REST API with webhook support.",
    features: ["Multi-format extraction (PDF, images, scans)", "Invoice & receipt parsing", "Contract clause extraction", "ID/passport OCR", "REST API + webhooks", "99%+ accuracy"],
    price: "From $0.01/page",
    icon: "📄",
    contactInfo: CONTACT,
    link: "/services/ai-document-extraction-api"
  },
  {
    id: "ai-meeting-transcription-service",
    name: "AI Meeting Transcription & Summary",
    category: "AI Services",
    description: "Real-time meeting transcription with AI-generated summaries, action items, decision tracking, and automatic CRM/email integration. Supports 40+ languages.",
    features: ["Real-time transcription", "AI summary generation", "Action item extraction", "Decision tracking", "CRM auto-logging", "40+ language support"],
    price: "From $29/mo",
    icon: "🎙️",
    contactInfo: CONTACT,
    link: "/services/ai-meeting-transcription-service"
  },
  {
    id: "ai-code-review-assistant",
    name: "AI Code Review Assistant",
    category: "AI Services",
    description: "Automated AI code review that detects bugs, security vulnerabilities, performance issues, and style violations across 50+ programming languages with PR integration.",
    features: ["Bug detection across 50+ languages", "Security vulnerability scanning", "Performance analysis", "Style enforcement", "GitHub/GitLab PR integration", "Auto-fix suggestions"],
    price: "From $49/mo per developer",
    icon: "🔍",
    contactInfo: CONTACT,
    link: "/services/ai-code-review-assistant"
  },
  // New Diversified Services - Cloud
  {
    id: "multi-cloud-cost-optimizer",
    name: "Multi-Cloud Cost Optimizer",
    category: "Cloud Services",
    description: "AI-driven multi-cloud cost optimization across AWS, Azure, and GCP. Identifies waste, recommends reserved instances, right-sizes resources, and saves up to 45% on cloud bills.",
    features: ["Cross-cloud cost analysis", "Waste identification engine", "Reserved instance recommendations", "Resource right-sizing", "Budget alerting", "FinOps dashboards"],
    price: "From $199/mo",
    icon: "☁️",
    contactInfo: CONTACT,
    link: "/services/multi-cloud-cost-optimizer"
  },
  {
    id: "serverless-migration-service",
    name: "Serverless Migration Service",
    category: "Cloud Services",
    description: "End-to-end serverless migration from monoliths to AWS Lambda, Azure Functions, or Google Cloud Functions with automated code refactoring, testing, and deployment.",
    features: ["Monolith-to-serverless analysis", "Automated code refactoring", "Infrastructure-as-code generation", "Performance testing", "Cost projection", "Phased migration planning"],
    price: "From $5,000/project",
    icon: "🚀",
    contactInfo: CONTACT,
    link: "/services/serverless-migration-service"
  },
  // New Diversified Services - Data
  {
    id: "real-time-data-pipeline-builder",
    name: "Real-Time Data Pipeline Builder",
    category: "Data Services",
    description: "Build and deploy real-time data pipelines with visual drag-and-drop interface. Supports Kafka, RabbitMQ, AWS Kinesis, and 100+ connectors for ETL, streaming, and analytics.",
    features: ["Visual pipeline builder", "100+ source/destination connectors", "Kafka/Kinesis/RabbitMQ support", "Real-time transformations", "Schema evolution handling", "Auto-scaling"],
    price: "From $249/mo",
    icon: "🔄",
    contactInfo: CONTACT,
    link: "/services/real-time-data-pipeline-builder"
  },
  {
    id: "data-quality-monitoring-platform",
    name: "AI Data Quality Monitoring Platform",
    category: "Data Services",
    description: "Continuous AI-powered data quality monitoring that detects anomalies, validates schemas, tracks data freshness, and alerts on quality degradation across all your data sources.",
    features: ["Anomaly detection engine", "Schema validation", "Data freshness tracking", "Quality score dashboards", "Alert system", "Root cause analysis"],
    price: "From $179/mo",
    icon: "✅",
    contactInfo: CONTACT,
    link: "/services/data-quality-monitoring-platform"
  },
  // New Diversified Services - Automation
  {
    id: "ai-workflow-automation-platform",
    name: "AI Workflow Automation Platform",
    category: "Automation Services",
    description: "No-code AI workflow automation that connects 500+ apps, triggers actions based on intelligent conditions, and self-heals broken workflows with AI-powered error recovery.",
    features: ["500+ app integrations", "Visual workflow builder", "AI error recovery", "Conditional logic engine", "Scheduled triggers", "Execution analytics"],
    price: "From $79/mo",
    icon: "⚡",
    contactInfo: CONTACT,
    link: "/services/ai-workflow-automation-platform"
  },
  {
    id: "rpa-intelligent-automation",
    name: "RPA Intelligent Process Automation",
    category: "Automation Services",
    description: "AI-enhanced robotic process automation that handles complex business processes across legacy systems, web apps, and APIs with self-learning bots and human-in-the-loop workflows.",
    features: ["Self-learning AI bots", "Legacy system integration", "Web app automation", "API orchestration", "Human-in-the-loop", "Process analytics"],
    price: "From $399/mo",
    icon: "🤖",
    contactInfo: CONTACT,
    link: "/services/rpa-intelligent-automation"
  },
  // New Diversified Services - Micro SaaS
  {
    id: "ai-invoice-processing-saas",
    name: "AI Invoice Processing SaaS",
    category: "Micro SaaS",
    description: "Automated invoice processing using AI-OCR that extracts line items, matches POs, validates tax calculations, and routes for approval — reducing AP processing time by 80%.",
    features: ["AI-OCR invoice extraction", "PO matching engine", "Tax validation", "Approval routing", "ERP integration (SAP, Oracle, QuickBooks)", "Duplicate detection"],
    price: "From $0.05/invoice",
    icon: "🧾",
    contactInfo: CONTACT,
    link: "/services/ai-invoice-processing-saas"
  },
  {
    id: "customer-churn-prediction-saas",
    name: "Customer Churn Prediction SaaS",
    category: "Micro SaaS",
    description: "AI-powered customer churn prediction that analyzes usage patterns, support interactions, and billing data to identify at-risk customers and trigger retention campaigns automatically.",
    features: ["ML churn scoring", "Usage pattern analysis", "Support interaction monitoring", "Retention campaign triggers", "Revenue impact projection", "CRM integration"],
    price: "From $149/mo",
    icon: "📉",
    contactInfo: CONTACT,
    link: "/services/customer-churn-prediction-saas"
  },
  {
    id: "ai-contract-analysis-platform",
    name: "AI Contract Analysis Platform",
    category: "Micro SaaS",
    description: "AI-powered contract analysis that extracts key clauses, identifies risks, compares against templates, and generates redline suggestions — reducing legal review time by 70%.",
    features: ["Clause extraction engine", "Risk identification AI", "Template comparison", "Redline suggestion generation", "Multi-language support", "Version tracking"],
    price: "From $199/mo",
    icon: "📝",
    contactInfo: CONTACT,
    link: "/services/ai-contract-analysis-platform"
  }
];

// Deduplicate against existing
let added = 0;
for (const svc of newServices) {
  let id = svc.id;
  let suffix = 2;
  while (existingIds.has(id)) {
    id = `${svc.id}_${suffix}`;
    suffix++;
  }
  svc.id = id;
  existingIds.add(id);
  data.push(svc);
  added++;
}

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
console.log(`Added ${added} new services. Total: ${data.length}`);
