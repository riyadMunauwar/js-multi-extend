// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const config = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'named'
        },
        {
            file: 'dist/index.mjs',
            format: 'es'
        },
        {
            name: 'jsMultiExtend',
            file: 'dist/index.umd.js',
            format: 'umd',
            exports: 'named'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        terser()
    ]
};

export default config;