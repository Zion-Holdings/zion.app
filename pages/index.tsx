import React from 'react';
import Home from '@/pages/Home';
import type { GetServerSideProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ErrorBanner } from '@/components/talent/ErrorBanner';

export interface HomePageProps {
  hasError?: boolean;
}

export async function fetchHomeData() {
  // Placeholder async function. Real implementation would fetch data.
  return Promise.resolve(null);
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  ctx
) => {
  Sentry.addBreadcrumb({ category: 'route', message: '/', level: 'info' });
  try {
    if (ctx.query.forceError) {
      throw new Error('Forced error');
    }
    await fetchHomeData();
    return { props: {} };
  } catch (error) {
    Sentry.captureException(error);
    ctx.res.statusCode = 500;
    return { props: { hasError: true } };
  }
};

const IndexPage: React.FC<HomePageProps> = (props) => {
  return (
    <>
      {props.hasError && (
        <div className="container mx-auto px-4 py-4">
          <ErrorBanner msg="Failed to load home page." />
        </div>
      )}
      <Home {...props} />
    </>
  );
};

export default IndexPage;
