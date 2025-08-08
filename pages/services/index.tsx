import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import EnhancedMarketplaceCard, { ServiceItem } from '../../components/ui/EnhancedMarketplaceCard';
import QuoteRequestModal, { QuoteFormValues } from '../../components/ui/QuoteRequestModal';
import MarketplaceFilters, { Filters } from '../../components/ui/MarketplaceFilters';
import { supabase } from '../../utils/supabase/client';
import localServices from '../../data/services/services.json';

const mapLocalToServiceItem = (item: any): ServiceItem => ({
  slug: item.slug,
  title: item.name,
  description: item.description,
  provider: 'Zion Provider',
  priceRangeUSD: item.priceRangeUSD,
  categories: [item.category],
  rating: Math.round((3.8 + Math.random() * 1.2) * 10) / 10,
});

const ServicesPage: NextPage = () => {
  const [services, setServices] = React.useState<ServiceItem[]>([]);
  const [filtered, setFiltered] = React.useState<ServiceItem[]>([]);
  const [filters, setFilters] = React.useState<Filters>({ categories: [] });
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ServiceItem | null>(null);

  React.useEffect(() => {
    let mounted = true;
    const fetchServices = async () => {
      try {
        const hasSupabase =
          process.env.NEXT_PUBLIC_SUPABASE_URL &&
          process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key';
        if (hasSupabase) {
          const { data, error } = await supabase.from('services').select('*').limit(100);
          if (!error && data && data.length > 0) {
            const mapped: ServiceItem[] = data.map((s: any) => ({
              id: s.id,
              slug: s.slug,
              title: s.title || s.name,
              description: s.description,
              provider: s.provider || 'Marketplace Provider',
              priceFromUSD: s.price_from_usd ?? undefined,
              priceRangeUSD: s.price_min_usd && s.price_max_usd ? [s.price_min_usd, s.price_max_usd] : undefined,
              categories: Array.isArray(s.categories) ? s.categories : (s.category ? [s.category] : []),
              rating: s.rating ?? 4.5,
            }));
            if (mounted) {
              setServices(mapped);
              setFiltered(mapped);
            }
            return;
          }
        }
      } catch {}
      const mappedLocal = (localServices as any[]).map(mapLocalToServiceItem);
      setServices(mappedLocal);
      setFiltered(mappedLocal);
    };
    fetchServices();
    return () => { mounted = false; };
  }, []);

  React.useEffect(() => {
    const next = services.filter((s) => {
      // Category
      if (filters.categories.length > 0 && !s.categories.some((c) => filters.categories.includes(c))) return false;
      // Price
      const min = s.priceFromUSD ?? s.priceRangeUSD?.[0];
      const max = s.priceRangeUSD?.[1] ?? s.priceFromUSD;
      if (filters.priceMin !== undefined && (min === undefined || max === undefined ? true : max < filters.priceMin)) return false;
      if (filters.priceMax !== undefined && (min === undefined ? true : min > filters.priceMax)) return false;
      // Rating
      if (filters.ratingMin !== undefined && (s.rating ?? 0) < filters.ratingMin) return false;
      // Delivery time (not available in data; simulate pass-through)
      return true;
    });
    setFiltered(next);
  }, [filters, services]);

  const availableCategories = React.useMemo(() => {
    const set = new Set<string>();
    services.forEach((s) => s.categories.forEach((c) => set.add(c)));
    return Array.from(set);
  }, [services]);

  const handleRequestQuote = (service: ServiceItem) => {
    setSelected(service);
    setModalOpen(true);
  };

  const handleSubmit = async (values: QuoteFormValues) => {
    const res = await fetch('/api/quote-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service: values.serviceTitle,
        description: values.projectDescription,
        timeline: { start: values.timelineStart, end: values.timelineEnd },
        budgetRange: values.budgetRange,
        email: values.email,
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message || 'Failed to submit');
    }
  };

  return (
    <div>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." />
      </Head>
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />
        <div className="flex flex-col sm:flex-row gap-6">
          <MarketplaceFilters availableCategories={availableCategories} value={filters} onChange={setFilters} />
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white">Services</h1>
              <div className="text-sm text-white/70">{filtered.length} results</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((service) => (
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ServicesPage;