export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  status?: 'active' | 'beta' | 'coming-soon';
  priority: number;
  category?: string;
  icon?: string;
}

export interface NavigationCategory {
  id: string;
  name: string;
  description: string;
  priority: number;
  items: NavigationItem[];
}

export interface MainNavigation {
  main: NavigationItem[];
  services: NavigationCategory[];
  resources: NavigationItem[];
  company: NavigationItem[];
}

export const mainNavigation: MainNavigation = {
  main: [
    {
      id: 'home',
      label: '🏠 Home',
      href: '/',
      description: 'Welcome to Zion Tech Group',
      status: 'active',
      priority: 1
    },
    {
      id: 'about',
      label: 'ℹ️ About',
      href: '/about',
      description: 'Learn about our mission and vision',
      status: 'active',
      priority: 2
    },
    {
      id: 'services',
      label: '🚀 Services',
      href: '/services',
      description: 'Explore our comprehensive service offerings',
      status: 'active',
      priority: 3
    },
    {
      id: 'solutions',
      label: '💡 Solutions',
      href: '/solutions',
      description: 'Industry-specific solutions and use cases',
      status: 'active',
      priority: 4
    },
    {
      id: 'pricing',
      label: '💰 Pricing',
      href: '/pricing',
      description: 'Transparent pricing for all services',
      status: 'active',
      priority: 5
    },
    {
      id: 'contact',
      label: '📞 Contact',
      href: '/contact',
      description: 'Get in touch with our team',
      status: 'active',
      priority: 6
    }
  ],
  services: [
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      description: 'Intelligent automation solutions',
      priority: 1,
      items: [
        {
          id: 'ai-autonomous-research',
          label: 'AI Autonomous Research Assistant',
          href: '/ai-autonomous-research-assistant',
          description: 'Advanced AI-powered research automation',
          status: 'active',
          priority: 1,
          category: 'ai-automation'
        },
        {
          id: 'advanced-ai-automation',
          label: 'Advanced AI Automation Services',
          href: '/advanced-ai-automation-services',
          description: 'Comprehensive AI automation solutions',
          status: 'active',
          priority: 2,
          category: 'ai-automation'
        },
        {
          id: 'agentic-rag',
          label: 'Agentic RAG System',
          href: '/agentic-rag',
          description: 'Intelligent retrieval-augmented generation',
          status: 'active',
          priority: 3,
          category: 'ai-automation'
        },
        {
          id: 'quantum-neural-network',
          label: 'Quantum Neural Network Platform',
          href: '/quantum-neural-network-platform',
          description: 'Next-generation quantum computing solutions',
          status: 'beta',
          priority: 4,
          category: 'ai-automation'
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced security solutions',
      priority: 2,
      items: [
        {
          id: 'advanced-cybersecurity',
          label: 'Advanced Cybersecurity Suite',
          href: '/advanced-cybersecurity-suite',
          description: 'Comprehensive security protection',
          status: 'active',
          priority: 1,
          category: 'cybersecurity'
        },
        {
          id: 'soc2-compliance',
          label: 'SOC2 Compliance Automation',
          href: '/soc2-compliance-automation',
          description: 'Automated compliance management',
          status: 'active',
          priority: 2,
          category: 'cybersecurity'
        }
      ]
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      description: 'Enterprise infrastructure solutions',
      priority: 3,
      items: [
        {
          id: 'advanced-it-infrastructure',
          label: 'Advanced IT Infrastructure Services',
          href: '/advanced-it-infrastructure-services',
          description: 'Enterprise-grade infrastructure solutions',
          status: 'active',
          priority: 1,
          category: 'it-infrastructure'
        },
        {
          id: 'ai-powered-it-asset-management',
          label: 'AI-Powered IT Asset Management',
          href: '/ai-powered-it-asset-management',
          description: 'Intelligent asset tracking and management',
          status: 'active',
          priority: 2,
          category: 'it-infrastructure'
        },
        {
          id: '5g-enterprise-solutions',
          label: '5G Enterprise Solutions',
          href: '/5g-enterprise-solutions',
          description: 'Next-generation network infrastructure',
          status: 'active',
          priority: 3,
          category: 'it-infrastructure'
        }
      ]
    },
    {
      id: 'business-operations',
      name: 'Business Operations',
      description: 'Operational excellence solutions',
      priority: 4,
      items: [
        {
          id: 'autonomous-business-operations',
          label: 'Autonomous Business Operations Platform',
          href: '/autonomous-business-operations-platform',
          description: 'Self-managing business processes',
          status: 'beta',
          priority: 1,
          category: 'business-operations'
        },
        {
          id: 'advanced-research-automation',
          label: 'Advanced Research Automation',
          href: '/advanced-research-automation',
          description: 'Streamlined research workflows',
          status: 'active',
          priority: 2,
          category: 'business-operations'
        }
      ]
    },
    {
      id: 'tools-utilities',
      name: 'Tools & Utilities',
      description: 'Essential business tools',
      priority: 5,
      items: [
        {
          id: 'url-shortener',
          label: 'URL Shortener',
          href: '/url-shortener',
          description: 'Professional URL shortening service',
          status: 'active',
          priority: 1,
          category: 'tools-utilities'
        },
        {
          id: 'website-performance-monitor',
          label: 'Website Performance Monitor',
          href: '/website-performance-monitor',
          description: 'Real-time performance tracking',
          status: 'active',
          priority: 2,
          category: 'tools-utilities'
        },
        {
          id: 'wcag-accessibility-scanner',
          label: 'WCAG Accessibility Scanner',
          href: '/wcag-accessibility-scanner',
          description: 'Web accessibility compliance checker',
          status: 'active',
          priority: 3,
          category: 'tools-utilities'
        },
        {
          id: 'whitepaper-builder',
          label: 'Whitepaper Builder',
          href: '/whitepaper-builder',
          description: 'Professional document creation tool',
          status: 'active',
          priority: 4,
          category: 'tools-utilities'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'blog',
      label: '📰 Blog',
      href: '/blog',
      description: 'Latest insights and updates',
      status: 'active',
      priority: 1
    },
    {
      id: 'documentation',
      label: '📚 Documentation',
      href: '/docs',
      description: 'Comprehensive guides and API docs',
      status: 'active',
      priority: 2
    },
    {
      id: 'case-studies',
      label: '📊 Case Studies',
      href: '/case-studies',
      description: 'Success stories and implementations',
      status: 'active',
      priority: 3
    },
    {
      id: 'whitepapers',
      label: '📄 Whitepapers',
      href: '/whitepapers',
      description: 'In-depth technical research',
      status: 'active',
      priority: 4
    },
    {
      id: 'webinars',
      label: '🎥 Webinars',
      href: '/webinars',
      description: 'Educational sessions and demos',
      status: 'active',
      priority: 5
    }
  ],
  company: [
    {
      id: 'about',
      label: 'About Us',
      href: '/about',
      description: 'Our story and mission',
      status: 'active',
      priority: 1
    },
    {
      id: 'team',
      label: 'Our Team',
      href: '/team',
      description: 'Meet our experts',
      status: 'active',
      priority: 2
    },
    {
      id: 'careers',
      label: 'Careers',
      href: '/careers',
      description: 'Join our team',
      status: 'active',
      priority: 3
    },
    {
      id: 'newsroom',
      label: 'Newsroom',
      href: '/newsroom',
      description: 'Press releases and media',
      status: 'active',
      priority: 4
    },
    {
      id: 'trust',
      label: 'Trust & Security',
      href: '/trust',
      description: 'Security and compliance',
      status: 'active',
      priority: 5
    }
  ]
};

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/ziontechgroup',
    icon: '🔗'
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/ziontechgroup',
    icon: '🐦'
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Zion-Holdings',
    icon: '💻'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@ziontechgroup',
    icon: '📺'
  }
];

export const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'kleber@ziontechgroup.com',
  address: 'Zion Tech Group, Delaware, USA'
};