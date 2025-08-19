declare module 'axios' {
  export * from '../lib/axios';
  const _default: { create: typeof import('../lib/axios').create };
  export default _default;
}
