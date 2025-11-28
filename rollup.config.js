import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import fs from "fs";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-css-only";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss"
import terser from '@rollup/plugin-terser';

const entrypoints = JSON.parse(fs.readFileSync('./entrypoints.generated.json', 'utf-8'));
const input = Object.fromEntries(
  entrypoints.map(file => [
    file.replace('src/', '').replace('.ts', ''),
    file
  ])
)

const external = [
  "react",
  "react-dom",
  /^react\/.*/,
  /^react-dom\/.*/,
];

export default [
  {
    input,
    external,
    plugins: [
      peerDepsExternal(),
      resolve({
        dedupe: ['react', 'react-dom', 'tslib']
      }),
      commonjs({
        include: /node_modules/,
      }),
      typescript({
        tsconfig: "./tsconfig.build.json",
      }),
      terser(),
      json(),
      image(),
      url({
        include: ["**/*.ttf"],
      }),
      postcss(),
    ],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'auto',
        interop: 'auto',
        sourcemap: false
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: false,
        exports: 'auto',
        preserveModules: true,
        preserveModulesRoot: 'src',
        interop: 'auto'
      }
    ]
  },
  {
    input,
    external: [...external, /\.css$/],
    plugins: [
      dts({
        compilerOptions: {
          skipLibCheck: true
        }
      })
    ],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
      exports: 'auto',
      interop: 'auto'
    }
  },
  //  {
  //   // entrada só para o CSS stub
  //   input: "src/styles/tailwind.ts",
  //   plugins: [
  //     postcss({
  //       extract: "styles.css", // gera dist/styles.css
  //       minimize: true,
  //       // você pode passar plugins se quiser (autoprefixer via postcss.config.js)
  //     }),
  //   ],
  //   // precisamos de um output JS (stub) — pode apontar pro dist
  //   output: {
  //     dir: "dist",
  //     format: "esm"
  //   }
  // },
  // {
  //   input: "src/styles/tailwind.css",
  //   plugins: [postcss(), css({ output: "styles.css" })],
  //   output: [{ file: "dist/styles.css", format: "esm" }]
  // }
  // {
  //   input: 'src/styles/tailwind.css',
  //   output: [{ file: "dist/styles.css", format: "esm" }],
  //   plugins: [
  //     css({ output: 'styles.css' }),
  //     // copy({
  //     //   targets: [
  //     //     { src: 'src/output.css', dest: 'dist' }
  //     //   ],
  //     // }),
  //   ],
  // }
];
