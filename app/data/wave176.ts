import { Service } from './serviceTypes';

export const wave176SecurityServices: Service[] = [];
export const wave176CloudServices: Service[] = [];
export const wave176DataServices: Service[] = [];
export const wave176AutomationServices: Service[] = [];

export const wave176MicroSaasServices: Service[] = [
  {
    id: 'w176-micro-saas-analytics-starter',
    title: 'Analytics Starter — Micro SaaS Metrics',
    description: 'Prebuilt analytics dashboard for micro-SaaS: MRR, churn, signups, activation, LTV, and cohort retention. Connect Stripe, PostHog, or Baremetrics.',
    features: ['MRR/ARR and churn tracking', 'Signup and activation funnel', 'Cohort retention views', 'LTV and CAC calculation', 'Stripe/PostHog connectors', 'Embedded customer dashboard'],
    benefits: ['Make product decisions with real data', 'Reduce churn by understanding drop-off', 'Track growth weekly instead of monthly', 'Investor-ready metrics in minutes'],
    pricing: { basic: '$29/mo', pro: '$79/mo', enterprise: '$249/mo' },
    contactInfo: { website: '/services/w176-micro-saas-analytics-starter', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊', href: '/services/w176-micro-saas-analytics-starter', popular: true, category: 'micro-saas', industry: 'Analytics',
  },
];

export const wave176ItServices: Service[] = [
  {
    id: 'w176-it-edge-delivery',
    title: 'Edge Delivery & CDN Hardening',
    description: 'Secure, high-performance content delivery: edge routing, WAF rules, TLS hardening, and caching strategy tuned for static and dynamic assets.',
    features: ['Edge routing and failover', 'WAF rule tuning and attack blocking', 'TLS and HSTS enforcement', 'Cache strategy and invalidation', 'Asset compression and optimization', 'Origin protection and access control'],
    benefits: ['Lower latency globally', 'Reduce attack surface at the edge', 'Fewer outages with automated failover', 'Cheaper bandwidth after optimization'],
    pricing: { basic: '$799/mo', pro: '$2,199/mo', enterprise: 'Custom' },
    contactInfo: { website: '/services/w176-it-edge-delivery', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌍', href: '/services/w176-it-edge-delivery', popular: false, category: 'it', industry: 'Infrastructure',
  },
];

export const wave176AiServices: Service[] = [
  {
    id: 'w176-ai-voice-assistant-factory',
    title: 'Voice Assistant Factory',
    description: 'Build branded voice assistants for phone, web, and kiosk: speech-to-text, LLM orchestration, text-to-speech, and CRM integration.',
    features: ['Speech-to-text and text-to-speech', 'LLM conversation design and guardrails', 'Multilingual voice profiles', 'Call transcript and intent logging', 'CRM and helpdesk handoff', 'Scalable orchestration layer'],
    benefits: ['Serve customers by phone 24/7', 'Reduce call center volume', 'Keep brand voice consistent', 'Capture structured call data'],
    pricing: { basic: '$149/mo', pro: '$499/mo', enterprise: '$1,499/mo' },
    contactInfo: { website: '/services/w176-ai-voice-assistant-factory', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️', href: '/services/w176-ai-voice-assistant-factory', popular: true, category: 'ai', industry: 'Conversational AI',
  },
];
