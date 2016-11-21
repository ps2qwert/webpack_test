var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    //插件项
    plugins: [
    	commonsPlugin,
	new webpack.ProvidePlugin({
	    $: 'n-zepto',
	    Zepto: 'n-zepto',
	    'window.Zepto': 'n-zepto',
	    'window.$': 'n-zepto',
	  }),
	new ExtractTextPlugin("style.css")
    ],
    //页面入口文件配置
    entry: {
        index : './app/index.js',
        index1 : './app/index1.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/',
        publicPath:'',
        filename: 'build.js'
    },
    module: {
        //加载器配置
        loaders: [
            // { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
 //            {
	//   test: require.resolve('webpack-zepto'),  // 此loader配置项的目标是NPM中的jquery
	//   loader: 'expose?$!expose?Zepto', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
	// }
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};