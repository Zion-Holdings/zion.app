<<<<<<< HEAD
import React from 'react';';
import { FileText, Plus, Search, Calendar } from '@/components/ui/icons;';
import {;
  Card,;''
  CardContent,;
  CardDescription,;
  CardHeader,;''
  CardTitle,;;
} from '@/components/ui/card;'';
import { Button } from '@/components/ui/button;''
;
export function QuickActions(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const actions: unknown = [;''
    {;;
      id: 'post-job',;;'
      label: 'Post New Job',;;'
      icon: <FileText className="h-5 w-5 mr-2" />,;";";";";""
      description: 'Create a new job posting',;;'
      color: 'bg-blue-100 dark:bg-blue-900/20',;'
    },;''
    {;;
      id: 'add-member',;;'
      label: 'Add Team Member',;;'
      icon: <Plus className="h-5 w-5 mr-2" />,;";";";";""
      description: 'Invite someone to your team',;;'
      color: 'bg-green-100 dark:bg-green-900/20',;'
    },;''
    {;;
      id: 'find-talent',;;'
      label: 'Find Talent',;;'
      icon: <Search className="h-5 w-5 mr-2" />,;";";";";""
      description: 'Search the talent pool',;;'
      color: 'bg-purple-100 dark:bg-purple-900/20',;'
    },;''
    {;;
      id: 'schedule',;;'
      label: 'Schedule Interview',;;'
      icon: <Calendar className="h-5 w-5 mr-2" />,;";";";";""
      description: 'Set up candidate interviews',;;'
      color: 'bg-amber-100 dark:bg-amber-900/20',;'
=======
import React from 'react'
import { FileText, Plus, Search, Calendar } from '@/components/ui/icons'
import {;
  Card,'
  CardContent,'
  CardDescription,
  CardHeader,'
  CardTitle,'
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
'
export function QuickActions(): ;
  const actions = ['
    {'
      id: 'post-job','
      label: 'Post New Job','
      icon: <FileText className="h-5 w-5 mr-2 />,;"";
      description: 'Create a new job posting','
      color: 'bg-blue-100 dark:bg-blue-900/20','
    },'
    {'
      id: 'add-member','
      label: 'Add Team Member','
      icon: <Plus className="h-5 w-5 mr-2" />,;"
      description: 'Invite someone to your team','
      color: 'bg-green-100 dark:bg-green-900/20','
    },'
    {'
      id: 'find-talent','
      label: 'Find Talent','
      icon: <Search className=h-5 w-5 mr-2" />,""
      description: 'Search the talent pool','
      color: 'bg-purple-100 dark:bg-purple-900/20','
    },'
    {'
      id: 'schedule','
      label: 'Schedule Interview','
      icon: <Calendar className=h-5 w-5 mr-2 />,"
      description: 'Set up candidate interviews','
      color: 'bg-amber-100 dark:bg-amber-900/20','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    },;
  ];

  return (;
    <Card>;
<<<<<<< HEAD
      <CardHeader>;''
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;''
      <CardContent>;;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;";""
          {actions.map((action) => (;";";""
            <Button;";";";""
              key={action.id};";";";";""
              variant="outline";";";""
              className={`h-auto justify-start p-4 ${action.color}`};";";";""
            >;";";";";""
              <div className="flex flex-col items-start text-left">;";";";";""
                <div className="flex items-center">;";""
                  {action.icon};";";""
                  <span>{action.label}</span>;";";";""
                </div>;";";";";""
                <span className="mt-1 text-xs text-muted-foreground">;"
=======
      <CardHeader>'
        <CardTitle>Quick Actions</CardTitle>'
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>'
      <CardContent>'
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4>;"
          {actions.map((action) => (";
            <Button;"";
              key={action.id};""
              variant="outline;""
              className={`h-auto justify-start p-4 ${action.color}`};""
            >;"";
              <div className=flex flex-col items-start text-left">""
                <div className=flex items-center>";"
                  {action.icon};"
                  <span>{action.label}</span>;";"
                </div>;"
                <span className=mt-1 text-xs text-muted-foreground>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  {action.description};
                </span>;
              </div>;
            </Button>))};
        </div>;
<<<<<<< HEAD
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </CardContent>"
    </Card>;
  );"";
};"";
";"
}";"

}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
