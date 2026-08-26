import { Service } from './serviceTypes';

// Wave 207 — New Category Expansion (5 services, 5 new categories)
// Research by @tablet_kleber_bot

export const wave207ObservabilityServices: Service[] = [
  {
    id: "grafana-observability",
    title: "Grafana Observability Stack",
    description: "Open-source metrics, logs, and traces visualization through composable dashboards. Combined with Loki (log aggregation) and Tempo (distributed tracing), delivers a full-stack observability suite that rivals Datadog and New Relic at zero licensing cost for self-hosted deployments.",
    category: "observability",
    icon: "📊",
    href: "/services/grafana-observability",
    industry: "Technology, DevOps, SRE, Cloud Infrastructure",
    stage: "published",
    popular: true,
    pricing: { basic: "Free (self-hosted)", pro: "Free tier: 10K metrics, 50GB logs", enterprise: "Cloud Pro from $29/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Composable dashboards with 100+ visualization types (time series, heatmaps, geomaps, gauges)",
      "Unified observability: metrics (Prometheus/Mimir), logs (Loki), and traces (Tempo) in a single interface",
      "Alerting engine with multi-channel notifications (Slack, PagerDuty, email, webhooks)",
      "150+ data source plugins: Prometheus, MySQL, PostgreSQL, Elasticsearch, cloud APIs",
      "Grafana Cloud free tier: 10K active metrics, 50GB logs, 50GB traces, 3 users — no credit card",
      "Self-hostable on any infrastructure; Helm chart for Kubernetes, Docker Compose for simpler setups"
    ],
    benefits: [
      "Replaces expensive SaaS observability tools (Datadog, New Relic) that charge $15–$25+/host/mo — self-hosted Grafana stack is free at any scale",
      "Unified metrics/logs/traces in one UI eliminates context-switching between 3+ tools during incident response"
    ]
  }
];

export const wave207IdentityServices: Service[] = [
  {
    id: "keycloak-iam",
    title: "Keycloak Identity & Access Management",
    description: "Full-featured open-source identity and access management (IAM) solution providing single sign-on (SSO), user federation, identity brokering, and multi-tenancy. Supports OAuth 2.0, OpenID Connect, and SAML 2.0 — a drop-in replacement for Auth0, Okta, and Azure AD B2C without per-MAU pricing.",
    category: "identity",
    icon: "🔐",
    href: "/services/keycloak-iam",
    industry: "Technology, Healthcare, Finance, Government, Enterprise SaaS",
    stage: "published",
    popular: true,
    pricing: { basic: "100% Free (OSS)", pro: "Free at any user count", enterprise: "Red Hat support available" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Single Sign-On (SSO) with OpenID Connect, OAuth 2.0, and SAML 2.0 protocol support",
      "User federation against LDAP, Active Directory, and custom user stores",
      "Identity brokering: log in via Google, GitHub, Facebook, or any OIDC/SAML identity provider",
      "Multi-tenant realm architecture — isolate user pools per client, department, or environment",
      "Admin console with fine-grained role-based access control (RBAC), groups, and custom themes",
      "Social login, two-factor authentication (TOTP/WebAuthn), and brute-force detection built in"
    ],
    benefits: [
      "Eliminates per-MAU identity platform costs (Auth0 starts at $23/mo per 1K users; Keycloak is free at any user count)",
      "Full data sovereignty over user credentials and authentication logs — critical for GDPR, HIPAA, and SOC 2 compliance"
    ]
  }
];

