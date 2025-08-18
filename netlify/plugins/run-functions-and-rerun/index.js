/* eslint-disable */
// Netlify local build plugin: run-functions-and-rerun
// Minimal no-op implementation to satisfy local plugin resolution and avoid build failures.
// Inputs are defined to match netlify.toml but are not used yet.

module.exports = {
  name: 'run-functions-and-rerun',
  inputs: [
    { name: 'include', default: '' },
    { name: 'exclude', default: '' },
    { name: 'concurrency', default: 6 },
    { name: 'timeoutMs', default: 180000 },
  ],

  async onPreBuild({ utils, inputs, constants, netlifyConfig, logs }) {
    logs.info('[run-functions-and-rerun] Plugin detected. Proceeding with no-op prebuild.');
  },

  async onPostBuild({ utils, inputs, constants, netlifyConfig, logs }) {
    // Future: Optionally trigger selected Netlify Functions and/or chain builds based on env flags.
    logs.info('[run-functions-and-rerun] Post-build no-op complete.');
  },

  async onEnd({ logs }) {
    logs.info('[run-functions-and-rerun] Finished (no-op).');
  },
};


