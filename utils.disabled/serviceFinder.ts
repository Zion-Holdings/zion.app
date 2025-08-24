import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { realMarketServices } from '../data/real-market-services';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { realOperationalServices } from '../data/real-operational-services';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import { professionalServices } from '../data/professional-services';

export type ServiceRecord = any;

const allServiceArrays: ServiceRecord[][] = [
	enhancedRealMicroSaasServices,
	innovativeMicroSaasServices,
	additionalEnhancedServices,
	innovativeAIServices,
	enterpriseITServices,
	nextGenerationAIServices,
	emergingTechnologyServices,
	comprehensiveITSolutions,
	realMarketServices,
	serviceExpansions2025,
	realOperationalServices,
	newOperationalServices2025,
	verifiedRealServices2025Batch2,
	innovative2025Services,
	emergingTech2025Services,
	professionalServices
];

export function findServiceBySlug(slug: string): ServiceRecord | undefined {
	for (const arr of allServiceArrays) {
		const hit = arr.find((s: any) => {
			if (!s) return false;
			if (s.id && s.id === slug) return true;
			if (s.link && typeof s.link === 'string') {
				try {
					const url = new URL(s.link);
					return url.pathname.replace(/^\/+|\/+$/g, '') === slug;
				} catch {
					return s.link.endsWith('/' + slug);
				}
			}
			return false;
		});
		if (hit) return hit;
	}
	return undefined;
}

export function listServicesByCategory(categoryIncludes: string): ServiceRecord[] {
	const results: ServiceRecord[] = [];
	for (const arr of allServiceArrays) {
		for (const s of arr) {
			if (s && typeof s.category === 'string' && s.category.toLowerCase().includes(categoryIncludes.toLowerCase())) {
				results.push(s);
			}
		}
	}
	// Deduplicate by id or link
	const seen = new Set<string>();
	return results.filter((s) => {
		const key = s.id || s.link || s.name;
		if (seen.has(key)) return false;
		seen.add(key);
		return true;
	});
}

