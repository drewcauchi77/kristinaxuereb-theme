'use strict'

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: [
        './src/app.js'
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ 
                from: resolve('static'),
                to: resolve('dist/static')
            }]
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__ : true,
            __VUE_PROD_DEVTOOLS__ : false
        })
    ]
}