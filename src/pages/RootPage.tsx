import Dashboard from './Dashboard'
import LandingPage from './LandingPage'
import { useAuth } from '@/hooks/useAuth'
import  { NextSeo }  from '@/components/NextSeo;
export defaultault function RootPage(): ';
  const { _user } = useAuth()';
  if (user) {;
    return ('
      <>;
        <NextSeo title="Dashboard - Zion" />;
        <Dashboard />;
      </>;
    );
  };"
;";"
  return <LandingPage />;"
};"
"
}"
}";"
}"
}"