export const wave207CmsServices: Service[] = [
  {
    id: "strapi-headless-cms",
    title: "Strapi Headless CMS",
    description: "Leading open-source headless CMS giving developers full control over content architecture while providing a beautiful admin panel for content editors. Self-hostable, API-first, and framework-agnostic — works with Next.js, Nuxt, Gatsby, React, Vue, mobile apps via REST or GraphQL APIs.",
    category: "cms",
    icon: "📝",
    href: "/services/strapi-headless-cms",
    industry: "Technology, Media, E-commerce, Marketing, Education",
    stage: "published",
    popular: false,
    pricing: { basic: "Free (self-hosted)", pro: "Cloud Pro from $99/mo", enterprise: "Cloud Pro: 50K entries, 10 users" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Intuitive admin panel with drag-and-drop content type builder — no coding required for content modeling",
      "REST and GraphQL APIs auto-generated from content types; SDKs for JavaScript, PHP, and more",
      "Role-based access control (RBAC) with granular permissions per content type and field",
      "Media library with image optimization, folder management, and CDN integration (S3, Cloudinary, etc.)",
      "Plugin ecosystem: SEO, Internationalization (i18n), Email, Upload, and 100+ community plugins",
      "Self-host on any infrastructure; database-agnostic (PostgreSQL, MySQL, SQLite, MariaDB)"
    ],
    benefits: [
      "Eliminates SaaS CMS costs that scale with API calls and users (Contentful free tier: only 25K API calls/mo; Strapi is unlimited when self-hosted)",
      "Headless architecture future-proofs content — same backend serves web, mobile, IoT, and any future channel without migration"
    ]
  }
];

export const wave207EcommerceServices: Service[] = [
  {
    id: "medusa-commerce",
    title: "Medusa Composable Commerce",
    description: "Open-source composable commerce platform built for developers who want full control over their e-commerce stack. Headless, modular, and developer-first — built on Node.js with a modern API architecture. Provides the core commerce engine (products, orders, carts, payments, shipping) while letting developers compose exactly the features they need.",
    category: "ecommerce",
    icon: "🛒",
    href: "/services/medusa-commerce",
    industry: "E-commerce, Retail, D2C Brands, Marketplace Operators",
    stage: "published",
    popular: false,
    pricing: { basic: "Free (self-hosted)", pro: "Cloud Pro from $99/mo", enterprise: "Cloud Pro: unlimited orders, 10 admin users" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Headless commerce engine with REST and GraphQL storefront APIs — works with any frontend (Next.js, Remix, mobile)",
      "Modular architecture: pick only the modules you need (products, inventory, orders, payments, notifications, search)",
      "Multi-region and multi-currency support built in — sell globally without plugins",
      "Admin dashboard for order management, customer service, and product catalog",
      "Plugin ecosystem: Stripe, PayPal, Algolia search, Meilisearch, SendGrid, Slack notifications",
      "Self-host on any infrastructure; database-agnostic (PostgreSQL via TypeORM)"
    ],
    benefits: [
      "Zero transaction fees (Shopify charges 2% + payment processing; Medusa has no platform cut on self-hosted)",
      "Composable architecture means you only pay for what you use — no bloated monolith with features you'll never touch"
    ]
  }
];

export const wave207DocumentationServices: Service[] = [
  {
    id: "outline-knowledge-base",
    title: "Outline Knowledge Base",
    description: "Beautiful, open-source knowledge base and documentation platform designed for teams that want a self-hosted alternative to Notion or Confluence. Features a real-time collaborative editor, hierarchical document organization, full-text search, and a clean Slack-like interface that makes documentation enjoyable to write and maintain.",
    category: "documentation",
    icon: "📚",
    href: "/services/outline-knowledge-base",
    industry: "Technology, Engineering Teams, Startups, Remote Teams, Enterprise",
    stage: "published",
    popular: false,
    pricing: { basic: "Free (self-hosted)", pro: "Cloud Team from $10/user/mo", enterprise: "Cloud Team: unlimited documents, 10GB storage" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Real-time collaborative rich-text editor with Markdown support, code blocks, and embeds",
      "Hierarchical document tree with drag-and-drop organization — structure knowledge like a filesystem",
      "Full-text search across all documents with instant results and highlighted matches",
      "Slack integration: share documents in channels, get notifications on edits, search docs from Slack",
      "SSO authentication via OIDC, SAML, and GitHub — enterprise identity management ready",
      "Self-hosted with Docker; PostgreSQL backend; S3-compatible storage for attachments and images"
    ],
    benefits: [
      "Replaces Confluence ($5.75+/user/mo) and Notion ($8+/user/mo) with a self-hosted option that's free at any team size",
      "Real-time collaboration and beautiful UX drive documentation adoption — teams actually write docs instead of letting them rot"
    ]
  }
];

