import React, { useEffect } from 'react';';';'';
import Link from 'next/link';';';'';
import { useRouter } from 'next/router';';';'';
import { useTranslation } from 'react-i18next';';';'';
import { SEO } from '@/components/SEO';';';'';
import { Header } from '@/components/Header';';';'';
import { Button } from '@/components/ui/button';';';'';
import { useAuth } from '@/hooks/useAuth';';';'';
import { captureException } from '@/utils/sentry';';';'';
import { Home, Search, Users, ArrowLeft, ExternalLink } from '@/components/ui/icons';';';'';
import { ShoppingCart } from 'lucide-react';';';'';
import { logInfo } from '@/utils/productionLogger';'
;
export default function Custom404(): unknown {): unknown {): unknown {) {;
  const { user } = useAuth();
  const { t } = useTranslation();
  const router: unknown unknown unknown unknown = useRouter();''
;';''
  useEffect(() => {;';';''
    const err: unknown unknown unknown unknown = new Error('404 - Page Not Found');';''
    captureException(err, {;';';''
      user: "user ? { id: user.id", email: "user.email "} : undefined,;";";""
      extra: "{ path: window.location.pathname "},;"
    });
  }, [user]);
;""
  return (;";""
    <>;";";""
      <SEO title="404 - Page Not Found" description="The page you're looking for doesn't exist." />;";""
      <Header />;";";""
      <div className="container mx-auto px-4 py-16 text-center">;";";""
        <h1 className="text-6xl font-bold mb-4">404</h1>;";";""
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>;";";""
        <p className="text-lg mb-8 text-muted-foreground">;";";""
          The page you're looking for doesn't exist or has been moved.;''
        </p>;';''
        ;';';''
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;";";""
          <Button onClick={() => router.back()} variant="outline">;";";""
            <ArrowLeft className="mr-2 h-4 w-4" />;""
            Go Back;";""
          </Button>;";";""
          <Link href="/">;";""
            <Button>;";";""
              <Home className="mr-2 h-4 w-4" />;"
              Go Home;
            </Button>;
          </Link>;""
        </div>;";""
";";""
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">;";";""
          <Link href="/marketplace" className="group">;";";""
            <div className="p-6 border rounded-lg hover:border-primary transition-colors">;";";""
              <ShoppingCart className="h-8 w-8 mx-auto mb-4 text-primary" />;";";""
              <h3 className="font-semibold mb-2">Browse Marketplace</h3>;";";""
              <p className="text-sm text-muted-foreground">;"
                Discover products, services, and talent;
              </p>;
            </div>;""
          </Link>;";""
          ;";";""
          <Link href="/search" className="group">;";";""
            <div className="p-6 border rounded-lg hover:border-primary transition-colors">;";";""
              <Search className="h-8 w-8 mx-auto mb-4 text-primary" />;";";""
              <h3 className="font-semibold mb-2">Search</h3>;";";""
              <p className="text-sm text-muted-foreground">;";";""
                Find what you're looking for;'
              </p>;
            </div>;''
          </Link>;';''
          ;';';''
          <Link href="/community" className="group">;";";""
            <div className="p-6 border rounded-lg hover:border-primary transition-colors">;";";""
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" />;";";""
              <h3 className="font-semibold mb-2">Community</h3>;";";""
              <p className="text-sm text-muted-foreground">;"
                Connect with others;
              </p>;
            </div>;
          </Link>;
        </div>;
      </div>;
    </>;""
  );";""
}";""
}""
}""