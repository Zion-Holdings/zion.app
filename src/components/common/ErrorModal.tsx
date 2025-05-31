import React from 'react';
import { useUIContext } from '@/context/UIContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { create as createAxiosInstance } from '@/lib/axios'; // Assuming default export or a way to get the instance

// Initialize a default axios instance for retries.
// This might need to be managed more globally in a real app.
const axiosInstance = createAxiosInstance({ baseURL: import.meta.env.VITE_API_URL || '/api' });


export const ErrorModal = () => {
  const { state, dispatch } = useUIContext();

  const handleClose = () => {
    dispatch({ type: 'HIDE_ERROR_MODAL' });
  };

  const handleRetry = async () => {
    if (!state.errorRetryConfig) return;

    const { url, method, data: requestData, headers } = state.errorRetryConfig;
    dispatch({ type: 'HIDE_ERROR_MODAL' }); // Hide modal first
    dispatch({ type: 'SET_IS_LOADING', payload: true });

    try {
      console.log('Retrying request:', { url, method, requestData, headers });
      if (method.toUpperCase() === 'GET') {
        // For GET, requestData might be params. The axiosInstance.get method handles params in its config.
        await axiosInstance.get(url, { headers, params: requestData });
      } else if (method.toUpperCase() === 'POST') {
        await axiosInstance.post(url, requestData, { headers });
      } else if (method.toUpperCase() === 'PUT') {
        await axiosInstance.put(url, requestData, { headers });
      } else if (method.toUpperCase() === 'DELETE') {
        await axiosInstance.delete(url, { headers }); // Assuming delete might not have requestData in the same way
      }
      // If retry is successful, the global interceptor won't trigger the error modal again.
      // A success toast could be shown here.
      // For example: toast.success('Operation successful after retry!');
      console.log('Retry successful');
    } catch (retryError) {
      // The global error interceptor in axios.ts should catch this and
      // potentially show the error modal again if the retry also fails.
      console.error('Retry failed:', retryError);
    } finally {
      // Ensure loading is set to false, even if the SHOW_ERROR_MODAL in context does it,
      // because a successful retry won't call SHOW_ERROR_MODAL.
      dispatch({ type: 'SET_IS_LOADING', payload: false });
    }
  };

  if (!state.isErrorModalOpen) {
    return null;
  }

  return (
    <AlertDialog open={state.isErrorModalOpen} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Error</AlertDialogTitle>
          <AlertDialogDescription>
            {state.errorMessage || "Something went wrong. Please refresh."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline" onClick={handleClose}>Close</Button>
          </AlertDialogCancel>
          {state.errorRetryConfig && (
            <AlertDialogAction asChild>
              <Button onClick={handleRetry}>Retry</Button>
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
