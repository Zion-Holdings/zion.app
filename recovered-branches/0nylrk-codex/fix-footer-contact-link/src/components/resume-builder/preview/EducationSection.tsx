
import { Education } from '@/types/resume';
import { format } from 'date-fns';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  // Sort education by date (newest first)
  const sortedEducation = [...education].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime();
  });

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy');
    }
    return format(date, 'MMM yyyy');
  };

  if (sortedEducation.length === 0) return null;
  
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Education</h2>
      <div className="space-y-4">
        {sortedEducation.map((edu, index) => (
          <div key={edu.id || index} className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{edu.degree}{edu.field_of_study ? `, ${edu.field_of_study}` : ''}</h3>
              <span className="text-sm">
                {formatDate(edu.start_date)} - {edu.is_current ? 'Present' : formatDate(edu.end_date)}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">{edu.institution}</p>
              {edu.location && (
                <span className="text-sm">{edu.location}</span>
              )}
            </div>
            {edu.description && (
              <p className="text-sm mt-2">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
