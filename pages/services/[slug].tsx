import React from 'react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet-async';
import { NextSeo } from '@/components/NextSeo';
import { SERVICES } from '@/data/servicesData';
import { slugify } from '@/lib/slugify';
import Custom404 from '../404';
import type { ProductListing } from '@/types/listings';

const ServicePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  if (!slug) {
    return <Custom404 />;
  }
  const service = React.useMemo(
    () => SERVICES.find((s) => slugify(s.title) === slug) || null,
    [slug]
  );
  if (!service) {
    return <Custom404 />;
  }
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: service.currency,
    },
  };
  return (
    <>
      <NextSeo
        title={service.title}
        description={service.description}
        openGraph={{ title: service.title, description: service.description }}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
      </Helmet>
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </main>
    </>
  );
};


export default ServicePage;
