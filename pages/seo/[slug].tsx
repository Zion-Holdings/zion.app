import React from 'react';
import { useRouter } from 'next/router';
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

export type LandingPayload = {
  title: string;
  h1: string;
  bodyHtml: string;
  region?: string;
  service?: string;
  faq: Array<{ q: string; a: string }>;
};

export default function SEOLandingPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  const [payload, setPayload] = React.useState<LandingPayload | null>(null);

  React.useEffect(() => {
    if (!router.isReady || !slug) return;
    const dataParam = (router.query?.data as string) || '';
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
        return;
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] });
  }, [router.isReady, slug]);

  if (!payload) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <head>
        <title>{payload.title}</title>
        <meta name="description" content={`${payload.title} • Zion Marketplace`} />
      </head>
      <h1 className="text-2xl font-semibold mb-4">{payload.h1}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: payload.bodyHtml }} />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
        <TalentGrid region={payload.region} service={payload.service} />
      </div>

      <FAQ items={payload.faq} />
    </div>
  );
}