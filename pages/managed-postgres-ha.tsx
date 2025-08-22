import React from 'react';
import Link from 'next/link';

export default function ManagedPostgresHA() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Managed Postgres HA</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Fully managed PostgreSQL with high availability, automated failover, PITR backups, encryption, observability, and performance tuning. Delivered on AWS/GCP/Azure or on-prem Kubernetes.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'HA & Failover', desc: 'Multi-AZ replicas, Patroni/pg_auto_failover, health checks, and automated promotion.' },
							{ title: 'Backups & PITR', desc: 'Continuous archiving with WAL-G, object storage retention, and disaster recovery runbooks.' },
							{ title: 'Security', desc: 'TLS everywhere, IAM auth, TDE, row-level security, audit logging, and CIS benchmarks.' },
							{ title: 'Performance', desc: 'Query plans, index advisory, autovacuum tuning, connection pooling (PgBouncer).' },
							{ title: 'Observability', desc: 'pg_stat sampling, Prometheus/Grafana dashboards, slow query alerts, SLOs.' },
							{ title: 'Migrations', desc: 'Minimal-downtime migrations with logical replication and blue/green strategy.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-14">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Starter (2 vCPU)</h3>
								<p className="mt-2 text-gray-300">HA pair + backups, up to ~100 GB.</p>
								<p className="mt-4 text-3xl font-bold">$390<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth (4 vCPU)</h3>
								<p className="mt-2 text-gray-300">HA + PITR + metrics, up to ~500 GB.</p>
								<p className="mt-4 text-3xl font-bold">$890<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-blue-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Multi-region, compliance (SOC2/HIPAA), 24/7 SRE.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.crunchydata.com/products/crunchy-bridge" target="_blank" rel="noreferrer">Crunchy Bridge</a>, <a className="underline hover:text-cyan-300" href="https://aiven.io/postgresql" target="_blank" rel="noreferrer">Aiven</a>, <a className="underline hover:text-cyan-300" href="https://cloud.google.com/sql/pricing" target="_blank" rel="noreferrer">Cloud SQL</a>.</p>
					</div>

					<div className="mt-14 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-emerald-400 text-black font-semibold">Get a Managed Cluster</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}

