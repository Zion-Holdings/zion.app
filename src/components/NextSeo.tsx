import { Helmet } from "react-helmet-async";

interface OpenGraphImage {
  url: string;
  alt?: string;
}

interface OpenGraphProps {
  url?: string;
  title?: string;
  description?: string;
  images?: Array<string | OpenGraphImage>;
}

interface NextSeoProps {
  title: string;
  description: string;
  openGraph?: OpenGraphProps;
}

export function NextSeo({ title, description, openGraph }: NextSeoProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  const ogTitle = openGraph?.title || fullTitle;
  const ogDescription = openGraph?.description || description;
  const ogUrl = openGraph?.url;
  const ogImages = openGraph?.images || [
    "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImages.map((img, idx) => (
        <meta
          key={idx}
          property="og:image"
          content={typeof img === "string" ? img : img.url}
        />
      ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      {ogImages.length > 0 && (
        <meta
          name="twitter:image"
          content={typeof ogImages[0] === "string" ? ogImages[0] : ogImages[0].url}
        />
      )}
    </Helmet>
  );
}
