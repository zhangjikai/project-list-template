/**
 * Created by ZhangJikai on 2017/2/19.
 */
var gulp = require("gulp");
var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var browserSync = require('browser-sync');
var path = require("path");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: '.'
        },
        port: 80
    })
});


gulp.task("webpack", function (callback) {
    // run webpack
    //webpack(webpackConfig);

    //webpack配置文件
    var config = {
        watch: true,
        plugins: [
            commonsPlugin,
            new ExtractTextPlugin("../css/[name].css")
            //uglifyJsPlugin,
            //new OptimizeCssAssetsPlugin({
            //    assetNameRegExp: /\.css$/g,
            //    cssProcessor: require('cssnano'),
            //    cssProcessorOptions: { discardComments: {removeAll: true } },
            //    canPrint: true
            //})
        ],
        entry: {
            index: __dirname + '/src/js/index.js'
        },
        output: {
            path: __dirname + '/dist/js',
            filename: '[name].js'
        },


        module: {
            loaders: [
                {test: /\.vue$/, loader: 'vue-loader'},
                {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!less-loader"})
                },

                {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
                {
                    test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                    loader: 'url-loader?importLoaders=1&limit=1000&name=../fonts/[name].[ext]'
                }

                /*{ test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}*/

            ]
        },

        resolve: {
            alias: {
                vue: path.join(__dirname, "/node_modules/vue/dist/vue.min.js"),
                fontAwesome: path.join(__dirname, "node_modules/font-awesome/css/font-awesome.min.css")

            },
            extensions: ['.js', '.json', '.less', '.vue']
        }
    };
    webpack(config, function (err, stats) {
        console.log(stats.toString());
    });
});

gulp.task("watch", function () {
    gulp.watch("./**/*.html", browserSync.reload);
    gulp.watch("dist/**/*.js", browserSync.reload);
    gulp.watch("dist/**/*.css", browserSync.reload);

});


gulp.task('default', ['browserSync', 'watch', 'webpack']);