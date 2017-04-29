var srcFolder = 'src/',
	appFolder = 'build/',
	destPath = 'build',
	static = destPath + '/static';

module.exports = {
	appServer: 'build',
	src: {
		root    : srcFolder,
		sass    : srcFolder + 'sass/',
		sassGen: 'src/sass/generated',
		css     : srcFolder + 'css/',
		js      : srcFolder + 'js/',
		img     : srcFolder + 'img/',
		icons   : srcFolder + 'img/icons/',
		svg     : srcFolder + 'img/svg/',
		svgo     : srcFolder + 'img/svgo/',
		fonts   : srcFolder + 'fonts/',
		iconsSvg: 'src/icons',
		video   : srcFolder + 'video/'
	},
	build: {
		root    : appFolder,
		css     : appFolder + 'css/',
		js      : appFolder + 'js/',
		img     : appFolder + 'img/',
		svg     : appFolder + 'img/svg/',
		fonts   : appFolder + 'fonts/',
		video   : appFolder + 'video/'
	},
	dest: {
		root : destPath,
		html : destPath,
		css  : static + '/css',
		js   : static + '/js',
		img  : static + '/img',
		fonts: static + '/fonts',
		lib  : destPath + '/lib'
	},
	errorHandler: require('./util/handle-errors')
};
