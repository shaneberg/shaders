const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        host: '0.0.0.0'
    },
    entry: {
        app: './src/index.js',
        print: './src/index.js'
    },
    output: {
        path: __dirname+'/bin',
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.glsl$/,
                exclude: /node_modules/,
                use: {
                    loader: 'webpack-glsl-loader',
                }
            },
            {
                'test': /\.js$/,
                'exclude': /node_modules/,
                'use': {
                    'loader': 'babel-loader',
                    'options': {
                        'presets': [
                            'env'
                        ]
                    }
                }
            }
        ]
    }
};
