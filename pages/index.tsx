import React from 'react';
import SEO from '../components/SEO';
import Homepage2025 from '../components/Homepage2025';
import { PerformanceMonitor } from '../components/PerformanceOptimizer';
import { SkipToContent } from '../components/AccessibilityEnhancer';

export default function HomePage() {
	return (
		<>
			<SEO 
				title="Zion Tech Group – Future of Technology | AI, Quantum Computing & Emerging Tech"
				description="Transform your business with Zion Tech Group's revolutionary AI services, quantum cybersecurity, and cutting-edge emerging technologies. Leading the future of technology innovation."
				keywords="AI services, quantum computing, cybersecurity, emerging technologies, micro SAAS, automation, Zion Tech Group, technology innovation, business transformation"
				section="Home"
				tags={['AI', 'Technology', 'Innovation', 'Cybersecurity', 'Quantum Computing', 'Micro SAAS']}
			/>
			<PerformanceMonitor />
			<SkipToContent />
			<main id="main" role="main">
				<Homepage2025 />
			</main>
		</>
	);
}
