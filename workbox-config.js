module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{css,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js',
	swSrc: 'src-sw.js'
};