export type PasswordStrength = 0 | 1 | 2 | 3 | 4;

export function calculatePasswordStrength(password: string): PasswordStrength {
  let score: PasswordStrength = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score > 4) score = 4;
  return score;
}

export function getStrengthLabel(score: PasswordStrength): string {
  switch (score) {
    case 0:
      return "Very weak";
    case 1:
      return "Weak";
    case 2:
      return "Fair";
    case 3:
      return "Good";
    case 4:
      return "Strong";
    default:
      return "";
  }
}
