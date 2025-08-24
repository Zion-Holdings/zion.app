import { ServiceVariant } from '../types/service-variants';

export interface InnovativeAIAutomationService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const innovativeAIAutomationServices: InnovativeAIAutomationService[] = [
  {
    id: 'ai-autonomous-code-review',
    name: 'AI Autonomous Code Review',
    tagline: 'Automated code quality analysis with AI-powered insights and security scanning',
    price: '$199',
    period: '/month',
    description: 'Advanced AI-powered code review system that automatically analyzes code quality, security vulnerabilities, and performance issues across multiple programming languages.',
    features: [
      'Multi-language support (Python, JavaScript, Go, Rust, Java)',
      'AI-powered security vulnerability detection',
      'Performance optimization recommendations',
      'Code quality scoring and metrics',
      'Integration with GitHub, GitLab, Bitbucket',
      'Custom rule engine and policies',
      'Real-time feedback and suggestions',
      'Team collaboration and review workflows',
      'Compliance and best practices enforcement'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/ai-autonomous-code-review',
    marketPosition: 'Competes with SonarQube, CodeClimate, and Snyk; offers AI-powered insights and automation.',
    targetAudience: 'Development teams, DevOps engineers, Security teams',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'AI & Development',
    realService: true,
    technology: ['Python', 'TensorFlow', 'OpenAI GPT-4', 'PostgreSQL', 'Redis'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Slack', 'Teams'],
    useCases: ['Code quality assurance', 'Security scanning', 'Performance optimization', 'Team collaboration'],
    roi: 'Reduce code review time by 70% and improve code quality by 40%',
    competitors: ['SonarQube', 'CodeClimate', 'Snyk', 'DeepCode'],
    marketSize: '$2.5B+ code review and analysis market',
    growthRate: '85% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Containerized microservices architecture with AI model serving and real-time analysis engine.',
    launchDate: '2025-01-15',
    customers: 127,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'ai-autonomous-testing-orchestrator',
    name: 'AI Autonomous Testing Orchestrator',
    tagline: 'Intelligent test automation with self-healing and adaptive test generation',
    price: '$299',
    period: '/month',
    description: 'AI-powered testing platform that automatically generates, executes, and maintains test suites while adapting to application changes.',
    features: [
      'AI-generated test cases and scenarios',
      'Self-healing test automation',
      'Cross-browser and cross-platform testing',
      'Performance and load testing automation',
      'Visual regression testing with AI',
      'Test data generation and management',
      'CI/CD pipeline integration',
      'Real-time test execution monitoring',
      'Predictive test failure analysis'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-autonomous-testing-orchestrator',
    marketPosition: 'Advanced alternative to Selenium, Cypress, and Playwright with AI automation.',
    targetAudience: 'QA teams, DevOps engineers, Development teams',
    trialDays: 21,
    setupTime: '4 hours',
    category: 'AI & Testing',
    realService: true,
    technology: ['Python', 'Selenium', 'Playwright', 'OpenAI', 'TensorFlow', 'Docker'],
    integrations: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Azure DevOps', 'Jira'],
    useCases: ['Automated testing', 'CI/CD integration', 'Quality assurance', 'Regression testing'],
    roi: 'Reduce testing time by 80% and increase test coverage by 60%',
    competitors: ['Selenium', 'Cypress', 'Playwright', 'TestCafe', 'Katalon'],
    marketSize: '$4.2B+ test automation market',
    growthRate: '92% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Distributed testing infrastructure with AI-powered test generation and execution orchestration.',
    launchDate: '2025-01-20',
    customers: 94,
    rating: 4.8,
    reviews: 67
  }
];