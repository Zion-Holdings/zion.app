export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  icon?: string;
  features: string[];
  benefits: string[];
  pricing: Record<string, unknown>;
  popular?: boolean;
  url: string;
  image: string;
}

// Lazy-load services data to avoid importing 20MB JSON at module scope
let _servicesCache: Service[] | null = null;

export async function getServicesData(): Promise<Service[]> {
  if (_servicesCache) return _servicesCache;
  
  if (typeof window === 'undefined') {
    // Server-side: dynamic import
    const data = await import('../app/data/servicesData_trimmed.json');
    _servicesCache = (data.default || data) as Service[];
  }
  return _servicesCache || [];
}

export function getServiceBySlug(slug: string): Service | undefined {
  // Synchronous lookup from cache - will return undefined if data not loaded
  if (!_servicesCache) return undefined;
  return _servicesCache.find(s => 
    s.url?.includes(slug) || 
    s.name?.replace(/\s+/g, '-').toLowerCase() === slug
  );
}

export function getServicesCount(): number {
  return _servicesCache?.length || 16323; // fallback to known count
}

export type { Service as ServiceSummary };