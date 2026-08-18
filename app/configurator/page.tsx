// Service Configurator Wizard — multi-step proposal builder
// Fully client-side: generates proposal HTML in-browser, no server needed
'use client';

import { useState, useMemo } from 'react';
import { allServices } from '../data/servicesData';
import StepsIndicator from '../components/StepsIndicator';
import type { Service } from '../data/servicesData';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Proposal Generator | Zion Tech Group',
  description: 'Build a custom AI solution proposal in minutes. Select your budget, business needs, and services — we\'ll generate a detailed proposal with pricing and timeline.',
  alternates: { canonical: '/configurator/' },
};

type Step = 'budget' | 'needs' | 'services' | 'timeline' | 'review';

const COMPANY = {
  name: 'Zion Tech Group',
  email: 'kleber@ziontechgroup.com',
};