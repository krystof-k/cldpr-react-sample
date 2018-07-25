import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/components/index.js',
  output: {
    file: 'lib/cloudaper-react.cjs.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types', 'styled-components', 'styled-system', 'lodash', 'cloudaper-react'],
  plugins: [
    nodeResolve(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['react', 'stage-0', ['env', {modules: false}]],
      plugins: ['transform-class-properties', 'transform-object-rest-spread', 'external-helpers'],
    }),
  ],
};
