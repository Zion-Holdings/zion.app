<<<<<<< HEAD
import { useState } from 'react';;
import type { Skill } from '@/types/resume;;
import { Button } from '@/components/ui/button;;
import { Alert, AlertDescription } from '@/components/ui/alert;;
import { useResume } from '@/hooks/useResume;;
import type { SkillsFormProps } from './types;;
import { SkillsList } from './SkillsList;;
import { AddSkillForm } from './AddSkillForm;;
import { BulkAddSkills } from './BulkAddSkills;'

=======
import { useState } from 'react''
import type { Skill } from '@/types/resume'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useResume } from '@/hooks/useResume'
import type { SkillsFormProps } from './types'
import { SkillsList } from './SkillsList'
import { AddSkillForm } from './AddSkillForm'
import { BulkAddSkills } from './BulkAddSkills'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function SkillsForm(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  resumeId,;
  skills,;
  onComplete,;
  onBack,;
}: SkillsFormProps) {;
  const { addSkill, deleteSkill, fetchResume } = useResume();
  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
<<<<<<< HEAD
;''
  const handleAddSkill: unknown = async (_data: Skill) => {;
    try {;
      setError(null);''
      const success: unknown "unknown = await addSkill(resumeId", data);"
=======
'
  const handleAddSkill = async (_data: Skill) => {'
    try {;
      setError(null)'
      const success = await addSkill(resumeId", data)
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
      return success;
    } catch (err: unknown) {;
      setError(err instanceof Error ? err.message : String(err));
<<<<<<< HEAD
      return false;""
    };";""
  };";";""
;";";";""
  const handleDeleteSkill: unknown = async (_id: string) => {;;
    if (confirm('Are you sure you want to delete this skill?')) {;'
      const success: unknown = await deleteSkill(id);
=======
      return false
    };""
  };

  const handleDeleteSkill = async (_id: string) => {"
    if (confirm('Are you sure you want to delete this skill?')) {'
      const success = await deleteSkill(id)
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      if (success) {;
        // Update local state;
        setLocalSkills(localSkills.filter((skill) => skill.id !== id));
      };
    };
  };

  const refreshSkills = async () => {;
    try {;
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
    } catch (err: unknown) {;
<<<<<<< HEAD
      setError(err instanceof Error ? err.message : String(err));''
    };
  };
;''
  return (;;
    <div className="space-y-6">;";";";""
      <div>;";";";";""
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;";";";";""
        <p className="text-muted-foreground">;"
          Add your technical and professional skills.;
        </p>;
      </div>;""
;";""
      {/* Display skills by category */};";";""
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;";";";""
;";";";";""
      <div className="space-y-6">;";";";";""
        <div className="bg-muted/40 p-6 rounded-lg">;";";";";""
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;"
          <AddSkillForm _resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;
;""
        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;";""
      </div>;";";""
;";";";""
      {error && (;";";";";""
        <Alert variant="destructive">;""
          <AlertDescription>{error}</AlertDescription>;";""
        </Alert>;";";""
      )};";";";""
;";";";";""
      <div className="flex justify-between">;";";";";""
        <Button variant="outline" onClick={onBack}>;"
=======
      setError(err instanceof Error ? err.message : String(err))'
    }'
  };
'
  return ('
    <div className="space-y-6>"
      <div>;"
        <h2 className="text-xl font-semibold mb-2>Skills</h2>"
        <p className="text-muted-foreground">
          Add your technical and professional skills.;
        </p>;
      </div>
;""
      {/* Display skills by category */};
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />
;"
      <div className="space-y-6>"
        <div className="bg-muted/40 p-6 rounded-lg">
          <h3 className=text-md font-medium mb-4">Add Skills One by One</h3>"
          <AddSkillForm _resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;"
      </div>;"

      {error && (;
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>;"
        </Alert>;"
      )}

      <div className="flex justify-between">
        <Button variant=outline" onClick={onBack}>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          Back;
        </Button>;
        <Button onClick={onComplete} disabled={localSkills.length === 0}>;
          Next;
        </Button>;
<<<<<<< HEAD
      </div>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </div>
    </div>;"
  );"

}"
}"

}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
