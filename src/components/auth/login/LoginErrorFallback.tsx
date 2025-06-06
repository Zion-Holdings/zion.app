import { FallbackProps } from 'react-error-boundary';

export default function LoginErrorFallback({ error }: FallbackProps) {
  return (
    <div role="alert" style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <h1>Login Error</h1>
      <p>Sorry, the login form could not be displayed due to an error.</p>
      {error?.message && <pre>{error.message}</pre>}
    </div>
  );
}
