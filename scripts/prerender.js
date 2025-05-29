import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { build } from 'esbuild';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';

const aliasPlugin = {
  name: 'alias',
  setup(build) {
    build.onResolve({ filter: /^@\/(.+)/ }, (args) => ({
      path: resolve('src', args.path.replace(/^@\//, '')),
    }));
  },
};

async function prerender() {
  const result = await build({
    entryPoints: [resolve('src/pages/Home.tsx')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
    plugins: [aliasPlugin],
  });

  const text = result.outputFiles[0].text;
  const mod = await import(`data:text/javascript;base64,${Buffer.from(text).toString('base64')}`);
  const Home = mod.default;
  const html = renderToString(
    React.createElement(HelmetProvider, null, React.createElement(Home))
  );

  const template = readFileSync(resolve('dist/index.html'), 'utf8');
  const rendered = template.replace('<!--app-html-->', html);
  writeFileSync(resolve('dist/index.html'), rendered);
  console.log('Pre-rendered homepage to dist/index.html');
}

prerender().catch((err) => {
  console.error('Error prerendering:', err);
  process.exit(1);
});
