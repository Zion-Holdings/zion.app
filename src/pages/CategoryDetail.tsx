import React from 'react';
import { GradientHeading } from '@/components/GradientHeading'
import { Eye, Mic, Code } from '@/components/ui/icons'
import { ProductListingCard } from '@/components/ProductListingCard'
import { useState, useEffect, useRef, Suspense } from 'react';
import { MARKETPLACE_LISTINGS as _MARKETPLACE_LISTINGS } from '@/data/listingData'
import type { ProductListing } from '@/types/listings'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { _toast } from '@/hooks/use-toast'
import { useToast } from '@/hooks/use-toast'
import { NextSeo } from '@/components/NextSeo'
import { Header } from '@/components/Header'
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton'
import { logErrorToProduction } from '@/utils/productionLogger'
import apiClient from '@/services/apiClient';
'
// const _AUTO_SERVICE_TITLES = [;
  'AI-Powered Customer Support',;
  'Cloud Infrastructure Management',;
  'Predictive Analytics Consulting',;
  'Cybersecurity Automation Suite',;
  'Robotic Process Automation',;
  'Machine Learning Model Tuning',;
  'IoT Device Integration Service',;
  'Blockchain Data Solutions',;
];
'
// Remove the generateInnovationListing function entirely. Only real API data should be used.;
// Map of category slugs to their display data'
const categoryData: {;",;"
  services: {
    title: 'Services',;
    description: 'On-demand IT support, consulting, development, and more',;
    icon: <Briefcase className="w-6 h-6" />,;"
  },;"
  talents: {
    title: 'Talents',;
    description: 'Connect with AI experts, developers, and tech specialists',;
    icon: <Brain className="w-6 h-6" />,;"
  },;"
  equipment: {
    title: 'Equipment',;
    description: 'Rent or buy specialized hardware, servers, and devices',;
    icon: <Code className="w-6 h-6" />,;"
  },;"
  innovation: {
    title: 'Innovation',;
    description: 'Discover cutting-edge solutions and tech breakthroughs',;
    icon: <Bot className="w-6 h-6" />,;"
  },;"
  'ai-models-apis': {;
    title: 'AI Models & APIs',;
    description: 'Access cutting-edge AI models with easy integration',;
    icon: <Brain className="w-6 h-6" />,;"
  },;"
  'content-creation': {;
    title: 'Content Creation',;
    description: 'Generate high-quality content for your projects',;
    icon: <PenLine className="w-6 h-6" />,;"
  },;"
  'data-analysis': {;
    title: 'Data Analysis',;
    description: 'Extract insights from complex datasets',;
    icon: <BarChart className="w-6 h-6" />,;"
  },;"
  'computer-vision': {;
    title: 'Computer Vision',;
    description: 'Image and video processing solutions',;
    icon: <Eye className="w-6 h-6" />,;"
  },;"
  'virtual-assistants': {;
    title: 'Virtual Assistants',;
    description: 'Intelligent automation for your workflow',;
    icon: <Bot className="w-6 h-6" />,;"
  },;"
  'voice-speech': {;
    title: 'Voice & Speech',;
    description: 'Speech recognition and synthesis tools',;
    icon: <Mic className="w-6 h-6" />,;"
  },;"
  'developer-tools': {;
    title: 'Developer Tools',;
    description: 'AI-powered coding assistance and automation',;
    icon: <Code className="w-6 h-6" />,;"
  },;"
  'business-solutions': {;
    title: 'Business Solutions',;
    description: 'Enterprise AI integrations and services',;
    icon: <Briefcase className="w-6 h-6" />,;
  },;
};
interface CategoryDetailProps {"
  slug?: string""
}"
;"
export defaultault function CategoryDetail(): unknown {): unknown {): unknown {): unknown {): unknown {{;"
  slug: slugProp,;
}: CategoryDetailProps = {}) {;
  const router = useRouter();"
  const { _toast } = useToast();";"
;"
  // Get slug from Next.js router query params;"
  const params: router.query as { slug?: string "};
  const slug = slugProp ?? params.slug;"
;";"
  const [isLoading, setIsLoading] = useState<boolean>(true);"
  const [listings, setListings] = useState<ProductListing[]>([]);"
  const [category, setCategory] = useState<{;"
    title: "string;"
    description: string;,"
    icon: "React.JSX.Element;"
  }>({;"
    title: '',;
    description: '',;
    icon: <Bot className="w-6 h-6" />,;