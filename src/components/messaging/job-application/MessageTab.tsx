<<<<<<< HEAD
import React from 'react';';
import { Textarea } from '@/components/ui/textarea;'';
import { Input } from '@/components/ui/input;'';
import { Label } from '@/components/ui/label;'
;'';
export interface MessageTabProps {;;
  message: "string;",;";";";";""
  setMessage: "(message: string) => void;",;";";";";""
  proposalLink: "string;",";";";";""
  setProposalLink: "(link: string) => void;";"
};
;
export function MessageTab(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  message,;
  setMessage,;""
  proposalLink,;";""
  setProposalLink,;";";""
}: MessageTabProps) {;";";";""
  return (;";";";";""
    <div className="space-y-4">;";";";""
      <div>;";";";";""
        <Label htmlFor="message" className="text-white">;";""
          Application Message;";";""
        </Label>;";";";""
        <Textarea;";";";";""
          id="message";";";""
          value={message};";";";""
          onChange={(e) => setMessage(e.target.value)};";";";";""
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";";";";";""
          placeholder="Write a message to the job poster...";""
        />;";""
      </div>;";";""
;";";";""
      <div>;";";";";""
        <Label htmlFor="proposalLink" className="text-white">;";""
          Link to Proposal/Portfolio (Optional);";";""
        </Label>;";";";""
        <Input;";";";";""
          id="proposalLink";";";";";""
          type="url";";";""
          value={proposalLink};";";";""
          onChange={(e) => setProposalLink(e.target.value)};";";";";""
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";";";";";""
          placeholder="https://...";"
        />;
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
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
'
export interface MessageTabProps {'
  message: "string,"
  setMessage: (message: string) => void,""
  proposalLink: string","
  setProposalLink: (link: string) => void"

export function MessageTab(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  message,;
  setMessage,"
  proposalLink,;
  setProposalLink,;"";
}: MessageTabProps) {;"";
  return (;"";
    <div className="space-y-4">;"
      <div>;";"
        <Label htmlFor=message" className="text-white>;"
          Application Message";
        </Label>;"";
        <Textarea;""
          id="message;""
          value={message};""
          onChange={(e) => setMessage(e.target.value)};"";
          className=h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"""
          placeholder=Write a message to the job poster..."
        />;"
      </div>;";"
;";"
      <div>;";"
        <Label htmlFor=proposalLink" className="text-white>;"
          Link to Proposal/Portfolio (Optional)";
        </Label>;"";
        <Input;""
          id="proposalLink;"";
          type="url"
          value={proposalLink};";"
          onChange={(e) => setProposalLink(e.target.value)};"
          className=bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https://...
        />;"
      </div>"
    </div>;"
  );";"
};";"
;""
};"
}"

}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
