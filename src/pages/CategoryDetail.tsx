import { GradientHeading } from '@/components/GradientHeading';
import { Eye, Mic, Code } from '@/components/ui/icons';
import { ProductListingCard } from '@/components/ProductListingCard';
import { useState, useEffect, useRef, Suspense } from 'react';

import { MARKETPLACE_LISTINGS as _MARKETPLACE_LISTINGS } from '@/data/listingData';
import type { ProductListing } from '@/types/listings';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { _toast } from '@/hooks/use-toast';
import { useToast } from '@/hooks/use-toast';
import { NextSeo } from '@/components/NextSeo';
import { Header } from '@/components/Header';
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import { logErrorToProduction } from '@/utils/productionLogger';
import apiClient from '@/services/apiClient';

// const _AUTO_SERVICE_TITLES = [
  'AI-Powered Customer Support',
  'Cloud Infrastructure Management',
  'Predictive Analytics Consulting',
  'Cybersecurity Automation Suite',
  'Robotic Process Automation',
  'Machine Learning Model Tuning',
  'IoT Device Integration Service',
  'Blockchain Data Solutions',
];

// Remove the generateInnovationListing function entirely. Only real API data should be used.

// Map of category slugs to their display data
const categoryData = {
  services: {
    title: 'Services',
    description: 'On-demand IT support, consulting, development, and more',
    icon: <Briefcase className="w-6 h-6" />,
  },
  talents: {
    title: 'Talents',
    description: 'Connect with AI experts, developers, and tech specialists',
    icon: <Brain className="w-6 h-6" />,
  },
  equipment: {
    title: 'Equipment',
    description: 'Rent or buy specialized hardware, servers, and devices',
    icon: <Code className="w-6 h-6" />,
  },
  innovation: {
    title: 'Innovation',
    description: 'Discover cutting-edge solutions and tech breakthroughs',
    icon: <Bot className="w-6 h-6" />,
  },
  'ai-models-apis': {
    title: 'AI Models & APIs',
    description: 'Access cutting-edge AI models with easy integration',
    icon: <Brain className="w-6 h-6" />,
  },
  'content-creation': {
    title: 'Content Creation',
    description: 'Generate high-quality content for your projects',
    icon: <PenLine className="w-6 h-6" />,
  },
  'data-analysis': {
    title: 'Data Analysis',
    description: 'Extract insights from complex datasets',
    icon: <BarChart className="w-6 h-6" />,
  },
  'computer-vision': {
    title: 'Computer Vision',
    description: 'Image and video processing solutions',
    icon: <Eye className="w-6 h-6" />,
  },
  'virtual-assistants': {
    title: 'Virtual Assistants',
    description: 'Intelligent automation for your workflow',
    icon: <Bot className="w-6 h-6" />,
  },
  'voice-speech': {
    title: 'Voice & Speech',
    description: 'Speech recognition and synthesis tools',
    icon: <Mic className="w-6 h-6" />,
  },
  'developer-tools': {
    title: 'Developer Tools',
    description: 'AI-powered coding assistance and automation',
    icon: <Code className="w-6 h-6" />,
  },
  'business-solutions': {
    title: 'Business Solutions',
    description: 'Enterprise AI integrations and services',
    icon: <Briefcase className="w-6 h-6" />,
  },
};

interface CategoryDetailProps {
  slug?: string;
}

export default function CategoryDetail({
  slug: slugProp,
}: CategoryDetailProps = {}) {
  const router = useRouter();
  const { _toast } = useToast();

  // Get slug from Next.js router query params
  const params = router.query as { slug?: string };
  const slug = slugProp ?? params.slug;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [category, setCategory] = useState<{
    title: string;
    description: string;
    icon: React.JSX.Element;
  }>({
    title: '',
    description: '',
    icon: <Bot className="w-6 h-6" />,
  });
  const innovationCounterRef = useRef(0);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        // Find the category data based on slug
        const currentCategory = categoryData[
          slug as keyof typeof categoryData
        ] || {
          title:
            slug
              ?.split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ') || 'Category',
          description: 'Explore our collection in this category',
          icon: <Bot className="w-6 h-6" />,
        };

        setCategory(currentCategory);
        innovationCounterRef.current = 0;

        // Fetch real listings for this category from API
        const response = await apiClient.get('/products', {
          params: { category: currentCategory.title },
        });
        const filteredListings = response.data?.items || [];

        setListings(filteredListings);
      } catch {
        logErrorToProduction('Category load erroror:', { data: error });
        toast({ title: 'Error', description: 'Failed to load category' });
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [slug, toast]);

  useEffect(() => {
    if (slug !== 'innovation') return;
    // No-op
    return undefined;
  }, [slug]);

  if (!slug) {
    router.push('/categories');
    return null;
  }

  // Handle requesting a quote
  const handleRequestQuote = (_listingId: string) => {
    const listing = listings.find((item) => item.id === listingId);

    if (listing) {
      toast({
        title: 'Quote Requested',
        description: `Your quote request for ${listing.title} has been sent.`,
      });

      // Navigate to the quote request page with the listing information
      const queryParams = new URLSearchParams({
        serviceType: listing.category,
        itemId: listing.id,
        itemTitle: listing.title,
        itemCategory: listing.category,
        ...(listing.images?.[0] && { itemImage: listing.images[0] }),
      });

      router.push(`/request-quote?${queryParams.toString()}`);
    }
  };

  const seoTitle = category.title
    ? `${category.title} | Zion Marketplace`
    : 'Category | Zion Marketplace';
  const seoDescription =
    category.description || 'Explore listings in this category.';

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Header />
      <Suspense fallback={<ListingGridSkeleton />}>
        <div className="min-h-screen bg-zion-blue">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-4">
              <Link
                href="/categories"
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center"
              >
                ← Back to Categories
              </Link>
            </div>

            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                  {category.icon}
                </div>
              </div>
              <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
                {category.title}
              </GradientHeading>
              <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {isLoading ? (
              <ListingGridSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {listings.map((listing) => (
                  <ProductListingCard
                    key={listing.id}
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath="/marketplace/listing"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Suspense>
    </>
  );
}

CategoryDetail.displayName = 'CategoryDetail';
