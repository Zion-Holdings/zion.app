<<<<<<< HEAD
import React, { useState } from 'react';';
import { Loader2 } from '@/components/ui/icons;'';
import { Button } from '@/components/ui/button;'
;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;'';
import { useJobApplications } from '@/hooks/useJobApplications;'';
import { useMessaging } from '@/context/MessagingContext;'';
import { toast } from '@/hooks/use-toast;'';
import type { ResumeOption } from '../resume-selector;'';
import { MessageTab } from './MessageTab;'';
import { ResumeTab } from './ResumeTab;'';
import type { Job } from './types;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
interface ApplyFormProps {;;
  job: "Job;",;";";";""
  onClose: () => void;";";";";""
  onApplySuccess?: (jobId: "string) => Promise<void>;";"
};
;"";
export function ApplyForm(): unknown {): unknown {): unknown {): unknown {): unknown {{ job, onClose, onApplySuccess }: ApplyFormProps) {;";""
  const { _createConversation } = useMessaging();";";""
  const { _applyToJob } = useJobApplications();";";";""
  const [message, setMessage] = useState(;";";";";""
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`,;";";";""
  );";";";";""
  const [proposalLink, setProposalLink] = useState('');''
  const [isSubmitting, setIsSubmitting] = useState(false);;
  const [activeTab, setActiveTab] = useState<string>('message');'
=======
import React, { useState } from 'react''
import { Loader2 } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useJobApplications } from '@/hooks/useJobApplications'
import { useMessaging } from '@/context/MessagingContext'
import { toast } from '@/hooks/use-toast'
import type { ResumeOption } from '../resume-selector'
import { MessageTab } from './MessageTab'
import { ResumeTab } from './ResumeTab'
import type { Job } from './types'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface ApplyFormProps {'
  job: "Job,"
  onClose: () => void""
  onApplySuccess?: (jobId: "string) => Promise<void>"

export function ApplyForm(): unknown {): unknown {): unknown {): unknown {): unknown {{ job, onClose, onApplySuccess }: ApplyFormProps) {;""
  const { _createConversation } = useMessaging();"
  const { _applyToJob } = useJobApplications()";"
  const [message, setMessage] = useState(";""
    `Hi, I'm interested in your job ${job.title} and would like to apply. I believe my skills and experience are a great match for this role.`,";";
  )"
  const [proposalLink, setProposalLink] = useState('')'
  const [isSubmitting, setIsSubmitting] = useState(false)'
  const [activeTab, setActiveTab] = useState<string>('message')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
    null,);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);

  const handleResumeSelected = (_resume: ResumeOption) => {;
    setSelectedResume(resume);
    setSelectedResumeId(resume.id);
<<<<<<< HEAD
  };''
