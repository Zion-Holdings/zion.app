#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BLUEPRINTS_DIR = path.join(ROOT, 'pages', 'reports', 'blueprints');
const SERVICES_DIR = path.join(ROOT, 'public', 'automation', 'services');
const TEMPLATES_DIR = path.join(ROOT, 'automation', 'service-factory', 'templates');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }
function now() { const d = new Date(); return { y: d.getUTCFullYear(), m: String(d.getUTCMonth()+1).padStart(2,'0'), d: String(d.getUTCDate()).padStart(2,'0'), H: String(d.getUTCHours()).padStart(2,'0'), M: String(d.getUTCMinutes()).padStart(2,'0') }; }
function pick(a) { return Array.isArray(a) && a.length ? a[Math.floor(Math.random()*a.length)] : undefined; }

function generateServiceBlueprint() {
  const serviceTypes = [
    'AI-Powered Analytics Platform',
    'Real-time Data Processing Service',
    'Machine Learning Model API',
    'Intelligent Document Processor',
    'Predictive Maintenance System',
    'Natural Language Processing Service',
    'Computer Vision API',
    'Recommendation Engine',
    'Fraud Detection Service',
    'Sentiment Analysis API',
    'Chatbot Orchestration Service',
    'Data Pipeline Orchestrator',
    'Model Training Pipeline',
    'A/B Testing Framework',
    'Performance Monitoring Service'
  ];

  const techStacks = [
    'Python + FastAPI + PostgreSQL + Redis',
    'Node.js + Express + MongoDB + Redis',
    'Go + Gin + PostgreSQL + NATS',
    'Rust + Actix + PostgreSQL + Kafka',
    'Python + Django + Celery + RabbitMQ',
    'Java + Spring Boot + MySQL + Redis',
    'C# + ASP.NET Core + SQL Server + Redis'
  ];

  const deploymentOptions = [
    'Docker + Kubernetes + AWS EKS',
    'Docker + Docker Compose + DigitalOcean',
    'Serverless + AWS Lambda + API Gateway',
    'Serverless + Google Cloud Functions + Cloud Run',
    'Container + Azure Container Instances',
    'VM + Terraform + AWS EC2'
  ];

  const serviceType = pick(serviceTypes);
  const techStack = pick(techStacks);
  const deployment = pick(deploymentOptions);

  return {
    id: `service-${Date.now()}`,
    name: serviceType,
    description: `Automated ${serviceType.toLowerCase()} with intelligent orchestration and monitoring`,
    category: 'AI/IT Service',
    priority: Math.floor(Math.random() * 5) + 1,
    estimatedDevelopmentTime: '2-4 weeks',
    estimatedCost: '$5,000 - $15,000',
    techStack: techStack.split(' + '),
    deployment: deployment,
    features: [
      'RESTful API with OpenAPI documentation',
      'Real-time monitoring and alerting',
      'Automated testing and CI/CD pipeline',
      'Scalable architecture with load balancing',
      'Security best practices implementation',
      'Performance optimization and caching',
      'Comprehensive logging and analytics'
    ],
    marketOpportunity: {
      size: '$2B+ market',
      growth: '25% YoY growth',
      competition: 'Medium competition',
      timeToMarket: '3-6 months advantage'
    },
    createdAt: new Date().toISOString()
  };
}

function createBlueprintPage(blueprint) {
  const t = now();
  const slug = `service-${t.y}-${t.m}-${t.d}-${t.H}${t.M}`;
  
  return `import Head from 'next/head';

export default function ServiceBlueprintPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${blueprint.name}</title>
        <meta name="description" content="${blueprint.description}" />
        <meta property="og:title" content="${blueprint.name}" />
        <meta property="og:description" content="${blueprint.description}" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <div className="mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900 text-cyan-300">
            Service Blueprint
          </span>
          <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-300">
            Priority ${blueprint.priority}
          </span>
        </div>
        
        <h1 className="text-4xl font-extrabold">${blueprint.name}</h1>
        <p className="text-xl text-white/70">${blueprint.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Service Details</h2>
            <dl className="space-y-3">
              <div>
                <dt className="font-semibold text-cyan-300">Category</dt>
                <dd>${blueprint.category}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-300">Development Time</dt>
                <dd>${blueprint.estimatedDevelopmentTime}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-300">Estimated Cost</dt>
                <dd>${blueprint.estimatedCost}</dd>
              </div>
            </dl>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Market Opportunity</h2>
            <dl className="space-y-3">
              <div>
                <dt className="font-semibold text-cyan-300">Market Size</dt>
                <dd>${blueprint.marketOpportunity.size}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-300">Growth Rate</dt>
                <dd>${blueprint.marketOpportunity.growth}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-300">Competition</dt>
                <dd>${blueprint.marketOpportunity.competition}</dd>
              </div>
            </dl>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            ${blueprint.techStack.map(tech => 
              `<span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">${tech}</span>`
            ).join('\n            ')}
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Deployment Strategy</h2>
          <p className="text-white/80">${blueprint.deployment}</p>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-2">
            ${blueprint.features.map(feature => 
              `<li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                ${feature}
              </li>`
            ).join('\n            ')}
          </ul>
        </div>
        
        <div className="mt-12 p-6 bg-slate-900 rounded-lg border border-slate-700">
          <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
          <ol className="list-decimal list-inside space-y-2 text-white/80">
            <li>Validate market demand through customer interviews</li>
            <li>Create technical architecture and API design</li>
            <li>Set up development environment and CI/CD pipeline</li>
            <li>Build MVP with core functionality</li>
            <li>Deploy to staging environment for testing</li>
            <li>Launch beta version and gather feedback</li>
            <li>Iterate based on user feedback and metrics</li>
          </ol>
        </div>
        
        <p className="mt-8 text-white/60 text-sm">Auto-generated by Service Blueprint Factory. Created: ${blueprint.createdAt}</p>
      </main>
    </div>
  );
}`;
}

function writeServiceRegistry(blueprint) {
  const registryFile = path.join(SERVICES_DIR, 'service-registry.json');
  const registry = readJson(registryFile, { services: [] });
  
  if (!Array.isArray(registry.services)) {
    registry.services = [];
  }
  
  // Check if service already exists
  const exists = registry.services.some(s => s.id === blueprint.id);
  if (!exists) {
    registry.services.unshift(blueprint);
    registry.services = registry.services.slice(0, 100); // Keep last 100
    ensureDir(path.dirname(registryFile));
    fs.writeFileSync(registryFile, JSON.stringify(registry, null, 2));
  }
}

function main() {
  ensureDir(BLUEPRINTS_DIR);
  ensureDir(SERVICES_DIR);
  
  const blueprint = generateServiceBlueprint();
  const pageContent = createBlueprintPage(blueprint);
  const t = now();
  const slug = `service-${t.y}-${t.m}-${t.d}-${t.H}${t.M}`;
  const outFile = path.join(BLUEPRINTS_DIR, `${slug}.tsx`);
  
  if (fs.existsSync(outFile)) {
    console.log('Service blueprint already exists, skipping...');
    return;
  }
  
  fs.writeFileSync(outFile, pageContent, 'utf8');
  writeServiceRegistry(blueprint);
  
  console.log('✅ Service blueprint created:', path.relative(ROOT, outFile));
  console.log('📊 Service:', blueprint.name);
  console.log('🎯 Priority:', blueprint.priority);
  console.log('💰 Estimated Cost:', blueprint.estimatedCost);
}

if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error('Service blueprint generator failed:', e);
    process.exitCode = 1;
  }
}

module.exports = { main, generateServiceBlueprint };