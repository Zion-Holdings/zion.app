<<<<<<< HEAD;

import { Apple } from '@/components/ui/icons;'';

import { logInfo } from '@/utils/productionLogger;'';

  onGooglePlayClick?: () => void;''';
export const _AppStoreButtons: unknown React.FC<AppStoreButtonsProps> = ({;''';
  appStoreUrl = '#',;;'';
  googlePlayUrl = '#',;''';
}) => {;''';
    if (!appStoreUrl || appStoreUrl === '#') {;''';
      logInfo('App Store download clicked');'';
      onAppStoreClick?.();''';
;''';
    if (!googlePlayUrl || googlePlayUrl === '#') {;''';
      logInfo('Google Play download clicked');'';
      onGooglePlayClick?.();''';
;''';
    <div className={cn('flex flex-col sm:flex-row gap-4', className)}>;'';
      <a;'''