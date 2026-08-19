import { redirect } from 'next/navigation';
import StandardPage from '@/components/StandardPage';
import { allServices } from '@/data/servicesData';

type Params = { slug: string[] };

function normalizeSlug(slug: string | string[]): string {
  return (Array.isArray(slug) ? slug : [slug]).join('/');
}

export function generateStaticParams() {
  return allServices.map((service) => ({
    slug: [service.id],
  }));
}

export default function ServiceSlugPage({ params }: { params: Params }) {
  const slug = normalizeSlug(params.slug);
  const service = allServices.find((s) => s.id === slug);

  if (!service) {
    redirect('/services/');
  }

  const title = service.title || service.name || slug;
  const description = service.description || '';

  return (
    <StandardPage
      title={title}
      subtitle={description || `${title} delivery, patterns, and compliance guidance.`}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: title },
      ]}
    >
      <div className="prose prose-slate prose-invert max-w-none">
        {description && (
          <p className="text-slate-300 text-lg leading-relaxed mb-6">{description}</p>
        )}
        {service.features && service.features.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-slate-300 flex items-start gap-2">
                  <span className="text-purple-400">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.benefits && service.benefits.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="text-slate-300 flex items-start gap-2">
                  <span className="text-purple-400">▸</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.pricing && Object.keys(service.pricing).length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Pricing</h2>
            <div className="grid gap-4">
              {Object.entries(service.pricing).map(([tier, price]) => (
                <div key={tier} className="glass-card p-4">
                  <span className="font-semibold text-white capitalize">{tier}</span>
                  <span className="text-purple-400 ml-4">{price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </StandardPage>
  );
}

export const metadata = {
  title: 'Service | Zion Tech Group',
  description: 'AI and IT service details, features, and delivery guidance.',
};
