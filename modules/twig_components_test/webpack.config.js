const MinifyPlugin = require('babel-minify-webpack-plugin');

const module_config = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules\/(?!twig-components))/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
    },
    {
      test: /\.twig$/,
      use: [
        { loader: 'twig-loader' },
        { loader: 'emit-file-loader?output=components/dist/[name].[ext]' },
        { loader: 'inline-source-loader' },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ],
    },
  ],
};

module.exports = [
  {
    entry: {
      'say-hello': './components/src/say-hello/say-hello.js'
    },
    output: {
      filename: 'components/dist/[name].js',
    },
    externals: {
      'twig': 'Twig',
    },
    module: module_config,
    plugins: [
      new MinifyPlugin(),
    ],
  },
];
