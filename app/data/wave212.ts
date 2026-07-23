import { Service } from './serviceTypes';

export const wave212PerformanceTestingServices: Service[] = [
  {
    id: 'k6',
    title: 'k6 Load Testing',
    description: 'k6 is a modern load testing tool that helps you test APIs, microservices, and websites with high performance.',
    category: 'performance-testing',
    icon: '🏃',
    href: '/services/k6',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (OSS)', pro: '$49/user/month', enterprise: 'Custom' },
    contactInfo: { website: 'https://k6.io', email: 'hello@k6.io', phone: '+1 302 464 0950' },
    features: ['Developer-centric scripting', 'Cloud and local execution', 'CI/CD integration', 'Multiple protocol support', 'Detailed metrics and trends'],
    benefits: ['Catch performance regressions early', 'Scale tests from few to thousands of VUs', 'Run tests in CI/CD for every PR', 'Trusted by Grafana Labs, Shopify, Microsoft'],
  }
];

export const wave212ChaosEngineeringServices: Service[] = [
  {
    id: 'chaos-mesh',
    title: 'Chaos Mesh Cloud-native Chaos Engineering',
    description: 'Chaos Mesh is a cloud-native Chaos Engineering platform for Kubernetes environments.',
    category: 'chaos-engineering',
    icon: '🌪️',
    href: '/services/chaos-mesh',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (OSS)', pro: 'Custom', enterprise: 'Custom' },
    contactInfo: { website: 'https://chaos-mesh.org', email: 'hello@chaos-mesh.org', phone: '+1 302 464 0950' },
    features: ['Kubernetes-native', 'Pod, network, filesystem chaos', 'Web dashboard', 'Prometheus integration', 'Auto-rollback'],
    benefits: ['Identify weaknesses proactively', 'Improve system resilience', 'Reduce MTTR', 'Used by Alibaba Cloud, ByteDance'],
  }
];

export const wave212ServiceMeshServices: Service[] = [
  {
    id: 'linkerd',
    title: 'Linkerd Service Mesh',
    description: 'Linkerd is a lightweight, ultra-secure service mesh for Kubernetes.',
    category: 'service-mesh',
    icon: '🔗',
    href: '/services/linkerd',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (OSS)', pro: 'Custom', enterprise: 'Custom' },
    contactInfo: { website: 'https://linkerd.io', email: 'hello@linkerd.io', phone: '+1 302 464 0950' },
    features: ['Zero-trust security with mTLS', 'Traffic control', 'Deep observability', 'Lightweight data plane', 'Simple installation'],
    benefits: ['Secure service communication', 'Improve reliability', 'Gain visibility', 'Used by PayPal, Expedia'],
  }
];

export const wave212APIGatewayServices: Service[] = [
  {
    id: 'kong',
    title: 'Kong API Gateway',
    description: 'Kong is a cloud-native API gateway for managing, securing, and orchestrating APIs.',
    category: 'api-gateway',
    icon: '🚪',
    href: '/services/kong',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (OSS)', pro: '$250/month', enterprise: 'Custom' },
    contactInfo: { website: 'https://konghq.com', email: 'hello@konghq.com', phone: '+1 302 464 0950' },
    features: ['High-performance plugin architecture', 'Multi-protocol support', 'Declarative configuration', 'Identity provider integration', 'Analytics via Kong Manager'],
    benefits: ['Centralize API management', 'Scale to thousands of requests/sec', 'Extend with custom plugins', 'Used by NASA, Yahoo, NYT'],
  }
];

export const wave212EventStreamingServices: Service[] = [
  {
    id: 'pulsar',
    title: 'Apache Pulsar Event Streaming',
    description: 'Apache Pulsar is a cloud-native distributed messaging and streaming platform.',
    category: 'event-streaming',
    icon: '⚡',
    href: '/services/pulsar',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (OSS)', pro: 'Custom', enterprise: 'Custom' },
    contactInfo: { website: 'https://pulsar.apache.org', email: 'user@pulsar.apache.org', phone: '+1 302 464 0950' },
    features: ['Multi-tenancy', 'Geo-replication', 'Schema Registry', 'Functions and IO connectors', 'Kubernetes operator'],
    benefits: ['Eliminate data silos', 'Reduce operational overhead', 'Ensure data quality', 'Used by Splunk, Tencent, Yahoo!'],
  }
];

export const wave212AutomationServices: Service[] = [];
export const wave212HealthcareItServices: Service[] = [];
export const wave212MicroSaasServices: Service[] = [];
export const wave212ItServices: Service[] = [];
export const wave212SecurityServices: Service[] = [];
export const wave212CloudServices: Service[] = [];
