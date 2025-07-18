<<<<<<< HEAD
import { useRouter } from 'next/router'
import React from 'react';
import { TalentOnboardingForm } from '@/components/profile/TalentOnboardingForm'
import { Header } from '@/components/Header'
import  { useAuth }  from '@/hooks/useAuth;
export default function TalentOnboarding(): ;
=======
import { useRouter } from 'next/router;'';
import React from 'react';';
import { TalentOnboardingForm } from '@/components/profile/TalentOnboardingForm;'';
import { Header } from '@/components/Header;'';
import { useAuth } from '@/hooks/useAuth;'
;
export default function TalentOnboarding(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  const { user, isLoading } = useAuth();
  // If not authenticated, redirect to login;
<<<<<<< HEAD
  if (!isLoading && !user) {;';
    return null; // Redirect handled by useRouter;';
  }'
;
  return (;
    <>'
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md:py-12">;"
        <div className="container mx-auto px-4">;"
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;"
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">;"
              Join Our Talent Network;"
            </h1>;"
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
=======
  if (!isLoading && !user) {;
    return null; // Redirect handled by useRouter;
  };''
;
  return (;
    <>;''
      <Header />;;
      <div className="bg-zion-blue min-h-screen py-8 md:py-12">;";";";";""
        <div className="container mx-auto px-4">;";";";";""
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;";";";";""
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">;";";""
              Join Our Talent Network;";";";""
            </h1>;";";";";""
            <p className="text-zion-slate-light max-w-2xl mx-auto">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
              Showcase your skills to top clients and employers. Create a;
              professional profile to get discovered for AI and tech projects on;
              the Zion Marketplace.;
            </p>;
          </div>;
          <TalentOnboardingForm />;
        </div>;
<<<<<<< HEAD
      </div>;"
    </>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
      </div>;""
    </>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
