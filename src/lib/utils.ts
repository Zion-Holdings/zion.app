<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
=======
import clsx, { type ClassValue } from "clsx"
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}