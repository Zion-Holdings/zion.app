import Link from 'next/link';
import type { Service } from '@/data/servicesData';

interface SmartServiceCardProps {
  service: Service;
  relationship?: string;
  relevance?: number;
}

export default function SmartServiceCard({ service, relationship = 'related', relevance = 85 }: SmartServiceCardProps) {
  const slug = service.id;
  const href = `/services/${slug}/`;
  return (
    <Link href={href} className="group block glass-card p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {service.name || service.title || slug}
        </h3>
        {relationship === 'featured' && (
          <span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded">
            {relevance}%
          </span>
        )}
      </div>
      {service.description && (
        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{service.description}</p>
      )}
      {service.category && (
        <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{service.category}</span>
      )}
    </Link>
  );
}
