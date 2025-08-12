import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';
import * as sentry from '@/utils/sentry';

jest.mock('@/utils/sentry');

function Bomb() {
  throw new Error('boom');
}

function Fallback() {
  return (
    <div>
      <p>Something went wrong</p>
      <button>Reload</button>
    </div>
  );
}

test('shows fallback and logs error', () => {
  render(
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={(err, info) => {
        sentry.captureException(err);
        if (info?.componentStack) sentry.captureException(info.componentStack);
      }}
    >
      <Bomb />
    </ErrorBoundary>
  );
  expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /reload/i })).toBeInTheDocument();
  expect(sentry.captureException).toHaveBeenCalled();
});
