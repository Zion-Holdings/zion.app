<<<<<<< HEAD
import React from 'react';
import { Header } from '@/components/Header'
import { BillingDashboard } from '@/components/enterprise/billing/BillingDashboard'
import { useAuth } from '@/hooks/useAuth'
import { SEO } from '@/components/SEO'
import { ProtectedRoute } from '@/components/ProtectedRoute;;
export default function EnterpriseBilling(): '
  const { _user } = useAuth();
  // Check if user has billing permissions'
  const hasBillingAccess: unknown =;
    user?.role === 'enterprise_admin' || user?.userType === 'admin;
'
  if (!hasBillingAccess) {;
    return; // Use router.push('/unauthorized') or redirect in getServerSideProps;
  }'
;
  return (;
    <ProtectedRoute>'
      <SEO;
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
      />;"
      <Header />;"
      <main className="min-h-screen bg-background">;
        <BillingDashboard />;
      </main>;"
    </ProtectedRoute>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
import React from 'react';';
import { Header } from '@/components/Header;'';
import { BillingDashboard } from '@/components/enterprise/billing/BillingDashboard;'';
import { useAuth } from '@/hooks/useAuth;'';
import { SEO } from '@/components/SEO;'';
import { ProtectedRoute } from '@/components/ProtectedRoute;'
;
export default function EnterpriseBilling(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  const { _user } = useAuth();
;
  // Check if user has billing permissions;''
  const hasBillingAccess: unknown =;;
    user?.role === 'enterprise_admin' || user?.userType === 'admin;'
;''
  if (!hasBillingAccess) {;;
    return; // Use router.push('/unauthorized') or redirect in getServerSideProps;'
  };''
;
  return (;
    <ProtectedRoute>;''
      <SEO;;
        title="Enterprise Billing - Zion AI Marketplace";";";";";""
        description="Manage your subscription, view invoice history, and download billing statements.";";";""
      />;";";";""
      <Header />;";";";";""
      <main className="min-h-screen bg-background">;"
        <BillingDashboard />;
      </main>;""
    </ProtectedRoute>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
