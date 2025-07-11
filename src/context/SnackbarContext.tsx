import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
<<<<<<< HEAD
import { SnackbarProvider, useSnackbar, OptionsObject, SnackbarKey } from 'notistack';
=======
import { SnackbarProvider, useSnackbar } from 'notistack';
import type { OptionsObject, SnackbarKey } from 'notistack';
>>>>>>> 0dfaed41 (fix: use type-only imports for ReactNode, OptionsObject, SnackbarKey in SnackbarContext for verbatimModuleSyntax)

export type EnqueueSnackbar = (message: string, options?: OptionsObject) => SnackbarKey;

let enqueueSnackbarRef: EnqueueSnackbar = () => '';
export const setEnqueueSnackbarRef = (fn: EnqueueSnackbar) => {
  enqueueSnackbarRef = fn;
};
export const getEnqueueSnackbar = () => enqueueSnackbarRef;

const SnackbarContext = createContext<EnqueueSnackbar>(() => '');

export const useEnqueueSnackbar = (): EnqueueSnackbar => useContext(SnackbarContext);

const InnerProvider = ({ children }: { children: ReactNode }) => {
  const { enqueueSnackbar } = useSnackbar();
  setEnqueueSnackbarRef(enqueueSnackbar);
  return <SnackbarContext.Provider value={enqueueSnackbar}>{children}</SnackbarContext.Provider>;
};

export const GlobalSnackbarProvider = ({ children }: { children: ReactNode }) => (
  <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <InnerProvider>{children}</InnerProvider>
  </SnackbarProvider>
);
