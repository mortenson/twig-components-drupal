module.exports = [
  {
    entry: {
      'say-hello': './components/say-hello.js'
    },
    output: {
      filename: 'components/[name].bundled.js',
    },
    externals: {
      'twig': 'Twig',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
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
          ],
        },
      ],
    },
  },
];