// Wave 207B — Additional 10 services by @windows_carol_bot
export const wave207AiServices: Service[] = [
  {
    id: "ai-credit-risk-scorer",
    title: "AI Credit Risk Scoring Platform",
    description: "AI-powered credit risk assessment platform that analyzes traditional and alternative data sources for lending decisions. Explainable AI models with regulatory compliance, bias monitoring, and real-time scoring APIs.",
    category: "ai",
    icon: "💳",
    href: "/services/ai-credit-risk-scorer",
    industry: "Financial Services",
    stage: "published",
    popular: true,
    pricing: { basic: "$349/mo", pro: "$799/mo", enterprise: "$1699/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Alternative data analysis (cash flow, behavioral, social signals)",
      "Explainable AI with reason codes for every decision",
      "Bias monitoring with demographic parity tracking",
      "Real-time scoring API with sub-100ms response",
      "Regulatory compliance (ECOA, Fair Lending, GDPR)",
      "Model performance monitoring with drift detection"
    ],
    benefits: [
      "Approve 20% more creditworthy applicants with alternative data",
      "Reduce default rates with more accurate risk assessment",
      "Ensure fair lending compliance with bias monitoring",
      "Make instant credit decisions with real-time scoring"
    ]
  },
  {
    id: "ai-patient-scheduling",
    title: "AI Patient Scheduling & Flow Optimizer",
    description: "Intelligent patient scheduling platform for healthcare systems that optimizes appointment slots, reduces no-shows, and balances provider workloads. Predictive no-show modeling with automated reminder campaigns.",
    category: "ai",
    icon: "🏥",
    href: "/services/ai-patient-scheduling",
    industry: "Healthcare",
    stage: "published",
    popular: true,
    pricing: { basic: "$199/mo", pro: "$449/mo", enterprise: "$999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Predictive no-show modeling with patient risk scoring",
      "Intelligent overbooking based on cancellation probability",
      "Automated reminder campaigns via SMS, email, and phone",
      "Multi-location and multi-provider schedule optimization",
      "Waitlist management with automated backfill",
      "Patient self-service rescheduling with mobile app"
    ],
    benefits: [
      "Reduce no-shows by 35% with predictive interventions",
      "Increase provider utilization by 20% with smart scheduling",
      "Improve patient satisfaction with reduced wait times",
      "Maximize revenue with optimized appointment density"
    ]
  }
];

export const wave207DataServices: Service[] = [
  {
    id: "financial-data-warehouse",
    title: "Financial Data Warehouse Platform",
    description: "Purpose-built financial data warehouse with pre-built schemas for banking, insurance, and capital markets. Regulatory reporting, risk analytics, and real-time position tracking with SOX-compliant audit trails.",
    category: "data",
    icon: "🏦",
    href: "/services/financial-data-warehouse",
    industry: "Financial Services",
    stage: "published",
    popular: false,
    pricing: { basic: "$499/mo", pro: "$1199/mo", enterprise: "$2499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Pre-built financial data models (banking, insurance, capital markets)",
      "Regulatory reporting templates (CCAR, Basel III, Solvency II)",
      "Real-time position tracking with P&L attribution",
      "Risk analytics with VaR, stress testing, and scenario analysis",
      "SOX-compliant audit trails with immutable data lineage",
      "Data quality rules specific to financial data standards"
    ],
    benefits: [
      "Accelerate regulatory reporting from weeks to days",
      "Reduce risk of regulatory non-compliance",
      "Unify financial data across business lines",
      "Enable real-time risk monitoring and decision-making"
    ]
  }
];