;
  const handleApply: unknown = async () => {;
    if (!message.trim()) {;''
      toast({;;
        title: 'Message required',;;'
        description: 'Please enter a message before applying.',;;'
        variant: 'destructive',;'
=======
  }'
'
  const handleApply = async () => {;
    if (!message.trim()) {'
      toast({'
        title: 'Message required','
        description: 'Please enter a message before applying.','
        variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });
      return;
    };

    try {;
      setIsSubmitting(true);
<<<<<<< HEAD
;''
      // First submit the application to the job applications table;
      const applicationSuccess: unknown = await applyToJob(;
        job.id,;''
        message,;;
        selectedResume && selectedResume.type === 'ai_resume;'
          ? selectedResumeId || undefined;''
          : undefined,;;
        selectedResume && selectedResume.type === 'custom_upload;'
          ? selectedResume.file;''
          : undefined,;
      );
;''
      if (!applicationSuccess) {;;
        throw new Error('Failed to submit application');'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
;''
      // Format message with proposal link if provided;
      let fullMessage = message;
;''
      if (proposalLink) {;;
        fullMessage += `\n\nHere's a link to my proposal: "${proposalLink"}`;""
      };";""
;";";""
      // Add info about attached resume if available;";";";""
      if (selectedResume) {;";";";";""
        fullMessage += `\n\nI've attached my resume: "${selectedResume.title"}`;""
      };";""
;";";""
      // Create context data for the conversation;";";";""
      const contextData: unknown = {;";,";";";""
        title: "job.title",;";";";";""
        description: "job.description",;";";""
        attachedResume: selectedResume;";";";""
          ? {;";";";";""
              id: "selectedResume.id",;";";";";""
              title: "selectedResume.title",;";";";";""
              type: "selectedResume.type",;"
            };
          : null,;
      };
;""
      // Create conversation with the job client;";""
      await createConversation(;";";""
        job.client_id,;";";";""
        fullMessage,;";";";";""
        'job',;'
=======
'
      // First submit the application to the job applications table'
      const applicationSuccess = await applyToJob(;
        job.id,'
        message,'
        selectedResume && selectedResume.type === 'ai_resume'
          ? selectedResumeId || undefined'
          : undefined,'
        selectedResume && selectedResume.type === 'custom_upload'
          ? selectedResume.file'
          : undefined,'
      );
'
      if (!applicationSuccess) {'
        throw new Error('Failed to submit application')'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
'
      // Format message with proposal link if provided'
      let fullMessage = message;
'
      if (proposalLink) {'`
        fullMessage += `\n\nHere's a link to my proposal: "${proposalLink};
      };""
;"
      // Add info about attached resume if available";"
      if (selectedResume) {";""`
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`"
      };"
;";"
      // Create context data for the conversation;";"
      const contextData = {;,";"
        title: job.title",""
        description: job.description,";"
        attachedResume: selectedResume;";"
          ? {;";";
              id: selectedResume.id,;"
              title: selectedResume.title",""
              type: selectedResume.type,"
            };
          : null,;
      };
"
      // Create conversation with the job client;
      await createConversation(;"";
        job.client_id,;"";
        fullMessage,;"";
        'job','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        job.id,;
        contextData,);

      // Call onApplySuccess to update job status in the UI;
<<<<<<< HEAD
      if (onApplySuccess) {;''
        await onApplySuccess(job.id);
      };
;''
      toast({;;
        title: 'Application sent',;;'
        description: `Your application for "${job.title}" has been sent.`,;""
      });";""
;";";""
      onClose();";";";""
    } catch {;";";";";""
      logErrorToProduction('Failed to send application:', { data: "error "});";";";""
      toast({;";";";";""
        title: 'Application failed',;''
        description:;;
          'There was an error sending your application. Please try again.',;;'
        variant: 'destructive',;'
      });
    } finally {;
      setIsSubmitting(false);
    };''
  };
;
  return (;''
    <>;;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;";";";";""
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">;";";";";""
          <TabsTrigger value="message" className="flex-1">;";";""
            Message;";";";""
          </TabsTrigger>;";";";";""
          <TabsTrigger value="resume" className="flex-1">;""
            Resume;";""
          </TabsTrigger>;";";""
        </TabsList>;";";";""
;";";";";""
        <TabsContent value="message">;"
          <MessageTab;
            message={message};
            setMessage={setMessage};
            proposalLink={proposalLink};""
            setProposalLink={setProposalLink};";""
          />;";";""
        </TabsContent>;";";";""
;";";";";""
        <TabsContent value="resume">;"
          <ResumeTab;
            onResumeSelected={handleResumeSelected};
            selectedResumeId={selectedResumeId};""
          />;";""
        </TabsContent>;";";""
      </Tabs>;";";";""
;";";";";""
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;";";";""
        <Button;";";";";""
          type="button";";";";";""
          variant="outline";";";";""
          onClick={onClose};";";";";""
          className="border-zion-purple/30 text-white";""
        >;";""
          Cancel;";";""
        </Button>;";";";""
        <Button;";";";";""
          type="button";";";""
          onClick={handleApply};";";";""
          disabled={isSubmitting};";";";";""
          className="bg-zion-purple hover:bg-zion-purple-dark text-white";";""
        >;";";""
          {isSubmitting ? (;";";";""
            <>;";";";";""
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;";""
              Submitting...;";";""
            </>;";";";""
          ) : (;";";";";""
            'Submit Application;'
          )};
        </Button>;
      </div>;''
    </>;
  );
};
;
};''
}
}''
}''
=======
      if (onApplySuccess) {'
        await onApplySuccess(job.id)'
      };
'
      toast({'
        title: 'Application sent','`
        description: `Your application for "${job.title}" has been sent.`,
      });"
;";
      onClose()";";
    } catch {"
      logErrorToProduction('Failed to send application:', { data: "error });"";
      toast({;"";
        title: 'Application failed','
        description:'
          'There was an error sending your application. Please try again.','
        variant: 'destructive','
      });
    } finally {;
      setIsSubmitting(false);
    }'
  }'

  return ('
    <>'
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
        <TabsList className=w-full mb-4 bg-zion-blue-dark/30">""
          <TabsTrigger value=message className="flex-1">;"
            Message;";"
          </TabsTrigger>;"
          <TabsTrigger value=resume className="flex-1">
            Resume;"
          </TabsTrigger>;";
        </TabsList>";";
"
        <TabsContent value="message>
          <MessageTab;
            message={message};
            setMessage={setMessage};"
            proposalLink={proposalLink}"
            setProposalLink={setProposalLink};"
          />;";"
        </TabsContent>;";"
;";"
        <TabsContent value=resume">"
          <ResumeTab;
            onResumeSelected={handleResumeSelected};
            selectedResumeId={selectedResumeId}
          />;"
        </TabsContent>;";
      </Tabs>";";
"
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4>;"";
        <Button;"";
          type="button"
          variant=outline""
          onClick={onClose}";""
          className=border-zion-purple/30 text-white"
        >;"
          Cancel;";"
        </Button>;";"
        <Button;";"
          type=button"";
          onClick={handleApply};"";
          disabled={isSubmitting};""
          className="bg-zion-purple hover:bg-zion-purple-dark text-white;"
        >";
          {isSubmitting ? (;"";
            <>;""
              <Loader2 className="h-4 w-4 mr-2 animate-spin />;"
              Submitting...";
            </>;"";
          ) : (;""
            'Submit Application'
          )};
        </Button>;
      </div>'
    </>'
  );
};

}'

}'
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
