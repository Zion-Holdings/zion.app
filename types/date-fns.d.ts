declare module "date-fns" {
  // Minimal typing for the `format` helper we use in the codebase.  The real
  // package provides far richer typings – this is only a safety-net so that
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.
  export function format(date: Date | number, formatStr: string): string;
}