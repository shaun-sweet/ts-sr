require('dotenv')
const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')
const isProduction = process.argv.indexOf('-p') >= 0;
const outPath = Path.join(__dirname, './dist');
const tsImportPluginFactory = require('ts-import-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const sourcePath = Path.join(__dirname);

module.exports = {
  context: sourcePath,
  entry: {
    main: ['./src/index.tsx'],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'react-router-redux'
    ]
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: `[name].js`,
  },
  target: 'web',
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['browser', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: 'css',
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
        exclude: /node_modules/
      },
      // .ts, .tsx
      // {
      //   test: /\.tsx?$/,
      //   use: isProduction
      //   ? 'awesome-typescript-loader?module=es5'
      //   : [
      //     'awesome-typescript-loader'
      //   ],
      //   include: Path.join(__dirname, 'src'),
      // },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.png$/, use: 'url-loader?limit=10000' },
      { test: /\.jpg$/, use: 'file-loader' },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': require('./config.js'),
      'process.env.NODE_ENV': isProduction === true ? JSON.stringify('production') : JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      hash: true,

    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    stats: {
      warnings: false
    },
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};
