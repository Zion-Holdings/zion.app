<<<<<<< HEAD
import clsx, { type ClassValue } from "clsx";
=======
import { type ClassValue, clsx } from "clsx";
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}