import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import EnhancedLayout from "../components/layout/EnhancedLayout";
import { TenantProvider } from "../context/TenantContext";
import { defaultTenant } from "../utils/tenant";
import "../styles/enhanced-design-system.css";
import "../styles/modern-design-system.css";

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
  );
}
