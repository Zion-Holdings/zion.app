
import { SkillsForm as SkillsFormComponent } from './skills';
import { SkillsFormProps } from './skills/types';

export function SkillsForm(props: SkillsFormProps) {
  return <SkillsFormComponent {...props} />;
}
