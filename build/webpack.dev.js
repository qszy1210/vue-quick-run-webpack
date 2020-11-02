const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry: {
        "main": "./src/index.js"
    },
    output: {
        "filename": "[name].[hash:7].js",
        path: path.resolve(process.cwd(), './dist'),
        // publicPath: 'packages/theme-ce/src/fonts',
    },
    resolve: {
        extensions: ['*','.js', '.vue', '.json'],
        alias: {
            // '@': path.resolve(__dirname, '../src')
            './fonts': path.resolve(process.cwd(), 'packages/theme-ce/src/fonts')
        },
        // modules: ['node_modules']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8686,
        publicPath: '/',
        hot: true
    },
    performance: {
        hints: false
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // options: {
                        //     url: false
                        // }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                // todo: 这种写法有待调整
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            },
            // {
            //     test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         name: path.posix.join('static', '[name].[hash:7].[ext]')
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '../src/index.html')
        }),
        // new CopyWebpackPlugin([{
        //   from: path.resolve(process.cwd(), './packages/theme-ce/src/fonts/**'),
        // }]),
        new VueLoaderPlugin(),

      ],
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      }

}

module.exports = webpackConfig;