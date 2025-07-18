<<<<<<< HEAD
import React from 'react'
import { useRouter } from 'next/router'
import { findRouteByPath } from '@/utils/routeUtils'
import { SEO } from './SEO'
import { getAppConfig } from '@/utils/config'
'
/**'
 * Renders default SEO tags based on the current route's metadata.'
=======
import React from 'react''';
import { useRouter } from 'next/router;'';
import { findRouteByPath } from '@/utils/routeUtils;'';
import { SEO } from './SEO;'';
import { getAppConfig } from '@/utils/config'';
;''
/**;''
 * Renders default SEO tags based on the current route's metadata.''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
 * Individual pages can override these tags by rendering their own SEO component.;
 */;
const RouteSEO: unknown React.FC = () => {;
  const router = useRouter();
  const route = findRouteByPath(router.pathname);
  const config = getAppConfig();

<<<<<<< HEAD
  if (!route) return null'
'
  return (;
    <SEO'
      title={route.label}'
      description={route.description || ''}'
      canonical={`${config.app.url}${router.asPath}`};
    />)'
}'

export default RouteSEO'
'''''
=======
  if (!route) return null;''
''
  return (;
    <SEO;''
      title={route.label};''
      description={route.description || ''}''
      canonical={`${config.app.url}${router.asPath}`}`
    />);''
}''
;
export default RouteSEO;''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
