type Service = Record<string, any>;

const rawObject = require('./servicesData.json') as { services?: Service[] };
const rawData: Service[] = Array.isArray(rawObject) ? rawObject : (rawObject.services || []);

// Normalize services data - ensure both 'name' and 'title' fields exist
const allServices: readonly Service[] = rawData.map((service: Service) => ({
  ...service,
  // Ensure title field exists (use name if title not present)
  title: service.title || service.name || '',
  // Normalize description to description (some may have 'desc')
  description: service.description || service.desc || '',
  // Ensure href is set correctly
  href: service.href || `/services/${service.id}`,
  // Ensure contactInfo exists
  contactInfo: service.contactInfo || {
    email: 'info@ziontechgroup.com',
    phone: '+1-302-464-0950',
    website: `/services/${service.id}`
  }
}));

export type { Service };
export { allServices };
export default allServices;
