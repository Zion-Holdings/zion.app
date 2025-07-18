<<<<<<< HEAD
import React, { useState, useEffect } from 'react';;
import { supabase } from '@/integrations/supabase/client;;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar;;
import { format } from 'date-fns;;
import Skeleton from '@/components/ui/skeleton;;
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
interface MilestoneActivitiesProps {;;
  projectId: "string;";";""
};";";""
;";";";""
interface Activity {;";";";";""
  id: "string;",;";";";";""
  milestone_id: "string;",";";";";""
  user_id: "string;",;";";";";""
  action: "string;",";";";";""
  previous_status: "string | null;",;";";";";""
  new_status: "string;",";";";";""
  comment: "string | null;",;";";";";""
  created_at: "string;",";";";";""
  milestone: "{;",;";";";";""
    title: "string;";";";";""
  };";";";";""
  created_by_profile: "{;",;";";";";""
    display_name: "string;",";";";";""
    avatar_url: "string | null;";"
=======
import React, { useState, useEffect } from 'react''
import { supabase } from '@/integrations/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { format } from 'date-fns'
import Skeleton from '@/components/ui/skeleton'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface MilestoneActivitiesProps {'
  projectId: "string

"
interface Activity {"
  id: string
  milestone_id: string,
  user_id: string"
  action: "string,
  previous_status: "string | null"
  new_status: string,"
  comment: string | null
  created_at: string,"
  milestone: {
    title: string
  }"
  created_by_profile: {
    display_name: "string,
    avatar_url: "string | null"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  };
};

export function MilestoneActivities(): unknown {): unknown {): unknown {): unknown {): unknown {{ projectId }: MilestoneActivitiesProps) {;
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
;""
  useEffect(() => {;";""
    async function fetchActivities(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";""
      if (!supabase) {;";";";""
        logErrorToProduction(;";";";";""
          'Supabase client not initialized for milestone activities',;'
        );
        return;
      };
;''
      try {;
        setIsLoading(true);
;''
        const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
          .from('milestone_activities');'
          .select(;
            `;''
            *,;;
            milestone: "milestone_id(title)",;";";";";""
            created_by_profile: "profiles!user_id(display_name", avatar_url);";";""`
          `,;";";";""
          );";";";";""
          .eq('project_id', projectId);;'
          .order('created_at', { ascending: "false "});"
;""
        if (error) throw error;";""
;";";""
        setActivities(data || []);";";";""
      } catch {;";";";";""
        logErrorToProduction('Error fetching milestone activities:', {;;'
          data: "error",;"
=======

  useEffect(() => {;""
    async function fetchActivities(): ;
      if (!supabase) {
        logErrorToProduction(;"
          'Supabase client not initialized for milestone activities','
        );
        return;
      };
'
      try {'
        setIsLoading(true);
'
        const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase'
          .from('milestone_activities')'
          .select(;`
            `'
            *,'
            milestone: milestone_id(title)`
            created_by_profile: profiles!user_id(display_name, avatar_url)"``
          `,;
          )
          .eq('project_id', projectId)'
          .order('created_at', { ascending: "false "})

        if (error) throw error;""

        setActivities(data || [])
      } catch {;"
        logErrorToProduction('Error fetching milestone activities:', {'
          data: "error,
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        });
      } finally {;
        setIsLoading(false);
      };
    };

    if (projectId) {;
      fetchActivities();
<<<<<<< HEAD
    };""
  }, [projectId]);";""
;";";""
  function getActivityDescription(): unknown {): unknown {): unknown {): unknown {): unknown {activity: Activity): string {;";";";""
    switch (activity.action) {;";";";";""
      case 'created':;;'
        return 'created a new milestone;''
      case 'status_changed':;;'`
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`;;'
      case 'updated':;;'
        return 'updated milestone details;''
      case 'deliverable_added':;;'
        return 'added a deliverable;'
      default:;;
        return activity.action.replace(/_/g, ' ');'
    };''
  };

  if (isLoading) {;''
    return (;;
      <div className="space-y-4">;";";""
        {[1, 2, 3].map((i) => (;";";";""
          <Card key={i}>;";";";";""
            <CardContent className="p-6">;";";";";""
              <div className="flex items-center space-x-4">;";";";";""
                <Skeleton className="h-10 w-10 rounded-full" />;";";";";""
                <div className="space-y-2">;";";";";""
                  <Skeleton className="h-4 w-40" />;";";";";""
                  <Skeleton className="h-4 w-60" />;"
=======
    }"
  }, [projectId]);"

  function getActivityDescription(): unknown {): unknown {): unknown {): unknown {): unknown {activity: Activity): string {"
    switch (activity.action) {;"
      case 'created':'
        return 'created a new milestone'`
      case 'status_changed':'``
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`;
      case 'updated':'
        return 'updated milestone details'
      case 'deliverable_added':'
        return 'added a deliverable'
      default:;
        return activity.action.replace(/_/g, ' ')'
    }'
  }'

  if (isLoading) {'
    return ('
      <div className=space-y-4>"
        {[1, 2, 3].map((i) => (;"
          <Card key={i}>
            <CardContent className=p-6">"
              <div className=flex items-center space-x-4>"
                <Skeleton className="h-10 w-10 rounded-full />"
                <div className="space-y-2">
                  <Skeleton className=h-4 w-40" />"
                  <Skeleton className=h-4 w-60 />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                </div>;
              </div>;
            </CardContent>;
          </Card>))};
      </div>;
    );
<<<<<<< HEAD
  };""
;";""
  if (activities.length === 0) {;";";""
    return (;";";";""
      <Card>;";";";";""
        <CardContent className="p-6 text-center">;";";";";""
          <p className="text-muted-foreground py-8">;"
            No activity found for this project;
          </p>;
        </CardContent>;
      </Card>;""
    );";""
  };";";""
;";";";""
  return (;";";";";""
    <div className="space-y-4">;""
      <Card>;";""
        <CardHeader>;";";""
          <CardTitle>Project Activity</CardTitle>;";";";""
        </CardHeader>;";";";";""
        <CardContent className="p-6">;";";";";""
          <div className="space-y-6">;";";";""
            {activities.map((activity) => (;";";";";""
              <div key={activity.id} className="flex items-start space-x-4">;";";";";""
                <Avatar className="h-10 w-10">;";";";""
                  <AvatarImage;";";";";""
                    src={activity.created_by_profile?.avatar_url || ''};''
                    alt={;;
                      activity.created_by_profile?.display_name || 'User avatar;''
                    };
                  />;
                  <AvatarFallback>;''
                    {activity.created_by_profile?.display_name?.charAt(0) ||;;
                      '?'};'
                  </AvatarFallback>;''
                </Avatar>;;
                <div className="space-y-1">;";";";";""
                  <div className="flex items-center space-x-2">;";";";";""
                    <span className="font-medium">;";";""
                      {activity.created_by_profile?.display_name};";";";""
                    </span>;";";";";""
                    <span className="text-muted-foreground text-sm">;";";""
                      {getActivityDescription(activity)};";";";""
                    </span>;";";";";""
                    <span className="text-muted-foreground text-xs">;";";""
                      {format(;";";";""
                        new Date(activity.created_at),;";";";";""
                        'MMM d, yyyy h:mm a',;'
                      )};
                    </span>;''
                  </div>;;
                  <p className="text-sm">;";";";";""
                    <span className="font-medium">;";""
                      {activity.milestone?.title};";";""
                    </span>;";";";""
                    {activity.comment && (;";";";";""
                      <span className="ml-2 text-muted-foreground">;";";";";""
                        "{activity.comment}";"
                      </span>;
                    )};
=======
  }"

  if (activities.length === 0) {;"
    return ("
      <Card>;
        <CardContent className=p-6 text-center">"
          <p className=text-muted-foreground py-8>"
            No activity found for this project;
          </p>;
        </CardContent>;
      </Card>"
    );
  };"
"
  return (;
    <div className=space-y-4">"
      <Card>;
        <CardHeader>;"
          <CardTitle>Project Activity</CardTitle>"
        </CardHeader>;
        <CardContent className=p-6">"
          <div className=space-y-6>"
            {activities.map((activity) => (;"
              <div key={activity.id} className=flex items-start space-x-4>"
                <Avatar className="h-10 w-10>"
                  <AvatarImage;"
                    src={activity.created_by_profile?.avatar_url || ''}'
                    alt={'
                      activity.created_by_profile?.display_name || 'User avatar'
                    }'
                  />;
                  <AvatarFallback>'
                    {activity.created_by_profile?.display_name?.charAt(0) ||'
                      '?'}'
                  </AvatarFallback>'
                </Avatar>'
                <div className="space-y-1>"
                  <div className="flex items-center space-x-2">
                    <span className=font-medium">"
                      {activity.created_by_profile?.display_name};
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {getActivityDescription(activity)};
                    </span>"
                    <span className="text-muted-foreground text-xs>"
                      {format(;"
                        new Date(activity.created_at),"
                        'MMM d, yyyy h:mm a','
                      )};
                    </span>'
                  </div>'
                  <p className=text-sm>"
                    <span className="font-medium>"
                      {activity.milestone?.title};"
                    </span>"
                    {activity.comment && (;
                      <span className=ml-2 text-muted-foreground">"
                        {activity.comment}"
                      </span>)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  </p>;
                </div>;
              </div>;
            ))};
          </div>;
        </CardContent>;
<<<<<<< HEAD
      </Card>;""
    </div>;";""
  );";";""
};";";";""
";""
};";""
};";";""
}";"
};""
};";""
}";"
};
};""
}""


}""
=======
      </Card>"
    </div>;
  );"
}"

};""
};
}"
}"
};
}""
};



`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`