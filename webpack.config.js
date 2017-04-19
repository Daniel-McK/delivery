const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


var config = {};

config.context = __dirname + "/public-src/"

config.entry = {
    'polyfills': './polyfills.ts',
    'vendors': './vendors.ts',
    'app': './main.ts'
};

config.output = {
    path: __dirname + '/public-dist/',
    filename: './js/[name].js',
    chunkFilename: './js/app-[id].js',
    publicPath: ""
};

config.devtool = 'cheap-module-source-map';

config.module = {
    loaders: [
        {
            test: /\.ts/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
        },
        {
            test: /\.html/,
            loader: 'html-loader'
        },
        {
            test: /\.scss/,
            loader: 'raw-loader!sass-loader'
        }
    ]
}

config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            keep_fnames: true
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendors', 'polyfills']
    }),
    new HtmlWebpackPlugin({
        template: './index.html'
    })
];

config.resolve = {
    // only discover files that have those extensions
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
};

module.exports = config;