import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const config = {
  name: 'Luciascript',
  globals: {},
  strict: false,
};

export default {
  input: 'src/index.ts',
  external: [],
  plugins: [
    resolve({ extensions: ['.ts'] }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      ...config,
    },
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      plugins: terser({ format: { comments: false } }),
      ...config,
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      ...config,
    },
    {
      file: 'dist/index.min.cjs',
      format: 'cjs',
      plugins: terser({ format: { comments: false } }),
      ...config,
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      ...config,
    },
    {
      file: 'dist/index.es.min.js',
      format: 'es',
      plugins: terser({ format: { comments: false } }),
      ...config,
    },
  ],
};
