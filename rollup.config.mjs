/* eslint-disable import/no-extraneous-dependencies */
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import svg from 'rollup-plugin-svg';

import data from './package.json' assert { type: 'json' };

const year = new Date().getFullYear();

function getHeader() {
  return `/*!
 * Gist Simple v${data.version} (${data.homepage})
 * Copyright ${year} ${data.author}
 * Licensed under MIT (https://github.com/nk-o/gist-simple/blob/master/LICENSE)
 */`;
}

const input = './src/core.js';
const inputUmd = './src/core.umd.js';

const bundles = [
  {
    input,
    output: {
      banner: getHeader(),
      file: './dist/gist-simple.esm.js',
      format: 'esm',
    },
  },
  {
    input,
    output: {
      banner: getHeader(),
      file: './dist/gist-simple.esm.min.js',
      format: 'esm',
      compact: true,
    },
  },
  {
    input: inputUmd,
    output: {
      banner: getHeader(),
      name: 'gistSimple',
      file: './dist/gist-simple.js',
      format: 'umd',
    },
  },
  {
    input: inputUmd,
    output: {
      banner: getHeader(),
      name: 'gistSimple',
      file: './dist/gist-simple.min.js',
      format: 'umd',
      compact: true,
    },
  },
  {
    input,
    output: {
      banner: getHeader(),
      file: './dist/gist-simple.cjs',
      format: 'cjs',
      exports: 'default',
    },
  },
  {
    input,
    output: {
      banner: getHeader(),
      file: './dist/gist-simple.cjs',
      format: 'cjs',
      exports: 'default',
      compact: true,
    },
  },
];

const isDev = () => process.env.NODE_ENV === 'dev';
const isUMD = (file) => file.includes('gist-simple.js');
const isMinEnv = (file) => file.includes('.min.');
const isSpecificEnv = (file) => isMinEnv(file);
const isDebugAlways = (file) => (isDev() || isUMD(file) ? 'true' : 'false');

const configs = bundles.map(({ input: inputPath, output }) => ({
  input: inputPath,
  output,
  plugins: [
    babel({
      babelHelpers: 'bundled',
      plugins: ['annotate-pure-calls'],
    }),
    replace({
      __DEV__: isSpecificEnv(output.file)
        ? isDebugAlways(output.file)
        : 'process.env.NODE_ENV !== "production"',
      preventAssignment: true,
    }),
    output.file.includes('.min.') && terser(),
    svg(),
  ],
}));

// Copy CSS file to dist.
configs[0].plugins.unshift(
  copy({
    targets: [{ src: './src/core.css', dest: 'dist', rename: () => 'gist-simple.css' }],
  })
);

// Dev server.
if (isDev()) {
  configs[configs.length - 1].plugins.push(
    serve({
      open: true,
      contentBase: ['demo', './'],
      port: 3002,
    })
  );
}

export default configs;
