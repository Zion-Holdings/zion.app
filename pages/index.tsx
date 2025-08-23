import React, { Suspense } from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { AccessibilityProvider } from '../components/AccessibilityEnhancer';
import { SkipLink } from '../components/AccessibilityEnhancer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <AccessibilityProvider>
        <SEOOptimizer 
          title="Zion Tech Group - Pioneering Future Technology Solutions"
          description="Leading provider of AI, Quantum Computing, Space Technology, and IT solutions. Transform your business with cutting-edge technology from Zion Tech Group."
          keywords={[
            'AI solutions', 'Machine Learning', 'Quantum Computing', 'Space Technology',
            'IT Services', 'Digital Transformation', 'Business Technology', 'Innovation',
            'Artificial Intelligence', 'Quantum Technology', 'Space Innovation', 'Tech Solutions'
          ]}
          type="website"
          image="/images/zion-tech-group-og.jpg"
        />
        <AnalyticsTracker />
        
        {/* Skip to main content link for accessibility */}
        <SkipLink href="#main">Skip to main content</SkipLink>
        
        <PerformanceOptimizer
          enableIntersectionObserver={true}
          enableLazyLoading={true}
          enablePerformanceMonitoring={true}
        >
          <main id="main" role="main" aria-label="Zion Tech Group Homepage">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            }>
              <Homepage2025 />
            </Suspense>
          </main>
        </PerformanceOptimizer>
      </AccessibilityProvider>
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
