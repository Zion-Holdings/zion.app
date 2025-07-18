import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import type { OptionsObject, SnackbarKey } from 'notistack';

export type EnqueueSnackbar = (message: string, options?: OptionsObject) => SnackbarKey;

let enqueueSnackbarRef: EnqueueSnackbar = () => '';
export const setEnqueueSnackbarRef = (_fn: EnqueueSnackbar) => {
  enqueueSnackbarRef = fn;
};
export const getEnqueueSnackbar = () => enqueueSnackbarRef;

const SnackbarContext = createContext<EnqueueSnackbar>(() => '');

export const useEnqueueSnackbar = (): EnqueueSnackbar => useContext(SnackbarContext);

const InnerProvider = ({ children }: { _children: ReactNode }) => {
  const { _enqueueSnackbar } = useSnackbar();
  setEnqueueSnackbarRef(enqueueSnackbar);
  return <SnackbarContext.Provider value={enqueueSnackbar}>{children}</SnackbarContext.Provider>;
};

export const GlobalSnackbarProvider = ({ children }: { children: ReactNode }) => (
  <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <InnerProvider>{children}</InnerProvider>
  </SnackbarProvider>
);
