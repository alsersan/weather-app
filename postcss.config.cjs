const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

const config = {
	plugins: [autoprefixer, nested]
};

module.exports = config;
