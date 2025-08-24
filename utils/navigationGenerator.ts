import { NavigationItem, NavigationCategory, NavigationConfig } from '../types/navigation';

export class NavigationGenerator {
  private services: NavigationItem[] = [];
  private categories: NavigationCategory[] = [];
  private pages: NavigationItem[] = [];

  constructor() {
    this.initializeNavigation();
  }

  private async initializeNavigation() {
    await this.discoverServices();
    await this.discoverPages();
    await this.generateCategories();
  }

  // Auto-discover services from data and generate navigation
  async discoverServices(): Promise<NavigationItem[]> {
    // Comprehensive services list based on website analysis
    this.services = [
      // AI & Machine Learning Services
      {
        id: 'ai-analytics',
        label: 'AI-Powered Data Analytics Platform',
        href: '/services/ai-analytics',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Advanced analytics platform with machine learning capabilities',
        technologyStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
        pricing: '$99/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '10,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 1
      },
      {
        id: 'ai-autonomous-business-manager',
        label: 'AI Autonomous Business Manager',
        href: '/services/ai-autonomous-business-manager',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Fully autonomous business management system',
        technologyStack: ['Python', 'AI/ML', 'React', 'Node.js'],
        pricing: '$299/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '5,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 2
      },
      {
        id: 'ai-consciousness-evolution',
        label: 'AI Consciousness Evolution Platform',
        href: '/services/ai-consciousness-evolution',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Advanced AI consciousness research and development platform',
        technologyStack: ['Python', 'Neural Networks', 'Quantum Computing', 'React'],
        pricing: '$499/month',
        performance: {
          uptime: '99.8%',
          response: '<500ms',
          users: '2,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 3
      },
      {
        id: 'ai-autonomous-research-assistant',
        label: 'AI Autonomous Research Assistant',
        href: '/services/ai-autonomous-research-assistant',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Intelligent research automation and analysis',
        technologyStack: ['Python', 'NLP', 'React', 'FastAPI'],
        pricing: '$199/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '8,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 4
      },
      {
        id: 'ai-business-intelligence',
        label: 'AI Business Intelligence Suite',
        href: '/services/ai-business-intelligence',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Comprehensive business intelligence with AI insights',
        technologyStack: ['Python', 'Machine Learning', 'React', 'PostgreSQL'],
        pricing: '$149/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '12,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 5
      },
      {
        id: 'ai-content-generator',
        label: 'AI Content Generation Platform',
        href: '/services/ai-content-generator',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Automated content creation and management',
        technologyStack: ['Python', 'GPT Models', 'React', 'Node.js'],
        pricing: '$79/month',
        performance: {
          uptime: '99.8%',
          response: '<150ms',
          users: '25,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 6
      },
      {
        id: 'ai-code-review',
        label: 'AI Code Review & Analysis',
        href: '/services/ai-code-review',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Automated code review and quality analysis',
        technologyStack: ['Python', 'Static Analysis', 'React', 'GitHub API'],
        pricing: '$59/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '15,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 7
      },
      {
        id: 'ai-autonomous-decision-engine',
        label: 'AI Autonomous Decision Engine',
        href: '/services/ai-autonomous-decision-engine',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Intelligent decision-making automation system',
        technologyStack: ['Python', 'Decision Trees', 'React', 'Redis'],
        pricing: '$399/month',
        performance: {
          uptime: '99.9%',
          response: '<50ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 8
      },
      {
        id: 'ai-autonomous-ecosystem',
        label: 'AI Autonomous Ecosystem Manager',
        href: '/services/ai-autonomous-ecosystem',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Complete ecosystem management and optimization',
        technologyStack: ['Python', 'AI Orchestration', 'React', 'Kubernetes'],
        pricing: '$599/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '1,500+'
        },
        lastUpdated: '2025-01-15',
        priority: 9
      },
      {
        id: 'ai-autonomous-business-operations',
        label: 'AI Autonomous Business Operations',
        href: '/services/ai-autonomous-business-operations',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'End-to-end business process automation',
        technologyStack: ['Python', 'RPA', 'React', 'Workflow Engine'],
        pricing: '$449/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '4,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 10
      },

      // Cybersecurity Services
      {
        id: 'advanced-cybersecurity-suite',
        label: 'Advanced Cybersecurity Suite',
        href: '/services/advanced-cybersecurity-suite',
        category: 'Cybersecurity',
        status: 'active',
        description: 'Comprehensive cybersecurity protection and monitoring',
        technologyStack: ['Python', 'Security Tools', 'React', 'SIEM'],
        pricing: '$299/month',
        performance: {
          uptime: '99.99%',
          response: '<100ms',
          users: '8,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 11
      },
      {
        id: 'ai-powered-enterprise-security',
        label: 'AI-Powered Enterprise Security',
        href: '/services/ai-powered-enterprise-security',
        category: 'Cybersecurity',
        status: 'active',
        description: 'Intelligent threat detection and response',
        technologyStack: ['Python', 'AI Security', 'React', 'Threat Intel'],
        pricing: '$399/month',
        performance: {
          uptime: '99.99%',
          response: '<50ms',
          users: '5,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 12
      },
      {
        id: 'soc2-compliance-automation',
        label: 'SOC2 Compliance Automation',
        href: '/services/soc2-compliance-automation',
        category: 'Cybersecurity',
        status: 'active',
        description: 'Automated SOC2 compliance and reporting',
        technologyStack: ['Python', 'Compliance Tools', 'React', 'Audit API'],
        pricing: '$199/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 13
      },

      // Infrastructure Services
      {
        id: 'advanced-it-infrastructure-services',
        label: 'Advanced IT Infrastructure Services',
        href: '/services/advanced-it-infrastructure-services',
        category: 'Infrastructure',
        status: 'active',
        description: 'Enterprise-grade infrastructure management',
        technologyStack: ['Kubernetes', 'Docker', 'Terraform', 'Monitoring'],
        pricing: '$199/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '10,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 14
      },
      {
        id: 'autonomous-devops-platform',
        label: 'Autonomous DevOps Platform',
        href: '/services/autonomous-devops-platform',
        category: 'Infrastructure',
        status: 'active',
        description: 'Self-managing DevOps and CI/CD platform',
        technologyStack: ['Jenkins', 'GitLab', 'Kubernetes', 'Monitoring'],
        pricing: '$149/month',
        performance: {
          uptime: '99.9%',
          response: '<150ms',
          users: '6,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 15
      },
      {
        id: 'quantum-cloud-infrastructure',
        label: 'Quantum Cloud Infrastructure',
        href: '/services/quantum-cloud-infrastructure',
        category: 'Infrastructure',
        status: 'beta',
        description: 'Next-generation quantum computing infrastructure',
        technologyStack: ['Quantum Computing', 'Cloud Native', 'React', 'Quantum SDK'],
        pricing: '$999/month',
        performance: {
          uptime: '99.8%',
          response: '<1000ms',
          users: '500+'
        },
        lastUpdated: '2025-01-15',
        priority: 16
      },

      // Blockchain Services
      {
        id: 'ai-blockchain-analytics',
        label: 'AI Blockchain Analytics',
        href: '/services/ai-blockchain-analytics',
        category: 'Blockchain',
        status: 'active',
        description: 'Intelligent blockchain data analysis',
        technologyStack: ['Python', 'Blockchain APIs', 'React', 'Analytics'],
        pricing: '$129/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '4,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 17
      },

      // Content & Marketing Services
      {
        id: 'ai-content-creation',
        label: 'AI Content Creation Platform',
        href: '/services/ai-content-creation',
        category: 'Content & Marketing',
        status: 'active',
        description: 'Automated content creation and optimization',
        technologyStack: ['Python', 'NLP', 'React', 'CMS'],
        pricing: '$89/month',
        performance: {
          uptime: '99.8%',
          response: '<200ms',
          users: '20,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 18
      },
      {
        id: 'ai-content-marketing-automation',
        label: 'AI Content Marketing Automation',
        href: '/services/ai-content-marketing-automation',
        category: 'Content & Marketing',
        status: 'active',
        description: 'Intelligent marketing content automation',
        technologyStack: ['Python', 'Marketing APIs', 'React', 'Analytics'],
        pricing: '$159/month',
        performance: {
          uptime: '99.9%',
          response: '<150ms',
          users: '12,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 19
      },
      {
        id: 'ai-content-personalization-engine',
        label: 'AI Content Personalization Engine',
        href: '/services/ai-content-personalization-engine',
        category: 'Content & Marketing',
        status: 'active',
        description: 'Dynamic content personalization system',
        technologyStack: ['Python', 'ML Models', 'React', 'Personalization'],
        pricing: '$119/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '15,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 20
      },

      // Research & Development Services
      {
        id: 'advanced-research-automation',
        label: 'Advanced Research Automation',
        href: '/services/advanced-research-automation',
        category: 'Research & Development',
        status: 'active',
        description: 'Automated research and data analysis',
        technologyStack: ['Python', 'Research Tools', 'React', 'Data APIs'],
        pricing: '$179/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '6,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 21
      },
      {
        id: 'ai-autonomous-research',
        label: 'AI Autonomous Research Platform',
        href: '/services/ai-autonomous-research',
        category: 'Research & Development',
        status: 'active',
        description: 'Self-directed research and discovery',
        technologyStack: ['Python', 'AI Research', 'React', 'Knowledge Graph'],
        pricing: '$299/month',
        performance: {
          uptime: '99.8%',
          response: '<500ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 22
      },

      // Specialized AI Services
      {
        id: 'ai-autonomous-creative-director',
        label: 'AI Autonomous Creative Director',
        href: '/services/ai-autonomous-creative-director',
        category: 'Creative AI',
        status: 'beta',
        description: 'AI-powered creative direction and management',
        technologyStack: ['Python', 'Creative AI', 'React', 'Design Tools'],
        pricing: '$399/month',
        performance: {
          uptime: '99.8%',
          response: '<200ms',
          users: '2,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 23
      },
      {
        id: 'ai-autonomous-legal-counsel',
        label: 'AI Autonomous Legal Counsel',
        href: '/services/ai-autonomous-legal-counsel',
        category: 'Legal AI',
        status: 'beta',
        description: 'Intelligent legal analysis and counsel',
        technologyStack: ['Python', 'Legal AI', 'React', 'Legal APIs'],
        pricing: '$499/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '1,500+'
        },
        lastUpdated: '2025-01-15',
        priority: 24
      },
      {
        id: 'ai-autonomous-healthcare-physician',
        label: 'AI Autonomous Healthcare Physician',
        href: '/services/ai-autonomous-healthcare-physician',
        category: 'Healthcare AI',
        status: 'beta',
        description: 'AI-powered healthcare diagnostics and analysis',
        technologyStack: ['Python', 'Medical AI', 'React', 'Health APIs'],
        pricing: '$799/month',
        performance: {
          uptime: '99.99%',
          response: '<100ms',
          users: '1,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 25
      }
    ];

    return this.services;
  }

  // Discover and generate pages
  async discoverPages(): Promise<NavigationItem[]> {
    this.pages = [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        priority: 1
      },
      {
        id: 'about',
        label: 'About Us',
        href: '/about',
        priority: 2
      },
      {
        id: 'services',
        label: 'Services',
        href: '/services',
        priority: 3
      },
      {
        id: 'solutions',
        label: 'Solutions',
        href: '/solutions',
        priority: 4
      },
      {
        id: 'pricing',
        label: 'Pricing',
        href: '/pricing',
        priority: 5
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        priority: 6
      },
      {
        id: 'team',
        label: 'Team',
        href: '/team',
        priority: 7
      },
      {
        id: 'case-studies',
        label: 'Case Studies',
        href: '/case-studies',
        priority: 8
      },
      {
        id: 'news',
        label: 'News',
        href: '/news',
        priority: 9
      },
      {
        id: 'events',
        label: 'Events',
        href: '/events',
        priority: 10
      },
      {
        id: 'webinars',
        label: 'Webinars',
        href: '/webinars',
        priority: 11
      },
      {
        id: 'white-papers',
        label: 'White Papers',
        href: '/white-papers',
        priority: 12
      },
      {
        id: 'research-development',
        label: 'Research & Development',
        href: '/research-development',
        priority: 13
      },
      {
        id: 'enterprise-it',
        label: 'Enterprise IT',
        href: '/enterprise-it',
        priority: 14
      },
      {
        id: 'space-tech',
        label: 'Space Technology',
        href: '/space-tech',
        priority: 15
      },
      {
        id: 'quantum-services',
        label: 'Quantum Services',
        href: '/quantum-services',
        priority: 16
      },
      {
        id: 'micro-saas',
        label: 'Micro SaaS Solutions',
        href: '/micro-saas',
        priority: 17
      },
      {
        id: 'startup-tools',
        label: 'Startup Tools',
        href: '/startup-tools',
        priority: 18
      },
      {
        id: 'docs',
        label: 'Documentation',
        href: '/docs',
        priority: 19
      },
      {
        id: 'privacy',
        label: 'Privacy Policy',
        href: '/privacy',
        priority: 20
      },
      {
        id: 'cookies',
        label: 'Cookie Policy',
        href: '/cookies',
        priority: 21
      },
      {
        id: 'accessibility',
        label: 'Accessibility',
        href: '/accessibility',
        priority: 22
      }
    ];

    return this.pages;
  }

  // Generate categories from services
  async generateCategories(): Promise<NavigationCategory[]> {
    const categoryMap = new Map<string, NavigationItem[]>();
    
    // Group services by category
    this.services.forEach(service => {
      if (service.category) {
        if (!categoryMap.has(service.category)) {
          categoryMap.set(service.category, []);
        }
        categoryMap.get(service.category)!.push(service);
      }
    });

    // Create category objects
    this.categories = Array.from(categoryMap.entries()).map(([name, services]) => ({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      icon: this.getCategoryIcon(name),
      serviceCount: services.length,
      services: services.map(s => s.id),
      priority: this.getCategoryPriority(name)
    }));

    // Add additional categories for pages
    this.categories.push(
      {
        id: 'company',
        name: 'Company',
        slug: 'company',
        icon: '🏢',
        serviceCount: 0,
        services: [],
        priority: 1
      },
      {
        id: 'resources',
        name: 'Resources',
        slug: 'resources',
        icon: '📚',
        serviceCount: 0,
        services: [],
        priority: 2
      },
      {
        id: 'legal',
        name: 'Legal',
        slug: 'legal',
        serviceCount: 0,
        services: [],
        priority: 3
      }
    );

    return this.categories;
  }

  // Get category icon
  private getCategoryIcon(categoryName: string): string {
    const iconMap: { [key: string]: string } = {
      'AI & Machine Learning': '🤖',
      'Cybersecurity': '🔒',
      'Infrastructure': '🏗️',
      'Blockchain': '⛓️',
      'Content & Marketing': '📝',
      'Research & Development': '🔬',
      'Creative AI': '🎨',
      'Legal AI': '⚖️',
      'Healthcare AI': '🏥'
    };
    return iconMap[categoryName] || '🚀';
  }

  // Get category priority
  private getCategoryPriority(categoryName: string): number {
    const priorityMap: { [key: string]: number } = {
      'AI & Machine Learning': 1,
      'Cybersecurity': 2,
      'Infrastructure': 3,
      'Blockchain': 4,
      'Content & Marketing': 5,
      'Research & Development': 6,
      'Creative AI': 7,
      'Legal AI': 8,
      'Healthcare AI': 9
    };
    return priorityMap[categoryName] || 10;
  }

  // Generate header navigation
  generateHeaderNavigation(): NavigationItem[] {
    return [
      {
        id: 'home',
        label: '🏠 Home',
        href: '/',
        priority: 1
      },
      {
        id: 'explore',
        label: '🔍 Explore',
        href: '/explore',
        priority: 2
      },
      {
        id: 'services',
        label: '🚀 Services',
        href: '/services',
        priority: 3
      },
      {
        id: 'automation',
        label: '⚡ Automations',
        href: '/automation',
        priority: 4
      },
      {
        id: 'reports',
        label: '📊 Reports',
        href: '/reports',
        priority: 5
      },
      {
        id: 'newsroom',
        label: '📰 Updates',
        href: '/newsroom',
        priority: 6
      },
      {
        id: 'search',
        label: '🔎 Search',
        href: '/search',
        priority: 7
      }
    ];
  }

  // Generate footer navigation
  generateFooterNavigation(): NavigationItem[] {
    return [
      {
        id: 'explore',
        label: 'Explore',
        href: '/explore',
        priority: 1
      },
      {
        id: 'automation',
        label: 'Automations',
        href: '/automation',
        priority: 2
      },
      {
        id: 'reports',
        label: 'Reports',
        href: '/reports',
        priority: 3
      },
      {
        id: 'newsroom',
        label: 'Updates',
        href: '/newsroom',
        priority: 4
      },
      {
        id: 'site-health',
        label: 'Site Health',
        href: '/site-health',
        priority: 5
      },
      {
        id: 'search',
        label: 'Search',
        href: '/search',
        priority: 6
      },
      {
        id: 'sitemap',
        label: 'Sitemap',
        href: '/sitemap.xml',
        priority: 7
      }
    ];
  }

  // Generate sidebar navigation based on context
  generateSidebarNavigation(context: any): NavigationItem[] {
    switch (context.pageType) {
      case 'service':
        return this.generateServiceSidebar(context.currentService);
      case 'category':
        return this.generateCategorySidebar(context.currentCategory);
      case 'dashboard':
        return this.generateDashboardSidebar();
      default:
        return this.generateDefaultSidebar();
    }
  }

  private generateServiceSidebar(serviceId?: string): NavigationItem[] {
    if (!serviceId) return this.generateDefaultSidebar();
    
    const service = this.services.find(s => s.id === serviceId);
    if (!service) return this.generateDefaultSidebar();

    return [
      {
        id: 'service-overview',
        label: 'Overview',
        href: service.href,
        priority: 1
      },
      {
        id: 'service-demo',
        label: 'Demo',
        href: service.href.replace('/services/', '/demo/'),
        priority: 2
      },
      {
        id: 'service-docs',
        label: 'Documentation',
        href: service.href.replace('/services/', '/docs/'),
        priority: 3
      },
      {
        id: 'service-code',
        label: 'Source Code',
        href: `https://github.com/ai-factory/${service.id}`,
        priority: 4,
        isExternal: true
      }
    ];
  }

  private generateCategorySidebar(categoryId?: string): NavigationItem[] {
    if (!categoryId) return this.generateDefaultSidebar();
    
    const category = this.categories.find(c => c.id === categoryId);
    if (!category) return this.generateDefaultSidebar();

    const categoryServices = this.services.filter(s => s.category === category.name);
    
    return [
      {
        id: 'category-overview',
        label: `${category.name} Overview`,
        href: `/category/${category.slug}`,
        priority: 1
      },
      ...categoryServices.map(service => ({
        id: `service-${service.id}`,
        label: service.label,
        href: service.href,
        status: service.status,
        priority: service.priority || 10
      }))
    ];
  }

  private generateDashboardSidebar(): NavigationItem[] {
    return [
      {
        id: 'dashboard-overview',
        label: 'Dashboard Overview',
        href: '/dashboard',
        priority: 1
      },
      {
        id: 'my-services',
        label: 'My Services',
        href: '/dashboard/services',
        priority: 2
      },
      {
        id: 'analytics',
        label: 'Analytics',
        href: '/dashboard/analytics',
        priority: 3
      },
      {
        id: 'settings',
        label: 'Settings',
        href: '/dashboard/settings',
        priority: 4
      }
    ];
  }

  private generateDefaultSidebar(): NavigationItem[] {
    return [
      {
        id: 'quick-start',
        label: 'Quick Start',
        href: '/#services',
        priority: 1
      },
      {
        id: 'popular-services',
        label: 'Popular Services',
        href: '/services',
        priority: 2
      },
      {
        id: 'categories',
        label: 'Browse Categories',
        href: '/explore',
        priority: 3
      }
    ];
  }

  // Auto-update navigation when new services are added
  async updateNavigation(): Promise<void> {
    await this.discoverServices();
    await this.generateCategories();
  }

  // Get complete navigation configuration
  async getNavigationConfig(): Promise<NavigationConfig> {
    return {
      header: this.generateHeaderNavigation(),
      footer: this.generateFooterNavigation(),
      sidebar: this.generateSidebarNavigation({ pageType: 'home' }),
      services: this.services,
      categories: this.categories,
      pages: this.pages,
      importantLinks: [
        {
          id: 'github',
          label: 'GitHub',
          href: 'https://github.com/Zion-Holdings/zion.app',
          isExternal: true,
          priority: 1
        },
        {
          id: 'website',
          label: 'Website',
          href: 'https://ziontechgroup.com',
          isExternal: true,
          priority: 2
        }
      ]
    };
  }
}