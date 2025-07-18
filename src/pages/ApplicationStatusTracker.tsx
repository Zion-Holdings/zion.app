<<<<<<< HEAD
import { SEO } from '@/components/SEO'
import { ApplicationsTracker } from '@/components/jobs/applications'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Inbox } from '@/components/ui/icons;;
import { ProtectedRoute } from '@/components/ProtectedRoute'
import  { useIsMobile }  from '@/hooks/use-mobile;;
function ApplicationStatusTrackerContent(): ;;
  const isMobile = useIsMobile()'
;
  return (;
    <>'
      <SEO;
        title="Application Status Tracker | Zion AI Marketplace"
        description="Track the status of your job applications in the Zion AI marketplace."
      />;"
;"
      <div className="container mx-auto px-4 py-8">;"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;"
          <div>;"
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>;
              Application Status Tracker'
            </h1>;
            <p className="text-muted-foreground mt-1">;
              Track where you stand in the hiring process;"
            </p>;";"
          </div>;"
        </div>;"
;"
        <div className="grid grid-cols-1 gap-6">;"
          <Card>;"
            <CardHeader className="border-b bg-muted/50">;"
              <CardTitle className="flex items-center text-lg">;"
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;"
              </CardTitle>;"
            </CardHeader>;"
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>;
=======
import { SEO } from '@/components/SEO;'';
import { ApplicationsTracker } from '@/components/jobs/applications;'';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card;'';
import { Inbox } from '@/components/ui/icons;'
;;
import { ProtectedRoute } from '@/components/ProtectedRoute;'';
import { useIsMobile } from '@/hooks/use-mobile;'
;
function ApplicationStatusTrackerContent(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const isMobile: unknown = useIsMobile();''
;
  return (;
    <>;''
      <SEO;;
        title="Application Status Tracker | Zion AI Marketplace";";";";";""
        description="Track the status of your job applications in the Zion AI marketplace.";";";""
      />;";";";""
;";";";";""
      <div className="container mx-auto px-4 py-8">;";";";";""
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;";";";""
          <div>;";";";";""
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>;'
              Application Status Tracker;''
            </h1>;;
            <p className="text-muted-foreground mt-1">;"
              Track where you stand in the hiring process;""
            </p>;";""
          </div>;";";""
        </div>;";";";""
;";";";";""
        <div className="grid grid-cols-1 gap-6">;";";";""
          <Card>;";";";";""
            <CardHeader className="border-b bg-muted/50">;";";";";""
              <CardTitle className="flex items-center text-lg">;";";";";""
                <Inbox className="mr-2 h-5 w-5" /> Your Applications;";";""
              </CardTitle>;";";";""
            </CardHeader>;";";";";""
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
              <ApplicationsTracker />;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </>;
  );
};
export default function ApplicationStatusTracker(): ;
  return (;
    <ProtectedRoute>;
<<<<<<< HEAD
      <ApplicationStatusTrackerContent />'
=======
      <ApplicationStatusTrackerContent />;''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    </ProtectedRoute>;
  );
};
};
<<<<<<< HEAD
}'
};
}
}'
}'
=======
};''
};
}
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''