import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { SERVICES } from '@/data/servicesData';
import { slugify } from '@/lib/slugify';
import Custom404 from '../404';
import type { ProductListing } from '@/types/listings';

interface ServiceProps {
  service: ProductListing | null;
}

const ServicePage: React.FC<ServiceProps> = ({ service }) => {
  if (!service) {
    return <Custom404 />;
  }
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = SERVICES.map((service) => ({
    params: {
      slug: slugify(service.title),
    },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<ServiceProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const service = SERVICES.find((s) => slugify(s.title) === slug) || null;

  return { props: { service } };
};

export default ServicePage;
