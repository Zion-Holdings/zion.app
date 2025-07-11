import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure CDN asset prefix when running in production
const isProd = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NETLIFY === 'true';
const isPreviewBuild = process.env.CONTEXT !== 'production';

// Only use CDN if:
// 1. In production mode
// 2. CDN URL is provided and not a placeholder
// 3. Not a Netlify preview build (unless it's the main domain)
// 4. CDN URL is a valid HTTPS URL
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
const isValidCDN = cdnUrl && 
  cdnUrl.startsWith('https://') && 
  !cdnUrl.includes('yourdomain.com') && 
  !cdnUrl.includes('example.com') && 
  !cdnUrl.includes('localhost');

const shouldUseCDN = isProd && isValidCDN && (!isNetlify || !isPreviewBuild);

const assetPrefix = shouldUseCDN ? cdnUrl : '';

// Log configuration for debugging
if (process.env.NODE_ENV === 'development') {
  console.log('Next.js Configuration:', {
    isProd,
    isNetlify,
    isPreviewBuild,
    cdnUrl: cdnUrl || 'Not set',
    isValidCDN,
    shouldUseCDN,
    assetPrefix: assetPrefix || 'Disabled (serving from origin)',
    imageOptimization: !(isNetlify && isPreviewBuild) ? 'Enabled' : 'Disabled for Netlify preview'
  });
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  // Optimized for fast builds (hanging issue SOLVED)
  // outputFileTracing: false, // Intentionally disabled via env vars in build scripts and netlify.toml to prevent hanging.
  productionBrowserSourceMaps: true, // Reactivate for better debugging
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      skipDefaultConversion: true,
    },
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/{{member}}',
    },
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-icons',
      'recharts',
      'react-window',
      'fuse.js'
    ],

    // Ensure CSS optimization is disabled to prevent static/css errors
    optimizeCss: false,
    // Memory and performance optimizations for 176+ pages
    largePageDataBytes: 128 * 1000, // Reduced to 128KB for better performance
    workerThreads: true, // Reactivate worker threads for better performance
    cpus: Math.min(4, os.cpus().length), // Increase CPU limit for better performance
    // Bundle analysis optimizations moved to root level
    // Reactivate profiling for better debugging
    swcTraceProfiling: true,
    // Enable Node.js runtime for middleware to avoid Next.js warnings
    nodeMiddleware: false, // Explicitly disable, was causing build issues (requires canary)
    // Removed esmExternals to prevent external module dynamic import issues (already handled by deleting the property below)
    // instrumentationHook is deprecated and automatically handled by presence of instrumentation.ts
  },

  // Move deprecated experimental options to root level
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,

  images: {
    unoptimized: true, // Temporarily disable image optimization to bypass CSS issues
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Modern remotePatterns configuration (replaces deprecated domains)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.zion.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.ziontechgroup.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      // Support for Netlify preview URLs
      {
        protocol: 'https',
        hostname: '*.netlify.app',
        port: '',
        pathname: '/**',
      },
      // Support for Netlify branch previews
      {
        protocol: 'https',
        hostname: '*--*.netlify.app',
        port: '',
        pathname: '/**',
      },
      // Support for placeholder.co
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.launchdarkly.com https://www.googletagmanager.com https://widget.intercom.io https://*.googleapis.com https://*.gstatic.com https://*.sentry.io https://*.google-analytics.com https://*.doubleclick.net https://*.googlesyndication.com https://*.googleadservices.com https://*.facebook.net https://*.facebook.com https://*.twitter.com https://*.twimg.com https://*.linkedin.com https://*.hotjar.com https://*.mixpanel.com https://*.amplitude.com https://*.segment.com https://*.heap.io https://*.fullstory.com https://*.logrocket.com https://*.datadoghq.com https://*.cloudflare.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jquery.com https://*.microsoft.com https://*.office.com https://*.live.com https://*.bing.com https://*.yahoo.com https://*.yandex.com https://*.baidu.com https://*.qq.com https://*.wechat.com https://*.alipay.com https://*.taobao.com https://*.tmall.com https://*.jd.com https://*.amazon.com https://*.ebay.com https://*.paypal.com https://*.square.com https://*.shopify.com https://*.woocommerce.com https://*.magento.com https://*.prestashop.com https://*.opencart.com https://*.zendesk.com https://*.freshdesk.com https://*.helpscout.com https://*.intercom.com https://*.drift.com https://*.crisp.chat https://*.tawk.to https://*.livechat.com https://*.zopim.com https://*.olark.com https://*.tidio.com https://*.chatwoot.com https://*.rocket.chat https://*.discord.com https://*.slack.com https://*.teams.microsoft.com https://*.zoom.us https://*.gotomeeting.com https://*.webex.com https://*.bluejeans.com https://*.skype.com https://*.whatsapp.com https://*.telegram.org https://*.signal.org https://*.wire.com https://*.threema.ch https://*.session.org https://*.briarproject.org https://*.element.io https://*.matrix.org https://*.riot.im https://*.jitsi.org https://*.meet.jit.si https://*.bigbluebutton.org https://*.openmeetings.apache.org https://*.etherpad.org https://*.hackmd.io https://*.notion.so https://*.atlassian.net https://*.jira.com https://*.confluence.com https://*.trello.com https://*.asana.com https://*.monday.com https://*.clickup.com https://*.wrike.com https://*.smartsheet.com https://*.airtable.com https://*.notion.so https://*.roamresearch.com https://*.obsidian.md https://*.logseq.com https://*.remnote.com https://*.roamresearch.com https://*.notion.so https://*.evernote.com https://*.onenote.com https://*.google.com https://*.microsoft.com https://*.apple.com https://*.amazon.com https://*.netflix.com https://*.spotify.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.instagram.com https://*.tiktok.com https://*.snapchat.com https://*.pinterest.com https://*.reddit.com https://*.hackernews.com https://*.producthunt.com https://*.indiehackers.com https://*.dev.to https://*.hashnode.dev https://*.medium.com https://*.substack.com https://*.ghost.org https://*.wordpress.com https://*.wix.com https://*.squarespace.com https://*.webflow.com https://*.framer.com https://*.figma.com https://*.sketch.com https://*.invisionapp.com https://*.marvelapp.com https://*.principleformac.com https://*.protopie.io https://*.flinto.com https://*.origami.studio https://*.framer.com https://*.webflow.com https://*.bubble.io https://*.glideapps.com https://*.adalo.com https://*.thunkable.com https://*.appgyver.com https://*.outsystems.com https://*.mendix.com https://*.powerapps.microsoft.com https://*.salesforce.com https://*.hubspot.com https://*.marketo.com https://*.pardot.com https://*.mailchimp.com https://*.constantcontact.com https://*.campaignmonitor.com https://*.sendgrid.com https://*.mailgun.com https://*.postmarkapp.com https://*.amazonses.com https://*.sendinblue.com https://*.convertkit.com https://*.drip.com https://*.klaviyo.com https://*.omnisend.com https://*.getresponse.com https://*.aweber.com https://*.infusionsoft.com https://*.keap.com https://*.activecampaign.com https://*.ontraport.com https://*.clickfunnels.com https://*.kajabi.com https://*.teachable.com https://*.thinkific.com https://*.udemy.com https://*.coursera.org https://*.edx.org https://*.khanacademy.org https://*.duolingo.com https://*.memrise.com https://*.babbel.com https://*.rosettastone.com https://*.busuu.com https://*.lingoda.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com https://*.gstatic.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com",
      "font-src 'self' https://fonts.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com",
      "img-src 'self' data: blob: https: https://*.googleapis.com https://*.gstatic.com https://*.cloudinary.com https://*.cloudflare.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.gravatar.com https://*.wp.com https://*.wordpress.com https://*.blogspot.com https://*.tumblr.com https://*.flickr.com https://*.500px.com https://*.unsplash.com https://*.pexels.com https://*.pixabay.com https://*.shutterstock.com https://*.istockphoto.com https://*.gettyimages.com https://*.adobe.com https://*.behance.net https://*.dribbble.com https://*.deviantart.com https://*.artstation.com https://*.pinterest.com https://*.instagram.com https://*.facebook.com https://*.twitter.com https://*.linkedin.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.tiktok.com https://*.snapchat.com https://*.reddit.com https://*.imgur.com https://*.giphy.com https://*.tenor.com https://*.gfycat.com https://*.streamable.com https://*.clippituser.tv https://*.v.redd.it https://*.i.redd.it https://*.preview.redd.it https://*.external-preview.redd.it https://*.thumbs.redditmedia.com https://*.a.thumbs.redditmedia.com https://*.b.thumbs.redditmedia.com https://*.c.thumbs.redditmedia.com https://*.d.thumbs.redditmedia.com https://*.e.thumbs.redditmedia.com https://*.f.thumbs.redditmedia.com https://*.g.thumbs.redditmedia.com https://*.h.thumbs.redditmedia.com https://*.i.thumbs.redditmedia.com https://*.j.thumbs.redditmedia.com https://*.k.thumbs.redditmedia.com https://*.l.thumbs.redditmedia.com https://*.m.thumbs.redditmedia.com https://*.n.thumbs.redditmedia.com https://*.o.thumbs.redditmedia.com https://*.p.thumbs.redditmedia.com https://*.q.thumbs.redditmedia.com https://*.r.thumbs.redditmedia.com https://*.s.thumbs.redditmedia.com https://*.t.thumbs.redditmedia.com https://*.u.thumbs.redditmedia.com https://*.v.thumbs.redditmedia.com https://*.w.thumbs.redditmedia.com https://*.x.thumbs.redditmedia.com https://*.y.thumbs.redditmedia.com https://*.z.thumbs.redditmedia.com",
      "connect-src 'self' https://*.supabase.co https://*.stripe.com https://*.sentry.io https://*.googleapis.com https://*.gstatic.com https://*.google-analytics.com https://*.doubleclick.net https://*.googlesyndication.com https://*.googleadservices.com https://*.facebook.net https://*.facebook.com https://*.twitter.com https://*.twimg.com https://*.linkedin.com https://*.hotjar.com https://*.mixpanel.com https://*.amplitude.com https://*.segment.com https://*.heap.io https://*.fullstory.com https://*.logrocket.com https://*.datadoghq.com https://*.cloudflare.com https://*.jsdelivr.net https://*.unpkg.com https://*.cdnjs.cloudflare.com https://*.bootstrapcdn.com https://*.fontawesome.com https://*.jquery.com https://*.microsoft.com https://*.office.com https://*.live.com https://*.bing.com https://*.yahoo.com https://*.yandex.com https://*.baidu.com https://*.qq.com https://*.wechat.com https://*.alipay.com https://*.taobao.com https://*.tmall.com https://*.jd.com https://*.amazon.com https://*.ebay.com https://*.paypal.com https://*.square.com https://*.shopify.com https://*.woocommerce.com https://*.magento.com https://*.prestashop.com https://*.opencart.com https://*.zendesk.com https://*.freshdesk.com https://*.helpscout.com https://*.intercom.com https://*.drift.com https://*.crisp.chat https://*.tawk.to https://*.livechat.com https://*.zopim.com https://*.olark.com https://*.tidio.com https://*.chatwoot.com https://*.rocket.chat https://*.discord.com https://*.slack.com https://*.teams.microsoft.com https://*.zoom.us https://*.gotomeeting.com https://*.webex.com https://*.bluejeans.com https://*.skype.com https://*.whatsapp.com https://*.telegram.org https://*.signal.org https://*.wire.com https://*.threema.ch https://*.session.org https://*.briarproject.org https://*.element.io https://*.matrix.org https://*.riot.im https://*.jitsi.org https://*.meet.jit.si https://*.bigbluebutton.org https://*.openmeetings.apache.org https://*.etherpad.org https://*.hackmd.io https://*.notion.so https://*.atlassian.net https://*.jira.com https://*.confluence.com https://*.trello.com https://*.asana.com https://*.monday.com https://*.clickup.com https://*.wrike.com https://*.smartsheet.com https://*.airtable.com https://*.notion.so https://*.roamresearch.com https://*.obsidian.md https://*.logseq.com https://*.remnote.com https://*.roamresearch.com https://*.notion.so https://*.evernote.com https://*.onenote.com https://*.google.com https://*.microsoft.com https://*.apple.com https://*.amazon.com https://*.netflix.com https://*.spotify.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.instagram.com https://*.tiktok.com https://*.snapchat.com https://*.pinterest.com https://*.reddit.com https://*.hackernews.com https://*.producthunt.com https://*.indiehackers.com https://*.dev.to https://*.hashnode.dev https://*.medium.com https://*.substack.com https://*.ghost.org https://*.wordpress.com https://*.wix.com https://*.squarespace.com https://*.webflow.com https://*.framer.com https://*.figma.com https://*.sketch.com https://*.invisionapp.com https://*.marvelapp.com https://*.principleformac.com https://*.protopie.io https://*.flinto.com https://*.origami.studio https://*.framer.com https://*.webflow.com https://*.bubble.io https://*.glideapps.com https://*.adalo.com https://*.thunkable.com https://*.appgyver.com https://*.outsystems.com https://*.mendix.com https://*.powerapps.microsoft.com https://*.salesforce.com https://*.hubspot.com https://*.marketo.com https://*.pardot.com https://*.mailchimp.com https://*.constantcontact.com https://*.campaignmonitor.com https://*.sendgrid.com https://*.mailgun.com https://*.postmarkapp.com https://*.amazonses.com https://*.sendinblue.com https://*.convertkit.com https://*.drip.com https://*.klaviyo.com https://*.omnisend.com https://*.getresponse.com https://*.aweber.com https://*.infusionsoft.com https://*.keap.com https://*.activecampaign.com https://*.ontraport.com https://*.clickfunnels.com https://*.kajabi.com https://*.teachable.com https://*.thinkific.com https://*.udemy.com https://*.coursera.org https://*.edx.org https://*.khanacademy.org https://*.duolingo.com https://*.memrise.com https://*.babbel.com https://*.rosettastone.com https://*.busuu.com https://*.lingoda.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com",
      "object-src 'none'",
      "base-uri 'self'",
      "frame-src 'self' https://*.stripe.com https://*.paypal.com https://*.square.com https://*.shopify.com https://*.woocommerce.com https://*.magento.com https://*.prestashop.com https://*.opencart.com https://*.zendesk.com https://*.freshdesk.com https://*.helpscout.com https://*.intercom.com https://*.drift.com https://*.crisp.chat https://*.tawk.to https://*.livechat.com https://*.zopim.com https://*.olark.com https://*.tidio.com https://*.chatwoot.com https://*.rocket.chat https://*.discord.com https://*.slack.com https://*.teams.microsoft.com https://*.zoom.us https://*.gotomeeting.com https://*.webex.com https://*.bluejeans.com https://*.skype.com https://*.whatsapp.com https://*.telegram.org https://*.signal.org https://*.wire.com https://*.threema.ch https://*.session.org https://*.briarproject.org https://*.element.io https://*.matrix.org https://*.riot.im https://*.jitsi.org https://*.meet.jit.si https://*.bigbluebutton.org https://*.openmeetings.apache.org https://*.etherpad.org https://*.hackmd.io https://*.notion.so https://*.atlassian.net https://*.jira.com https://*.confluence.com https://*.trello.com https://*.asana.com https://*.monday.com https://*.clickup.com https://*.wrike.com https://*.smartsheet.com https://*.airtable.com https://*.notion.so https://*.roamresearch.com https://*.obsidian.md https://*.logseq.com https://*.remnote.com https://*.roamresearch.com https://*.notion.so https://*.evernote.com https://*.onenote.com https://*.google.com https://*.microsoft.com https://*.apple.com https://*.amazon.com https://*.netflix.com https://*.spotify.com https://*.youtube.com https://*.vimeo.com https://*.dailymotion.com https://*.twitch.tv https://*.instagram.com https://*.tiktok.com https://*.snapchat.com https://*.pinterest.com https://*.reddit.com https://*.hackernews.com https://*.producthunt.com https://*.indiehackers.com https://*.dev.to https://*.hashnode.dev https://*.medium.com https://*.substack.com https://*.ghost.org https://*.wordpress.com https://*.wix.com https://*.squarespace.com https://*.webflow.com https://*.framer.com https://*.figma.com https://*.sketch.com https://*.invisionapp.com https://*.marvelapp.com https://*.principleformac.com https://*.protopie.io https://*.flinto.com https://*.origami.studio https://*.framer.com https://*.webflow.com https://*.bubble.io https://*.glideapps.com https://*.adalo.com https://*.thunkable.com https://*.appgyver.com https://*.outsystems.com https://*.mendix.com https://*.powerapps.microsoft.com https://*.salesforce.com https://*.hubspot.com https://*.marketo.com https://*.pardot.com https://*.mailchimp.com https://*.constantcontact.com https://*.campaignmonitor.com https://*.sendgrid.com https://*.mailgun.com https://*.postmarkapp.com https://*.amazonses.com https://*.sendinblue.com https://*.convertkit.com https://*.drip.com https://*.klaviyo.com https://*.omnisend.com https://*.getresponse.com https://*.aweber.com https://*.infusionsoft.com https://*.keap.com https://*.activecampaign.com https://*.ontraport.com https://*.clickfunnels.com https://*.kajabi.com https://*.teachable.com https://*.thinkific.com https://*.udemy.com https://*.coursera.org https://*.edx.org https://*.khanacademy.org https://*.duolingo.com https://*.memrise.com https://*.babbel.com https://*.rosettastone.com https://*.busuu.com https://*.lingoda.com https://*.italki.com https://*.preply.com https://*.cambly.com https://*.vipkid.com https://*.daojiao.com https://*.51talk.com https://*.vipabc.com https://*.ef.com https://*.berlitz.com https://*.wallstreetenglish.com https://*.englishfirst.com https://*.englishcentral.com https://*.fluentu.com https://*.hellotalk.com https://*.tandem.net https://*.speaky.com https://*.conversationexchange.com https://*.mylanguageexchange.com"
    ].join('; '),
    // Add error handling for Netlify
    ...(isNetlify && {
      // For Netlify, use more conservative settings
      formats: ['image/webp'],
      minimumCacheTTL: 60, // Shorter cache for debugging
    }),
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Remove React DevTools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['data-testid'] } : false,
    // Disable SWC minification to prevent CSS parsing errors
    styledComponents: false, // Disable if not using styled-components
  },

  transpilePackages: [
    'react-markdown',
    'date-fns',
    'react-day-picker',
    'bail',
    'is-plain-obj',
    'mdast-util-from-markdown',
    'mdast-util-to-hast',
    'unified',
    'remark-parse',
    'remark-rehype',
    'formik',
    'decode-named-character-reference',
    'mdast-util-to-string',
    'micromark-core-commonmark',
    'micromark',
    'micromark-util-character',
    'micromark-util-chunked',
    'micromark-util-classify-character',
    'micromark-util-combine-extensions',
    'micromark-util-decode-numeric-character-reference',
    'micromark-util-decode-string',
    'micromark-util-encode',
    'micromark-util-html-tag-name',
    'micromark-util-normalize-identifier',
    'micromark-util-resolve-all',
    'micromark-util-sanitize-uri',
    'micromark-util-subtokenize',
    'micromark-util-symbol',
    'micromark-util-types',
    // Add missing micromark factory packages
    'micromark-factory-destination',
    'micromark-factory-label',
    'micromark-factory-space',
    'micromark-factory-title',
    'micromark-factory-whitespace',
    // Character entities packages
    'character-entities',
    'character-entities-html4',
    'character-entities-legacy',
    // lodash is installed for Formik compatibility; lodash-es is used directly in our code.
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
    'ajv',
    'ajv-keywords',
    '@ungap/structured-clone',
    'axios-retry',
    'react-error-boundary', // Add react-error-boundary
    // i18next and related packages for transpilation
    'i18next',
    'i18next-browser-languagedetector',
    // Fix dynamic import errors for these ESM-only packages
    'react-hot-toast',
    'sonner',
    'stripe',
    'swr',
    'trim-lines',
    'trough',
    'unist-util-visit-parents',
    'usehooks-ts',
    'vfile-message',
    'unist-util-is',
    // UI libraries that need transpilation
    '@chakra-ui/react',
    '@radix-ui/react-accordion',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-aspect-ratio',
    '@radix-ui/react-avatar',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-label',
    '@radix-ui/react-popover',
    '@radix-ui/react-progress',
    '@radix-ui/react-scroll-area',
    '@radix-ui/react-select',
    '@radix-ui/react-separator',
    '@radix-ui/react-slider',
    '@radix-ui/react-slot',
    '@radix-ui/react-switch',
    '@radix-ui/react-tabs',
    '@radix-ui/react-toast',
    '@radix-ui/react-toggle',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-hover-card',
    '@radix-ui/react-navigation-menu',
    '@hookform/resolvers',
    '@google/model-viewer',
    '@reduxjs/toolkit',
    '@reown/appkit-adapter-ethers',
    '@reown/appkit',
    '@coinbase/wallet-sdk',
    '@reown/appkit-common',
    '@reown/appkit-controllers',
    '@reown/appkit-pay',
    '@reown/appkit-ui',
    '@reown/appkit-wallet',
    '@reown/appkit-utils',
    '@lit/reactive-element',
    'lit',
    '@lit-labs/ssr-dom-shim',
    'lit-element',
    'lit-html',
    'big.js',
    'bs58',
    'ethers',
    'viem',
    '@wagmi/core',
    '@wagmi/connectors',
    '@tanstack/react-query',
    'axios',
    'class-variance-authority',
    'clsx',
    'devlop',
    'tailwind-merge',
    'embla-carousel-react',
    'framer-motion',
    'hast-util-to-jsx-runtime',
    'html-url-attributes',
    'jspdf-autotable',
    'jspdf',
    'recharts',
    'comma-separated-tokens',
    'estree-util-is-identifier-name',
    'hast-util-whitespace',
    'property-information',
    'react-hook-form',
    'space-separated-tokens',
    'style-to-object',
    'unist-util-position',
    'unist-util-stringify-position',
    'unist-util-visit',
    'vfile',
    'zod',
    'react-i18next',
    'react-loading-skeleton',
    'react-redux',
    'remark-parse',
    'remark-rehype',
    'unified',
    'micromark',
    'micromark-util-character',
    'micromark-util-chunked',
    'micromark-util-classify-character',
    'micromark-util-combine-extensions',
    'micromark-util-decode-numeric-character-reference',
    'micromark-util-decode-string',
    'micromark-util-encode',
    'micromark-util-html-tag-name',
    'micromark-util-normalize-identifier',
    'micromark-util-resolve-all',
    'micromark-util-sanitize-uri',
    'micromark-util-subtokenize',
    'micromark-util-symbol',
    'micromark-util-types',
    // lodash is installed for Formik compatibility; lodash-es is used directly in our code.
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
    'ajv',
    'ajv-keywords',
    '@ungap/structured-clone',
    'axios-retry',
    '@reown/appkit',
    '@reown/appkit-adapter-ethers',
    '@reown/appkit-scaffold-ui',
    '@noble/hashes',
    '@coinbase/wallet-sdk',
  ],

  webpack: (config, { dev, isServer, webpack }) => {
    // Use the 'require' from the top of the file, do not redeclare it here
    
    // Skip CSS processing for static directories
    config.module.rules.forEach(rule => {
      if (rule.test && rule.test.toString().includes('css')) {
        if (!rule.exclude) {
          rule.exclude = [];
        }
        rule.exclude.push(/static\/css/);
      }
    });

    // Externalize problematic modules
    config.externals = config.externals || [];
    config.externals.push({
      '@reown/appkit/react': 'commonjs @reown/appkit/react',
      '@reown/appkit/networks': 'commonjs @reown/appkit/networks',
      'lit': 'commonjs lit'
    });

    // Externalize node: modules to prevent UnhandledSchemeError
    const nodeModules = [
      'node:child_process',
      'node:fs',
      'node:http',
      'node:https',
      'node:diagnostics_channel'
    ];
    nodeModules.forEach(module => {
      config.externals.push({
        [module]: `commonjs ${module}`
      });
    });

    // Simplified webpack configuration to bypass CSS issues
    
    // Disable CSS minimization to prevent syntax errors
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        minimizer => !minimizer.constructor.name.includes('CssMinimizer')
      );
    }
    if (config.optimization) {
      config.optimization.minimize = false;
      config.optimization.minimizer = [];
    }
    
    // Prevent Node.js core modules from being polyfilled in the client bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        http: false,
        https: false,
        zlib: false,
        stream: false,
        buffer: false,
        util: false,
        process: false,
        path: false,
        os: false,
        fs: false,
        child_process: false,
        net: false,
        tls: false,
        crypto: false,
        assert: false,
        url: false,
        querystring: false,
        constants: false,
        domain: false,
        events: false,
        punycode: false,
        readline: false,
        string_decoder: false,
        sys: false,
        timers: false,
        tty: false,
        vm: false,
        worker_threads: false,
      };
    }
    
    // Fix EventEmitter memory leak by increasing max listeners
    // events.EventEmitter.defaultMaxListeners = 20; // Will be set by build script
    
    // CRITICAL: Add comprehensive polyfills as the very first entry point
    if (!isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        
        // Create comprehensive polyfill array
        const polyfills = [
          './src/utils/immediate-process-polyfill.ts',  // Immediate process polyfill
          './src/utils/serverless-polyfill.ts',        // Serverless polyfill
          './src/utils/env-polyfill.ts'                // Existing env polyfill
        ];
        
        // Add polyfills to every entry point
        Object.keys(entries).forEach(entryName => {
          if (Array.isArray(entries[entryName])) {
            polyfills.forEach(polyfill => {
              if (!entries[entryName].includes(polyfill)) {
                entries[entryName].unshift(polyfill);
              }
            });
          }
        });
        
        return entries;
      };

      // PERFORMANCE OPTIMIZATION: Advanced code splitting for smaller chunks
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 250000, // Smaller chunks for better loading
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 20,
              reuseExistingChunk: true,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
            },
            ui: {
              test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|@chakra-ui)[\\/]/,
              name: 'ui-components',
              chunks: 'all',
              priority: 30,
            },
            charts: {
              test: /[\\/]node_modules[\\/](recharts|react-chartjs-2|chart\.js)[\\/]/,
              name: 'charts',
              chunks: 'async',
              priority: 40,
            },
            blockchain: {
              test: /[\\/]node_modules[\\/](@reown|ethers|@wagmi|viem)[\\/]/,
              name: 'blockchain',
              chunks: 'async',
              priority: 35,
            },
          },
        },
      };

      // CRITICAL: Enhanced process polyfill configuration
      config.plugins.push(
        // DefinePlugin for environment variables and TypeScript helpers
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
          'process.env': JSON.stringify({
            NODE_ENV: process.env.NODE_ENV || 'production',
            NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
            NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
            NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
            NEXT_PUBLIC_REOWN_PROJECT_ID: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || '',
            NEXT_PUBLIC_DD_CLIENT_TOKEN: process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN || '',
            NEXT_PUBLIC_LOGROCKET_ID: process.env.NEXT_PUBLIC_LOGROCKET_ID || '',
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
            NEXT_PUBLIC_STRIPE_TEST_MODE: process.env.NEXT_PUBLIC_STRIPE_TEST_MODE || '',
            NEXT_PUBLIC_INTERCOM_APP_ID: process.env.NEXT_PUBLIC_INTERCOM_APP_ID || '',
            NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
            NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
            NEXT_PUBLIC_STATUS_PAGE_URL: process.env.NEXT_PUBLIC_STATUS_PAGE_URL || '',
            NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || '',
            NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || '',
            NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '',
            NEXT_PUBLIC_BUILD_TIME: process.env.NEXT_PUBLIC_BUILD_TIME || '',
            NEXT_PUBLIC_SOCIAL_TWITTER_URL: process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL || '',
            NEXT_PUBLIC_SOCIAL_LINKEDIN_URL: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL || '',
            NEXT_PUBLIC_SOCIAL_FACEBOOK_URL: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL || '',
            NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL || '',
            NEXT_PUBLIC_SOCIAL_GITHUB_URL: process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL || '',
          }, (key, value) => typeof value === 'bigint' ? value.toString() : value),
          // TypeScript helpers
          '__extends': `(function(d, b) { 
            if (typeof b !== "function" && b !== null) 
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null"); 
            function __constructor() { this.constructor = d; } 
            d.prototype = b === null ? Object.create(b) : (__constructor.prototype = b.prototype, new __constructor()); 
          })`,
          '__assign': `(Object.assign || function(t) { 
            for (var i = 1; i < arguments.length; i++) { 
              var s = arguments[i]; 
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]; 
            } 
            return t; 
          })`,
          '__rest': `(function(s, e) { 
            var t = {}; 
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]; 
            if (s != null && typeof Object.getOwnPropertySymbols === "function") { 
              var symbols = Object.getOwnPropertySymbols(s); 
              for (var i = 0; i < symbols.length; i++) { 
                var symbol = symbols[i]; 
                if (symbol && e.indexOf(symbol) < 0 && Object.prototype.propertyIsEnumerable.call(s, symbol)) { 
                  t[symbol] = s[symbol]; 
                } 
              } 
            } 
            return t; 
          })`,
          '__decorate': `(function(decorators, target, key, desc) { 
            var c = arguments.length; 
            var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc; 
            var d; 
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); 
            else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r; 
            return c > 3 && r && Object.defineProperty(target, key, r), r; 
          })`,
          '__awaiter': `(function(thisArg, _arguments, P, generator) { 
            function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); } 
            return new (P || (P = Promise))(function (resolve, reject) { 
              function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } } 
              function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } } 
              function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); } 
              step((generator = generator.apply(thisArg, _arguments || [])).next()); 
            }); 
          })`,
          // HTTP/HTTPS polyfills to prevent "http is not defined" errors
          'http': `({ 
            request: function() { throw new Error('http.request is not available in the browser'); },
            get: function() { throw new Error('http.get is not available in the browser'); }
          })`,
          'https': `({ 
            request: function() { throw new Error('https.request is not available in the browser'); },
            get: function() { throw new Error('https.get is not available in the browser'); }
          })`,
        }),
        // ProvidePlugin to ensure process, Buffer, and stream are always available (only for client-side)
        new webpack.ProvidePlugin({
          process: path.resolve(__dirname, 'src/utils/immediate-process-polyfill.ts'),
          Buffer: ['buffer', 'Buffer'],
          stream: path.resolve(__dirname, 'src/utils/stream-polyfill.ts'),
        }),
        // BannerPlugin to inject polyfills at the very beginning of every chunk
        new webpack.BannerPlugin({
          banner: `/* EMERGENCY POLYFILL INJECTION */
(function() {
  'use strict';
  var g = typeof globalThis !== 'undefined' ? globalThis : 
          typeof global !== 'undefined' ? global : 
          typeof window !== 'undefined' ? window : 
          typeof self !== 'undefined' ? self : {};
  
  // TypeScript helpers
  var e = function(d, b) { 
    if (typeof b !== "function" && b !== null) 
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null"); 
    function __constructor() { this.constructor = d; } 
    d.prototype = b === null ? Object.create(b) : (__constructor.prototype = b.prototype, new __constructor()); 
  };
  
  var a = Object.assign || function(t) { 
    for (var i = 1; i < arguments.length; i++) { 
      var s = arguments[i]; 
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]; 
    } 
    return t; 
  };
  
  // Process polyfill
  var p = { env: { NODE_ENV: 'production' }, browser: true };
  
  // HTTP/HTTPS polyfills
  var h = { 
    request: function() { throw new Error('http.request is not available in the browser'); },
    get: function() { throw new Error('http.get is not available in the browser'); }
  };
  
  var s = { 
    request: function() { throw new Error('https.request is not available in the browser'); },
    get: function() { throw new Error('https.get is not available in the browser'); }
  };
  
  // Inject into all possible global contexts
  var contexts = [g, typeof window !== 'undefined' ? window : null, typeof global !== 'undefined' ? global : null, typeof self !== 'undefined' ? self : null];
  for (var i = 0; i < contexts.length; i++) {
    var ctx = contexts[i];
    if (ctx) {
      ctx.__extends = ctx.__extends || e;
      ctx.__assign = ctx.__assign || a;
      ctx.process = ctx.process || p;
      ctx.http = ctx.http || h;
      ctx.https = ctx.https || s;
    }
  }
})();`,
          test: /\.js$/,
          entryOnly: false,
          raw: true
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

    // Always use real Sentry SDK unless in CI or SKIP_SENTRY_BUILD is set
    if (!(process.env.SKIP_SENTRY_BUILD === 'true' || process.env.CI === 'true')) {
      if (config.resolve.alias) {
        delete config.resolve.alias['@sentry/nextjs'];
        delete config.resolve.alias['@sentry/node'];
        delete config.resolve.alias['@sentry/tracing'];
        delete config.resolve.alias['@sentry/react'];
        delete config.resolve.alias['@sentry/browser'];
        delete config.resolve.alias['@sentry/node-core'];
      }
    }

    // Only mock dd-trace in CI or if SKIP_DATADOG is set
    if (!(process.env.SKIP_DATADOG === 'true' || process.env.CI === 'true')) {
      if (config.resolve.alias) {
        delete config.resolve.alias['dd-trace'];
      }
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
      // For client-side, completely exclude libp2p modules to prevent Z_SYNC_FLUSH errors
      config.externals = config.externals || [];
      
      // Add libp2p modules as externals for client-side to prevent bundling
      const clientExternals = [
        'libp2p',
        '@libp2p/identify',
        '@libp2p/tcp',
        '@chainsafe/libp2p-noise',
        '@chainsafe/libp2p-gossipsub',
        '@chainsafe/libp2p-yamux',
        '@orbitdb/core',
        'helia',
        '@helia/json',
        'blockstore-core',
        'datastore-core',
        'multiformats'
      ];
      
      clientExternals.forEach(module => {
        config.externals.push({
          [module]: `commonjs ${module}`
        });
      });
      
      // Fix @reown/appkit and Lit dependencies to prevent dynamic import errors
      const reownModules = [
        '@reown/appkit',
        '@reown/appkit-adapter-ethers',
        '@reown/appkit-common',
        '@reown/appkit-controllers',
        '@reown/appkit-pay',
        '@reown/appkit-ui',
        '@reown/appkit-wallet',
        '@reown/appkit-utils',
        '@lit/reactive-element',
        '@lit/reactive-element/decorators/custom-element.js',
        '@lit/reactive-element/decorators/event-options.js',
        '@lit/reactive-element/decorators/property.js',
        '@lit/reactive-element/decorators/query-all.js',
        '@lit-labs/ssr-dom-shim',
        'lit',
        'lit-element/lit-element.js',
        'lit-html',
        'big.js',
        'bs58'
      ];
      
      reownModules.forEach(module => {
        config.externals.push({
          [module]: `commonjs ${module}`
        });
      });
      
      console.log('🚫 Libp2p modules externalized for client build to prevent Z_SYNC_FLUSH errors');
      console.log('🚫 @reown/appkit and Lit modules externalized as ESM to prevent dynamic import errors');
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
      }

    // Ensure webpack doesn't enable cacheUnaffected which conflicts with
    // Next.js default usedExports setting
    config.experiments = {
      ...(config.experiments || {}),
      cacheUnaffected: false,
    };

    // Add optimization to prevent temporal dead zone issues
    // if (!dev && isServer) {
    //   config.optimization = {
    //     ...config.optimization,
    //     concatenateModules: false, // Disable module concatenation which can cause TDZ issues
    //     minimize: false, // Disable minimization on server side to preserve variable names
    //     mangleExports: false,
    //   };
    // }

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

    // Provide global polyfills for browser environment
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    );
    
    // CRITICAL: Ensure Buffer is available globally for all modules
    config.plugins.push(
      new webpack.DefinePlugin({
        'global.Buffer': 'Buffer',
        'globalThis.Buffer': 'Buffer',
        'window.Buffer': 'Buffer',
        'self.Buffer': 'Buffer',
      })
    );
    
    // CRITICAL: Add Buffer polyfill as webpack banner to ensure it loads first
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: `
          // CRITICAL: Buffer polyfill - must be first
          if (typeof Buffer === 'undefined') {
            function BufferPolyfill(input, encoding, offset) {
              if (typeof input === 'string') {
                var encoder = new TextEncoder();
                var bytes = encoder.encode(input);
                return new Uint8Array(bytes);
              } else if (input instanceof ArrayBuffer) {
                return new Uint8Array(input);
              } else if (Array.isArray(input)) {
                return new Uint8Array(input);
              } else if (input instanceof Uint8Array) {
                return input;
              } else {
                return new Uint8Array(input || 0);
              }
            }
            
            BufferPolyfill.from = function(input, encoding) {
              return new BufferPolyfill(input, encoding);
            };
            
            BufferPolyfill.alloc = function(size, fill, encoding) {
              var buffer = new BufferPolyfill(size);
              if (fill !== undefined) {
                if (typeof fill === 'string') {
                  var encoder = new TextEncoder();
                  var fillBytes = encoder.encode(fill);
                  buffer.set(fillBytes, 0);
                } else {
                  buffer.fill(fill);
                }
              }
              return buffer;
            };
            
            BufferPolyfill.allocUnsafe = function(size) {
              return new BufferPolyfill(size);
            };
            
            BufferPolyfill.isBuffer = function(obj) {
              return obj instanceof Uint8Array;
            };
            
            // Add toString method to Uint8Array prototype for Buffer compatibility
            if (!Uint8Array.prototype.toString) {
              Uint8Array.prototype.toString = function(encoding, start, end) {
                var decoder = new TextDecoder(encoding || 'utf8');
                var slice = this.slice(start, end);
                return decoder.decode(slice);
              };
            }
            
            // Add toJSON method to Uint8Array prototype for Buffer compatibility
            if (!Uint8Array.prototype.toJSON) {
              Uint8Array.prototype.toJSON = function() {
                return {
                  type: 'Buffer',
                  data: Array.from(this)
                };
              };
            }
            
            // Define Buffer in global scope
            if (typeof globalThis !== 'undefined') globalThis.Buffer = BufferPolyfill;
            if (typeof global !== 'undefined') global.Buffer = BufferPolyfill;
            if (typeof window !== 'undefined') window.Buffer = BufferPolyfill;
            if (typeof self !== 'undefined') self.Buffer = BufferPolyfill;
            if (typeof this !== 'undefined') this.Buffer = BufferPolyfill;
            if (typeof module !== 'undefined' && module.exports) module.exports.Buffer = BufferPolyfill;
          }
        `,
        raw: true,
        entryOnly: false,
      })
    );

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
    
    // CRITICAL: Buffer fallback is now handled in the main fallback configuration below

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
      test: /node_modules\/(formik|date-fns|lodash|react-day-picker|@reown|@lit|lit)/,
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
      buffer: 'buffer', // Ensure Buffer polyfill is available
      stream: path.resolve(__dirname, 'src/utils/stream-polyfill.ts'), // Custom stream polyfill
      events: path.resolve(__dirname, 'src/utils/events-polyfill.ts'), // Events polyfill for client-side
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
      util: false,
      zlib: false,
      url: false,
      // Handle native modules
      'dd-trace': false,
      // Remove all node: protocol module assignments
    };

    // Externalize compression libraries to prevent Z_SYNC_FLUSH errors
    if (!isServer) {
      config.externals = {
        ...config.externals,
        'pako': 'pako',
        'zlib': 'zlib',
        // Removed 'buffer': 'buffer' to allow Buffer polyfill to work
        // Removed 'stream': 'stream' to allow stream polyfill to work
        'util': 'util',
        // Removed 'events': 'events' to prevent client-side errors

        'assert': 'assert',
        'constants': 'constants',
        'path': 'path',
        'fs': 'fs',
        'os': 'os',
        'crypto': 'crypto',
        'http': 'http',
        'https': 'https',
        'url': 'url',
        'querystring': 'querystring',
        'punycode': 'punycode',
        'string_decoder': 'string_decoder',
        'timers': 'timers',
        'tty': 'tty',
        'vm': 'vm',
        'zlib': 'zlib',
      };
    }

    // Externalize @lit/reactive-element modules to prevent dynamic import errors
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@lit/reactive-element': 'commonjs @lit/reactive-element',
        '@lit/reactive-element/decorators/custom-element.js': 'commonjs @lit/reactive-element/decorators/custom-element.js',
        '@lit/reactive-element/decorators/event-options.js': 'commonjs @lit/reactive-element/decorators/event-options.js',
        '@lit/reactive-element/decorators/property.js': 'commonjs @lit/reactive-element/decorators/property.js',
        '@lit/reactive-element/decorators/query-all.js': 'commonjs @lit/reactive-element/decorators/query-all.js',
      });
    }

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
      // Explicitly disable usedExports to prevent cacheUnaffected conflicts
      usedExports: false,
    };

    // Remove cacheUnaffected in case any plugin re-added it
    if (config.cache && config.cache.cacheUnaffected !== undefined) {
      delete config.cache.cacheUnaffected;
    }
    if (config.optimization && 'cacheUnaffected' in config.optimization) {
      delete config.optimization.cacheUnaffected;
    }
    if (config.experiments && 'cacheUnaffected' in config.experiments) {
      config.experiments.cacheUnaffected = false;
    }

    // Remove node: protocol module fallbacks and aliases
    // Remove the nodeCoreModules array and its forEach logic for alias and fallback
    // Only keep standard fallbacks and aliases, do not reference node: protocol modules anywhere.

    // Add problematic ESM modules as externals for both server and client
    const problematicESMModules = [
      '@safe-global/safe-apps-sdk',
      'eventemitter3',
      'preact',
      'preact/hooks',
      'valtio/vanilla',
    ];
    if (Array.isArray(config.externals)) {
      problematicESMModules.forEach(module => {
        config.externals.push({
          [module]: `commonjs ${module}`
        });
      });
    } else if (typeof config.externals === 'object' && config.externals !== null) {
      problematicESMModules.forEach(module => {
        config.externals[module] = `commonjs ${module}`;
      });
    }

    // Remove any non-serializable properties before returning config
    // For example, delete any properties that are functions or complex objects
    if (config.cache && typeof config.cache !== 'object') {
      delete config.cache;
    }
    if (config.optimization && typeof config.optimization !== 'object') {
      delete config.optimization;
    }
    // Remove any other known non-serializable properties if present
    // (Add more cleanup here if needed)
    
    // Return config directly instead of trying to serialize it
    return config;
  },

  // Note: headers, redirects, and rewrites don't work with output: 'export'
  // These are handled by Netlify via _headers and _redirects files

  // Skip TypeScript checking during build if SKIP_TYPE_CHECK is set
  typescript: {
    ignoreBuildErrors: false, // Reactivate TypeScript checking for better code quality
  },
  
  // Skip ESLint during build for faster deployment  
  eslint: {
    ignoreDuringBuilds: false, // Reactivate ESLint for better code quality
  },


};

// Remove deprecated experimental.esmExternals if present
if (nextConfig.experimental && 'esmExternals' in nextConfig.experimental) {
  delete nextConfig.experimental.esmExternals;
}

export default nextConfig;









if (nextConfig.experimental && "esmExternals" in nextConfig.experimental) {
  delete nextConfig.experimental.esmExternals;
}

