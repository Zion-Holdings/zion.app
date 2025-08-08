import type { AppProps } from 'next/app';
import { DefaultSeo, OrganizationJsonLd } from 'next-seo';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import defaultSeo from '../components/seo/DefaultSeoConfig';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <OrganizationJsonLd
        type="Organization"
        id="https://ziontechgroup.netlify.app/#organization"
        legalName="Zion Tech Solutions"
        name="Zion Tech Solutions"
        url="https://ziontechgroup.netlify.app"
        logo="https://ziontechgroup.netlify.app/logo.png"
      />
      <EnhancedLayout>
        <Component {...pageProps} />
      </EnhancedLayout>
    </>
  );
}
