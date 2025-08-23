import React from 'react';

interface ModelViewerProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  poster?: string;
  'camera-controls'?: boolean;
  'auto-rotate'?: boolean;
  'shadow-intensity'?: number;
  'shadow-softness'?: number;
  exposure?: number;
  'environment-image'?: string;
  skybox?: string;
  'animation-name'?: string;
  autoplay?: boolean;
  'camera-orbit'?: string;
  'camera-target'?: string;
  'field-of-view'?: string;
  'max-camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'max-field-of-view'?: string;
  'min-field-of-view'?: string;
  'interaction-prompt'?: 'auto' | 'when-focused' | 'none';
  'interaction-prompt-style'?: 'basic' | 'wiggle';
  'interaction-prompt-threshold'?: number;
  ar?: boolean;
  'ar-modes'?: string;
  'ar-scale'?: 'auto' | 'fixed';
  'ar-placement'?: 'floor' | 'wall';
  'ios-src'?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
  'with-credentials'?: boolean;
}

declare global {
  interface Window {
    modelViewerLoaded?: boolean;
  }
}

declare module 'react' {
  interface IntrinsicElements {
    'model-viewer': ModelViewerProps;
  }
}

export type { ModelViewerProps };
