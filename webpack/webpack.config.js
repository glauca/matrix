const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

var entries = function() {
    var entryFiles = glob.sync(__dirname + '/src/*.js');
    var map = {};
    entryFiles.forEach(function(filePath) {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map;
}

module.exports = {
    // 入口
    entry: entries(),
    // 输出
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            }, {
                loader: 'expose-loader',
                options: '$'
            }]
        }, { // babel
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, { // CSS
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    alias: {
                        "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                    }
                }
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [
                        path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                    ]
                }
            }]
        }, { // image
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        //压缩
        new UglifyJSPlugin(),
        // 清理
        new CleanWebpackPlugin(['dist']),

        // new HtmlWebpackPlugin({
        //     template: 'dist/index.html'
        // }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
};