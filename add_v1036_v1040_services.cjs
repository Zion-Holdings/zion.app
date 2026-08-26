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
  // V1036 - Negotiation Intelligence Services
  {
    id: "ai-negotiation-coach-v1036",
    name: "AI Email Negotiation Coach",
    category: "AI Services",
    description: "Real-time AI coaching during email negotiations. Detects deal stage, pricing signals, counterpart strategy (anchoring, ultimatum, stalling), and suggests optimal responses with ROI justification.",
    features: ["Deal stage detection", "Pricing signal analysis", "Counterpart strategy detection", "Response coaching", "Competitor mention alerts", "Reply-all enforcement"],
    price: "From $149/mo",
    icon: "🤝",
    contactInfo: CONTACT,
    link: "/services/ai-negotiation-coach-v1036"
  },
  {
    id: "deal-room-intelligence",
    name: "AI Deal Room Intelligence",
    category: "AI Services",
    description: "Virtual deal room with AI-powered document analysis, term extraction, risk scoring, and automated redline suggestions for M&A and enterprise negotiations.",
    features: ["Document AI analysis", "Term extraction engine", "Risk scoring", "Automated redlines", "Multi-party collaboration", "Version control"],
    price: "From $499/mo",
    icon: "🏢",
    contactInfo: CONTACT,
    link: "/services/deal-room-intelligence"
  },
  {
    id: "pricing-optimization-engine",
    name: "AI Pricing Optimization Engine",
    category: "Micro SaaS",
    description: "Dynamic pricing optimization using ML that analyzes market data, competitor pricing, demand elasticity, and customer segments to maximize revenue.",
    features: ["Dynamic pricing AI", "Competitor monitoring", "Demand elasticity modeling", "Segment-based pricing", "A/B price testing", "Revenue forecasting"],
    price: "From $299/mo",
    icon: "💰",
    contactInfo: CONTACT,
    link: "/services/pricing-optimization-engine"
  },
  {
    id: "contract-risk-analyzer",
    name: "AI Contract Risk Analyzer",
    category: "AI Services",
    description: "AI-powered contract analysis that identifies risky clauses, unusual terms, liability gaps, and suggests safer alternatives with compliance checks.",
    features: ["Risk clause detection", "Term comparison engine", "Liability gap analysis", "Compliance checking", "Safer alternative suggestions", "Multi-language support"],
    price: "From $199/mo",
    icon: "⚖️",
    contactInfo: CONTACT,
    link: "/services/contract-risk-analyzer"
  },
  // V1037 - CRM Sync Services
  {
    id: "email-crm-autosync-v1037",
    name: "Email-to-CRM Auto-Sync",
    category: "Micro SaaS",
    description: "Bidirectional sync between email conversations and CRM (Salesforce, HubSpot, Pipedrive). Auto-enriches contacts, classifies intent, tracks deal signals, and logs all interactions.",
    features: ["Bidirectional CRM sync", "Contact auto-enrichment", "Intent classification", "Deal signal extraction", "Sentiment tracking", "Interaction logging"],
    price: "From $99/mo",
    icon: "🔗",
    contactInfo: CONTACT,
    link: "/services/email-crm-autosync-v1037"
  },
  {
    id: "lead-scoring-intelligence",
    name: "AI Lead Scoring Intelligence",
    category: "AI Services",
    description: "ML-powered lead scoring that analyzes email interactions, website behavior, and engagement patterns to predict conversion probability and prioritize sales outreach.",
    features: ["ML lead scoring", "Email interaction analysis", "Behavioral tracking", "Conversion prediction", "Priority ranking", "Sales alert automation"],
    price: "From $179/mo",
    icon: "🎯",
    contactInfo: CONTACT,
    link: "/services/lead-scoring-intelligence"
  },
  {
    id: "customer-360-platform",
    name: "Customer 360 Intelligence Platform",
    category: "AI Services",
    description: "Unified customer intelligence that aggregates data from email, CRM, support, billing, and product usage into a single 360° view with AI-powered insights.",
    features: ["Multi-source data aggregation", "AI customer insights", "Churn prediction", "Upsell opportunity detection", "Lifetime value modeling", "Real-time dashboard"],
    price: "From $349/mo",
    icon: "🌐",
    contactInfo: CONTACT,
    link: "/services/customer-360-platform"
  },
  // V1038 - Thread Summarizer Services
  {
    id: "ai-thread-summarizer-v1038",
    name: "AI Email Thread Summarizer Pro",
    category: "AI Services",
    description: "Compresses 50+ reply email chains into structured summaries with decisions, action items, open questions, and timeline. Saves hours of reading long threads.",
    features: ["Long thread compression", "Decision extraction", "Action item detection", "Question identification", "Timeline generation", "Thread health assessment"],
    price: "From $69/mo",
    icon: "📋",
    contactInfo: CONTACT,
    link: "/services/ai-thread-summarizer-v1038"
  },
  {
    id: "meeting-to-email-sync",
    name: "Meeting-to-Email Action Sync",
    category: "Micro SaaS",
    description: "Automatically syncs meeting outcomes (Zoom, Teams, Google Meet) to email threads with action items, decisions, and follow-up tasks assigned to participants.",
    features: ["Meeting transcript analysis", "Action item extraction", "Decision logging", "Follow-up email generation", "Calendar integration", "Task assignment"],
    price: "From $89/mo",
    icon: "📹",
    contactInfo: CONTACT,
    link: "/services/meeting-to-email-sync"
  },
  {
    id: "knowledge-base-auto-builder",
    name: "AI Knowledge Base Auto-Builder",
    category: "AI Services",
    description: "Automatically builds and maintains a knowledge base from email conversations, support tickets, and documentation. AI-powered search and suggestion engine.",
    features: ["Auto-extraction from emails", "AI-powered search", "Duplicate detection", "Gap analysis", "Auto-categorization", "Freshness scoring"],
    price: "From $149/mo",
    icon: "📚",
    contactInfo: CONTACT,
    link: "/services/knowledge-base-auto-builder"
  },
  // V1039 - Predictive Response Services
  {
    id: "predictive-email-response-v1039",
    name: "Predictive Email Response Engine",
    category: "AI Services",
    description: "AI analyzes historical reply patterns to auto-draft optimal responses. Learns tone, length, CTA preferences, and predicts best send time for each recipient.",
    features: ["Pattern learning engine", "Auto-draft generation", "Tone optimization", "Send time prediction", "Follow-up scheduling", "Success rate tracking"],
    price: "From $119/mo",
    icon: "🔮",
    contactInfo: CONTACT,
    link: "/services/predictive-email-response-v1039"
  },
  {
    id: "smart-autoresponder-pro",
    name: "Smart Autoresponder Pro",
    category: "Micro SaaS",
    description: "Intelligent auto-responder that goes beyond vacation replies. Analyzes incoming emails and generates contextual, personalized auto-replies based on your communication patterns.",
    features: ["Context-aware auto-replies", "Personalization engine", "Priority-based responses", "FAQ auto-answering", "Escalation rules", "Multi-language support"],
    price: "From $59/mo",
    icon: "⚡",
    contactInfo: CONTACT,
    link: "/services/smart-autoresponder-pro"
  },
  {
    id: "email-ab-testing-platform",
    name: "AI Email A/B Testing Platform",
    category: "Micro SaaS",
    description: "Automated A/B testing for email subject lines, body content, send times, and CTAs with statistical significance calculation and auto-promotion of winners.",
    features: ["Multi-variant testing", "Statistical significance engine", "Auto-promotion of winners", "Subject line AI generation", "Send time optimization", "Revenue attribution"],
    price: "From $129/mo",
    icon: "🧪",
    contactInfo: CONTACT,
    link: "/services/email-ab-testing-platform"
  },
  // V1040 - Compliance & Security Services
  {
    id: "email-compliance-audit-v1040",
    name: "Email Compliance Audit Trail",
    category: "Security Services",
    description: "Automated regulatory compliance tracking for HIPAA, GDPR, SOX, SOC2, PCI-DSS, CAN-SPAM. Real-time PII detection, card data scanning, and audit-ready reporting.",
    features: ["Multi-regulation compliance", "PII/PHI detection", "Card data scanning", "Tamper-proof audit log", "Retention policy management", "Audit-ready reporting"],
    price: "From $199/mo",
    icon: "🔍",
    contactInfo: CONTACT,
    link: "/services/email-compliance-audit-v1040"
  },
  {
    id: "gdpr-data-governance-platform",
    name: "GDPR Data Governance Platform",
    category: "Security Services",
    description: "Complete GDPR compliance platform with data mapping, consent management, right-to-erasure automation, DPIA workflows, and breach notification system.",
    features: ["Data mapping engine", "Consent management", "Right-to-erasure automation", "DPIA workflows", "Breach notification", "Vendor risk assessment"],
    price: "From $399/mo",
    icon: "🇪🇺",
    contactInfo: CONTACT,
    link: "/services/gdpr-data-governance-platform"
  },
  {
    id: "email-data-residency-manager",
    name: "Email Data Residency Manager",
    category: "IT Services",
    description: "Manage email data residency requirements across regions. Automatically routes and stores email data in compliant jurisdictions with geo-fencing and audit trails.",
    features: ["Geo-fencing engine", "Multi-region routing", "Residency compliance checks", "Cross-border transfer controls", "Audit trail", "Region-specific encryption"],
    price: "From $249/mo",
    icon: "🗺️",
    contactInfo: CONTACT,
    link: "/services/email-data-residency-manager"
  },
  // Additional diversified services
  {
    id: "ai-voice-email-assistant",
    name: "AI Voice Email Assistant",
    category: "AI Services",
    description: "Voice-powered email management — dictate replies, listen to email summaries, manage inbox hands-free. Supports 40+ languages with natural voice synthesis.",
    features: ["Voice-to-email dictation", "Audio email summaries", "Hands-free inbox management", "40+ language support", "Natural voice synthesis", "Smart command recognition"],
    price: "From $79/mo",
    icon: "🎙️",
    contactInfo: CONTACT,
    link: "/services/ai-voice-email-assistant"
  },
  {
    id: "email-workflow-automation-builder",
    name: "Email Workflow Automation Builder",
    category: "Automation Services",
    description: "Visual drag-and-drop builder for email workflows. Automate routing, approvals, notifications, escalations, and follow-ups based on intelligent triggers.",
    features: ["Visual workflow builder", "Smart trigger engine", "Conditional routing", "Approval chains", "Escalation automation", "500+ integrations"],
    price: "From $149/mo",
    icon: "⚙️",
    contactInfo: CONTACT,
    link: "/services/email-workflow-automation-builder"
  },
  {
    id: "email-reputation-monitor",
    name: "Email Reputation & Deliverability Monitor",
    category: "IT Services",
    description: "Real-time monitoring of email sender reputation, domain health, SPF/DKIM/DMARC records, blacklist status, and deliverability rates across all major providers.",
    features: ["Sender reputation scoring", "Domain health monitoring", "SPF/DKIM/DMARC verification", "Blacklist monitoring", "Deliverability analytics", "Alert system"],
    price: "From $89/mo",
    icon: "📊",
    contactInfo: CONTACT,
    link: "/services/email-reputation-monitor"
  },
  {
    id: "multi-tenant-email-platform",
    name: "Multi-Tenant Email Platform",
    category: "Cloud Services",
    description: "Enterprise multi-tenant email platform with isolated environments, custom branding per tenant, usage-based billing, and centralized admin dashboard.",
    features: ["Tenant isolation", "Custom branding", "Usage-based billing", "Centralized admin", "SLA per tenant", "API access"],
    price: "From $499/mo",
    icon: "🏗️",
    contactInfo: CONTACT,
    link: "/services/multi-tenant-email-platform"
  },
  {
    id: "ai-email-coaching-platform",
    name: "AI Email Coaching & Training Platform",
    category: "AI Services",
    description: "AI-powered email communication training with real-time scoring on 6 dimensions (clarity, tone, brevity, persuasion, empathy, professionalism). Personalized improvement plans.",
    features: ["6-dimension scoring", "Real-time coaching", "Personalized improvement plans", "Team analytics", "Certification program", "Gamified learning"],
    price: "From $99/mo per user",
    icon: "🎓",
    contactInfo: CONTACT,
    link: "/services/ai-email-coaching-platform"
  }
];

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
