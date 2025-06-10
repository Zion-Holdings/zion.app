import React from 'react';
import { render, screen } from '@testing-library/react';
import * as Sentry from '@sentry/nextjs';
import IndexPage, { getServerSideProps, fetchHomeData } from '../../pages/index';
import ErrorBoundary from '@/components/ErrorBoundary';

jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
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

describe('ErrorBoundary integration', () => {
  it('renders fallback and reports error when getServerSideProps throws', async () => {
    mockedFetchHomeData.mockRejectedValueOnce(new Error('fail'));

    const ctx: any = { req: {}, res: { statusCode: 200 } };
    const result = await getServerSideProps(ctx as any);

    expect(ctx.res.statusCode).toBe(500);
    expect(result).toEqual({ props: { hasError: true } });
    expect(Sentry.captureException).toHaveBeenCalled();

    render(
      <ErrorBoundary>
        <IndexPage {...(result as any).props} />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong');
  });
});
