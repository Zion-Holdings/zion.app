
import { EducationForm as EducationFormComponent } from './education';
import { EducationFormProps } from './education/types';

export function EducationForm(props: EducationFormProps) {
  return <EducationFormComponent {...props} />;
}
