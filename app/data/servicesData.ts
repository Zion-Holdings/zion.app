type Service = Record<string, any>;

const allServices: readonly Service[] = require('./servicesData.json').services as readonly Service[];

export { allServices, type Service };
export default allServices;