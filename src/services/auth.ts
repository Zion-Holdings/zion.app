export async function register(name: string, email: string, password: string) {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}

export async function forgotPassword(email: string) {
  const res = await fetch('/api/auth/forgot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  const data = await res.json().catch(() => ({})); // Gracefully handle non-JSON responses

  if (!res.ok) {
    // Throw an error with the message from the backend if available, or a generic one
    throw new Error(data?.message || `Error ${res.status}: Failed to send reset link`);
  }

  return { res, data };
}

// Updated resetPassword function
export async function resetPassword(uid: string, token: string, newPassword: string) {
  const res = await fetch(`/api/auth/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // Include uid in the request body
    body: JSON.stringify({ uid, token, newPassword }),
  });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    // Throw an error with the message from the backend if available, or a generic one
    throw new Error(data?.message || `Error ${res.status}: Failed to reset password`);
  }

  return { res, data };
}
