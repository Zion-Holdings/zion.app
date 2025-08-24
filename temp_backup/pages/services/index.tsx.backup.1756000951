import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025 } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';
import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { real2029Q2Additions } from '../../data/real-2029-q2-additions';
import { real2029Q3Additions } from '../../data/real-2029-q3-additions';
import { real2030Q1Additions } from '../../data/real-2030-q1-additions';
import { real2031MicroSaasAdditions } from '../../data/real-2031-micro-saas-additions';
import { real2031ITServicesAdditions } from '../../data/real-2031-it-services-additions';
import { real2031AIServicesAdditions } from '../../data/real-2031-ai-services-additions';
import { real2030Q2Additions } from '../../data/real-2030-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { professionalServices } from '../../data/professional-services';
import { real2032ServiceExpansions } from '../../data/real-2032-service-expansions';
import { real2035Q1Additions } from '../../data/real-2035-q1-additions';
import { real2035Q2AdditionsExtra } from '../../data/real-2035-q2-additions-extra';
import { real2025ExtraServices } from '../../data/real-2025-extra-services';
import { real2026Q4ExpansionsV2 } from '../../data/real-2026-q4-expansions-v2';
import { real2036ServiceExpansions } from '../../data/real-2036-service-expansions';
import { real2026Q4ExpansionsV3 } from '../../data/real-2026-q4-expansions-v3';
import { real2036InnovativeServices } from '../../data/real-2036-innovative-services';
import { real2036ITServices } from '../../data/real-2036-it-services';
import { real2036AIServices } from '../../data/real-2036-ai-services';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      realMarketServicesExtended as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realQ4Services2025 as unknown[],
      real2025Q4Additions as unknown[],
      real2026Q1Additions as unknown[],
      added2026Q2Services as unknown[],
      real2026Q3Additions as unknown[],
      real2026Q4Additions as unknown[],
      real2026Q4NewServices as unknown[],
      real2027Q1Additions as unknown[],
      real2027Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      real2028ServiceExpansions as unknown[],
      real2029Q1Additions as unknown[],
      real2029Q2Additions as unknown[],
      real2029Q3Additions as unknown[],
      real2030Q1Additions as unknown[],
      real2030Q2Additions as unknown[],
      real2031MicroSaasAdditions as unknown[],
      real2031ITServicesAdditions as unknown[],
      real2031AIServicesAdditions as unknown[],
      professionalServices as unknown[],
      real2032ServiceExpansions as unknown[],
      real2035Q1Additions as unknown[],
      real2035Q2AdditionsExtra as unknown[],
      real2025ExtraServices as unknown[],
      real2026Q4ExpansionsV2 as unknown[],
      real2026Q4ExpansionsV3 as unknown[],
      real2036InnovativeServices as unknown[],
      real2036ITServices as unknown[],
      real2036AIServices as unknown[]
    )
    .concat(real2036ServiceExpansions as unknown[]);
  const byCategory: Record<string, unknown[]> = {};
  for (const c of categories) byCategory[c] = [];
  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {
    'AI & Data': 'AI & Data',
    'AI & Machine Learning': 'AI & Data',
    'GenAI': 'AI & Data',
    'Cloud & FinOps': 'Cloud & FinOps',
    'Cloud & Data': 'Cloud & FinOps',
    'Platform Engineering': 'Cloud & FinOps',
    'Observability': 'Observability',
    'Observability & Telemetry': 'Observability',
    'Quality & Monitoring': 'Quality & Monitoring',
    'Security & Reliability': 'Quality & Monitoring',
    'Security & Compliance': 'Quality & Monitoring',
    'Developer Tools': 'Developer Tools',
    'Growth & Marketing': 'Developer Tools'
  };
  for (const s of all) {
    const service = s as { category?: string };
    const rawCat = (service.category || '').trim();
    const mapped = categoryAliases[rawCat] || (categories.includes(rawCat) ? rawCat : 'Developer Tools');
    byCategory[mapped].push(s);
  }

  const anchorMap: Record<string, string> = {
    'AI & Data': 'ai',
    'Developer Tools': 'developer-tools',
    'Cloud & FinOps': 'cloud',
    'Observability': 'observability',
    'Quality & Monitoring': 'quality',
  };

  const [shownCounts, setShownCounts] = React.useState<Record<string, number>>(() => Object.fromEntries(categories.map(c => [c, 12])));
  const [searchQuery, setSearchQuery] = React.useState('');

  const normalized = (value: unknown) => {
    const obj = value as { id?: string; name?: string; tagline?: string; description?: string };
    return `${obj.id || ''} ${obj.name || ''} ${obj.tagline || ''} ${obj.description || ''}`.toLowerCase();
  };

  const filteredAll = searchQuery.trim().length
    ? all.filter((s) => normalized(s).includes(searchQuery.toLowerCase()))
    : all;

