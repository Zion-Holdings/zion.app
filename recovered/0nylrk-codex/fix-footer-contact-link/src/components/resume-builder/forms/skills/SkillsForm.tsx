
import { useState } from 'react';
import { Skill } from '@/types/resume';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useResume } from '@/hooks/useResume';
import { SkillsFormProps } from './types';
import { SkillsList } from './SkillsList';
import { AddSkillForm } from './AddSkillForm';
import { BulkAddSkills } from './BulkAddSkills';

export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {
  const { addSkill, deleteSkill, fetchResume } = useResume();
  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
  
  const handleAddSkill = async (data: Skill) => {
    try {
      setError(null);
      const success = await addSkill(resumeId, data);
      if (success) {
        // Refresh the skills list
        await refreshSkills();
      }
      return success;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      return false;
    }
  };

  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if (confirm('Are you sure you want to delete this skill?')) {
      const success = await deleteSkill(id);
      if (success) {
        // Update local state
        setLocalSkills(localSkills.filter(skill => skill.id !== id));
      }
    }
  };
  
  const refreshSkills = async () => {
    try {
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to refresh skills');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <p className="text-muted-foreground">
          Add your technical and professional skills.
        </p>
      </div>

      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />

      <div className="space-y-6">
        <div className="bg-muted/40 p-6 rounded-lg">
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />
        </div>

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />
      </div>

      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onComplete} disabled={localSkills.length === 0}>
          Next
        </Button>
      </div>
    </div>
  );
}
