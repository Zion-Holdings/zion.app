
import React from "react";

// A type that safely handles all possible reference types
export type SafeRef<T> = React.LegacyRef<T> | React.Ref<T>;
