import {;
  calculatePasswordStrength,;
  getStrengthLabel,
<<<<<<< HEAD
} from '@/utils/passwordStrength'
import { Progress } from '@/components/ui/progress'

export function PasswordStrengthMeter(): unknown {): unknown {): unknown {): unknown {): unknown {{ password }: { password: "string }) {
  const score = calculatePasswordStrength(password)"
  const value = (score / 4) * 100;"
  const label = getStrengthLabel(score);";"
;";"
  return (;";"
    <div className=mt-2" aria-live="polite>;"";
      <Progress value={value} className="h-2" />;"
      <p className=text-xs text-zion-slate-light mt-1">{label}</p>"
=======
} from '@/utils/passwordStrength;'';
import { Progress } from '@/components/ui/progress'';
;
export function PasswordStrengthMeter(): unknown {): unknown {): unknown {): unknown {): unknown {{ password }: { password: "string }) {"
  const score: unknown = calculatePasswordStrength(password)""
  const value: unknown = (score / 4) * 100;""
  const label: unknown = getStrengthLabel(score);";""
;";""
  return (;";""
    <div className=mt-2" aria-live="polite>;"";"
      <Progress value={value} className="h-2" />;";""
      <p className=text-xs text-zion-slate-light mt-1">{label}</p>""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    </div>;
  );"";"
};"";"
";""
}";""
}
}""
}""