import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Head>
        <title>Reset Password - Zion Tech Solutions</title>
        <meta name="description" content="Reset password authentication page" />
      </Head>
      <div>
        <h1>Reset Password</h1>
        {/* TODO: Add component content */}
      </div>
    </div>
  );
}
