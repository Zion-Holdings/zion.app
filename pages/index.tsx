import React from 'react';
import Home from '@/pages/Home';
import CustomErrorPage from './_error';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import * as Sentry from '@sentry/nextjs';

export interface HomePageProps {
  hasError?: boolean;
}

export async function fetchHomeData() {
  // Placeholder async function. Real implementation would fetch data.
  return Promise.resolve(null);
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    await fetchHomeData();
    return { props: {} };
  } catch (error) {
    Sentry.captureException(error);
    ctx.res.statusCode = 500;
    return { props: { hasError: true } };
  }
};

const IndexPage: React.FC<HomePageProps> = (props) => {
  if (props.hasError) {
    return <CustomErrorPage statusCode={500} />;
  }
  return <Home {...props} />;
};

export default IndexPage;
