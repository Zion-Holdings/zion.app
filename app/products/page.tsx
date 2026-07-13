// app/products/page.tsx — Products & Platforms
'use client';
import { allServices } from '../data/servicesData';
import type { Service } from '../data/servicesData';
import Link from 'next/link';

const PRODUCTS: readonly {
  key: string;
  title: string;
  desc: string;
  emoji: string;
  count: number;
  cta: string;
  bullets: readonly string[];
}[] = [
  {
    key: 'ai',
    title: 'AI & Machine Learning',
    desc: 'Generative AI, autonomous agents, computer vision, RAG platforms, LLM orchestration, and enterprise copilots.',
    emoji: '🤖',
    count: 307,
    cta: '/services?category=ai',
    bullets: [
      'Enterprise AI Copilots & Assistants',
      'Autonomous Agents & Workflow Orchestration',
      'RAG & Knowledge Systems',
      'Computer Vision & Multimodal AI',
      'AI Governance & Responsible AI',
      'Foundation Model Custom Training',
    ],
  },
];
