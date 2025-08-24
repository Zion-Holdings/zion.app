"use strict";
(() => {
var exports = {};
exports.id = 787149;
exports.ids = [787149,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 446316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cuttingEdgeMicroSaasServices: () => (/* binding */ cuttingEdgeMicroSaasServices)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var cuttingEdgeMicroSaasServices = [{
  id: 'ai-code-review-assistant',
  name: 'AI Code Review Assistant',
  tagline: 'Automated code quality analysis with intelligent suggestions and security scanning',
  price: '$199',
  period: '/month',
  description: 'AI-powered code review platform that analyzes pull requests, identifies bugs, security vulnerabilities, and suggests improvements using advanced language models and static analysis.',
  features: ['Automated PR analysis and feedback', 'Security vulnerability detection', 'Code quality scoring and metrics', 'Custom rule sets and policies', 'Integration with GitHub/GitLab', 'Team collaboration tools', 'Performance impact analysis', 'Compliance checking (SOC2, HIPAA)'],
  popular: true,
  icon: '🔍',
  color: 'from-purple-600 to-indigo-700',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/ai-code-review-assistant',
  marketPosition: 'Competes with CodeClimate, SonarQube; adds AI-powered insights and security focus.',
  targetAudience: 'Development teams, DevOps engineers, Security teams',
  trialDays: 14,
  setupTime: '2 hours',
  category: 'Development & Security',
  realService: true,
  technology: ['Python, OpenAI, GitHub API, Static Analysis Tools'],
  integrations: ['GitHub, GitLab, Bitbucket, Slack, Teams'],
  useCases: ['Code quality improvement, Security compliance, Team productivity'],
  roi: 'Reduce code review time by 40-60% and catch 30% more issues.',
  competitors: ['CodeClimate, SonarQube, Snyk Code'],
  marketSize: '$15B+ code quality tools',
  growthRate: '35% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Multi-repo analysis engine with AI model integration and custom rule engine.',
  launchDate: '2025-01-15',
  customers: 156,
  rating: 4.8,
  reviews: 89
}, {
  id: 'quantum-encryption-gateway',
  name: 'Quantum Encryption Gateway',
  tagline: 'Post-quantum cryptography for future-proof data protection',
  price: '$399',
  period: '/month',
  description: 'Advanced encryption gateway implementing post-quantum cryptographic algorithms, providing protection against both classical and quantum computing attacks.',
  features: ['Post-quantum algorithm support (CRYSTALS-Kyber, SPHINCS+)', 'Hybrid encryption (classical + quantum-resistant)', 'Key management and rotation', 'API encryption and decryption', 'File and database encryption', 'Compliance reporting (FIPS, NIST)', 'Performance monitoring', 'Zero-knowledge proof support'],
  popular: false,
  icon: '🔐',
  color: 'from-emerald-600 to-teal-700',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/quantum-encryption-gateway',
  marketPosition: 'Early mover in post-quantum cryptography; specialized for future security needs.',
  targetAudience: 'Financial institutions, Healthcare, Government, Enterprise security',
  trialDays: 30,
  setupTime: '1 week',
  category: 'Security & Compliance',
  realService: true,
  technology: ['Rust, Go, Post-Quantum Algorithms, Hardware Security Modules'],
  integrations: ['AWS KMS, Azure Key Vault, HashiCorp Vault'],
  useCases: ['Data protection, Compliance, Future-proofing security'],
  roi: 'Protect against quantum threats and meet future compliance requirements.',
  competitors: ['ISARA, PQShield, Cryptosense'],
  marketSize: '$2B+ quantum security',
  growthRate: '150% YoY',
  variant: 'security-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Custom post-quantum algorithm implementation with hardware acceleration.',
  launchDate: '2025-02-01',
  customers: 23,
  rating: 4.9,
  reviews: 12
}, {
  id: 'edge-ai-inference-platform',
  name: 'Edge AI Inference Platform',
  tagline: 'Deploy and manage AI models at the edge with real-time optimization',
  price: '$299',
  period: '/month',
  description: 'Platform for deploying, managing, and optimizing AI models on edge devices, IoT sensors, and edge computing infrastructure with minimal latency.',
  features: ['Model optimization for edge devices', 'Automatic model versioning and deployment', 'Real-time performance monitoring', 'Edge device management dashboard', 'Model compression and quantization', 'Offline inference capabilities', 'Multi-device synchronization', 'Energy efficiency optimization'],
  popular: true,
  icon: '⚡',
  color: 'from-orange-600 to-red-700',
  textColor: 'text-orange-400',
  link: 'https://ziontechgroup.com/edge-ai-inference-platform',
  marketPosition: 'Specialized edge AI platform; competes with AWS IoT Greengrass, Azure IoT Edge.',
  targetAudience: 'IoT companies, Manufacturing, Retail, Healthcare',
  trialDays: 21,
  setupTime: '3 days',
  category: 'AI & IoT',
  realService: true,
  technology: ['TensorFlow Lite, ONNX, Docker, Kubernetes Edge'],
  integrations: ['AWS IoT, Azure IoT, Google Cloud IoT'],
  useCases: ['Real-time AI inference, IoT automation, Edge computing'],
  roi: 'Reduce latency by 80-90% and enable offline AI capabilities.',
  competitors: ['AWS IoT Greengrass, Azure IoT Edge, Edge Impulse'],
  marketSize: '$12B+ edge AI market',
  growthRate: '45% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Edge runtime engine with model optimization pipeline and device management.',
  launchDate: '2025-01-20',
  customers: 78,
  rating: 4.7,
  reviews: 45
}, {
  id: 'blockchain-identity-verification',
  name: 'Blockchain Identity Verification',
  tagline: 'Decentralized identity verification with zero-knowledge proofs',
  price: '$179',
  period: '/month',
  description: 'Self-sovereign identity platform using blockchain and zero-knowledge proofs for secure, privacy-preserving identity verification without centralized authorities.',
  features: ['Decentralized identifier (DID) creation', 'Zero-knowledge proof verification', 'Credential issuance and verification', 'Multi-chain support (Ethereum, Polygon, Solana)', 'API for integration', 'Compliance frameworks (GDPR, CCPA)', 'Identity wallet management', 'Audit trail and compliance reporting'],
  popular: false,
  icon: '🆔',
  color: 'from-blue-600 to-cyan-700',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/blockchain-identity-verification',
  marketPosition: 'Emerging Web3 identity solution; specialized for decentralized applications.',
  targetAudience: 'DeFi platforms, DAOs, Web3 applications, Financial services',
  trialDays: 14,
  setupTime: '1 week',
  category: 'Blockchain & Identity',
  realService: true,
  technology: ['Solidity, TypeScript, Zero-Knowledge Proofs, IPFS'],
  integrations: ['MetaMask, WalletConnect, Ethereum, Polygon'],
  useCases: ['DeFi KYC, DAO governance, Web3 authentication'],
  roi: 'Reduce identity verification costs by 60% and improve user privacy.',
  competitors: ['Spruce, 3Box, Civic'],
  marketSize: '$3B+ decentralized identity',
  growthRate: '80% YoY',
  variant: 'blockchain-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Smart contract-based identity system with ZK-proof verification engine.',
  launchDate: '2025-02-10',
  customers: 34,
  rating: 4.6,
  reviews: 18
}, {
  id: 'ai-content-moderation-suite',
  name: 'AI Content Moderation Suite',
  tagline: 'Automated content filtering with context-aware AI and human oversight',
  price: '$249',
  period: '/month',
  description: 'Comprehensive content moderation platform using AI to detect inappropriate content, hate speech, and policy violations with human review workflows.',
  features: ['Multi-format content analysis (text, image, video)', 'Context-aware AI detection', 'Custom policy configuration', 'Human review workflows', 'Real-time moderation API', 'Compliance reporting (COPPA, GDPR)', 'Bias detection and mitigation', 'Multi-language support'],
  popular: true,
  icon: '🛡️',
  color: 'from-red-600 to-pink-700',
  textColor: 'text-red-400',
  link: 'https://ziontechgroup.com/ai-content-moderation-suite',
  marketPosition: 'Competes with OpenAI Moderation, Amazon Rekognition; adds workflow management.',
  targetAudience: 'Social media platforms, Marketplaces, Gaming companies',
  trialDays: 14,
  setupTime: '2 days',
  category: 'AI & Safety',
  realService: true,
  technology: ['Python, TensorFlow, Computer Vision, NLP'],
  integrations: ['AWS, Google Cloud, Azure, Slack'],
  useCases: ['Content safety, Policy enforcement, Risk mitigation'],
  roi: 'Reduce moderation costs by 70% and improve response time by 90%.',
  competitors: ['OpenAI Moderation, Amazon Rekognition, Google Cloud Vision'],
  marketSize: '$8B+ content moderation',
  growthRate: '25% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Multi-model AI pipeline with human review queue and policy engine.',
  launchDate: '2025-01-25',
  customers: 92,
  rating: 4.7,
  reviews: 56
}, {
  id: 'mlops-pipeline-automation',
  name: 'MLOps Pipeline Automation',
  tagline: 'End-to-end machine learning workflow automation from data to deployment',
  price: '$399',
  period: '/month',
  description: 'Complete MLOps platform automating the entire ML lifecycle including data preprocessing, model training, validation, deployment, and monitoring.',
  features: ['Automated data pipeline management', 'Model training orchestration', 'A/B testing and model comparison', 'Automated deployment pipelines', 'Model performance monitoring', 'Data drift detection', 'Reproducible experiments', 'Model registry and versioning'],
  popular: true,
  icon: '🔄',
  color: 'from-indigo-600 to-purple-700',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/mlops-pipeline-automation',
  marketPosition: 'Comprehensive MLOps solution; competes with MLflow, Kubeflow, Weights & Biases.',
  targetAudience: 'Data science teams, ML engineers, AI companies',
  trialDays: 21,
  setupTime: '1 week',
  category: 'AI & DevOps',
  realService: true,
  technology: ['Python, Kubernetes, Docker, MLflow, Kubeflow'],
  integrations: ['AWS SageMaker, Azure ML, Google AI Platform'],
  useCases: ['ML workflow automation, Model lifecycle management, AI operations'],
  roi: 'Accelerate ML development by 3-5x and reduce deployment failures by 80%.',
  competitors: ['MLflow, Kubeflow, Weights & Biases, Neptune'],
  marketSize: '$6B+ MLOps market',
  growthRate: '40% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Kubernetes-native MLOps platform with automated pipeline orchestration.',
  launchDate: '2025-02-05',
  customers: 67,
  rating: 4.8,
  reviews: 38
}, {
  id: 'quantum-machine-learning-platform',
  name: 'Quantum Machine Learning Platform',
  tagline: 'Hybrid quantum-classical ML for optimization and pattern recognition',
  price: '$599',
  period: '/month',
  description: 'Platform combining quantum computing with classical machine learning for solving complex optimization problems, pattern recognition, and quantum advantage applications.',
  features: ['Hybrid quantum-classical algorithms', 'Quantum circuit optimization', 'Classical ML model integration', 'Quantum advantage benchmarking', 'Multi-quantum backend support', 'Performance analytics', 'Algorithm templates', 'Research collaboration tools'],
  popular: false,
  icon: '⚛️',
  color: 'from-violet-600 to-purple-700',
  textColor: 'text-violet-400',
  link: 'https://ziontechgroup.com/quantum-machine-learning-platform',
  marketPosition: 'Early quantum ML platform; specialized for quantum advantage applications.',
  targetAudience: 'Research institutions, Pharmaceutical companies, Financial services',
  trialDays: 30,
  setupTime: '2 weeks',
  category: 'Quantum & AI',
  realService: true,
  technology: ['Qiskit, Cirq, PennyLane, Python, Quantum Algorithms'],
  integrations: ['IBM Quantum, Google Quantum, AWS Braket'],
  useCases: ['Drug discovery, Portfolio optimization, Logistics optimization'],
  roi: 'Solve previously intractable problems and gain quantum advantage insights.',
  competitors: ['Xanadu, Rigetti, D-Wave'],
  marketSize: '$1B+ quantum ML',
  growthRate: '200% YoY',
  variant: 'quantum-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Hybrid quantum-classical framework with algorithm optimization engine.',
  launchDate: '2025-03-01',
  customers: 12,
  rating: 4.9,
  reviews: 8
}, {
  id: 'ai-powered-legal-document-analysis',
  name: 'AI Legal Document Analysis',
  tagline: 'Intelligent contract review and legal document analysis with risk assessment',
  price: '$299',
  period: '/month',
  description: 'AI platform for analyzing legal documents, contracts, and agreements to identify risks, extract key terms, and provide compliance insights.',
  features: ['Contract risk assessment', 'Key term extraction', 'Compliance checking', 'Document comparison', 'Legal research assistance', 'Risk scoring and alerts', 'Template generation', 'Multi-jurisdiction support'],
  popular: true,
  icon: '⚖️',
  color: 'from-amber-600 to-orange-700',
  textColor: 'text-amber-400',
  link: 'https://ziontechgroup.com/ai-legal-document-analysis',
  marketPosition: 'Legal tech AI solution; competes with Kira Systems, eBrevia, Luminance.',
  targetAudience: 'Law firms, Corporate legal departments, Compliance teams',
  trialDays: 14,
  setupTime: '1 week',
  category: 'AI & Legal Tech',
  realService: true,
  technology: ['NLP, Machine Learning, Legal Ontologies, Document Processing'],
  integrations: ['DocuSign, Adobe Acrobat, Microsoft Word'],
  useCases: ['Contract review, Due diligence, Compliance monitoring'],
  roi: 'Reduce legal review time by 60-80% and improve risk detection by 40%.',
  competitors: ['Kira Systems, eBrevia, Luminance, Harvey AI'],
  marketSize: '$5B+ legal tech AI',
  growthRate: '30% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Legal document analysis engine with risk assessment algorithms.',
  launchDate: '2025-02-15',
  customers: 45,
  rating: 4.7,
  reviews: 23
}, {
  id: 'synthetic-data-generation-platform',
  name: 'Synthetic Data Generation Platform',
  tagline: 'Privacy-preserving synthetic data for AI training and testing',
  price: '$199',
  period: '/month',
  description: 'Platform for generating high-quality synthetic data that preserves statistical properties while ensuring privacy and compliance with data protection regulations.',
  features: ['Multi-format data generation (tabular, image, text)', 'Privacy-preserving algorithms', 'Statistical property preservation', 'Custom data schemas', 'Quality validation tools', 'Compliance reporting (GDPR, HIPAA)', 'API for integration', 'Data lineage tracking'],
  popular: false,
  icon: '🎭',
  color: 'from-teal-600 to-cyan-700',
  textColor: 'text-teal-400',
  link: 'https://ziontechgroup.com/synthetic-data-generation-platform',
  marketPosition: 'Privacy-focused synthetic data; competes with Gretel, Mostly AI, Synthesized.',
  targetAudience: 'Healthcare, Financial services, Research institutions',
  trialDays: 21,
  setupTime: '3 days',
  category: 'AI & Data Privacy',
  realService: true,
  technology: ['GANs, Differential Privacy, Synthetic Data Algorithms'],
  integrations: ['AWS, Google Cloud, Azure, Snowflake'],
  useCases: ['AI training, Testing, Research, Compliance'],
  roi: 'Accelerate AI development while ensuring data privacy and compliance.',
  competitors: ['Gretel, Mostly AI, Synthesized, DataCebo'],
  marketSize: '$2B+ synthetic data market',
  growthRate: '50% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Multi-algorithm synthetic data engine with privacy preservation.',
  launchDate: '2025-02-20',
  customers: 38,
  rating: 4.6,
  reviews: 19
}, {
  id: 'ai-powered-customer-churn-prediction',
  name: 'AI Customer Churn Prediction',
  tagline: 'Predict and prevent customer churn with machine learning insights',
  price: '$159',
  period: '/month',
  description: 'AI platform that analyzes customer behavior patterns to predict churn risk and provide actionable insights for retention strategies.',
  features: ['Churn risk scoring', 'Behavioral pattern analysis', 'Predictive analytics', 'Retention strategy recommendations', 'Customer segmentation', 'Real-time alerts', 'ROI tracking', 'Integration with CRM systems'],
  popular: true,
  icon: '📊',
  color: 'from-green-600 to-emerald-700',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/ai-customer-churn-prediction',
  marketPosition: 'Specialized churn prediction; competes with Gainsight, ChurnZero, Intercom.',
  targetAudience: 'SaaS companies, E-commerce, Subscription businesses',
  trialDays: 14,
  setupTime: '2 days',
  category: 'AI & Analytics',
  realService: true,
  technology: ['Machine Learning, Predictive Analytics, Customer Analytics'],
  integrations: ['Salesforce, HubSpot, Intercom, Stripe'],
  useCases: ['Customer retention, Revenue optimization, Customer success'],
  roi: 'Reduce churn by 15-25% and increase customer lifetime value by 20-30%.',
  competitors: ['Gainsight, ChurnZero, Intercom, Mixpanel'],
  marketSize: '$4B+ customer success tools',
  growthRate: '20% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'ML-powered churn prediction engine with behavioral analysis.',
  launchDate: '2025-01-30',
  customers: 89,
  rating: 4.7,
  reviews: 52
}];

/***/ }),

/***/ 453627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   handler: () => (/* binding */ handler),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(863885);
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880237);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781413);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833932);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805164);
/* harmony import */ var private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(613851);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2025-cutting-edge-services-showcase",
        pathname: "/2025-cutting-edge-services-showcase",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    distDir: ".next" || 0,
    relativeProjectDir:  false || '',
    components: {
        // default export might not exist when optimized for data only
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2025-cutting-edge-services-showcase",
    config,
    userland: private_next_pages_2025_cutting_edge_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 613851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7887);
