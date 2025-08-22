import React from 'react';
import Link from 'next/link';

export default function SecretsRotationAutomation() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Secrets Rotation Automation</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Automate key and secret rotation for databases, cloud providers, and third-party APIs. Minimize blast radius and meet compliance with zero-downtime credential cycling.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Cloud Integrations', desc: 'AWS KMS/Secrets Manager, GCP KMS/Secret Manager, Azure Key Vault.' },
							{ title: 'DB Credentials', desc: 'Rotate Postgres, MySQL, Redis, MongoDB credentials safely.' },
							{ title: 'Zero-Downtime', desc: 'Dual credentials strategy with automatic cutover & rollback.' },
							{ title: 'Policy & Audit', desc: 'Rotation policies, approvals, evidence logs, and alerts.' },
							{ title: 'SDK & Agents', desc: 'Language SDKs and sidecar agent for seamless adoption.' },
							{ title: 'CI/CD Integration', desc: 'GitHub Actions, GitLab CI, Jenkins, Spinnaker hooks.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-12">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-amber-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Core rotations, 3 environments.</p>
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-pink-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Advanced policies, approvals, SSO.</p>
								<p className="mt-4 text-3xl font-bold">$349<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-purple-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Private cloud, custom integrations, SLAs.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://hashicorp.com/products/vault" target="_blank" rel="noreferrer">HashiCorp Vault</a>, <a className="underline hover:text-cyan-300" href="https://aws.amazon.com/secrets-manager/" target="_blank" rel="noreferrer">AWS Secrets Manager</a>, <a className="underline hover:text-cyan-300" href="https://cloud.google.com/security/products/secret-manager" target="_blank" rel="noreferrer">GCP Secret Manager</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold">Enable Rotation</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}