module.exports = {
    dev: {
        options: {
            compress: false,
            mangle: false,
            beautify: true,
        },
        files: {
            'public/js/bottom.min.js': 'public/js/bottom.min.js'
        },
    },
    dist: {
        options:{
            compress: true,
            mangle: true
        },
        files: {
            'public/js/bottom.min.js': 'public/js/bottom.min.js'
        },
    },
};
