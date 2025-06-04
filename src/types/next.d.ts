// Minimal Next.js type stubs for non-Next environments
import React from 'react';

// --- next/link --------------------------------------------------------------
declare module 'next/link' {
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

// --- next/head --------------------------------------------------------------
declare module 'next/head' {
  const Head: React.FC<{ children?: React.ReactNode }>;
  export default Head;
}

// --- next/router ------------------------------------------------------------
declare module 'next/router' {
  interface Router {
    pathname: string;
    push(url: string): void;
  }
  export function useRouter(): Router;
}

// --- next/image -------------------------------------------------------------
declare module 'next/image' {
  export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    width?: number;
    height?: number;
    priority?: boolean;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}

// --- next static/ssr helpers ------------------------------------------------
declare module 'next' {
  export type GetStaticPaths = () => Promise<{
    paths: { params: Record<string, string> }[];
    fallback: boolean | 'blocking';
  }>;

  export type GetStaticProps<P> = (context: {
    params?: Record<string, any>;
  }) => Promise<{
    props?: P;
    notFound?: boolean;
    redirect?: any;
    revalidate?: number | boolean;
  }>;

  export type GetServerSideProps<P> = (context: {
    params?: Record<string, any>;
  }) => Promise<{
    props?: P;
    notFound?: boolean;
    redirect?: any;
  }>;
}
