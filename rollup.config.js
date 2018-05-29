import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import eslint from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import uglify from 'rollup-plugin-uglify';
import builtins from 'rollup-plugin-node-builtins';

export default [
  // Minified
  {
    input: './index.es6.js',
    output: {
      name: 'Metamon',
      file: 'dist/metamon.min.js',
      format: 'iife'
    },
    plugins: [
      nodeResolve({
        main: false,
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            "env",
            {
              modules: false
            }
          ]
        ],
        plugins: [
          "external-helpers"
        ]
      }),
      json(),
      eslint({
        fix: true
      }),
      cleanup(),
      uglify()
    ]
  }, {
    // Un-Minified
    input: './index.es6.js',
    output: {
      name: 'Metamon',
      file: 'dist/metamon.js',
      format: 'iife'
    },
    plugins: [
      nodeResolve({
        main: false,
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            "env",
            {
              modules: false
            }
          ]
        ],
        plugins: [
          "external-helpers"
        ]
      }),
      json(),
      eslint({
        fix: true
      }),
      cleanup()
    ]
  }, {
    // CommonJS
    input: './index.es6.js',
    output: {
      name: 'Metamon',
      file: 'dist/metamon.cjs.js',
      format: 'cjs'
    },
    plugins: [
      nodeResolve({
        main: true
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            "env",
            {
              modules: false
            }
          ]
        ],
        plugins: [
          "external-helpers"
        ]
      }),
      builtins(),
      json(),
      eslint({
        fix: true
      }),
      cleanup()
    ]
  }
];
