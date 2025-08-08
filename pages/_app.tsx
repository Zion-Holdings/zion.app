import App, { AppProps, AppContext } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import { TenantProvider } from '../components/multiverse/TenantProvider';
import { getServerSideTenant } from '../utils/tenant';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import '../styles/globals.css';

function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <TenantProvider initialTenant={pageProps?.tenant ?? null}>
      <EnhancedLayout>
        <Component {...pageProps} />
      </EnhancedLayout>
    </TenantProvider>
  );
}

ZionApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const req = (appContext?.ctx as any)?.req;
  let tenant = null;
  if (req) {
    const result = await getServerSideTenant({ req });
    tenant = result.tenant;
  }
  return { ...appProps, pageProps: { ...appProps.pageProps, tenant } } as any;
};

export default ZionApp;
