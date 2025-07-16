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
  console.warn('Next.js Configuration:', {
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
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  images: {
    unoptimized: true,
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
    minimumCacheTTL: 31536000,
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
  },
  webpack: (config, { isServer }) => {
    // Handle critical dependency warnings
    config.ignoreWarnings = [
      /Critical dependency: the request of a dependency is an expression/,
    ];

    // Ensure proper module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
  // Add experimental features to improve build stability
  experimental: {
    // Disable some experimental features that might cause issues
    esmExternals: false,
  },
};

export default nextConfig;









if (nextConfig.experimental && "esmExternals" in nextConfig.experimental) {
  delete nextConfig.experimental.esmExternals;
}

// Utility to recursively convert BigInt values to strings in an object
function convertBigIntsToStrings(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntsToStrings);
  } else if (obj && typeof obj === 'object') {
    const result = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (typeof value === 'bigint') {
          result[key] = value.toString();
        } else if (typeof value === 'object' && value !== null) {
          result[key] = convertBigIntsToStrings(value);
        } else {
          result[key] = value;
        }
      }
    }
    return result;
  }
  return obj;
}

