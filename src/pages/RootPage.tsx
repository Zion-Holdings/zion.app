<<<<<<< HEAD
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'
import { useAuth } from '@/hooks/useAuth'
import  { NextSeo }  from '@/components/NextSeo;;
export default function RootPage(): ;;
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
=======
import Dashboard from './Dashboard;'';
import LandingPage from './LandingPage;'';
import { useAuth } from '@/hooks/useAuth;'';
import { NextSeo } from '@/components/NextSeo;'
;
export default function RootPage(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { _user } = useAuth();''
;
  if (user) {;
    return (;''
      <>;;
        <NextSeo title="Dashboard - Zion" />;"
        <Dashboard />;
      </>;
    );
  };""
;";""
  return <LandingPage />;";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
