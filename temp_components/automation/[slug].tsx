import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EnhancedLayout from '@/components/layout/EnhancedLayout';

const AutomationDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  let title = 'Automation Report';
  let data: any = null;

  try {
    if (slug === 'marketplace-insights') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      data = require('@/data/reports/marketplace-insights.json');
      title = 'Marketplace Insights';
    } else if (slug === 'content-health') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      data = require('@/data/reports/content-health.json');
      title = 'Content Health';
    }
  } catch (e) {
    data = null;
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>{title} - Zion Tech Solutions</title>
      </Head>
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      {!data ? (
        <div className="opacity-70">No report found.</div>
      ) : (
        <pre className="text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
      )}
    </EnhancedLayout>
  );
};

export default AutomationDetail;