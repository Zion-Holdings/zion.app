<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card;'';
import { Button } from '@/components/ui/button;'';
import { FilePlus } from '@/components/ui/icons;'
;;
import type { EmptyResumeProps } from './types;'
;'';
export const _EmptyResumeState: unknown "unknown = ({ onCreateClick "}: EmptyResumeProps) => {;";";";""
  return (;;
    <Card className="w-full max-w-2xl mx-auto">;";";";";""
      <CardContent className="py-8">;";";";";""
        <div className="text-center">;";";";";""
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>;";";";";""
          <p className="text-muted-foreground mb-6">;";";""
            Create a professional resume to showcase your skills and experience;";";";""
          </p>;";";";";""
          <Button onClick={onCreateClick} className="gap-2">;";";";";""
            <FilePlus className="h-4 w-4" />;"
            Create Resume;
          </Button>;
        </div>;
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
""""""
=======
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FilePlus } from '@/components/ui/icons'

import type { EmptyResumeProps } from './types'
'
export const _EmptyResumeState: ({ onCreateClick "}: EmptyResumeProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className=py-8">"
        <div className=text-center>"
          <h2 className="text-2xl font-bold mb-2>Create Your Resume</h2>"
          <p className="text-muted-foreground mb-6">
            Create a professional resume to showcase your skills and experience;
          </p>"
          <Button onClick={onCreateClick} className="gap-2>"
            <FilePlus className="h-4 w-4" />
            Create Resume;
          </Button>;
        </div>;
      </CardContent>
    </Card>;""
  );

""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
