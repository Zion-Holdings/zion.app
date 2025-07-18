export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
;
export function isValidEmail(email: string | undefined | null): boolean {;
  if (!email) return false;
  return EMAIL_REGEX.test(email.trim());
};
