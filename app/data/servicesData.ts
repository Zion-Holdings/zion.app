type Service = Record<string, any>;

const allServices: readonly Service[] = require('./servicesData.json') as readonly Service[];

export { allServices };
export default allServices;