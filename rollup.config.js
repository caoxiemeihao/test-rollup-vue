import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import VuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'App',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': `"production"`
    }),
    VuePlugin(),
  ],
}