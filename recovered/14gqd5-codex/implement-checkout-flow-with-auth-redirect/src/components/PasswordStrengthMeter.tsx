import { calculatePasswordStrength, getStrengthLabel } from "@/utils/passwordStrength";
import { Progress } from "@/components/ui/progress";

export function PasswordStrengthMeter({ password }: { password: string }) {
  const score = calculatePasswordStrength(password);
  const value = (score / 4) * 100;
  const label = getStrengthLabel(score);

  return (
    <div className="mt-2" aria-live="polite">
      <Progress value={value} className="h-2" />
      <p className="text-xs text-zion-slate-light mt-1">{label}</p>
    </div>
  );
}