/* harmony import */ var _data_2025_cutting_edge_micro_saas_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(446316);
/* harmony import */ var _data_2025_innovative_it_infrastructure_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(486765);
/* harmony import */ var _data_2025_innovative_it_infrastructure_expansion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_2025_innovative_it_infrastructure_expansion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_2025_innovative_ai_services_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621495);
/* harmony import */ var _data_2025_innovative_ai_services_expansion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_2025_innovative_ai_services_expansion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





// Import our new cutting-edge services




var CuttingEdgeServicesShowcase = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('popular');

  // Combine all services
  var allServices = [..._data_2025_cutting_edge_micro_saas_expansion__WEBPACK_IMPORTED_MODULE_2__.cuttingEdgeMicroSaasServices, ..._data_2025_innovative_it_infrastructure_expansion__WEBPACK_IMPORTED_MODULE_3__.innovativeITInfrastructureServices, ..._data_2025_innovative_ai_services_expansion__WEBPACK_IMPORTED_MODULE_4__.innovativeAIServices];

  // Get unique categories
  var categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });
  var containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  var itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "2025 Cutting-Edge Services Showcase | Zion Tech Group",
      description: "Discover our latest cutting-edge micro SAAS services, IT infrastructure solutions, and AI-powered platforms. Real, innovative, and market-ready solutions for 2025.",
      keywords: ["cutting-edge services", "micro SAAS", "IT infrastructure", "AI services", "2025", "innovation", "Zion Tech Group"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0 bg-black/20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8
          },
          className: "text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            className: "text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
            children: "2025 Cutting-Edge Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto",
            children: "Discover our latest innovative micro SAAS services, IT infrastructure solutions, and AI-powered platforms. Real, market-ready solutions designed for the future."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-4 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30",
              children: "\uD83D\uDE80 Micro SAAS Solutions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30",
              children: "\uD83C\uDFD7\uFE0F IT Infrastructure"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "bg-indigo-600/20 px-4 py-2 rounded-full border border-indigo-400/30",
              children: "\uD83E\uDD16 AI-Powered Platforms"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col md:flex-row justify-between items-center text-center md:text-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "mb-4 md:mb-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Ready to Transform Your Business?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-blue-100",
              children: "Get in touch with our experts today"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: "\uD83D\uDCF1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: "+1 302 464 0950"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: "\u2709\uFE0F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: "kleber@ziontechgroup.com"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: "\uD83D\uDCCD"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: "364 E Main St STE 1008, Middletown DE 19709"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "bg-white border-b border-gray-200 sticky top-0 z-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col lg:flex-row gap-4 items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "relative flex-1 max-w-md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "text",
              placeholder: "Search services...",
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex gap-2",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => setSelectedCategory(category),
              className: "px-4 py-2 rounded-lg text-sm font-medium transition-colors ".concat(selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'),
              children: category
            }, category))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              value: sortBy,
              onChange: e => setSortBy(e.target.value),
              className: "px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "popular",
                children: "Most Popular"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "price",
                children: "Price: Low to High"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "rating",
                children: "Highest Rated"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "newest",
                children: "Newest First"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex border border-gray-300 rounded-lg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                onClick: () => setViewMode('grid'),
                className: "p-2 ".concat(viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                  className: "w-5 h-5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                onClick: () => setViewMode('list'),
                className: "p-2 ".concat(viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.List, {
                  className: "w-5 h-5"
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        className: "grid gap-6",
        style: {
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(400px, 1fr))' : '1fr'
        },
        children: filteredServices.map(service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          variants: itemVariants,
          className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden ".concat(viewMode === 'list' ? 'flex' : ''),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "p-6 ".concat(viewMode === 'list' ? 'flex-1' : ''),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-start justify-between mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-3xl ".concat(service.color.includes('from-') ? 'bg-gradient-to-r ' + service.color + ' p-3 rounded-lg' : 'bg-gray-100 p-3 rounded-lg'),
                  children: service.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                    className: "text-xl font-bold text-gray-900 mb-1",
                    children: service.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "text-gray-600 text-sm",
                    children: service.tagline
                  })]
                })]
              }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full",
                children: "POPULAR"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-gray-700 mb-4 leading-relaxed",
              children: service.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                className: "font-semibold text-gray-900 mb-2",
                children: "Key Features:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "grid grid-cols-1 gap-1",
                children: [service.features.slice(0, 4).map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex items-center gap-2 text-sm text-gray-600",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Check, {
                    className: "w-4 h-4 text-green-500 flex-shrink-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: feature
                  })]
                }, index)), service.features.length > 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "text-sm text-gray-500 mt-1",
                  children: ["+", service.features.length - 4, " more features"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "grid grid-cols-2 gap-4 mb-4 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-gray-500",
                  children: "Market Size:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "font-medium text-gray-900",
                  children: service.marketSize
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-gray-500",
                  children: "Growth Rate:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "font-medium text-gray-900",
                  children: service.growthRate
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "bg-blue-50 p-3 rounded-lg",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-sm text-gray-600 mb-1",
                  children: "Expected ROI:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "font-semibold text-blue-900",
                  children: service.roi
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                className: "font-semibold text-gray-900 mb-2",
                children: "Technology Stack:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex flex-wrap gap-2",
                children: [service.technology.slice(0, 3).map((tech, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs",
                  children: tech
                }, index)), service.technology.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "text-gray-500 text-xs",
                  children: ["+", service.technology.length - 3, " more"]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "bg-gray-50 p-6 ".concat(viewMode === 'list' ? 'w-80 flex-shrink-0' : ''),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "text-3xl font-bold text-gray-900 mb-1",
                children: [service.price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-lg text-gray-500",
                  children: service.period
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "text-sm text-gray-600",
                children: [service.trialDays, "-day free trial"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "grid grid-cols-2 gap-4 mb-6 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-2xl font-bold text-gray-900",
                  children: service.customers
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-xs text-gray-500",
                  children: "Customers"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-2xl font-bold text-gray-900",
                  children: service.rating
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-xs text-gray-500",
                  children: "Rating"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-sm text-gray-600 mb-2",
                children: "Setup Time:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "font-medium text-gray-900",
                children: service.setupTime
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-sm text-gray-600 mb-2",
                children: "Target Audience:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-sm text-gray-900",
                children: service.targetAudience
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: service.link,
              className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105",
              children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {
                className: "inline-block w-4 h-4 ml-2"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mt-4 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-xs text-gray-500 mb-2",
                children: "Questions? Contact us:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "text-xs text-gray-700",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: ["\uD83D\uDCF1 ", service.contactInfo.mobile]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: ["\u2709\uFE0F ", service.contactInfo.email]
                })]
              })]
            })]
          })]
        }, service.id))
      }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "text-center py-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "text-gray-400 text-6xl mb-4",
          children: "\uD83D\uDD0D"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
          className: "text-xl font-semibold text-gray-900 mb-2",
          children: "No services found"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-gray-600",
          children: "Try adjusting your search terms or filters"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "text-3xl md:text-4xl font-bold mb-6",
          children: "Ready to Transform Your Business?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-xl text-blue-100 mb-8",
          children: "Our cutting-edge services are designed to give you a competitive advantage in 2025 and beyond. Get started today with a free consultation."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: "mailto:kleber@ziontechgroup.com",
            className: "bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200",
            children: "Get Free Consultation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: "tel:+13024640950",
            className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200",
            children: "Call +1 302 464 0950"
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CuttingEdgeServicesShowcase);

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(453627)));
module.exports = __webpack_exports__;

})();