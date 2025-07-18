<<<<<<< HEAD
import { createContext } from 'react''
import  type { AuthContextType }  from '@/types/auth'
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;''
// default value so consumers still get some level of type safety.'
export const _AuthContext = createContext<AuthContextType | undefined>('
  undefined,)'
'''''
=======
import { createContext } from 'react';';
import type { AuthContextType } from '@/types/auth;'
;
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
// default value so consumers still get some level of type safety.;'';
export const _AuthContext: unknown = createContext<AuthContextType | undefined>(;
  undefined,;
);''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
