import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>500 - Internal Server Error | Zion Tech Group</title>
        <meta name="description" content="We're experiencing technical difficulties. Our team has been notified and is working to resolve the issue. Please try again later." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ziontechgroup.com/500" />
        
        <meta property="og:title" content="500 - Internal Server Error | Zion Tech Group" />
        <meta property="og:description" content="We're experiencing technical difficulties. Please try again later." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/500" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="500 - Internal Server Error" />
        <meta name="twitter:description" content="We're experiencing technical difficulties. Please try again later." />
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-9xl font-extrabold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              500
            </h1>
          </div>

          {/* Main Error Message */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Internal Server Error
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We're experiencing technical difficulties on our end. Our engineering team has been notified and is working to resolve the issue.
            </p>
          </div>

          {/* What Happened */}
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">What Happened?</h3>
            <p className="text-white/70 mb-4">
              Something went wrong on our servers while processing your request. This is not your fault - it's an issue on our end that we're actively working to fix.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <h4 className="font-semibold text-white mb-2">Common Causes:</h4>
                <ul className="text-white/60 space-y-1">
                  <li>• Server overload</li>
                  <li>• Database connection issues</li>
                  <li>• Third-party service failures</li>
                  <li>• Maintenance in progress</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white mb-2">What We're Doing:</h4>
                <ul className="text-white/60 space-y-1">
                  <li>• Investigating the issue</li>
                  <li>• Working on a fix</li>
                  <li>• Monitoring system health</li>
                  <li>• Preparing updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => window.location.reload()}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Refresh Page
            </button>
            
            <Link 
              href="/"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Go Home
            </Link>
            
            <Link 
              href="/contact"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Contact Support
            </Link>
          </div>

          {/* Status Update */}
          <div className="mt-8 bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-semibold">Status Update</span>
            </div>
            <p className="text-white/80 text-sm">
              Our team is actively working to resolve this issue. We expect to have it fixed shortly. 
              Thank you for your patience.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm mb-2">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">📧</span>
                <span className="text-white/70">support@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-fuchsia-400">📱</span>
                <span className="text-white/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">💬</span>
                <span className="text-white/70">Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
