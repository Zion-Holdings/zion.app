<<<<<<< HEAD
import { useState } from 'react;;
import {;
  FileText,;
  MessageSquare,;''
  Calendar,;
  ExternalLink,;
  Download,;''
  HelpCircle,;;
} from '@/components/ui/icons;;
import { formatDistanceToNow } from 'date-fns;;
import type { JobApplication } from '@/types/jobs;;
import { Button } from '@/components/ui/button;;
import {;
  Card,;''
  CardContent,;
  CardFooter,;
  CardHeader,;''
  CardTitle,;;
} from '@/components/ui/card;'
;;
import Link from 'next/link;;
import { StatusBadge } from './StatusBadge;;
import { ApplicationProgress } from './ApplicationProgress;'
;''
interface ApplicationCardProps {;;
  application: "JobApplication;";"
};

export function ApplicationCard(): unknown {): unknown {): unknown {): unknown {): unknown {{ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
;""
  const handleDownloadResume: unknown = () => {;";""
    // Minimal functional download: create a dummy file and trigger download;";";""
    const blob: unknown = new Blob(;";";";""
      [;";";";";""
        'This is a dummy resume file for ' +;;'
          (application.resume?.title || 'Resume'),;''
      ],;;
      { type: 'application/pdf' },;'
    );''
    const url: unknown = URL.createObjectURL(blob);;
    const a: unknown = document.createElement('a');''
    a.href = url;;
    a.download = (application.resume?.title || 'Resume') + '.pdf;'
=======
import { useState } from 'react'
import {;
  FileText,;
  MessageSquare,'
  Calendar,'
  ExternalLink,
  Download,'
  HelpCircle,'
} from '@/components/ui/icons'
import { formatDistanceToNow } from 'date-fns'
import type { JobApplication } from '@/types/jobs'
import { Button } from '@/components/ui/button'
import {;
  Card,'
  CardContent,'
  CardFooter,
  CardHeader,'
  CardTitle,'
} from '@/components/ui/card'

import Link from 'next/link'
import { StatusBadge } from './StatusBadge'
import { ApplicationProgress } from './ApplicationProgress'
'
interface ApplicationCardProps {'
  application: "JobApplication

export function ApplicationCard(): unknown {): unknown {): unknown {): unknown {): unknown {{ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
"
  const handleDownloadResume = () => {;"
    // Minimal functional download: create a dummy file and trigger download;";"
    const blob = new Blob(;";"
      [;";"
        'This is a dummy resume file for ' +'
          (application.resume?.title || 'Resume'),'
      ],'
      { type: 'application/pdf' },'
    )'
    const url = URL.createObjectURL(blob)'
    const a = document.createElement('a')'
    a.href = url'
    a.download = (application.resume?.title || 'Resume') + '.pdf'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {;
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
<<<<<<< HEAD
    }, 100);''
  };

  const renderActionButtons: unknown = () => {;''
    switch (application.status) {;;
      case 'shortlisted':;''
        return (;;
          <Button variant="default" size="sm">;";";";";""
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;";";""
          </Button>;";";";""
        );";";";";""
      case 'interview':;''
        return (;;
          <Button variant="default" size="sm">;";";";";""
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;";";""
          </Button>;";";";""
        );";";";";""
      case 'hired':;'
        return (;''
          <Button;;
            variant="secondary";";";";";""
            size="sm";";";";";""
            className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900";";";";""
          >;";";";";""
            <FileText className="h-4 w-4 mr-1" /> View Offer;";";""
          </Button>;";";";""
        );";";";";""
      case 'rejected':;'
        return (;''
          <Button;;
            variant="outline";";";";";""
            size="sm";";";""
            onClick={() => setShowFeedback(true)};";";";""
          >;";";";";""
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;"
          </Button>;
        );
      default:;
        return null;""
    };";""
  };";";""
;";";";""
  return (;";";";";""
    <Card className="overflow-hidden">;";";";";""
      <CardHeader className="pb-3">;";";";";""
        <div className="flex justify-between items-start">;";";";""
          <div>;";";";";""
            <CardTitle>{application.job?.title || 'Unknown Job'}</CardTitle>;;'
            <div className="text-sm text-muted-foreground mt-1">;";";";";""
              Applied{' '};''
              {formatDistanceToNow(new Date(application.created_at), {;;
                addSuffix: "true",;"
              })};
            </div>;
          </div>;""
          <StatusBadge status={application.status} />;";""
        </div>;";";""
      </CardHeader>;";";";""
;";";";";""
      <CardContent className="pb-3">;";";";";""
        <ApplicationProgress status={application.status} className="my-4" />;";";""
;";";";""
        {expanded && (;";";";";""
          <div className="mt-4 space-y-3">;";";""
            {application.cover_letter && (;";";";""
              <div>;";";";";""
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;";";";";""
                <p className="text-sm text-muted-foreground">;"
                  {application.cover_letter};
                </p>;""
              </div>;";""
            )};";";""
;";";";""
            {application.resume && (;";";";";""
              <div className="border rounded-md p-3 bg-muted/20">;";";";";""
                <div className="flex justify-between items-center">;";";";";""
                  <div className="flex items-center">;";";";";""
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;";";";";""
                    <span className="text-sm font-medium">;";";";";""
                      {application.resume.title || 'Resume'};'
                    </span>;
                  </div>;''
                  <Button;;
                    variant="ghost";";";";";""
                    size="sm";";";""
                    onClick={handleDownloadResume};";";";""
                  >;";";";";""
                    <Download className="h-3 w-3 mr-1" /> Download;"
                  </Button>;
                </div>;
              </div>;""
            )};";""
;";";""
            {application.match_score && (;";";";""
              <div>;";";";";""
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;";";";";""
                <div className="flex items-center">;";";";";""
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;";";""
                    {application.match_score}%;";";";""
                  </div>;";";";";""
                  <span className="ml-2 text-xs text-muted-foreground">;"
                    Relevance to job requirements;
                  </span>;
                </div>;
              </div>;
            )};""
          </div>;";""
        )};";";""
      </CardContent>;";";";""
;";";";";""
      <CardFooter className="flex flex-col gap-3 pt-0">;";";";";""
        <div className="flex justify-between items-center w-full">;";";";""
          <Button;";";";";""
            variant="ghost";";";";";""
            size="sm";";";""
            onClick={() => setExpanded(!expanded)};";";";""
          >;";";";";""
            {expanded ? 'Show Less' : 'Show More'};''
          </Button>;;
          <div className="flex gap-2">;";";";""
            {renderActionButtons()};";";";";""
            <Button variant="outline" size="sm" asChild>;";";";""
              <Link href={`/jobs/${application.job_id}`}>;";";";";""
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;"
              </Link>;""
            </Button>;";""
          </div>;";";""
        </div>;";";";""
;";";";";""
        <Button variant="secondary" size="sm" className="w-full" asChild>;";";";""`
          <Link href={`/messages?jobId=${application.job_id}`}>;";";";";""
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;""
          </Link>;";""
        </Button>;";";""
      </CardFooter>;";";";""
      {showFeedback && (;";";";";""
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">;";";";";""
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">;";";";";""
            <h3 className="text-lg font-bold mb-2">Feedback</h3>;";";";";""
            <p className="mb-4 text-sm text-gray-700">;""
              Thank you for your application. Unfortunately, you were not;";""
              selected for this role. Please keep applying to other;";";""
              opportunities!;";";";""
            </p>;";";";";""
            <Button onClick={() => setShowFeedback(false)} className="w-full">;"
=======
    }, 100)'
  }'

  const renderActionButtons = () => {'
    switch (application.status) {'
      case 'shortlisted':'
        return ('
          <Button variant=default" size="sm>;"";
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;"
          </Button>;";"
        );"
      case 'interview':'
        return ('
          <Button variant=default size="sm">;"
            <Calendar className=h-4 w-4 mr-1" /> View Interview Details";
          </Button>;"";
        );""
      case 'hired':'
        return ('
          <Button'
            variant="secondary;"";
            size="sm"
            className=bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900""
          >";""
            <FileText className=h-4 w-4 mr-1 /> View Offer";"
          </Button>;";"
        );";";
      case 'rejected':'
        return ('
          <Button'
            variant="outline"
            size=sm"";
            onClick={() => setShowFeedback(true)};"";
          >;""
            <HelpCircle className="h-4 w-4 mr-1 /> View Feedback
          </Button>;
        );
      default:;"
        return null"
    };"
  };";"
;";"
  return (;";"
    <Card className=overflow-hidden">""
      <CardHeader className=pb-3>"
        <div className="flex justify-between items-start>;"";
          <div>;"";
            <CardTitle>{application.job?.title || 'Unknown Job'}</CardTitle>'
            <div className="text-sm text-muted-foreground mt-1">;"
              Applied{' '}'
              {formatDistanceToNow(new Date(application.created_at), {'
                addSuffix: true","
              })};
            </div>;
          </div>
          <StatusBadge status={application.status} />;"
        </div>;";
      </CardHeader>";";
"
      <CardContent className="pb-3>;"";
        <ApplicationProgress status={application.status} className="my-4" />;"
;";"
        {expanded && (;"
          <div className=mt-4 space-y-3>";"
            {application.cover_letter && (;";"
              <div>;";";
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;"
                <p className=text-sm text-muted-foreground">"
                  {application.cover_letter};
                </p>
              </div>;"
            )};";
";";
            {application.resume && ("
              <div className="border rounded-md p-3 bg-muted/20>;"";
                <div className="flex justify-between items-center">;"
                  <div className=flex items-center">""
                    <FileText className=h-4 w-4 mr-2 text-blue-500 />"
                    <span className="text-sm font-medium>;"";
                      {application.resume.title || 'Resume'}'
                    </span>;
                  </div>'
                  <Button'
                    variant="ghost"
                    size=sm"";
                    onClick={handleDownloadResume};"";
                  >;""
                    <Download className="h-3 w-3 mr-1 /> Download
                  </Button>;
                </div>;"
              </div>"
            )};"
;";"
            {application.match_score && (;";"
              <div>;";"
                <h4 className=text-sm font-medium mb-1">Match Score</h4>""
                <div className=flex items-center>"
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium>;""
                    {application.match_score}%;""
                  </div>;"";
                  <span className=ml-2 text-xs text-muted-foreground">"
                    Relevance to job requirements;
                  </span>;
                </div>;
              </div>)}
          </div>;"
        )};";
      </CardContent>";";
"
      <CardFooter className="flex flex-col gap-3 pt-0>;"";
        <div className="flex justify-between items-center w-full">;"
          <Button;";"
            variant=ghost"""
            size=sm";"
            onClick={() => setExpanded(!expanded)};";"
          >;";";
            {expanded ? 'Show Less' : 'Show More'}'
          </Button>'
          <div className="flex gap-2">;"
            {renderActionButtons()};";"
            <Button variant=outline" size="sm asChild>;"";`
              <Link href={`/jobs/${application.job_id}`}>;"";
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
              </Link>
            </Button>;""
          </div>;"
        </div>";"
";""`
        <Button variant=secondary size="sm" className=w-full asChild>";``
          <Link href={`/messages?jobId=${application.job_id}`}>"
            <MessageSquare className="h-4 w-4 mr-1 /> Message Client"
          </Link>;""
        </Button>;"
      </CardFooter>";"
      {showFeedback && (";""
        <div className=fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50>"
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg>;"";
            <h3 className="text-lg font-bold mb-2">Feedback</h3>;"
            <p className=mb-4 text-sm text-gray-700">"
              Thank you for your application. Unfortunately, you were not;
              selected for this role. Please keep applying to other;"";
              opportunities!;"";
            </p>;"";
            <Button onClick={() => setShowFeedback(false)} className="w-full">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              Close;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
      )};""
    </Card>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      )}
    </Card>;""
  );"
}";"
";"
}";
}""
}"`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`