module.exports = {
	plugins: {
		'postcss-pxtorem': {
			rootValue: 100,
			unitPrecision: 2,
			propList: ['*'],
			exclude: ['node_modules']
		}
	}
}