const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv').config();
require("@babel/polyfill");

module.exports= {
    mode: 'development',
    entry: ['@babel/polyfill','./src/client/main.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options:{
                            implementation: require('sass'),
                            sassOptions:{
                                fiber: require('fibers')
                            }
                        }
                    }    
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg|PNG)$/,
                loader: 'url-loader'
            },
            {
                test: /\.css$/,
                use: [
                'vue-style-loader',
                'css-loader',
                ]
            },
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: {
            context: ['/api/**'],
            target: `${process.env.SERVER_API}`,
            secure: true
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};