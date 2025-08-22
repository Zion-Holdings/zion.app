import { emergingTech2025Services } from './emerging-tech-2025-services';
import { emergingTech2026ServicesV2 } from './emerging-tech-2026-services-v2';

export const emergingTechServices = [
	...(emergingTech2025Services || []),
	...(emergingTech2026ServicesV2 || [])
];