export const wave207CloudServices: Service[] = [
  {
    id: "hybrid-cloud-orchestrator",
    title: "Hybrid Cloud Orchestration Platform",
    description: "Unified hybrid cloud management platform that orchestrates workloads across on-premises, private cloud, and public cloud. Intelligent placement, cost optimization, and consistent security policies across all environments.",
    category: "cloud",
    icon: "☁️",
    href: "/services/hybrid-cloud-orchestrator",
    industry: "Cloud Operations",
    stage: "published",
    popular: true,
    pricing: { basic: "$299/mo", pro: "$699/mo", enterprise: "$1499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Unified management console for on-prem, private, and public cloud",
      "Intelligent workload placement based on cost, performance, and compliance",
      "Consistent security and governance policies across environments",
      "Automated burst-to-cloud for peak demand handling",
      "Data synchronization with conflict resolution",
      "Cost optimization with cross-cloud resource right-sizing"
    ],
    benefits: [
      "Avoid vendor lock-in with true hybrid cloud flexibility",
      "Optimize costs by placing workloads in the right environment",
      "Maintain consistent security across all infrastructure",
      "Scale to public cloud for peaks without over-provisioning on-prem"
    ]
  }
];

export const wave207SecurityServices: Service[] = [
  {
    id: "fraud-detection-engine",
    title: "Real-Time Fraud Detection Engine",
    description: "AI-powered fraud detection platform that analyzes transactions in real-time using behavioral biometrics, device intelligence, and network analysis. Sub-50ms scoring with adaptive models that evolve with fraud patterns.",
    category: "security",
    icon: "🕵️",
    href: "/services/fraud-detection-engine",
    industry: "Financial Security",
    stage: "published",
    popular: true,
    pricing: { basic: "$349/mo", pro: "$799/mo", enterprise: "$1699/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Real-time transaction scoring with sub-50ms latency",
      "Behavioral biometrics (typing, mouse, touch patterns)",
      "Device intelligence with fingerprinting and emulation detection",
      "Network analysis with mule account identification",
      "Adaptive ML models that learn from new fraud patterns",
      "Case management with investigator workflow tools"
    ],
    benefits: [
      "Detect fraud in real-time before transactions complete",
      "Reduce false positives by 60% with behavioral biometrics",
      "Adapt to new fraud schemes without manual rule updates",
      "Minimize fraud losses while maintaining customer experience"
    ]
  }
];

export const wave207AutomationServices: Service[] = [
  {
    id: "smart-manufacturing-ops",
    title: "Smart Manufacturing Operations Platform",
    description: "Industry 4.0 platform that connects factory equipment, monitors production in real-time, and optimizes manufacturing processes. OEE tracking, predictive quality, and digital twin integration.",
    category: "automation",
    icon: "🏭",
    href: "/services/smart-manufacturing-ops",
    industry: "Manufacturing",
    stage: "published",
    popular: true,
    pricing: { basic: "$399/mo", pro: "$899/mo", enterprise: "$1999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Real-time OEE (Overall Equipment Effectiveness) tracking",
      "Predictive quality with in-line defect detection",
      "Digital twin integration for process simulation",
      "Energy monitoring with consumption optimization",
      "Production scheduling with constraint-based optimization",
      "Integration with PLCs, SCADA, and MES systems"
    ],
    benefits: [
      "Increase OEE by 15-25% with real-time visibility",
      "Reduce defect rates by 40% with predictive quality",
      "Optimize energy consumption by 20%",
      "Simulate process changes with digital twins before implementing"
    ]
  }
];

