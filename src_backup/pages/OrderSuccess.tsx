import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

export default function OrderSuccess() {
  const [params] = useSearchParams();
  const sessionId = params.get('session_id');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Successful</h1>
      {sessionId && <p className="mb-4">Session ID: {sessionId}</p>}
      <Link className="underline" to="/">Return Home</Link>
    </div>
  );
}
