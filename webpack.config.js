const
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        vue_applcation: [
            __dirname + '/js/vue-app.js',

        ],
        app: __dirname + '/css/style.scss',
        vendor: __dirname + '/css/vendor.scss',
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },
    externals: {
        'jquery': 'jQuery',
        '$': 'jQuery'
    },
    plugins: [
        new CopyWebpackPlugin([

        ]),
        new webpack.WatchIgnorePlugin([
            'node_modules',
            'bower_components'
        ]),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'jquery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        })
    ],
    devtool: 'cheap-module-source-map',
    //devtool: 'source-map',
    resolve: {
        modules: [

            'node_modules'
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },      {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'resolve-url-loader' },
                        { loader: 'sass-loader?sourceMap' } ]
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /.*\.(woff|woff2|svg|ttf|eot)$/i,
                //exclude: __dirname + 'web/bundles',
                use: [{
                    loader: 'file-loader',
                    options: {
                        hash: 'sha512',
                        digest: 'hex',
                        name: 'fonts/[name].[ext]',
                        publicPath: '/dist/'
                    }
                }]
            },

        ]
    }
};