export const wave207ItServices: Service[] = [
  {
    id: "unified-endpoint-management",
    title: "Unified Endpoint Management (UEM)",
    description: "Comprehensive endpoint management platform that secures and manages laptops, desktops, mobile devices, and IoT from a single console. Zero-touch enrollment, compliance enforcement, and remote troubleshooting.",
    category: "it",
    icon: "📱",
    href: "/services/unified-endpoint-management",
    industry: "IT Operations",
    stage: "published",
    popular: true,
    pricing: { basic: "$49/mo", pro: "$129/mo", enterprise: "$299/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Single console for Windows, macOS, iOS, Android, and IoT",
      "Zero-touch enrollment with automated device provisioning",
      "Compliance enforcement with conditional access policies",
      "Remote troubleshooting with screen sharing and command execution",
      "Application management with silent install and update",
      "Asset inventory with hardware and software tracking"
    ],
    benefits: [
      "Manage all endpoints from one platform",
      "Reduce device provisioning time from hours to minutes",
      "Enforce security compliance across all devices",
      "Support remote workforce with self-service capabilities"
    ]
  }
];

export const wave207MicroSaasServices: Service[] = [
  {
    id: "proposal-software",
    title: "AI Proposal & RFP Response Platform",
    description: "AI-powered proposal management platform that automates RFP responses, proposal creation, and contract drafting. Content library, collaboration workflows, and win rate analytics.",
    category: "micro-saas",
    icon: "📋",
    href: "/services/proposal-software",
    industry: "Sales & Business Development",
    stage: "published",
    popular: true,
    pricing: { basic: "$79/mo", pro: "$199/mo", enterprise: "$449/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "AI content generation from RFP requirements and past wins",
      "Content library with version control and approval workflows",
      "Collaborative editing with role-based access",
      "Win/loss analytics with proposal performance tracking",
      "CRM integration for opportunity-linked proposals",
      "E-signature integration for proposal acceptance"
    ],
    benefits: [
      "Reduce proposal creation time by 70%",
      "Increase win rates with data-driven content optimization",
      "Eliminate redundant content creation across teams",
      "Track what content wins and what doesn't"
    ]
  }
];

export const wave207HealthcareItServices: Service[] = [
  {
    id: "telehealth-platform",
    title: "Telehealth & Virtual Care Platform",
    description: "Complete telehealth solution for healthcare providers with HD video consultations, e-prescribing, appointment scheduling, and integrated billing. HIPAA-compliant with EHR integration and patient portal.",
    category: "healthcare-it",
    icon: "🩺",
    href: "/services/telehealth-platform",
    industry: "Healthcare",
    stage: "published",
    popular: true,
    pricing: { basic: "$299/mo", pro: "$699/mo", enterprise: "$1499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "HD video consultations with screen sharing",
      "E-prescribing with pharmacy network integration",
      "Automated appointment scheduling with reminders",
      "Integrated billing with insurance verification",
      "HIPAA-compliant messaging and file sharing",
      "EHR integration (Epic, Cerner, Allscripts)"
    ],
    benefits: [
      "Expand patient reach beyond geographic limits",
      "Reduce no-shows with automated reminders",
      "Streamline workflows with EHR integration",
      "Increase revenue with virtual visit billing"
    ]
  },
  {
    id: "healthcare-data-interoperability",
    title: "Healthcare Data Interoperability Hub",
    description: "HL7 FHIR-compliant data integration platform that connects EHRs, labs, pharmacies, and medical devices. Real-time data exchange with patient identity matching and consent management.",
    category: "healthcare-it",
    icon: "🔗",
    href: "/services/healthcare-data-interoperability",
    industry: "Healthcare IT",
    stage: "published",
    popular: false,
    pricing: { basic: "$499/mo", pro: "$1199/mo", enterprise: "$2499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "HL7 FHIR R4 compliant API gateway",
      "Patient identity matching across systems",
      "Real-time data exchange with event streaming",
      "Consent management with patient preferences",
      "Lab results integration with LOINC mapping",
      "Medical device data ingestion (IoT/IoMT)"
    ],
    benefits: [
      "Break down data silos across healthcare systems",
      "Enable coordinated care with unified patient records",
      "Meet interoperability mandates (21st Century Cures Act)",
      "Reduce manual data entry and transcription errors"
    ]
  }
];
