import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function DevOpsAutomationLanding() {
	return (
		<UltraFuturisticBackground variant="tech" intensity="high">
			<Head>
				<title>DevOps & Automation Services | Zion Tech Group</title>
				<meta name="description" content="Streamline your development and operations with our advanced DevOps automation, CI/CD pipelines, and infrastructure as code solutions." />
				<link rel="canonical" href="https://ziontechgroup.com/devops-automation" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">DevOps & Automation Services</h1>
				<p className="text-gray-300 max-w-3xl">Accelerate your development lifecycle with intelligent automation, continuous integration, and infrastructure orchestration. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/serverless-cron-manager">Serverless Cron Manager</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/zero-downtime-migration">Zero Downtime Migration</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/kubernetes-rbac-auditor">Kubernetes RBAC Auditor</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/multi-cloud-disaster-recovery">Multi-Cloud Disaster Recovery</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/it-asset-discovery-agent">IT Asset Discovery</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/managed-postgres-ha">Managed PostgreSQL HA</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/mlops-starter">MLOps Starter Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/warehouse-accelerator">Warehouse Accelerator</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-orange-500/50" href="/webhook-relay-replay">Webhook Relay & Replay</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}