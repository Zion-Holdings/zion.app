
import { TabsContent } from "@/components/ui/tabs";
import { Resume } from "@/types/resume";
import { BasicInfoForm } from '../forms/basic-info';
import { WorkExperienceForm } from '../forms/WorkExperienceForm';
import { EducationForm } from '../forms/EducationForm';
import { SkillsForm } from '../forms/SkillsForm';
import { CertificationsForm } from '../forms/CertificationsForm';
import { PreviewResume } from '../PreviewResume';
import { logInfo } from '@/utils/productionLogger';


interface ResumeStepContentProps {
  activeTab: string;
  resume: Resume;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export const ResumeStepContent = ({ 
  activeTab, 
  resume, 
  onNextStep, 
  onPrevStep 
}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm 
          resumeId={resume?.id!} 
          initialData={resume?.basic_info}
          onSave={(data) => {
            // Here you would typically save the data to your backend
            logInfo('Saving basic info:', { data: data });
          }}
          onComplete={onNextStep} 
        />
      </TabsContent>
      
      <TabsContent value="work-experience">
        <WorkExperienceForm 
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="education">
        <EducationForm 
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="skills">
        <SkillsForm
          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="certifications">
        <CertificationsForm 
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="preview">
        <PreviewResume 
          resume={resume as Resume} 
          onBack={onPrevStep}
        />
      </TabsContent>
    </>
  );
};
