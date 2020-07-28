import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
    mode: 'production',
    target: 'node',
    entry: {
        analyzer: './src/analyzer/index.ts'
    },
    output: {
		path: `${__dirname}/dist`,
		filename: `[name].js`
    },
    module: {
		rules: [
			{
				test: /\.(tsx|ts|js)?$/,
				/**
				 * babel7, is different tsc and ts-loader
				 */
				loader: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: true
						}
					},
					'shebang-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.(mjs|node)$/,
				include: /node_modules/,
				type: "javascript/auto",
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	externals: {
		fsevents: "require('fsevents')"
	},
	plugins: [
		new CleanWebpackPlugin()
	],
} as Configuration;