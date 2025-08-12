import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { Home, Search, ShoppingCart, Users, ArrowLeft, ExternalLink } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';

export default function Custom404() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const err = new Error('404 - Page Not Found');
    const eventId = captureException(err, {
      user: user ? { id: user.id, email: user.email } : undefined,
      extra: { path: window.location.pathname },
    });
    logInfo('Reported 404 error', { data:  { errorId: eventId } });
  }, [user]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <SEO
        title={t('errors.page_not_found')}
        description="The requested page could not be found on Zion AI Marketplace."
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-slate-900 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Large 404 Number */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple bg-clip-text text-transparent mb-4">
              404
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-zion-purple to-zion-cyan mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('errors.page_not_found')}
            </h1>
            <p className="text-zion-slate text-lg md:text-xl max-w-lg mx-auto">
              {t('errors.page_lost_message')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="bg-zion-blue-dark border-zion-purple text-white hover:bg-zion-purple hover:border-zion-purple-light min-w-[180px]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              {t('errors.go_back')}
            </Button>

            <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white min-w-[180px]">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                {t('errors.return_home')}
              </Link>
            </Button>

            <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-cyan-light hover:from-zion-cyan-light hover:to-zion-cyan text-white min-w-[180px]">
              <Link href="/marketplace">
                <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
                {t('errors.go_to_marketplace')}
              </Link>
            </Button>
          </div>

          {/* Quick Navigation Links */}
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl border border-zion-blue-light p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              {t('errors.explore_marketplace')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link 
                href="/marketplace" 
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue-dark/70 hover:bg-zion-purple/20 text-zion-slate hover:text-white transition-all group"
              >
                <ShoppingCart className="w-5 h-5 text-zion-cyan group-hover:text-zion-cyan-light" aria-hidden="true" />
                <span>{t('home.browse_marketplace')}</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
              
              <Link 
                href="/talent" 
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue-dark/70 hover:bg-zion-purple/20 text-zion-slate hover:text-white transition-all group"
              >
                <Users className="w-5 h-5 text-zion-cyan group-hover:text-zion-cyan-light" aria-hidden="true" />
                <span>{t('nav.talent')}</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
              
              <Link 
                href="/categories" 
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue-dark/70 hover:bg-zion-purple/20 text-zion-slate hover:text-white transition-all group"
              >
                <Search className="w-5 h-5 text-zion-cyan group-hover:text-zion-cyan-light" aria-hidden="true" />
                <span>{t('nav.categories')}</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
              
              <Link 
                href="/help" 
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue-dark/70 hover:bg-zion-purple/20 text-zion-slate hover:text-white transition-all group"
              >
                <span className="w-5 h-5 text-zion-cyan group-hover:text-zion-cyan-light text-center leading-none font-bold" aria-hidden="true">?</span>
                <span>{t('nav.help')}</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-zion-slate/70">
            <p>
              {t('errors.if_believe_error')}{' '}
              <Link href="/help" className="text-zion-cyan hover:text-zion-cyan-light underline">
                {t('errors.contact_support_team')}
              </Link>
              {' '}or check our{' '}
              <Link href="/status" className="text-zion-cyan hover:text-zion-cyan-light underline">
                {t('errors.status_page')}
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
