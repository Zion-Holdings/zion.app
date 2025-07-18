export const EMAIL_REGEX: unknown unknown = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
;
export function isValidEmail(): unknown {email: string | undefined | null): boolean {;
  if (!email) return false;
  return EMAIL_REGEX.test(email.trim());
};
