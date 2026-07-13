type Service = Record<string, any>;

let allServices: readonly Service[] = [];
try {
  const data = require('./servicesData.json');
  if (Array.isArray(data)) {
    allServices = data as readonly Service[];
  }
} catch {
  allServices = [];
}

export type { Service };
export { allServices };
