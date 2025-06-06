import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { setEnqueueSnackbarRef } from '@/context/SnackbarContext';

function InnerProvider({ children }: { children: React.ReactNode }) {
  const { enqueueSnackbar } = useSnackbar();
  setEnqueueSnackbarRef(enqueueSnackbar);
  return <>{children}</>;
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <InnerProvider>{children}</InnerProvider>
    </SnackbarProvider>
  );
}
