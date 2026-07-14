type Service = Record<string, any>;

let allServices: Service[] = [];
try {
  const data = require('./servicesData.json');
  if (Array.isArray(data)) {
    allServices = data as Service[];
  }
} catch {
  allServices = [];
}

export type { Service };
export { allServices };
