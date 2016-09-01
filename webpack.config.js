/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-29 14:40:44
 * @version $Id$
 */
var path=require('path');
var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:{
		todo:'./src/client.js',
		react:'react',
		ReactDOM:'react-dom'
	},
	output:{
		filename:'[name].js',
		path:path.join(__dirname,'public/build')
	},
	plugins:[
		new HtmlwebpackPlugin({
			title:"react+redux",
			filename:"react_redux.html",
			template:"./src/index-tem.html",
			chunks:['react','react-dom','todo']
		})
		// new webpack.optimize.CommonsChunkPlugin('vendor','vendor.bundle.js')
	],
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				loaders: ['babel?presets[]=react,presets[]=es2015']
			}
		]
	}
}




































