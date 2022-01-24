module.exports = {
	// publicPath: '/fe-21-01/max/training/hw-5/',
	publicPath: '/',
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/styles/style.scss";'
			}
		}
	}
}