<<<<<<< HEAD
const ServicesPage: NextPage = () => {
  const services = [
    // AI & Machine Learning Services
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "Custom AI Model Development",
          description: "Tailored machine learning models for your specific business needs. From predictive analytics to natural language processing.",
          features: ["Custom algorithm development", "Model training & optimization", "API integration", "Performance monitoring"],
          pricing: "$5,000 - $25,000",
          link: "https://ziontechgroup.com/services/ai-development",
          icon: "🤖"
        },
        {
          name: "AI-Powered Business Intelligence",
          description: "Transform your data into actionable insights with AI-driven analytics and reporting systems.",
          features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "Automated reporting"],
          pricing: "$3,000 - $15,000",
          link: "https://ziontechgroup.com/services/business-intelligence",
          icon: "📊"
        },
        {
          name: "Natural Language Processing Solutions",
          description: "Build intelligent chatbots, sentiment analysis tools, and language understanding systems.",
          features: ["Chatbot development", "Sentiment analysis", "Text classification", "Language translation"],
          pricing: "$2,500 - $12,000",
          link: "https://ziontechgroup.com/services/nlp-solutions",
          icon: "💬"
        }
      ]
    },
    // Cloud & Infrastructure Services
    {
      category: "Cloud & Infrastructure",
      services: [
        {
          name: "Cloud Migration & Architecture",
          description: "Seamless migration to cloud platforms with optimized architecture for scalability and performance.",
          features: ["Multi-cloud strategy", "Cost optimization", "Security implementation", "Performance tuning"],
          pricing: "$8,000 - $40,000",
          link: "https://ziontechgroup.com/services/cloud-migration",
          icon: "☁️"
        },
        {
          name: "DevOps & CI/CD Implementation",
          description: "Automate your development pipeline with modern DevOps practices and continuous integration.",
          features: ["Pipeline automation", "Infrastructure as code", "Monitoring & alerting", "Security scanning"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/devops",
          icon: "🔄"
        },
        {
          name: "Microservices Architecture",
          description: "Design and implement scalable microservices architecture for modern applications.",
          features: ["Service design", "API gateway setup", "Load balancing", "Service mesh implementation"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/microservices",
          icon: "🔧"
        }
      ]
    },
    // Web & Mobile Development
    {
      category: "Web & Mobile Development",
      services: [
        {
          name: "Full-Stack Web Applications",
          description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
          features: ["React/Next.js development", "Backend API development", "Database design", "Performance optimization"],
          pricing: "$10,000 - $50,000",
          link: "https://ziontechgroup.com/services/web-development",
          icon: "🌐"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android platforms.",
          features: ["Cross-platform development", "Native performance", "App store optimization", "Push notifications"],
          pricing: "$15,000 - $75,000",
          link: "https://ziontechgroup.com/services/mobile-development",
          icon: "📱"
        },
        {
          name: "Progressive Web Apps (PWA)",
          description: "Modern web applications that provide native app-like experience across all devices.",
          features: ["Offline functionality", "Push notifications", "App-like interface", "Cross-platform compatibility"],
          pricing: "$8,000 - $35,000",
          link: "https://ziontechgroup.com/services/pwa-development",
          icon: "⚡"
        }
      ]
    },
    // Data & Analytics Services
    {
      category: "Data & Analytics",
      services: [
        {
          name: "Data Pipeline Engineering",
          description: "Build robust data pipelines for collecting, processing, and analyzing large-scale data.",
          features: ["ETL pipeline design", "Real-time streaming", "Data quality monitoring", "Scalable architecture"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/data-pipelines",
          icon: "📈"
        },
        {
          name: "Database Design & Optimization",
          description: "Design and optimize databases for performance, scalability, and reliability.",
          features: ["Schema design", "Performance tuning", "Backup strategies", "Security implementation"],
          pricing: "$3,000 - $18,000",
          link: "https://ziontechgroup.com/services/database-design",
          icon: "🗄️"
        },
        {
          name: "Business Intelligence & Reporting",
          description: "Transform raw data into meaningful insights with interactive dashboards and reports.",
          features: ["Interactive dashboards", "Automated reporting", "Data visualization", "KPI tracking"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/business-intelligence",
          icon: "📊"
        }
      ]
    },
    // Security & Compliance
    {
      category: "Security & Compliance",
      services: [
        {
          name: "Security Auditing & Penetration Testing",
          description: "Comprehensive security assessments to identify and fix vulnerabilities in your systems.",
          features: ["Vulnerability assessment", "Penetration testing", "Security recommendations", "Compliance reporting"],
          pricing: "$5,000 - $25,000",
          link: "https://ziontechgroup.com/services/security-auditing",
          icon: "🔒"
        },
        {
          name: "Network Security Implementation",
          description: "Implement robust network security measures to protect your infrastructure.",
          features: ["Firewall configuration", "Intrusion detection", "VPN setup", "Security monitoring"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/network-security",
          icon: "🛡️"
        },
        {
          name: "Compliance & Governance",
          description: "Ensure your systems meet industry standards and regulatory requirements.",
          features: ["GDPR compliance", "SOC 2 preparation", "HIPAA compliance", "Security policies"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/compliance",
          icon: "📋"
        }
      ]
    },
    // Blockchain & Emerging Tech
    {
      category: "Blockchain & Emerging Tech",
      services: [
        {
          name: "Blockchain Development",
          description: "Build decentralized applications and smart contracts on various blockchain platforms.",
          features: ["Smart contract development", "DApp development", "Blockchain integration", "Token creation"],
          pricing: "$8,000 - $40,000",
          link: "https://ziontechgroup.com/services/blockchain",
          icon: "⛓️"
        },
        {
          name: "IoT Platform Development",
          description: "Create connected IoT solutions for smart devices and industrial applications.",
          features: ["Device connectivity", "Data collection", "Real-time monitoring", "Analytics dashboard"],
          pricing: "$10,000 - $50,000",
          link: "https://ziontechgroup.com/services/iot-platforms",
          icon: "🌐"
        },
        {
          name: "AR/VR Application Development",
          description: "Immersive augmented and virtual reality experiences for training and entertainment.",
          features: ["3D modeling", "Interactive experiences", "Cross-platform support", "Performance optimization"],
          pricing: "$15,000 - $75,000",
          link: "https://ziontechgroup.com/services/ar-vr",
          icon: "🥽"
        }
      ]
    },
    // Business Solutions
    {
      category: "Business Solutions",
      services: [
        {
          name: "Digital Transformation Consulting",
          description: "Strategic guidance for modernizing your business processes and technology stack.",
          features: ["Technology assessment", "Strategy development", "Implementation planning", "Change management"],
          pricing: "$150 - $300/hour",
          link: "https://ziontechgroup.com/services/digital-transformation",
          icon: "🚀"
        },
        {
          name: "Performance Optimization",
          description: "Optimize your applications and systems for maximum performance and user experience.",
          features: ["Performance analysis", "Code optimization", "Infrastructure tuning", "Monitoring setup"],
          pricing: "$3,000 - $20,000",
          link: "https://ziontechgroup.com/services/performance-optimization",
          icon: "⚡"
        },
        {
          name: "Quality Assurance & Testing",
          description: "Comprehensive testing services to ensure your applications meet quality standards.",
          features: ["Automated testing", "Manual testing", "Performance testing", "Security testing"],
          pricing: "$2,500 - $15,000",
          link: "https://ziontechgroup.com/services/quality-assurance",
          icon: "✅"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Our Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of micro SAAS services, IT solutions, and AI development services. From custom AI models to cloud architecture, we deliver innovative technology solutions." />
        <meta name="keywords" content="AI development, cloud services, web development, mobile apps, blockchain, IoT, cybersecurity, digital transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services. 
            We help businesses of all sizes transform their digital presence and achieve technological excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Starting at {service.pricing}
                      </span>
                    </div>
                    <Link 
                      href={service.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our services can transform your business. Get in touch with our experts today.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Website
            </Link>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge solutions using the latest technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with proven track records</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous support and maintenance after delivery</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
=======
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO title="Services | Zion Tech Group" description="Browse 350+ real micro SaaS, IT, and AI services with transparent pricing and fast onboarding." canonical="https://ziontechgroup.com/services/" />

      <div className="container mx-auto px-4 py-16 space-y-12 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">All Services</h1>
          <p className="text-gray-300 text-lg">Productized solutions across AI, cloud, DevOps, observability, and more. Average market prices linked in <a href="/market-pricing" className="text-cyan-400 underline">Market Pricing</a>. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
          <p className="mt-3 text-gray-400 text-sm">Prefer a tailored bundle? See <a href="/pricing" className="text-cyan-400 underline">Pricing</a> or <a href="/contact" className="text-cyan-400 underline">Contact Sales</a> for custom quotes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a href="#ai" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">AI & Data</a>
            <a href="#developer-tools" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Developer Tools</a>
            <a href="#cloud" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Cloud & FinOps</a>
            <a href="#observability" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Observability</a>
            <a href="#quality" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Quality & Monitoring</a>
          </div>
          <div className="mt-6 max-w-3xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services by name, feature, or use case..."
              className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-700/70 focus:border-cyan-500/60 outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {categories.map((cat) => (
          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {
                const service = s as { id?: string; name?: string; link?: string; category?: string; tagline?: string; description?: string; price?: string; period?: string };
                const slug = service.link ? (() => { try { const u = new URL(service.link); const p = u.pathname.replace(/^\/+|\/+$/g, ''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || ''); } catch { return toSlug(service.id || service.name || ''); } })() : toSlug(service.id || service.name || '');
                return (
                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline || service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={service.link || `/services/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link || `/services/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                );
              })}
            </div>
            {byCategory[cat].length > (shownCounts[cat] ?? 12) && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShownCounts(prev => ({ ...prev, [cat]: (prev[cat] ?? 12) + 12 }))}
                  className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50"
                >
                  Show more
                </button>
              </div>
            )}
          </section>
        ))}
      </div>
    </UltraFuturisticBackground>
  );
}
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328
