import { Header } from '@/components/Header;'
import { JobPostingForm } from '@/components/jobs;
import {;
  Card,;'
  CardContent,;
  CardDescription,;
  CardHeader,;'
  CardTitle,;;
} from '@/components/ui/card;'
import { SEO } from '@/components/SEO;'
import { useAuth } from '@/hooks/useAuth;'
import { useIsMobile } from '@/hooks/use-mobile;
;'
export default function PostJob(): unknown {): unknown {): unknown {): unknown {): unknown {) {;;
  const { isAuthenticated: "_isAuthenticated", isLoading } = useAuth();"
  const isMobile: unknown = useIsMobile();";"
;";";"
  if (isLoading) {;";";";"
    return (;";";";";"
      <div className="flex items-center justify-center min-h-screen">;";";";";"
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  };"
;";"
  return (;";";"
    <>;";";";"
      <SEO;";";";";"
        title="Post a Job | Zion AI Marketplace";";";";";"
        description="Post a job to find the perfect AI talent for your project.";";"
      />;";";"
      <Header />;";";";"
      <main;";";";";"
        className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`};'
      >;;
        <Card className="border shadow-md">;";";";"
          <CardHeader>;";";";";"
            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>;
              Post a Job;
            </CardTitle>;
            <CardDescription>;
              Fill out the form below to post your job and find the perfect;'
              talent.;
            </CardDescription>;
          </CardHeader>;'
          <CardContent>;;
            <JobPostingForm jobId={''} onSuccess={() => {}} />;'
          </CardContent>;
        </Card>;
      </main>;'
      {/* Add extra bottom padding on mobile to account for the bottom nav */};;
      {isMobile && <div className="h-16"></div>};"
    </>;";"
  );";";"
};";";";"
";";";"
}";";"
}";"
}"
}"