import React from 'react';
import { saveAs } from 'file-saver'
import { AppLayout } from '@/layout/AppLayout'
import { NextSeo } from '@/components/NextSeo'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { logErrorToProduction } from '@/utils/productionLogger;
// Card components are usually exported from 'card.tsx' like this:;
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
// However, the provided JSX doesn't use Card, CardHeader, etc. explicitly as wrappers,;
// but implies their styling might be used. The current JSX structure is fine as is'
// and will rely on Tailwind classes primarily. If Card components were needed for structure,;
// their import would be added here.;
'
const LaunchToolkitPage = () => {;
  const [customDate, setCustomDate] = React.useState('');
  const [selectedTemplateUrl, setSelectedTemplateUrl] = React.useState('')'
  const [selectedTemplateContent, setSelectedTemplateContent] =;
    React.useState('');
  const [generatedPressRelease, setGeneratedPressRelease] = React.useState('')'
  const [isLoadingTemplate, setIsLoadingTemplate] = React.useState(false);
  const [loadError, setLoadError] = React.useState('')'
;
  const [explainerCopy, setExplainerCopy] = React.useState('')'
  const [isLoadingCopy, setIsLoadingCopy] = React.useState(false);
  const [loadCopyError, setLoadCopyError] = React.useState('');
'
  const [isZipping, setIsZipping] = React.useState(false);
  const [zipError, setZipError] = React.useState('')'
;
  type BundleType = 'general' | 'web3' | 'institutional'
  const [activeBundle, setActiveBundle] = React.useState<BundleType>('general');
  const toolkitAssets = ['
    // Media Kit;
    'toolkit_assets/media_kit/zion_brand_guidelines.md',;
    'toolkit_assets/media_kit/zion_color_palette.md',;
    'toolkit_assets/media_kit/zion_typography.md',;
    'toolkit_assets/media_kit/logos/zion_logo_color.svg',;
    'toolkit_assets/media_kit/logos/zion_logo_white.png',;
    'toolkit_assets/media_kit/press_release_templates/press_release_seed_round_template.md',;
    'toolkit_assets/media_kit/press_release_templates/press_release_launch_template.md',;
    'toolkit_assets/media_kit/press_release_templates/press_release_token_sale_template.md','
    // Social Media Kit;
    'toolkit_assets/social_media_kit/banners/linkedin_banner.png',;
    'toolkit_assets/social_media_kit/banners/twitter_banner.png',;
    'toolkit_assets/social_media_kit/gifs/promo_banner.gif',;
    'toolkit_assets/social_media_kit/copy_blocks/explainer_copy_1.txt','
    // Legal Bundle;
    'toolkit_assets/legal_bundle/terms_of_use.md',;
    'toolkit_assets/legal_bundle/privacy_policy.md',;
    'toolkit_assets/legal_bundle/token_sale_notice.md',;
    'toolkit_assets/legal_bundle/dao_disclaimer.md',;
    'toolkit_assets/legal_bundle/jurisdictional_disclosures.md','
    // Playbooks;
    'toolkit_assets/pre_launch_playbook.md',;
    'toolkit_assets/post_launch_playbook.md','
  ];
  const handleDownloadAll = async () => {'
    setIsZipping(true);
    setZipError('');
    try {'
      // Dynamic import to avoid bundling JSZip on the server;
      const JSZip = (await import('jszip')).default'
      const zip = new JSZip();
      for (const assetPath of toolkitAssets) {'
        const response = await fetch(`/${assetPath"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`); // Fetch from public directory;"
        if (!response.ok) {;
          logErrorToProduction(`Failed to fetch asset: "${assetPath"}`);"
          // Optionally, decide if one failed asset should stop the whole process;"
          // or if it should be skipped. For now, we'll log and continue.;
          continue;
        }'
        const blob = await response.blob();
        // The path in the zip should be relative to 'toolkit_assets' or a desired root folder in the zip;
        const pathInZip = assetPath.replace('
          /^toolkit_assets\//,;
          'Zion_Launch_Toolkit/','
        );
        zip.file(pathInZip, blob);
      }'
;
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, 'Zion_Launch_Toolkit.zip')'
    } catch {;
      logErrorToProduction('Error creating ZIP:', { data: "error "});"
      setZipError(;"
        error instanceof Error;"
          ? error.message;"
          : 'An unknown error occurred while creating ZIP.',;