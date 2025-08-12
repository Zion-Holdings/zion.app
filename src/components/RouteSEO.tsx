import React from 'react';
import { useRouter } from 'next/router';
import { findRouteByPath } from '@/utils/routeUtils';
import { SEO } from './SEO';
import { getAppConfig } from '@/utils/config';

/**
 * Renders default SEO tags based on the current route's metadata.
 * Individual pages can override these tags by rendering their own SEO component.
 */
const RouteSEO: React.FC = () => {
  const router = useRouter();
  const route = findRouteByPath(router.pathname);
  const config = getAppConfig();

  if (!route) return null;

  return (
    <SEO
      title={route.label}
      description={route.description || ''}
      canonical={`${config.app.url}${router.asPath}`}
    />
  );
};

export default RouteSEO;
