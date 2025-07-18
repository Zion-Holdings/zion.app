<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
;
// This component handles deep linking to the mobile app;
const OpenAppRedirect: unknown React.FC = () => {'
  const router = useRouter();
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>(;
    'redirecting',;
=======
import React, { useEffect, useState } from 'react';';
import { useRouter } from 'next/router;'';
import { SEO } from '@/components/SEO;'';
import { Button } from '@/components/ui/button;'';
import Link from 'next/link;''
;
// This component handles deep linking to the mobile app;
const OpenAppRedirect: unknown React.FC = () => {;''
  const router: unknown = useRouter();;
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>(;;'
    'redirecting',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  );
  useEffect(() => {'
    const attemptAppOpen = async () => {;
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent)'
;
<<<<<<< HEAD
      // App scheme URLs (these would be your actual app's URL schemes);
      const appScheme = 'zion://'
      const androidAppUrl = 'market://details?id=app.zion.marketplace;
      const iosAppUrl: unknown =;
        'https://apps.apple.com/app/zion-ai-marketplace/id0000000000'
      const fallbackUrl = '/mobile-launch // Fallback to mobile launch page;
'
      let timeout: number | undefined;
      // Try to open the app'
      if (isAndroid || isiOS) {;
        // Set a timeout to redirect to app store if the app doesn't open'
        timeout = window.setTimeout(() => {;
          setStatus('timeout');
=======
  useEffect(() => {;''
    const attemptAppOpen: unknown = async () => {;
      const isiOS: unknown = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid: unknown = /Android/.test(navigator.userAgent);''
;;
      // App scheme URLs (these would be your actual app's URL schemes);;'
      const appScheme: unknown = 'zion://;''
      const androidAppUrl: unknown = 'market://details?id=app.zion.marketplace;'
      const iosAppUrl: unknown =;;
        'https://apps.apple.com/app/zion-ai-marketplace/id0000000000;''
      const fallbackUrl: unknown = '/mobile-launch // Fallback to mobile launch page;'
;''
      let timeout: number | undefined;
;
      // Try to open the app;''
      if (isAndroid || isiOS) {;;
        // Set a timeout to redirect to app store if the app doesn't open;''
        timeout = window.setTimeout(() => {;;
          setStatus('timeout');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
          if (isAndroid) {;
            window.location.href = androidAppUrl;
          } else if (isiOS) {;
            window.location.href = iosAppUrl;
          };
        }, 2500); // Wait 2.5 seconds before redirecting to store;
<<<<<<< HEAD
'
        // Try to open the app;
        window.location.href = appScheme;
      } else {'
        // Not on mobile, redirect to mobile launch page;
        setStatus('failed');
        setTimeout(() => {;
          router.push(fallbackUrl)'
        }, 1500);
      };
'
      // Clear timeout if page visibility changes (meaning app opened successfully);
      document.addEventListener('visibilitychange', () => {;
=======
;''
        // Try to open the app;
        window.location.href = appScheme;
      } else {;''
        // Not on mobile, redirect to mobile launch page;;
        setStatus('failed');'
        setTimeout(() => {;
          router.push(fallbackUrl);''
        }, 1500);
      };
;''
      // Clear timeout if page visibility changes (meaning app opened successfully);;
      document.addEventListener('visibilitychange', () => {;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        if (document.hidden && timeout) {;
          clearTimeout(timeout);
        };
      });
    };
<<<<<<< HEAD
'
    attemptAppOpen();
  }, [router]);
'
  return (;
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">;"
      <SEO;"
        title="Opening Zion App"
        description="Redirecting to the Zion AI Marketplace mobile app"
        noindex={true};"
      />;"
      <div className="text-center p-8">;"
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>;"
;"
        {status === 'redirecting' && ('
          <>;
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>;"
            <p className="text-gray-300">;
              If nothing happens, download the app first.;"
            </p>;";"
          </>;"
        )};"
;"
        {status === 'timeout' && ('
          <>;
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>;"
            <p className="text-gray-300 mb-6">;"
              We're redirecting you to download the Zion app.'
            </p>;
          </>;
        )}'
;
        {status === 'failed' && ('
          <>;
            <h1 className="text-2xl font-bold mb-2">Opening App Failed</h1>;"
            <p className="text-gray-300 mb-6">;"
              We're taking you to our mobile app page where you can download the;
              app.'
            </p>;
            <Link href="/mobile-launch">;"
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80">;
=======
;''
    attemptAppOpen();
  }, [router]);
;''
  return (;;
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">;";";";""
      <SEO;";";";";""
        title="Opening Zion App";";";";";""
        description="Redirecting to the Zion AI Marketplace mobile app";";";""
        noindex={true};";";";""
      />;";";";";""
      <div className="text-center p-8">;";";";";""
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>;";";";""
;";";";";""
        {status === 'redirecting' && (;''
          <>;;
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>;";";";";""
            <p className="text-gray-300">;"
              If nothing happens, download the app first.;""
            </p>;";""
          </>;";";""
        )};";";";""
;";";";";""
        {status === 'timeout' && (;''
          <>;;
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>;";";";";""
            <p className="text-gray-300 mb-6">;";";";";""
              We're redirecting you to download the Zion app.;''
            </p>;
          </>;
        )};''
;;
        {status === 'failed' && (;''
          <>;;
            <h1 className="text-2xl font-bold mb-2">Opening App Failed</h1>;";";";";""
            <p className="text-gray-300 mb-6">;";";";";""
              We're taking you to our mobile app page where you can download the;'
              app.;''
            </p>;;
            <Link href="/mobile-launch">;";";";";""
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
                Go to Mobile App Page;
              </Button>;
            </Link>;
          </>;
        )};
      </div>;
    </div>;
<<<<<<< HEAD
  );"
};";"
;"
export default OpenAppRedirect;"
"""""
=======
  );""
};";""
;";";"";
export default OpenAppRedirect;";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
