import { useEffect } from 'react';
import { useUIContext } from '@/context/UIContext';

export const useGlobalEventListeners = () => {
  const { dispatch } = useUIContext();

  useEffect(() => {
    const handleGlobalError = (event: CustomEvent) => {
      console.log('GlobalEventListener: Caught globalError event', event.detail);
      dispatch({
        type: 'SHOW_ERROR_MODAL',
        payload: {
          message: event.detail.message,
          retryConfig: event.detail.retryConfig,
        },
      });
    };

    const handleGlobalLoading = (event: CustomEvent) => {
      console.log('GlobalEventListener: Caught globalLoading event', event.detail);
      dispatch({
        type: 'SET_IS_LOADING',
        payload: event.detail.isLoading,
      });
    };

    document.addEventListener('globalError', handleGlobalError as EventListener);
    document.addEventListener('globalLoading', handleGlobalLoading as EventListener);

    return () => {
      document.removeEventListener('globalError', handleGlobalError as EventListener);
      document.removeEventListener('globalLoading', handleGlobalLoading as EventListener);
    };
  }, [dispatch]);

  // This hook does not render anything itself
  return null;
};
