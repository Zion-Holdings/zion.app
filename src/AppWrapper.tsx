import { ErrorBoundary } from './components/ErrorBoundary';
import App from './App';

export function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}