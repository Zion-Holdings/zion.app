<<<<<<< HEAD
import type { ResumeBasicInfo } from '@/types/resume;'
;''
interface ResumeBasicInfoSectionProps {;;
  basicInfo: "ResumeBasicInfo;";"
};
;"";
export function ResumeBasicInfoSection(): unknown {): unknown {): unknown {): unknown {): unknown {{;";""
  basicInfo,;";";""
}: ResumeBasicInfoSectionProps) {;";";";""
  return (;";";";";""
    <div className="space-y-2 border-b pb-4 mb-6">;";";";";""
      <h1 className="text-2xl font-bold">;";";""
        {basicInfo.headline || basicInfo.title};";";";""
      </h1>;";";";";""
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>};""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import type { ResumeBasicInfo } from '@/types/resume'
'
interface ResumeBasicInfoSectionProps {'
  basicInfo: "ResumeBasicInfo

"
export function ResumeBasicInfoSection(): unknown {): unknown {): unknown {): unknown {): unknown {{;"
  basicInfo,;
}: ResumeBasicInfoSectionProps) {"
  return (;"
    <div className=space-y-2 border-b pb-4 mb-6>"
      <h1 className="text-2xl font-bold>"
        {basicInfo.headline || basicInfo.title};"
      </h1>"
      {basicInfo.summary && <p className=text-sm>{basicInfo.summary}</p>}"
    </div>;"
  );
}"
"

}"
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
