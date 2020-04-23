import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/App.vue',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'App',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    VuePlugin(),
  ],
}