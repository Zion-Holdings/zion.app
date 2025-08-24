"use client";

import { useState } from "react";

interface AIService {
  id: string;
  name: string;
  description: string;
  technicalSpecs: string[];
  useCases: string[];
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  integration: string[];
}

const aiServices: AIService[] = [
  {
    id: "zion-gpt-enterprise",
    name: "ZionGPT Enterprise",
    description: "Enterprise-grade AI assistant with custom knowledge base integration, advanced reasoning, and compliance features.",
    technicalSpecs: [
      "GPT-4/Claude-3 integration",
      "Custom fine-tuning capabilities",
      "Multi-tenant architecture",
      "Enterprise SSO integration",
      "Real-time learning from feedback",
      "Advanced prompt engineering"
    ],
    useCases: [
      "Customer support automation",
      "Knowledge management",
      "Document analysis and summarization",
      "Code review and assistance",
      "Research and data analysis",
      "Training and onboarding"
    ],
    pricing: "Starting at $499/month",
    startingPrice: 499,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=ZionGPT%20Enterprise%20Inquiry",
    icon: "🤖",
    features: [
      "Custom knowledge base training",
      "Multi-language support (100+ languages)",
      "Advanced reasoning and problem-solving",
      "API integration and webhooks",
      "Real-time learning and adaptation",
      "Enterprise security and compliance",
      "Audit trails and logging",
      "Custom branding and theming"
    ],
    integration: [
      "REST API with webhooks",
      "Slack, Teams, Discord bots",
      "Chrome extension",
      "Mobile SDK (iOS/Android)",
      "WordPress plugin",
      "Shopify app"
    ]
  },
  {
    id: "ai-content-generation",
    name: "AI Content Generation Suite",
    description: "Comprehensive content creation platform for marketing, documentation, and creative writing with brand voice consistency.",
    technicalSpecs: [
      "Multi-model AI integration",
      "Brand voice training",
      "SEO optimization",
      "Plagiarism detection",
      "Multi-format output",
      "Collaborative editing"
    ],
    useCases: [
      "Marketing copy and campaigns",
      "Blog posts and articles",
      "Product descriptions",
      "Email marketing",
      "Social media content",
      "Technical documentation"
    ],
    pricing: "Starting at $199/month",
    startingPrice: 199,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Content%20Generation%20Inquiry",
    icon: "✍️",
    features: [
      "AI-powered content creation",
      "Brand voice consistency",
      "SEO optimization tools",
      "Multi-language support",
      "Content calendar management",
      "Performance analytics",
      "A/B testing capabilities",
      "Team collaboration tools"
    ],
    integration: [
      "WordPress integration",
      "Shopify product descriptions",
      "Mailchimp email campaigns",
      "Social media platforms",
      "CMS systems",
      "Marketing automation tools"
    ]
  },
  {
    id: "ai-data-analytics",
    name: "AI-Powered Business Intelligence",
    description: "Advanced analytics platform with predictive modeling, natural language queries, and automated insights generation.",
    technicalSpecs: [
      "Machine learning models",
      "Real-time data processing",
      "Predictive analytics",
      "Natural language queries",
      "Automated reporting",
      "Data visualization"
    ],
    useCases: [
      "Sales forecasting",
      "Customer behavior analysis",
      "Risk assessment",
      "Performance optimization",
      "Market trend analysis",
      "Operational efficiency"
    ],
    pricing: "Starting at $599/month",
    startingPrice: 599,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Analytics%20Inquiry",
    icon: "📊",
    features: [
      "Predictive analytics",
      "Natural language queries",
      "Automated reporting",
      "Real-time dashboards",
      "Data visualization",
      "Custom ML models",
      "Anomaly detection",
      "Trend forecasting"
    ],
    integration: [
      "Database connectors",
      "API integrations",
      "BI tools (Tableau, Power BI)",
      "CRM systems",
      "ERP systems",
      "Cloud data warehouses"
    ]
  },
  {
    id: "ai-automation",
    name: "AI Process Automation",
    description: "Intelligent automation platform for business processes, workflows, and repetitive tasks with learning capabilities.",
    technicalSpecs: [
      "RPA with AI enhancement",
      "Process mining",
      "Workflow automation",
      "Document processing",
      "Decision automation",
      "Learning algorithms"
    ],
    useCases: [
      "Invoice processing",
      "Customer onboarding",
      "Data entry automation",
      "Report generation",
      "Quality control",
      "Compliance monitoring"
    ],
    pricing: "Starting at $399/month",
    startingPrice: 399,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Automation%20Inquiry",
    icon: "⚡",
    features: [
      "Process mining and discovery",
      "Workflow automation",
      "Document processing",
      "Decision automation",
      "Learning and optimization",
      "Integration capabilities",
      "Monitoring and analytics",
      "Compliance tracking"
    ],
    integration: [
      "ERP systems",
      "CRM platforms",
      "Accounting software",
      "HR systems",
      "Email platforms",
      "Cloud services"
    ]
  }
];

export default function AISolutionsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AI Solutions & Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Cutting-edge artificial intelligence solutions designed to transform your business operations, 
          enhance productivity, and drive innovation across all departments.
        </p>
      </div>

      {/* AI Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {aiServices.map(service => (
          <div
            key={service.id}
            className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6"
          >
            {/* Service Header */}
            <div className="text-center space-y-3">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="text-2xl font-bold">{service.name}</h2>
              <p className="opacity-80">{service.description}</p>
              <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-blue-400">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">⚙️</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Use Cases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">💡</span>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration */}
            <div>
              <h3 className="font-semibold mb-3 text-orange-400">Integration Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.integration.map((integration, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">🔗</span>
                    <span>{integration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </a>
              <a
                href={`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* AI Capabilities Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">AI Capabilities Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold mb-2">Natural Language Processing</h3>
            <p className="text-sm opacity-80">Advanced text analysis, generation, and understanding across multiple languages</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold mb-2">Computer Vision</h3>
            <p className="text-sm opacity-80">Image and video analysis, object detection, and visual content understanding</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold mb-2">Predictive Analytics</h3>
            <p className="text-sm opacity-80">Machine learning models for forecasting, trend analysis, and decision support</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-3xl font-bold">Ready to Harness the Power of AI?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Let's discuss how our AI solutions can transform your business operations and drive innovation. 
          Get in touch for a personalized AI strategy consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI%20Solutions%20Consultation"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Schedule AI Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>

      {/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </a>
      </div>
    </div>
  );
}