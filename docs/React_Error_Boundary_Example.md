# React Error Boundary Example

React applications can fail at runtime if a component throws an error while rendering. Wrapping your app in an error boundary prevents the entire UI from crashing by showing a fallback UI.

This project already includes a `GlobalErrorBoundary` component in `src/components/GlobalErrorBoundary.tsx`. The snippet below illustrates the pattern using the [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) library.

## ErrorBoundary component

```tsx
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reload</button>
    </div>
  );
}

export default function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={Fallback} onReset={() => window.location.reload()}>
      {children}
    </ErrorBoundary>
  );
}
```

## Using the boundary

```tsx
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalErrorBoundary>
    <App />
  </GlobalErrorBoundary>
);
```

When a child component throws, the fallback displays and gives users a button to recover.
