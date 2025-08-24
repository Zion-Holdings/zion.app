import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cpu, Zap, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin, Network, Cloud, Database, Shield } from 'lucide-react';

export default function EdgeComputingOrchestrationPlatform() {
	return (
		<ServiceLanding
			title="Edge Computing Orchestration Platform"
			description="Deploy, manage, and observe workloads across edge locations with secure updates, policy control, and low-latency routing."
			subtitle="Operate everywhere securely"
			pricePerMonthUSD={3499}
			implementationWeeks="4-8 weeks"
			roiNote="Improve latency up to 60% and reduce bandwidth costs"
			features={[
				"Zero-touch provisioning",
				"Fleet management and canary updates",
				"Policy and configuration drift detection",
				"Edge-aware service mesh",
				"Observability with traces/logs/metrics",
				"Cloudflare Workers, Fly.io, K3s support"
			]}
			industries={["Retail", "Manufacturing", "Telecom", "Media"]}
			url="https://ziontechgroup.com/edge-computing-orchestration-platform"
		/>
	);
}
