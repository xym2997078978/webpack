const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpg|png|gif)/,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff)/,
                loader: 'url-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template: './index.html'
        })
    ]
};