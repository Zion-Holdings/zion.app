// Service Configurator Wizard — multi-step proposal builder
// Fully client-side: generates proposal HTML in-browser, no server needed
'use client';

import { useState, useMemo } from 'react';
import { allServices } from '../data/servicesData';
import StepsIndicator from '../components/StepsIndicator';
import type { Service } from '../data/servicesData';

type Step = 'budget' | 'needs' | 'services' | 'timeline' | 'review';

const COMPANY = {
  name: 'Zion Tech Group',
  email: 'kleber@ziontechgroup.com',
};