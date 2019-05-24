import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    format: 'iife',
    file: 'public/scripts/bundle.js',
  },
  plugins: [
    svelte({
      include: 'src/components/**/*.svelte',
      emitCss: true,
      css: css => {
        css.write('public/css/app.css');
      },
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    !production && livereload('public'),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
