<<<<<<< HEAD
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import EnhancedLayout from "../components/layout/EnhancedLayout";
import { TenantProvider } from "../context/TenantContext";
import { defaultTenant } from "../utils/tenant";
import "../styles/enhanced-design-system.css";
import "../styles/modern-design-system.css";
import "../styles/animated.css";

export default function MyApp({ Component, pageProps }: AppProps & { pageProps: any }) {
  const tenant = (pageProps && pageProps.tenant) || defaultTenant;
  return (
    <TenantProvider tenant={tenant}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{tenant.brandName}</title>
      </Head>
      <EnhancedLayout>
        <Component {...pageProps} />
      </EnhancedLayout>
    </TenantProvider>
=======
import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
>>>>>>> cursor/integrate-ai-resume-builder-into-job-applications-9820
  );
}
