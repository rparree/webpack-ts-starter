const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}],
                            "@babel/typescript"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: "body"
        })
    ]
};
