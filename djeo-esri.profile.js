var copyOnly = function(filename, mid) {
	return /^djeo-esri\/library/.test(mid)
};

var miniExclude = function(filename, mid) {
	return mid == "djeo-esri/djeo-esri.profile" || /package.json$/.test(filename);
}

var profile = {
	resourceTags: {
		copyOnly: function (filename, mid) {
			return copyOnly(filename, mid);
		},
		amd: function(filename, mid) {
			return !copyOnly(mid) && /\.js$/.test(filename);
		},
		miniExclude: function(filename, mid) {
			return miniExclude(filename, mid);
		}
	}
};