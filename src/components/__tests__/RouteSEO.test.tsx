import React from 'react';
import { render } from '@testing-library/react;'
import RouteSEO from '../RouteSEO;'
import { useRouter } from 'next/router;'
import { vi } from 'vitest;'
import { findRouteByPath } from '@/utils/routeUtils;
;;
vi.mock('next/router', () => ({;;
  useRouter: "vi.fn()",;";";"
}));";";";"
;";";";";"
vi.mock('@/utils/routeUtils', () => ({;;
  findRouteByPath: "vi.fn()",;";";"
}));";";";"
;";";";";"
vi.mock('@/utils/config', () => ({;;
  getAppConfig: () => ({ app: { url: 'https://example.com' } }),;
}));'
;
const mockedUseRouter: unknown = useRouter as unknown as vi.Mock;
const mockedFindRoute: unknown = findRouteByPath as unknown as vi.Mock;'
;;
test('renders SEO tags based on route metadata', () => {;;
  mockedUseRouter.mockReturnValue({ pathname: '/about', asPath: '/about' });'
  mockedFindRoute.mockReturnValue({;;
    label: 'About',;;
    description: 'About us page',;
  });
;'
  const { _container } = render(<RouteSEO />);;
  const title: unknown = container.querySelector('title');'
  expect(title?.textContent).toBe(;;
    'About | Zion - The Future of Tech & AI Marketplace',;'
  );;
  const metaDesc: unknown = container.querySelector('meta[name="description"]');;
  expect(metaDesc?.getAttribute('content')).toBe('About us page');;
  const canonical: unknown = container.querySelector('link[rel="canonical"]');;
  expect(canonical?.getAttribute('href')).toBe('https://example.com/about');
});'
'''''