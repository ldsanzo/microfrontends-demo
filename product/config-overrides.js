
const webpack = require('webpack');

module.exports = {
	webpack: function(config, env) {

		config.output.asyncChunks = false;
		config.output.filename = 'static/js/[name].js';

		config.plugins.forEach((plugin, index) => {
			if (plugin.constructor.name === 'MiniCssExtractPlugin') {
				plugin.options.filename = 'static/css/[name].css';
			}
		});

		return config;
	}
}