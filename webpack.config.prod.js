import webpack           from 'webpack';
import path              from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
                    'process.env.NODE_ENV': JSON.stringify('production')
                };

export default {
  debug:    true,
  devtool:  'source-map',
  noInfo:   false,
  entry:    path.resolve(__dirname, 'src/index'),           // Important that this is LAST
  target:   'web',
  output:   {
               path:       __dirname + '/dist',             // Note: Physical files are only output by the production build task `npm run build`.
               publicPath: '/',
               filename:   'bundle.js'
             },
  devServer: {
               contentBase: path.resolve(__dirname, 'dist')
             },
  plugins:   [
                new webpack.DefinePlugin(GLOBALS),
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.optimize.DedupePlugin(), 
                new webpack.optimize.UglifyJsPlugin(), 
                new ExtractTextPlugin('styles.css')
             ],
  module:    {
               loaders: [
                          { test: /(\.css)$/,                   loader: ExtractTextPlugin.extract('css?sourceMap') },
                          { test: /\.js$/,                      loader: 'babel', include: path.join(__dirname, 'src') },
                          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
                          { test: /\.(woff|woff2)$/,            loader: 'url?prefix=font/&limit=5000' },
                          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
                          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
                        ]
             }
};
