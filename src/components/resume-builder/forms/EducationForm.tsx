import { EducationForm as EducationFormComponent } from './education';
import type { EducationFormProps } from './education/types';

export function EducationForm(props: EducationFormProps) {
  return <EducationFormComponent {...props} />;
}
