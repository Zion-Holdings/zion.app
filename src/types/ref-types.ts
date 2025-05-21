
import { LegacyRef, Ref, RefObject } from "react";

// A type that safely handles all possible reference types
export type SafeRef<T> = LegacyRef<T> | Ref<T>;
