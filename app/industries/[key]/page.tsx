import { Metadata } from 'next';
import Link from 'next/link';
import { allServices, type Service } from '../../data/servicesData';

export async function generateStaticParams() {
  // Get unique industries from services data
  const industries = new Set<string>();
  allServices.forEach((s: Service) => {
    if (s.industry) industries.add(s.industry.toLowerCase());
  });
  return Array.from(industries).map(key => ({ key }));
}

// Industry metadata configuration