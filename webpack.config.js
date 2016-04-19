var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		background: './src/main.background.js',
		inject: './src/main.inject.js'
	},
	output: {
			path: path.join(__dirname, 'dist/scripts'),
			filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel'
			}
		]
	},
	debug: true
};
