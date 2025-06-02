import React from 'react';

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'camera-controls'?: boolean;
      style?: React.CSSProperties;
      [key: string]: any;
    };
  }
}

export {};
