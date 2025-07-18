<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Loader2 } from '@/components/ui/icons'
import { ProductListingCard } from '@/components/ProductListingCard'
import { useAuth } from '@/hooks/useAuth'
import { fetchRecommendations } from '@/api/recommendations'
import type { ProductListing } from '@/types/listings;;
import {'
  Dialog,;
  DialogContent,;
  DialogHeader,'
  DialogTitle,;
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button;;
import Link from 'next/link'
import  { ErrorState }  from '@/components/jobs/applications;
export default function EquipmentRecommendations(): ;
=======
import { useEffect, useState } from 'react';';
import { Loader2 } from '@/components/ui/icons;'';
import { ProductListingCard } from '@/components/ProductListingCard;'';
import { useAuth } from '@/hooks/useAuth;'';
import { fetchRecommendations } from '@/api/recommendations;'';
import type { ProductListing } from '@/types/listings;';
import {;''
  Dialog,;
  DialogContent,;
  DialogHeader,;''
  DialogTitle,;;
} from '@/components/ui/dialog;'';
import { Button } from '@/components/ui/button;'
;;
import Link from 'next/link;'';
import { ErrorState } from '@/components/jobs/applications;'
;
export default function EquipmentRecommendations(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  const { isAuthenticated, user } = useAuth();
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {;
    if (isAuthenticated && user?.id) {;
      setLoading(true);
      fetchRecommendations(user.id);
        .then(setListings);
        .catch(() => setError(true));
<<<<<<< HEAD
        .finally(() => setLoading(false));';
    };';
  }, [isAuthenticated, user])'
;
  if (!isAuthenticated) {;
    return ('
      <Dialog open>;
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">;
          <DialogHeader>;
            <DialogTitle>Authentication required</DialogTitle>;"
          </DialogHeader>;";"
          <p>Please sign in to get personalized AI picks.</p>;"
          <Button;"
            asChild;"
            className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white"
          >;"
            <Link href="/auth/login?returnTo=/equipment/recommendations">;
=======
        .finally(() => setLoading(false));
    };
  }, [isAuthenticated, user]);''
;
  if (!isAuthenticated) {;
    return (;''
      <Dialog open>;;
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">;"
          <DialogHeader>;
            <DialogTitle>Authentication required</DialogTitle>;""
          </DialogHeader>;";""
          <p>Please sign in to get personalized AI picks.</p>;";";""
          <Button;";";";""
            asChild;";";";";""
            className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white";";";";""
          >;";";";";""
            <Link href="/auth/login?returnTo=/equipment/recommendations">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
              Sign In;
            </Link>;
          </Button>;
        </DialogContent>;
<<<<<<< HEAD
      </Dialog>;"
    );";"
  };"
;"
  return (;"
    <div className="min-h-screen bg-zion-blue py-8 px-4">;"
      <h1 className="text-2xl font-bold text-white mb-6">;"
        AI Equipment Recommendations;"
      </h1>;"
      {loading && (;"
        <div className="flex justify-center py-20">;"
          <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;"
        </div>;"
      )};"
      {error && <ErrorState error="Failed to load recommendations." />};"
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">;"
        {listings.map((listing) => (;"
          <div key={listing.id} className="break-inside-avoid mb-4">;
            <ProductListingCard listing={listing} />;
          </div>;
        ))};
      </div>;"
    </div>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
      </Dialog>;""
    );";""
  };";";""
;";";";""
  return (;";";";";""
    <div className="min-h-screen bg-zion-blue py-8 px-4">;";";";";""
      <h1 className="text-2xl font-bold text-white mb-6">;";""
        AI Equipment Recommendations;";";""
      </h1>;";";";""
      {loading && (;";";";";""
        <div className="flex justify-center py-20">;";";";";""
          <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;";";""
        </div>;";";";""
      )};";";";";""
      {error && <ErrorState error="Failed to load recommendations." />};";";";";""
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">;";";";""
        {listings.map((listing) => (;";";";";""
          <div key={listing.id} className="break-inside-avoid mb-4">;"
            <ProductListingCard listing={listing} />;
          </div>;
        ))};
      </div>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
