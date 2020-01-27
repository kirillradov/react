const path = require("path");
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve (__dirname, "src"),
    output: {
        path: path.resolve (__dirname, "public", "build"),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve (__dirname , "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]

                }
            },
        ],
    },
};