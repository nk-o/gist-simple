module.exports = function () {
    return {
        mode: 'none',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                }, {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                    options: {
                        removeSVGTagAttrs: false,
                    },
                },
            ],
        },
    };
};
