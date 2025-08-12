import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage, { getServerSideProps, fetchHomeData } from '../../pages/index';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import { useRouter } from 'next/router';

jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../pages/index', () => {
  const originalModule = jest.requireActual('../../pages/index');
  return {
    __esModule: true,
    ...originalModule,
    fetchHomeData: jest.fn(),
  };
});

const mockedFetchHomeData = fetchHomeData as jest.Mock;

describe('Home page server side error handling', () => {
  it('renders error boundary fallback when getServerSideProps throws', async () => {
    mockedFetchHomeData.mockRejectedValueOnce(new Error('fail'));
    (useRouter as jest.Mock).mockReturnValue({ query: {} });

    const ctx: any = { req: {}, res: { statusCode: 200 } };
    const result = await getServerSideProps(ctx as any);

    expect(ctx.res.statusCode).toBe(500);
    expect(result).toEqual({ props: { hasError: true } });

    render(
      <GlobalErrorBoundary>
        <IndexPage {...(result as any).props} />
      </GlobalErrorBoundary>
    );

    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
  });
});

describe('Home page data fetch success', () => {
  it('returns props when data fetch succeeds', async () => {
    mockedFetchHomeData.mockResolvedValueOnce(null);
    const ctx: any = { req: {}, res: { statusCode: 200 } };
    const result = await getServerSideProps(ctx as any);
    expect(result).toEqual({ props: {} });
    (useRouter as jest.Mock).mockReturnValue({ query: { debug: 'true' } });
    render(<IndexPage {...(result as any).props} />);
    expect(screen.getByText('Throw Test Error')).toBeInTheDocument();
  });
});
