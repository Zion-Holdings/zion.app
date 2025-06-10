// src/config/env.ts
export const getAppKitProjectId = (): string => {
  // In a Next.js environment, environment variables are accessed via process.env.
  // The NEXT_PUBLIC_ prefix makes them available client-side.
  const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

  if (projectId && projectId !== 'YOUR_DEFAULT_PROJECT_ID_ENV_MISSING' && projectId !== 'YOUR_DEFAULT_PROJECT_ID_FALLBACK') {
    return projectId;
  }

  // Return a specific fallback or throw an error if the project ID is critical and not set.
  // Using a console warning and a non-functional fallback for now.
  console.warn("Warning: NEXT_PUBLIC_REOWN_PROJECT_ID is not set or is a placeholder. Using fallback.");
  return 'YOUR_DEFAULT_PROJECT_ID_FALLBACK'; // Or consider throwing an error
};

export const getSupportEmail = (): string => {
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

  if (supportEmail && supportEmail !== 'YOUR_SUPPORT_EMAIL_ENV_MISSING' && supportEmail !== 'YOUR_SUPPORT_EMAIL_FALLBACK') {
    return supportEmail;
  }

  console.warn("Warning: NEXT_PUBLIC_SUPPORT_EMAIL is not set or is a placeholder. Using fallback 'support@example.com'.");
  return 'support@example.com';
};
