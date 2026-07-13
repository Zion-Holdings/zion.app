import os

pages = {
    "solutions/financial-services": {
        "title": "Financial Services & FinTech",
        "desc": "AI-powered solutions for banking, insurance, fintech, and capital markets.",
        "services": [
            ("💳", "Fraud Detection AI", "/ai-fraud-detection", "Real-time transaction monitoring with 94% detection rate."),
            ("📊", "Risk Analytics", "/ai-predictive-analytics", "Credit risk modeling, portfolio optimization, stress testing."),
            ("🔒", "Compliance Automation", "/compliance-automation", "SOC 2, PCI-DSS, SOX compliance monitoring and reporting."),
            ("💱", "Algorithmic Trading", "/ai-stock-portfolio-manager", "ML-powered trading strategies and portfolio management."),
            ("🏦", "Digital Banking Platform", "/ai-smart-invoice", "Modern core banking with AI-powered customer experiences."),
            ("📱", "Mobile Banking", "/mobile-app-development", "Secure mobile banking with biometric authentication."),
        ]
    },
    "solutions/manufacturing-industrial": {
        "title": "Manufacturing & Industrial",
        "desc": "Industry 4.0 solutions. Digital twins, predictive maintenance, IoT, quality inspection.",
        "services": [
            ("🏭", "Digital Twin Platform", "/digital-twin-platform", "Virtual replicas of physical assets for simulation."),
            ("🔧", "Predictive Maintenance", "/ai-predictive-maintenance", "IoT sensor analysis with ML failure prediction."),
            ("👁️", "Computer Vision QC", "/computer-vision", "AI-powered visual quality inspection on production lines."),
            ("📡", "IoT Edge Platform", "/iot-edge", "Edge computing for real-time industrial data processing."),
            ("📦", "Supply Chain AI", "/ai-supply-chain", "Demand forecasting, inventory optimization, logistics."),
            ("⚙️", "Process Automation", "/process-automation", "Intelligent automation of manufacturing workflows."),
        ]
    },
    "solutions/ecommerce-retail": {
        "title": "E-Commerce & Retail",
        "desc": "AI-powered solutions for online and brick-and-mortar retail.",
        "services": [
            ("🛒", "Recommendation Engine", "/ai-recommendation-engine", "Personalized product recommendations with 340% conversion lift."),
            ("💰", "Dynamic Pricing", "/ai-price-optimizer", "AI-powered pricing optimization based on demand."),
            ("📦", "Inventory Optimization", "/ai-smart-inventory", "Demand forecasting and automated replenishment."),
            ("🎯", "Marketing Automation", "/marketing-automation", "Personalized campaigns across email, social, and ads."),
            ("💬", "Customer Support AI", "/ai-customer-support-pro", "24/7 AI chatbot with human escalation."),
            ("📊", "Retail Analytics", "/data-analytics", "Customer behavior, basket analysis, churn prediction."),
        ]
    },
    "solutions/technology-and-saas": {
        "title": "Technology & SaaS",
        "desc": "Complete IT solutions for technology companies and SaaS providers.",
        "services": [
            ("☁️", "Cloud Infrastructure", "/cloud-infrastructure-management", "Multi-cloud architecture, Kubernetes, serverless."),
            ("⚙️", "DevOps & CI/CD", "/devops-automation", "Automated pipelines, infrastructure as code, monitoring."),
            ("🔐", "Enterprise Security", "/enterprise-security", "Zero Trust, SIEM, penetration testing, incident response."),
            ("🧠", "AI/ML Platform", "/ai-ml-platform", "MLOps, feature stores, model serving, A/B testing."),
            ("📊", "Business Intelligence", "/business-intelligence", "Data warehousing, dashboards, predictive analytics."),
            ("📱", "Product Development", "/custom-development", "Full-stack development, mobile apps, API platforms."),
        ]
    },
    "solutions/logistics-supply-chain": {
        "title": "Logistics & Supply Chain",
        "desc": "AI-powered logistics and supply chain solutions.",
        "services": [
            ("🚚", "Route Optimization", "/ai-route-optimizer", "AI route planning with real-time traffic and weather."),
            ("🏭", "Warehouse Automation", "/smart-inventory", "Automated picking, sorting, and inventory management."),
            ("📡", "Fleet Management", "/iot-platform", "Real-time vehicle tracking, fuel optimization, maintenance."),
            ("📦", "Supply Chain Visibility", "/supply-chain-optimizer", "End-to-end supply chain tracking and optimization."),
            ("🔮", "Demand Forecasting", "/ai-predictive-analytics", "ML-powered demand prediction for inventory planning."),
            ("📊", "Logistics Analytics", "/data-analytics", "Cost analysis, delivery performance, carrier optimization."),
        ]
    },
    "solutions/government-and-public-sector": {
        "title": "Government & Public Sector",
        "desc": "Digital transformation for government agencies.",
        "services": [
            ("🏛️", "Digital Citizen Services", "/digital-transformation", "Online portals, digital forms, automated workflows."),
            ("📊", "Public Data Analytics", "/data-analytics", "Population analytics, resource allocation, policy modeling."),
            ("🔒", "Government Security", "/cybersecurity", "FedRAMP-compliant security, threat intelligence, incident response."),
            ("☁️", "Government Cloud", "/cloud-infrastructure", "FedRAMP-authorized cloud infrastructure and migration."),
            ("🤖", "AI Chatbots for Citizens", "/ai-chatbot-builder", "24/7 citizen service chatbots with multilingual support."),
            ("📋", "Compliance & Audit", "/compliance-automation", "Automated compliance reporting and audit trails."),
        ]
    },
    "solutions/insurance": {
        "title": "Insurance",
        "desc": "AI-powered solutions for insurance companies.",
        "services": [
            ("📋", "Claims Automation", "/ai-claims-automation", "AI-powered claims processing with 87% faster resolution."),
            ("🔍", "Underwriting AI", "/ai-predictive-analytics", "Automated risk assessment and pricing optimization."),
            ("🛡️", "Fraud Detection", "/ai-fraud-detection", "ML-based fraud detection for claims and applications."),
            ("👤", "Customer Portal", "/ai-customer-360", "Unified customer view with self-service capabilities."),
            ("📊", "Actuarial Analytics", "/ai-predictive-analytics", "Predictive modeling for risk and pricing."),
            ("📱", "Mobile Claims", "/mobile-development", "Mobile app for claims filing with photo/document upload."),
        ]
    },
}

base = "/data/data/com.termux/files/home/zion-support.github.io"
for path, data in pages.items():
    lines = []
    for icon, name, href, desc in data["services"]:
        lines.append(f'            {{ icon: "{icon}", name: "{name}", href: "{href}", desc: "{desc}" }},')
    services_str = "\n".join(lines)
    
    content = f'''import Link from 'next/link';

export const metadata = {{ title: "{data["title"]}", description: "{data["desc"]}" }};

export default function SolutionPage() {{
  const services = [
{services_str}
  ];
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">{data["title"]}</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{data["title"]}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{data["desc"]}</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {{services.map((s, i) => (
              <Link key={{i}} href={{s.href}} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{{s.icon}}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{{s.name}}</h3>
                <p className="mt-2 text-sm text-slate-400">{{s.desc}}</p>
              </Link>
            ))}}
          </div>
          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need Custom Solutions?</h2>
            <p className="text-slate-300 mb-6">Our experts can tailor solutions to your specific requirements.</p>
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}}
'''
    filepath = f"{base}/app/{path}/page.tsx"
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w') as f:
        f.write(content)
    print(f"✅ Created {path}/page.tsx")
