import data from './servicesData.json';
import type { Service } from './servicesData.json';
const allServices: Service[] = data as Service[];
export { allServices };
export type { Service };
