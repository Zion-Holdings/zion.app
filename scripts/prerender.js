import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import path from 'path';
import { build } from 'esbuild';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';

async function prerender() {
  const aliasPlugin = {
    name: 'alias',
    setup(build) {
      build.onResolve({ filter: /^@\// }, args => ({
        path: path.resolve('src', args.path.slice(2)),
      }));
    },
  };

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
  const helmetContext = {};
  const html = renderToString(
    React.createElement(HelmetProvider, { context: helmetContext }, React.createElement(Home))
  );
  const head = [
    helmetContext.helmet?.title?.toString() || '',
    helmetContext.helmet?.meta?.toString() || '',
    helmetContext.helmet?.link?.toString() || '',
  ].join('');

  const template = readFileSync(resolve('dist/index.html'), 'utf8');
  const withHead = template.replace('</head>', `${head}</head>`);
  const rendered = withHead.replace('<!--app-html-->', html);
  writeFileSync(resolve('dist/index.html'), rendered);
  console.log('Pre-rendered homepage to dist/index.html');
}

prerender().catch((err) => {
  console.error('Error prerendering:', err);
  process.exit(1);
});
