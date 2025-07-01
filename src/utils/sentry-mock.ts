// Mock Sentry module for React 19 transition
export const init = () => console.log('Sentry mock: init called');
export const captureException = (error: any) => console.log('Sentry mock: captureException', error);
export const captureMessage = (message: string) => console.log('Sentry mock: captureMessage', message);
export const addBreadcrumb = (breadcrumb: any) => console.log('Sentry mock: addBreadcrumb', breadcrumb);
export const withScope = (callback: (scope: any) => void) => {
  const mockScope = {
    setTag: (key: string, value: string) => console.log('Sentry mock: setTag', key, value),
    setLevel: (level: string) => console.log('Sentry mock: setLevel', level),
  };
  callback(mockScope);
};

export const onRequestError = (error: any) => console.log('Sentry mock: onRequestError', error);

export default {
  init,
  captureException,
  captureMessage,
  addBreadcrumb,
  withScope,
};