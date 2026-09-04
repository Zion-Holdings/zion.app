/** Asset-only Worker used by Cloudflare Workers Builds. */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
