# 🚨 Netlify Build Failure - July 2, 2025

The deployment failed during the `npm run build:netlify:prepare` step. Key errors from the log include:

- **ESM import issue**: `react-day-picker` attempted to load `date-fns` via CommonJS, causing `Module not found: ESM packages (date-fns) need to be imported.`
- **Package path not exported**: `react-day-picker` looked for `date-fns/esm/locale/en-US` which is not exported by the bundled `date-fns` version.
- **Missing module**: Webpack failed to resolve `ajv/dist/compile/codegen` when processing `ajv-keywords`.

This indicates unresolved compatibility problems with ESM modules and nested dependencies. The build aborted after webpack compilation errors.

**Next steps**:

1. Ensure `react-day-picker` and `date-fns` versions align (React Day Picker 9.7+ expects `date-fns@^3`).
2. Verify webpack aliases forcing `date-fns` to use its ESM build.
3. Add `ajv` as a project dependency if required by loaders such as `string-replace-loader`.

Tracking these issues will help restore successful Netlify builds.
