import React, { Suspense } from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer>
        <Homepage2025 />
      </PerformanceOptimizer>
      <PerformanceMonitor />
      <AccessibilityEnhancer />
    </ErrorBoundary>
  );
};

			<section className="px-6 pb-20 lg:px-8">
				<div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-2">
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Enterprise AI</h2>
						<p className="mt-2 text-gray-300">RAG, agentic automation, and AI ops engineered for reliability and scale.</p>
					</div>
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Quantum Security</h2>
						<p className="mt-2 text-gray-300">Post-quantum cryptography, zero trust, and end-to-end secure communications.</p>
					</div>
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Cloud & Edge</h2>
						<p className="mt-2 text-gray-300">SLO-driven platforms, serverless, and global edge orchestration.</p>
					</div>
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Micro SaaS</h2>
						<p className="mt-2 text-gray-300">Targeted products with rapid time-to-value and integrated growth loops.</p>
					</div>
				</div>
				<div className="mt-10 text-center">
					<Link href="/contact" className="text-base font-semibold leading-6 text-white/80 hover:text-white">
						Talk to an expert <span aria-hidden>→</span>
					</Link>
				</div>
			</section>
		</>
	);
}
