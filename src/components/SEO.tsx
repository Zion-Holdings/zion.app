
import { NextSeo } from 'next-seo';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  // Default to the Google Drive image URL
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ogUrl,
  canonical,
  noindex,
}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  return (
    <NextSeo
      title={fullTitle}
      description={description}
      canonical={canonical}
      noindex={noindex}
      openGraph={{
        url: ogUrl || canonical,
        title: fullTitle,
        description,
        images: [
          {
            url: ogImage,
          },
        ],
      }}
      twitter={{
        handle: '@lovable_dev',
        site: '@lovable_dev',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={
        keywords
          ? [
              {
                name: 'keywords',
                content: keywords,
              },
            ]
          : undefined
      }
    />
  );
}
