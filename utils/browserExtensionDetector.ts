export type ExtensionDetection = { isExtension: boolean; version: string };

export const detectBrowserExtension = (): ExtensionDetection => {
  return { isExtension: false, version: '1.0.0' };
};