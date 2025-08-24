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
    // This would typically scan a services directory or API
    // For now, using the services from the website analysis
    this.services = [
      {
        id: 'ai-analytics',
        label: 'AI-Powered Data Analytics Platform',
        href: '/demo/analytics/',
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
        id: 'support-bot',
        label: 'Intelligent Customer Support Bot',
        href: '/demo/support-bot/',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'AI-powered chatbot with natural language processing',
        technologyStack: ['Python', 'NLP', 'React', 'FastAPI'],
        pricing: '$0.10/conversation',
        performance: {
          uptime: '99.8%',
          response: '<100ms',
          users: '50,000+'
        },
        lastUpdated: '2025-01-14',
        priority: 2
      },
      {
        id: 'predictive-maintenance',
        label: 'Predictive Maintenance System',
        href: '/demo/predictive-maintenance/',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'AI-driven predictive maintenance system',
        technologyStack: ['Python', 'Scikit-learn', 'React', 'PostgreSQL'],
        pricing: '$50/equipment/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '15,000+'
        },
        lastUpdated: '2025-01-08',
        priority: 3
      },
      {
        id: 'video-analytics',
        label: 'Real-time Video Analytics',
        href: '/demo/video-analytics/',
        category: 'AI & Machine Learning',
        status: 'beta',
        description: 'Advanced video analytics with real-time object detection',
        technologyStack: ['Python', 'OpenCV', 'TensorFlow', 'WebRTC'],
        pricing: '$25/stream/month',
        performance: {
          uptime: '99.7%',
          response: '<500ms',
          users: '8,000+'
        },
        lastUpdated: '2025-01-07',
        priority: 4
      },
      {
        id: 'iot-pipeline',
        label: 'Real-time IoT Data Pipeline',
        href: '/demo/iot-pipeline/',
        category: 'IoT & Edge',
        status: 'beta',
        description: 'High-performance data pipeline for IoT sensor data',
        technologyStack: ['Apache Kafka', 'Python', 'Node.js', 'MongoDB'],
        pricing: '$5/device/month',
        performance: {
          uptime: '99.7%',
          response: '<50ms',
          users: '5,000+'
        },
        lastUpdated: '2025-01-13',
        priority: 5
      },
      {
        id: 'edge-orchestrator',
        label: 'Edge Computing Orchestrator',
        href: '/demo/edge-orchestrator/',
        category: 'IoT & Edge',
        status: 'development',
        description: 'Intelligent edge computing platform',
        technologyStack: ['Kubernetes', 'Docker', 'Python', 'Go'],
        pricing: '$20/node/month',
        performance: {
          uptime: '99.8%',
          response: '<200ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-09',
        priority: 6
      },
      {
        id: 'blockchain',
        label: 'Blockchain Smart Contract Platform',
        href: '/demo/blockchain/',
        category: 'Blockchain',
        status: 'development',
        description: 'Enterprise-grade blockchain platform',
        technologyStack: ['Ethereum', 'Solidity', 'Web3.js', 'React'],
        pricing: '$0.01/transaction',
        performance: {
          uptime: '99.5%',
          response: '<500ms',
          users: '2,000+'
        },
        lastUpdated: '2025-01-12',
        priority: 7
      },
      {
        id: 'quantum',
        label: 'Quantum Computing Simulator',
        href: '/demo/quantum/',
        category: 'Quantum Computing',
        status: 'beta',
        description: 'Advanced quantum computing simulator',
        technologyStack: ['Python', 'Qiskit', 'React', 'WebAssembly'],
        pricing: '$0.50/minute',
        performance: {
          uptime: '99.6%',
          response: '<1s',
          users: '1,000+'
        },
        lastUpdated: '2025-01-11',
        priority: 8
      },
      {
        id: 'api-gateway',
        label: 'Microservice API Gateway',
        href: '/demo/api-gateway/',
        category: 'Microservices',
        status: 'active',
        description: 'High-performance API gateway for microservices',
        technologyStack: ['Node.js', 'Express', 'Redis', 'Docker'],
        pricing: '$0.001/request',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '25,000+'
        },
        lastUpdated: '2025-01-10',
        priority: 9
      }
    ];

    return this.services;
  }

  // Auto-discover pages from the pages directory
  async discoverPages(): Promise<NavigationItem[]> {
    this.pages = [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        priority: 1
      },
      {
        id: 'explore',
        label: 'Explore',
        href: '/explore',
        priority: 2
      },
      {
        id: 'services',
        label: 'Services',
        href: '/services',
        priority: 3
      },
      {
        id: 'automation',
        label: 'Automations',
        href: '/automation',
        priority: 4
      },
      {
        id: 'reports',
        label: 'Reports',
        href: '/reports',
        priority: 5
      },
      {
        id: 'newsroom',
        label: 'Updates',
        href: '/newsroom',
        priority: 6
      },
      {
        id: 'search',
        label: 'Search',
        href: '/search',
        priority: 7
      },
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/dashboard',
        priority: 8
      },
      {
        id: 'system-status',
        label: 'System Status',
        href: '/system-status',
        priority: 9
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        priority: 10
      }
    ];

    return this.pages;
  }

  // Auto-generate category-based navigation
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

    // Generate category objects
    this.categories = Array.from(categoryMap.entries()).map(([name, services]) => ({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      description: `${name} solutions and services`,
      serviceCount: services.length,
      icon: this.getCategoryIcon(name),
      color: this.getCategoryColor(name)
    }));

    return this.categories;
  }

  private getCategoryIcon(category: string): string {
    const iconMap: Record<string, string> = {
      'AI & Machine Learning': '🤖',
      'IoT & Edge': '🌐',
      'Blockchain': '⛓️',
      'Quantum Computing': '⚛️',
      'Microservices': '🔧'
    };
    return iconMap[category] || '📱';
  }

  private getCategoryColor(category: string): string {
    const colorMap: Record<string, string> = {
      'AI & Machine Learning': 'from-blue-500 to-purple-600',
      'IoT & Edge': 'from-green-500 to-teal-600',
      'Blockchain': 'from-yellow-500 to-orange-600',
      'Quantum Computing': 'from-purple-500 to-pink-600',
      'Microservices': 'from-indigo-500 to-blue-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
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
        href: service.href.replace('/demo/', '/demo/'),
        priority: 2
      },
      {
        id: 'service-docs',
        label: 'Documentation',
        href: service.href.replace('/demo/', '/docs/'),
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