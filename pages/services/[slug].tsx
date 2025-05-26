import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { SERVICES } from '@/data/servicesData';
import type { ProductListing } from '@/types/listings';

interface ServiceProps {
  service: ProductListing | null;
}

const ServicePage: React.FC<ServiceProps> = ({ service }) => {
  if (!service) {
    return <div>Service not found</div>;
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
      slug: encodeURIComponent(
        service.title.toLowerCase().replace(/ /g, '-')
      ),
    },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<ServiceProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const service =
    SERVICES.find(
      (s) =>
        encodeURIComponent(s.title.toLowerCase().replace(/ /g, '-')) === slug
    ) || null;

  if (!service) {
    return { notFound: true };
  }

  return { props: { service } };
};

export default ServicePage;
