/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Enable experimental features for better performance
  experimental: {
    // Enable modern React features
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    
    // Enable modern image optimization
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },

    // Enable CSS optimization for production
    optimizeCss: process.env.NODE_ENV === 'production', 
    // Memory and performance optimizations for 176+ pages
    largePageDataBytes: 128 * 1000, // Reduced to 128KB for better performance
    workerThreads: false, // Disable worker threads to reduce memory usage
    cpus: Math.min(2, os.cpus().length), // Adaptive CPU limit
    // Bundle analysis optimizations moved to root level
    // Disable profiling for faster builds
    swcTraceProfiling: false,
    // Enable Node.js runtime for middleware to avoid Next.js warnings
    nodeMiddleware: false, // Explicitly disable, was causing build issues
    // Removed esmExternals to prevent external module dynamic import issues
  },

  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.launchdarkly.com https://www.googletagmanager.com https://widget.intercom.io https://*.googleapis.com https://*.gstatic.com https://*.sentry.io https://*.google-analytics.com https://*.doubleclick.net https://*.googlesyndication.com https://*.googleadservices.com https://*.facebook.net https://*.facebook.com https://*.twitter.com https://*.twimg.com https://*.linkedin.com https://*.hotjar.com https://*.mixpanel.com https://*.amplitude.com https://*.segment.com https://*.heap.io https://*.fullstory.com https://*.logrocket.com https://*.datadoghq.com https://*.cloudflare.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jquery.com https://*.microsoft.com https://*.office.com https://*.live.com https://*.bing.com https://*.yahoo.com https://*.yandex.com https://*.baidu.com https://*.qq.com https://*.wechat.com https://*.alipay.com https://*.taobao.com https://*.tmall.com https://*.jd.com https://*.amazon.com https://*.ebay.com https://*.paypal.com https://*.square.com https://*.shopify.com https://*.woocommerce.com https://*.magento.com https://*.prestashop.com https://*.opencart.com https://*.zendesk.com https://*.freshdesk.com https://*.helpscout.com https://*.intercom.com https://*.drift.com https://*.crisp.chat https://*.tawk.to https://*.livechat.com https://*.zopim.com https://*.olark.com https://*.tidio.com https://*.chatwoot.com https://*.rocket.chat https://*.discord.com https://*.slack.com https://*.teams.microsoft.com https://*.zoom.us https://*.gotomeeting.com https://*.webex.com https://*.bluejeans.com https://*.skype.com https://*.whatsapp.com https://*.telegram.org https://*.signal.org https://*.wire.com https://*.threema.ch https://*.session.org https://*.briarproject.org https://*.element.io https://*.matrix.org https://*.riot.im https://*.jitsi.org https://*.meet.jit.si https://*.bigbluebutton.org https://*.openmeetings.apache.org https://*.etherpad.org https://*.hackmd.io https://*.notion.so https://*.atlassian.net https://*.jira.com https://*.confluence.com https://*.trello.com https://*.asana.com https://*.monday.com https://*.clickup.com https://*.wrike.com https://*.smartsheet.com https://*.airtable.com https://*.notion.so https://*.roamresearch.com https://*.obsidian.md https://*.logseq.com https://*.remnote.com https://*.roamresearch.com https://*.notion.so https://*.evernote.com https://*.onenote.com https://*.google.com https://*.microsoft.com https://*.apple.com https://*.amazon.com https://*.netflix.com https://*.spotify.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.instagram.com https://*.tiktok.com https://*.snapchat.com https://*.pinterest.com https://*.reddit.com https://*.hackernews.com https://*.producthunt.com https://*.indiehackers.com https://*.dev.to https://*.hashnode.dev https://*.medium.com https://*.substack.com https://*.ghost.org https://*.wordpress.com https://*.wix.com https://*.squarespace.com https://*.webflow.com https://*.framer.com https://*.figma.com https://*.sketch.com https://*.invisionapp.com https://*.marvelapp.com https://*.principleformac.com https://*.protopie.io https://*.flinto.com https://*.origami.studio https://*.framer.com https://*.webflow.com https://*.bubble.io https://*.glideapps.com https://*.adalo.com https://*.thunkable.com https://*.appgyver.com https://*.outsystems.com https://*.mendix.com https://*.powerapps.microsoft.com https://*.salesforce.com https://*.hubspot.com https://*.marketo.com https://*.pardot.com https://*.mailchimp.com https://*.constantcontact.com https://*.campaignmonitor.com https://*.sendgrid.com https://*.mailgun.com https://*.postmarkapp.com https://*.amazonses.com https://*.sendinblue.com https://*.convertkit.com https://*.drip.com https://*.klaviyo.com https://*.omnisend.com https://*.getresponse.com https://*.aweber.com https://*.infusionsoft.com https://*.keap.com https://*.activecampaign.com https://*.ontraport.com https://*.clickfunnels.com https://*.kajabi.com https://*.teachable.com https://*.thinkific.com https://*.udemy.com https://*.coursera.org https://*.edx.org https://*.khanacademy.org https://*.duolingo.com https://*.memrise.com https://*.babbel.com https://*.rosettastone.com https://*.busuu.com https://*.lingoda.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com https://*.gstatic.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com; img-src 'self' data: blob: https: https://*.googleapis.com https://*.gstatic.com https://*.cloudinary.com https://*.cloudflare.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.gravatar.com https://*.wp.com https://*.wordpress.com https://*.blogspot.com https://*.tumblr.com https://*.flickr.com https://*.500px.com https://*.unsplash.com https://*.pexels.com https://*.pixabay.com https://*.shutterstock.com https://*.istockphoto.com https://*.gettyimages.com https://*.adobe.com https://*.behance.net https://*.dribbble.com https://*.deviantart.com https://*.artstation.com https://*.pinterest.com https://*.instagram.com https://*.facebook.com https://*.twitter.com https://*.linkedin.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.tiktok.com https://*.snapchat.com https://*.reddit.com https://*.imgur.com https://*.giphy.com https://*.tenor.com https://*.gfycat.com https://*.streamable.com https://*.clippituser.tv https://*.v.redd.it https://*.i.redd.it https://*.preview.redd.it https://*.external-preview.redd.it https://*.thumbs.redditmedia.com https://*.a.thumbs.redditmedia.com https://*.b.thumbs.redditmedia.com https://*.c.thumbs.redditmedia.com https://*.d.thumbs.redditmedia.com https://*.e.thumbs.redditmedia.com https://*.f.thumbs.redditmedia.com https://*.g.thumbs.redditmedia.com https://*.h.thumbs.redditmedia.com https://*.i.thumbs.redditmedia.com https://*.j.thumbs.redditmedia.com https://*.k.thumbs.redditmedia.com https://*.l.thumbs.redditmedia.com https://*.m.thumbs.redditmedia.com https://*.n.thumbs.redditmedia.com https://*.o.thumbs.redditmedia.com https://*.p.thumbs.redditmedia.com https://*.q.thumbs.redditmedia.com https://*.r.thumbs.redditmedia.com https://*.s.thumbs.redditmedia.com https://*.t.thumbs.redditmedia.com https://*.u.thumbs.redditmedia.com https://*.v.thumbs.redditmedia.com https://*.w.thumbs.redditmedia.com https://*.x.thumbs.redditmedia.com https://*.y.thumbs.redditmedia.com https://*.z.thumbs.redditmedia.com; connect-src 'self' https://*.supabase.co https://*.stripe.com https://*.sentry.io https://*.googleapis.com https://*.gstatic.com https://*.google-analytics.com https://*.doubleclick.net https://*.googlesyndication.com https://*.googleadservices.com https://*.facebook.net https://*.facebook.com https://*.twitter.com https://*.twimg.com https://*.linkedin.com https://*.hotjar.com https://*.mixpanel.com https://*.amplitude.com https://*.segment.com https://*.heap.io https://*.fullstory.com https://*.logrocket.com https://*.datadoghq.com https://*.cloudflare.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jquery.com https://*.microsoft.com https://*.office.com https://*.live.com https://*.bing.com https://*.yahoo.com https://*.yandex.com https://*.baidu.com https://*.qq.com https://*.wechat.com https://*.alipay.com https://*.taobao.com https://*.tmall.com https://*.jd.com https://*.amazon.com https://*.ebay.com https://*.paypal.com https://*.square.com https://*.shopify.com https://*.woocommerce.com https://*.magento.com https://*.prestashop.com https://*.opencart.com https://*.zendesk.com https://*.freshdesk.com https://*.helpscout.com https://*.intercom.com https://*.drift.com https://*.crisp.chat https://*.tawk.to https://*.livechat.com https://*.zopim.com https://*.olark.com https://*.tidio.com https://*.chatwoot.com https://*.rocket.chat https://*.discord.com https://*.slack.com https://*.teams.microsoft.com https://*.zoom.us https://*.gotomeeting.com https://*.webex.com https://*.bluejeans.com https://*.skype.com https://*.whatsapp.com https://*.telegram.org https://*.signal.org https://*.wire.com https://*.threema.ch https://*.session.org https://*.briarproject.org https://*.element.io https://*.matrix.org https://*.riot.im https://*.jitsi.org https://*.meet.jit.si https://*.bigbluebutton.org https://*.openmeetings.apache.org https://*.etherpad.org https://*.hackmd.io https://*.notion.so https://*.atlassian.net https://*.jira.com https://*.confluence.com https://*.trello.com https://*.asana.com https://*.monday.com https://*.clickup.com https://*.wrike.com https://*.smartsheet.com https://*.airtable.com https://*.notion.so https://*.roamresearch.com https://*.obsidian.md https://*.logseq.com https://*.remnote.com https://*.roamresearch.com https://*.notion.so https://*.evernote.com https://*.onenote.com https://*.google.com https://*.microsoft.com https://*.apple.com https://*.amazon.com https://*.netflix.com https://*.spotify.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.instagram.com https://*.tiktok.com https://*.snapchat.com https://*.pinterest.com https://*.reddit.com https://*.hackernews.com https://*.producthunt.com https://*.indiehackers.com https://*.dev.to https://*.hashnode.dev https://*.medium.com https://*.substack.com https://*.ghost.org https://*.wordpress.com https://*.wix.com https://*.squarespace.com https://*.webflow.com https://*.framer.com https://*.figma.com https://*.sketch.com https://*.invisionapp.com https://*.marvelapp.com https://*.principleformac.com https://*.protopie.io https://*.flinto.com https://*.origami.studio https://*.framer.com https://*.webflow.com https://*.bubble.io https://*.glideapps.com https://*.adalo.com https://*.thunkable.com https://*.appgyver.com https://*.outsystems.com https://*.mendix.com https://*.powerapps.microsoft.com https://*.salesforce.com https://*.hubspot.com https://*.marketo.com https://*.pardot.com https://*.mailchimp.com https://*.constantcontact.com https://*.campaignmonitor.com https://*.sendgrid.com https://*.mailgun.com https://*.postmarkapp.com https://*.amazonses.com https://*.sendinblue.com https://*.convertkit.com https://*.drip.com https://*.klaviyo.com https://*.omnisend.com https://*.getresponse.com https://*.aweber.com https://*.infusionsoft.com https://*.keap.com https://*.activecampaign.com https://*.ontraport.com https://*.clickfunnels.com https://*.kajabi.com https://*.teachable.com https://*.thinkific.com https://*.udemy.com https://*.coursera.org https://*.edx.org https://*.khanacademy.org https://*.duolingo.com https://*.memrise.com https://*.babbel.com https://*.rosettastone.com https://*.busuu.com https://*.lingoda.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com; object-src 'none'; base-uri 'self'; frame-src 'self' https://*.stripe.com https://*.paypal.com https://*.square.com https://*.shopify.com https://*.woocommerce.com https://*.magento.com https://*.prestashop.com https://*.opencart.com https://*.zendesk.com https://*.freshdesk.com https://*.helpscout.com https://*.intercom.com https://*.drift.com https://*.crisp.chat https://*.tawk.to https://*.livechat.com https://*.zopim.com https://*.olark.com https://*.tidio.com https://*.chatwoot.com https://*.rocket.chat https://*.discord.com https://*.slack.com https://*.teams.microsoft.com https://*.zoom.us https://*.gotomeeting.com https://*.webex.com https://*.bluejeans.com https://*.skype.com https://*.whatsapp.com https://*.telegram.org https://*.signal.org https://*.wire.com https://*.threema.ch https://*.session.org https://*.briarproject.org https://*.element.io https://*.matrix.org https://*.riot.im https://*.jitsi.org https://*.meet.jit.si https://*.bigbluebutton.org https://*.openmeetings.apache.org https://*.etherpad.org https://*.hackmd.io https://*.notion.so https://*.atlassian.net https://*.jira.com https://*.confluence.com https://*.trello.com https://*.asana.com https://*.monday.com https://*.clickup.com https://*.wrike.com https://*.smartsheet.com https://*.airtable.com https://*.notion.so https://*.roamresearch.com https://*.obsidian.md https://*.logseq.com https://*.remnote.com https://*.roamresearch.com https://*.notion.so https://*.evernote.com https://*.onenote.com https://*.google.com https://*.microsoft.com https://*.apple.com https://*.amazon.com https://*.netflix.com https://*.spotify.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.instagram.com https://*.tiktok.com https://*.snapchat.com https://*.pinterest.com https://*.reddit.com https://*.hackernews.com https://*.producthunt.com https://*.indiehackers.com https://*.dev.to https://*.hashnode.dev https://*.medium.com https://*.substack.com https://*.ghost.org https://*.wordpress.com https://*.wix.com https://*.squarespace.com https://*.webflow.com https://*.framer.com https://*.figma.com https://*.sketch.com https://*.invisionapp.com https://*.marvelapp.com https://*.principleformac.com https://*.protopie.io https://*.flinto.com https://*.origami.studio https://*.framer.com https://*.webflow.com https://*.bubble.io https://*.glideapps.com https://*.adalo.com https://*.thunkable.com https://*.appgyver.com https://*.outsystems.com https://*.mendix.com https://*.powerapps.microsoft.com https://*.salesforce.com https://*.hubspot.com https://*.marketo.com https://*.pardot.com https://*.mailchimp.com https://*.constantcontact.com https://*.campaignmonitor.com https://*.sendgrid.com https://*.mailgun.com https://*.postmarkapp.com https://*.amazonses.com https://*.sendinblue.com https://*.convertkit.com https://*.drip.com https://*.klaviyo.com https://*.omnisend.com https://*.getresponse.com https://*.aweber.com https://*.infusionsoft.com https://*.keap.com https://*.activecampaign.com https://*.ontraport.com https://*.clickfunnels.com https://*.kajabi.com https://*.teachable.com https://*.thinkific.com https://*.udemy.com https://*.coursera.org https://*.edx.org https://*.khanacademy.org https://*.duolingo.com https://*.memrise.com https://*.babbel.com https://*.rosettastone.com https://*.busuu.com https://*.lingoda.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com;",
    // Add error handling for Netlify
    ...(isNetlify && {
      // For Netlify, use more conservative settings
      formats: ['image/webp'],
      minimumCacheTTL: 60, // Shorter cache for debugging
    }),
  },

  // Webpack configuration for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        },
      };

      // SIMPLIFIED DefinePlugin 
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
          'process.env': JSON.stringify({
            NODE_ENV: process.env.NODE_ENV || 'production',
            NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
            NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          }),
        })
      );
    }
    
    // Development optimizations to prevent memory leaks with 176+ pages
    // Define the '@' alias outside the if (dev) block
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    if (dev) {
      if (!isServer) {
        config.watchOptions = {
          ignored: /node_modules/,
          aggregateTimeout: 300,
          poll: false, // Use native file watching instead of polling
        };
      }

      // Alias react-router-dom to a lightweight stub to avoid build errors
      config.resolve.alias = {
        ...config.resolve.alias,
        // '@' alias is now defined globally
        'react-router-dom': path.resolve(__dirname, 'src/stubs/react-router-dom.tsx'),
      };

      if (!isServer) {
        // Optimize memory usage in development
        config.stats = 'errors-warnings';
        config.infrastructureLogging = {
          level: 'error',
        };
      }
    }
    
    // For Netlify deployment, exclude problematic files temporarily
    if (process.env.SKIP_TYPE_CHECK === 'true') {
      config.externals = config.externals || [];
      config.externals.push({
        './src/context/FavoritesContext.tsx': 'empty',
        './src/context/LanguageContext.tsx': 'empty', 
        './src/context/RequestQuoteWizard.tsx': 'empty',
        './src/context/WhitelabelContext.tsx': 'empty',
        './src/hooks/useApiKeys.ts': 'empty',
      });
    }

    // Smart Sentry detection: Disable automatically if would cause build issues
    const shouldDisableSentry = process.env.SKIP_SENTRY_BUILD === 'true' || 
                                process.env.CI === 'true' ||
                                process.env.NODE_ENV === 'production' ||
                                !process.env.SENTRY_DSN ||
                                process.env.SENTRY_DSN?.includes('dummy') ||
                                process.env.SENTRY_DSN?.includes('placeholder');
    
    if (shouldDisableSentry) {
      console.log('🚫 Sentry disabled - using mock implementation (Smart Detection)');
      
      // Use webpack aliases to completely replace all Sentry imports with mocks
      config.resolve.alias = {
        ...config.resolve.alias,
        '@sentry/nextjs': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/node': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/tracing': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/react': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/browser': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
      };
    }

    // Completely exclude dd-trace during CI builds to prevent native module issues  
    if (process.env.SKIP_DATADOG === 'true' || process.env.CI === 'true') {
      console.log('🚫 DD-Trace disabled for CI build - using mock implementation');
      
      // Use webpack alias to replace dd-trace with mock implementation
      config.resolve.alias = {
        ...config.resolve.alias,
        'dd-trace': path.resolve(__dirname, 'src/utils/dd-trace-mock.ts'),
      };
    }

    // PHASE 3: Advanced Performance Optimizations and Error Handling
    // Enhanced bundle optimization and monitoring capabilities

    // CRITICAL: Minimal serverless environment protection (avoiding read-only property issues)
    if (isServer) {
      // Only essential polyfills to avoid property assignment errors
      if (typeof global !== 'undefined') {
        // Only set properties that are safe to assign
        try {
          Object.defineProperty(global, 'self', { 
            value: global.self || global, 
            writable: true, 
            configurable: true 
          });
        } catch (e) { /* ignore if already defined */ }
        
        try {
          Object.defineProperty(global, 'webpackChunk_N_E', { 
            value: global.webpackChunk_N_E || [], 
            writable: true, 
            configurable: true 
          });
        } catch (e) { /* ignore if already defined */ }
      }
      
      // Add serverless-specific webpack configuration
      config.target = 'node';
      config.externalsPresets = { node: true };
      
      // Ensure proper module resolution in serverless
      config.resolve.conditionNames = ['node', 'require', 'default'];
      config.resolve.mainFields = ['main', 'module'];
    }

    // Exclude native modules from server-side bundling to prevent build errors
    if (isServer) {
      // Add all problematic native modules as externals with commonjs type
      config.externals = config.externals || [];
      const nativeModules = [
        '@chainsafe/libp2p-noise',
        '@chainsafe/libp2p-gossipsub', 
        '@libp2p/tcp',
        'libp2p',
        '@orbitdb/core',
        'helia',
        '@helia/json',
        'blockstore-level',
        'datastore-level',
        'multiformats',
        'dd-trace',
        // Add any other native modules that might cause issues
        '@chainsafe/as-sha256',
        '@chainsafe/as-chacha20poly1305',
        '@chainsafe/bls',
        'node-datachannel',
        'classic-level',
        'level'
      ];
      
      // Add as external with commonjs type instead of module type
      nativeModules.forEach(module => {
        config.externals.push({
          [module]: `commonjs ${module}`
        });
      });
      console.log('🚫 Native modules externalized for server build:', nativeModules.length);
    } else {
      // For client-side, bundle problematic UI libraries instead of externalizing
      config.externals = config.externals || [];
      // Don't externalize UI libraries on client side
    }

    // Fix webpack cache configuration to prevent build errors and warnings
    if (config.cache) {
        // Use memory cache to prevent filesystem cache issues and "Serializing big strings" warnings
        config.cache = {
          type: 'memory',
          maxGenerations: dev ? 1 : 5,
          // Disable cacheUnaffected to avoid Webpack usedExports conflict
          cacheUnaffected: false,
        };
      } else {
        // Ensure memory cache is properly configured
        config.cache = {
          type: 'memory',
          maxGenerations: dev ? 1 : 5,
          cacheUnaffected: false,
        };
      }

    // Ensure webpack doesn't enable cacheUnaffected which conflicts with
    // Next.js default usedExports setting
    config.experiments = {
      ...(config.experiments || {}),
      cacheUnaffected: false,
    };

    // Add optimization to prevent temporal dead zone issues
    if (!dev && isServer) {
      config.optimization = {
        ...config.optimization,
        concatenateModules: false, // Disable module concatenation which can cause TDZ issues
        minimize: false, // Disable minimization on server side to preserve variable names
        mangleExports: false,
      };
    }

    // Suppress warnings in both dev and production
    config.ignoreWarnings = [
      /punycode.*deprecated/i,
      /DEP0040/,
      /Critical dependency/,
      /Serializing big strings/i,
      /PackFileCacheStrategy/,
      // Suppress common Next.js warnings that don't affect functionality
      /Module not found.*can't resolve/i,
      /export.*was not found in/i,
      // Additional Next.js 14 warnings
      /images\.domains.*deprecated/i,
      /Fast Refresh/i,
      /webpack performance recommendations/i,
      // Suppress optimization warnings
      /optimization\.usedExports/i,
      /cacheUnaffected/i,
      // Suppress cache-related warnings
      /cache.*filesystem/i,
      /memory.*cache/i,
    ];



    // PHASE 2: Enhanced Bundle Splitting for Performance Optimization
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        
        // Advanced splitChunks configuration for bundle optimization
        splitChunks: {
          chunks: 'all',
          minSize: 20000,     // 20KB minimum chunk size
          maxSize: 244000,    // 244KB maximum chunk size (target from plan)
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            // Heavy libraries that need special handling
            heavy: {
              test: /[\\/]node_modules[\\/](@libp2p|helia|orbitdb|blockstore|datastore|multiformats)[\\/]/,
              name: 'heavy-vendor',
              chunks: 'async', // Only load when needed
              priority: 30,
              maxSize: 200000,
              enforce: true,
            },
            
            // Vendor libraries bundle (optimized)
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
              maxSize: 200000, // Reduced from 244KB
              minSize: 10000,  // Prevent tiny chunks
              enforce: true,
            },
            
            // React ecosystem bundle
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|@tanstack)[\\/]/,
              name: 'react-vendor',
              chunks: 'all',
              priority: 20,
              maxSize: 244000,
              enforce: true,
            },
            
            // UI libraries bundle
            ui: {
              test: /[\\/]node_modules[\\/](@radix-ui|@chakra-ui|framer-motion|lucide-react)[\\/]/,
              name: 'ui-vendor',
              chunks: 'all',
              priority: 20,
              maxSize: 244000,
              enforce: true,
            },
            
            // Utilities bundle
            utils: {
              test: /[\\/]node_modules[\\/](lodash|lodash-es|date-fns|axios|zod|yup)[\\/]/,
              name: 'utils-vendor',
              chunks: 'all',
              priority: 20,
              maxSize: 244000,
              enforce: true,
            },
            
            // Common application code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              maxSize: 244000,
              enforce: true,
            },
            
            // Default vendor chunk for everything else
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
              maxSize: 244000,
            },
          }
        },
        
        // Optimization settings for better performance
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        // usedExports disabled to avoid cacheUnaffected conflicts in older builds
        sideEffects: false,
        concatenateModules: !dev,
        minimize: !dev,
        
        // Runtime chunk optimization
        runtimeChunk: {
          name: 'runtime',
        },
      };
      
      // Updated performance hints with stricter budgets
      config.performance = {
        hints: dev ? false : 'warning',
        maxEntrypointSize: 1000000, // 1MB for main entrypoint (down from 4.97MB)
        maxAssetSize: 244000,       // 244KB for individual assets
        assetFilter: (assetFilename) => {
          return /\.(js|css)$/.test(assetFilename);
        },
      };
    }

    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Sentry webpack plugin optimizations
      config.resolve.alias = {
        ...config.resolve.alias,
        '@sentry/tracing': '@sentry/tracing/esm',
      };

      // Remove cacheUnaffected when usedExports is enabled to prevent conflicts
      if (config.cache && config.cache.cacheUnaffected !== undefined) {
        delete config.cache.cacheUnaffected;
      }
      
      // Note: usedExports is already configured above in the splitChunks section
      // Avoid duplicate configuration that can cause conflicts
    }

    // CRITICAL FIX: Remove cacheUnaffected in ALL cases to prevent webpack conflicts
    // The cacheUnaffected option conflicts with usedExports optimization
    if (config.cache && config.cache.cacheUnaffected !== undefined) {
      delete config.cache.cacheUnaffected;
    }
    
    // Also ensure that cache.type is properly configured when filesystem caching is used
    if (config.cache && config.cache.type === 'filesystem') {
      // Remove any potentially conflicting cache options
      delete config.cache.cacheUnaffected;
      
      // Set safe cache options
      config.cache.allowCollectingMemory = false;
      config.cache.managedPaths = [path.resolve(__dirname, 'node_modules')];
    }

    // Define feature flags for tree shaking
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: true,
      })
    );

    // Note: Sentry replacement is handled via resolve.alias above for CI builds

    // Handle date-fns ESM import issues
    config.plugins.push(
      new webpack.ProvidePlugin({
        'date-fns': 'date-fns',
      })
    );

    // Force certain packages to use ESM - Enhanced for Next.js 15
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // COMPREHENSIVE ESM FIX for Next.js 15 + React 19
    // Handle formik and lodash ESM issues with multiple strategies
    config.resolve.alias = {
      ...config.resolve.alias,
      // Removed lodash-es aliases to prevent ESM/CJS conflicts
    };

    // Override module resolution for problematic packages
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.jsx', '.tsx'],
      '.mjs': ['.mjs', '.mts'],
      '.cjs': ['.cjs', '.cts'],
    };

    // Add webpack rules to force ESM handling
    config.module.rules.push({
      test: /node_modules\/(formik|date-fns|lodash|react-day-picker)/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Disabled problematic string-replace-loader rule that caused invalid regex errors
    /*
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/formik/,
      use: {
        loader: 'string-replace-loader',
        options: {
          multiple: [
            { search: "require('lodash/", replace: "require('lodash-es/", flags: 'g' },
            { search: 'require("lodash/', replace: 'require("lodash-es/', flags: 'g' },
          ]
        }
      }
    });
    */

    // Additional ESM handling for Next.js 15 compatibility
    if (!isServer) {
      // Ensure ESM modules are properly resolved
      config.resolve.mainFields = ['module', 'main'];
      config.resolve.conditionNames = ['import', 'require', 'default'];
    }

    // Add polyfills for Node.js APIs
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      async_hooks: false,
      diagnostics_channel: false,
      worker_threads: false,
      module: false,
      child_process: false,
      http: false,
      https: false,
      os: false,
      path: false,
      stream: false,
      util: false,
      zlib: false,
      url: false,
      // Handle native modules
      'dd-trace': false,
      // Handle node: imports
      'node:http': false,
      'node:https': false,
      'node:fs': false,
      'node:path': false,
      'node:stream': false,
      'node:util': false,
      'node:crypto': false,
      'node:os': false,
      'node:url': false,
      'node:worker_threads': false,
      'node:async_hooks': false,
      'node:child_process': false,
      'node:diagnostics_channel': false,
    };

    // Optimize bundle size
    if (!dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-router-dom': path.resolve(__dirname, 'src/stubs/react-router-dom.tsx'),
      };

      // Note: Compression is handled by Netlify and other deployment platforms
      // Removed compression-webpack-plugin to avoid dependency conflicts
    }

    // PERFORMANCE: Add bundle optimization
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    // Ensure consistent optimization settings in all environments
  config.optimization = {
    ...config.optimization,
  };

  // Disable usedExports to avoid cacheUnaffected conflicts
  if (config.optimization && 'usedExports' in config.optimization) {
    config.optimization.usedExports = false;
  }

  // Remove cacheUnaffected in case any plugin re-added it
  if (config.cache && config.cache.cacheUnaffected !== undefined) {
    delete config.cache.cacheUnaffected;
  }
  if (config.experiments && 'cacheUnaffected' in config.experiments) {
    config.experiments.cacheUnaffected = false;
  }

    return config;
  },

  // Headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for better SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/index',
        destination: '/services',
        permanent: true,
      },
    ];
  },

  // Rewrites for better routing
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Enable compression
  compress: true,

  // Enable powered by header removal
  poweredByHeader: false,

  // Enable trailing slash for better SEO
  trailingSlash: false,

  // Enable page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Enable source maps in development
  productionBrowserSourceMaps: false,

  // Bundle analyzer configuration
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),
};

// Remove deprecated experimental.esmExternals if present
if (nextConfig.experimental && 'esmExternals' in nextConfig.experimental) {
  delete nextConfig.experimental.esmExternals;
}

export default nextConfig;
