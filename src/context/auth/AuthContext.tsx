
import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";

// Create the AuthContext and export it
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
