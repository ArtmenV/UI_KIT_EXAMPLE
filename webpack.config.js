const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cssGlobalVars = require('./assets/css-global-vars');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

const assetsImgOptions = {
    name: '[name].[contenthash:6].[ext]',
    outputPath: 'react-assets/images',
};

const extractLESSconfig = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './demo/index.html',
    inject: 'body',
});

const cleanPluginConfig = new CleanWebpackPlugin();

const plugins = [
    cleanPluginConfig,
    HtmlWebpackPluginConfig,
    extractLESSconfig,
    new CopyPlugin([
        { from: './demo/assets', to: './' },
    ]),
];

const config = {
    mode: 'production',
    entry: {
        main: ['./demo/index.tsx'],
    },
    devtool: isProduction ? false : 'source-map',

    resolve: {
        modules: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.gif'],
    },

    optimization: {
        minimize: isProduction,
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevelopment,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true,
                        },
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            globalVars: cssGlobalVars,
                        },
                    },
                ],
            },
            {
                test: /\.(svg|jpg|png|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: assetsImgOptions,
                },
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins,

    devServer: {
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: '8002',
        https: false,
        compress: true,
    },
};

if (process.env.WATCHER === 'true') {
    config.watch = true;
    config.watchOptions = {
        aggregateTimeout: 300,
        poll: 1000,
    };
}

module.exports = config;
