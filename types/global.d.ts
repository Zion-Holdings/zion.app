/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.ico' {
  const content: string;
  export default content;
}

declare module '*.bmp' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: Record<string, unknown>;
  export default content;
}

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.txt' {
  const content: string;
  export default content;
}

// Global type augmentations
declare global {
  interface Window {
    __NEXT_DATA__: Record<string, unknown>;
    __NEXT_PRELOADREADY__: (() => void) | undefined;
    __NEXT_REGISTER_PAGE__: (() => void) | undefined;
    __NEXT_WEBPACK_CHUNKS__: string[];
    __NEXT_WEBPACK_RUNTIME__: Record<string, unknown>;
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      [key: string]: string | undefined;
    }
  }
}

export {};