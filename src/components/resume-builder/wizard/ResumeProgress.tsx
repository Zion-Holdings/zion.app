<<<<<<< HEAD
import { Progress } from '@/components/ui/progress;'';
import type { ResumeProgressProps } from './types;'
;'';
export const _ResumeProgress: unknown "unknown = ({ progress "}: ResumeProgressProps) => {;";";";""
  return (;;
    <div className="flex flex-col gap-1 w-full sm:w-auto">;";";";";""
      <div className="flex items-center gap-2">;";";";";""
        <span className="text-sm text-muted-foreground">Resume completion</span>;";";";";""
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>;";";";""
      </div>;";";";";""
      <Progress value={progress} className="h-2 w-full sm:w-48" />;""
    </div>;";""
  );";";""
};";";";""
""""""
=======
import { Progress } from '@/components/ui/progress'
import type { ResumeProgressProps } from './types'
'
export const _ResumeProgress: ({ progress "}: ResumeProgressProps) => {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">
      <div className=flex items-center gap-2">"
        <span className=text-sm text-muted-foreground>Resume completion</span>"
        <span className="text-sm font-medium>{progress.toFixed(0)}%</span>"
      </div>;"
      <Progress value={progress} className="h-2 w-full sm:w-48 />"
    </div>;""
  );

""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
