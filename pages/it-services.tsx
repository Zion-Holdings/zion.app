import React from 'react';
import Head from 'next/head';
import { Cloud, Cpu, Server, Database, Settings, Shield, Phone, Mail, MapPin, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';

import ServiceAds from '../components/sections/ServiceAds';

export default function ITServicesPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const offerings = [
    { icon: <Cloud className="w-6 h-6 text-cyan-400" />, title: 'Cloud Platform Engineering', desc: 'Landing zones, multi-account architectures, and secure-by-default foundations on AWS, Azure, and GCP.' },
    { icon: <Cpu className="w-6 h-6 text-purple-400" />, title: 'DevOps & Platform Ops', desc: 'CI/CD, IaC (Terraform/Pulumi), GitOps (ArgoCD/Flux), golden images, internal platforms.' },
    { icon: <Server className="w-6 h-6 text-amber-400" />, title: 'SRE & Reliability', desc: 'SLOs/SLIs, error budgets, incident response, chaos testing, capacity planning and autoscaling.' },
    { icon: <Database className="w-6 h-6 text-emerald-400" />, title: 'Data & Observability', desc: 'ELK/Opensearch, Prometheus/Grafana, OpenTelemetry, cost-aware logging and tracing.' },
    { icon: <Settings className="w-6 h-6 text-rose-400" />, title: 'FinOps & Cost Optimization', desc: 'Rightsizing, savings plans, K8s bin-packing, storage lifecycle, multi-cloud egress control.' },
    { icon: <Shield className="w-6 h-6 text-blue-400" />, title: 'Governance & Compliance', desc: 'SOC 2, ISO 27001, HIPAA baselines, policy-as-code with OPA/Conftest and drift detection.' },
  ];

  const packages = [
    { name: 'Kickstart', price: '$4,900 fixed', items: ['Cloud baseline review', 'CI/CD quickstart', 'Observability lite', 'Cost 30-day plan'] },
    { name: 'Scale', price: '$9,900 fixed', items: ['Secure landing zone', 'GitOps platform', 'SLOs + alerts', 'FinOps automation'] },
    { name: 'Managed', price: 'From $2,000/month', items: ['Ops on-call 24/7', 'Release & env mgmt', 'Weekly tune-ups', 'Monthly executive report'] },
  ];

  const featuredITAds = [
    {
      title: '💸 Cloud Cost Optimizer Pro',
      description: 'Rightsizing, storage lifecycle, anomaly detection and K8s bin-packing insights.',
      price: 'Starting at $99/month',
      features: ['Rightsizing & schedules', 'Lifecycle policies', 'Anomaly alerts', 'IaC outputs'],
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      contactInfo
    },
    {
      title: '🗄️ Database Performance Monitor',
      description: 'Slow query capture, AI index suggestions, capacity forecasting for Postgres/MySQL.',
      price: 'Starting at $79/month',
      features: ['Slow query ranking', 'AI index advice', 'Pool tuning', 'SLA/SLO dashboards'],
      link: 'https://ziontechgroup.com/database-performance-monitor',
      contactInfo
    },
    {
      title: '🔐 API Security Scanner',
      description: 'Automated OpenAPI/GraphQL scanning, auth/Z checks, and dependency audit.',
      price: 'Starting at $59/month',
      features: ['Auth/Z misconfig checks', 'OWASP top-10 tests', 'CI gate', 'Fix guidance'],
      link: 'https://ziontechgroup.com/api-security-scanner',
      contactInfo
    },
    {
      title: '📈 API Observability & SLA Guard',
      description: 'OpenTelemetry-based tracing, error budgets, and SLO enforcement for services.',
      price: 'Starting at $69/month',
      features: ['OTel traces/metrics/logs', 'SLOs & error budgets', 'Alerting', 'Dashboards'],
      link: 'https://ziontechgroup.com/api-observability',
      contactInfo
    }
  ];

  return (
    <Layout>
      <Head>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Cloud engineering, DevOps, SRE, FinOps, and governance delivered with measurable outcomes and transparent pricing." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="Featured IT Services" subheading="Production-grade solutions with clear pricing." items={featuredITAds} />
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Modern IT Services</h1>
          <p className="text-xl text-gray-300">Outcome-driven cloud, platform, and reliability engineering to accelerate delivery and reduce costs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {offerings.map((o) => (
            <div key={o.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
              <div className="mb-4">{o.icon}</div>
              <h3 className="text-white font-semibold mb-2">{o.title}</h3>
              <p className="text-gray-400 text-sm">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
            <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
            <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
          </div>
          <div className="text-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Discuss Your Roadmap</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

