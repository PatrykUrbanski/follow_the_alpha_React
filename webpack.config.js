
const path = require("path");
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const MiniCSS = require("mini-css-extract-plugin");



module.exports = {
    entry: `./src/App.js`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `./build`)
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, `./src/`),
        publicPath: "/build/",
        compress: true,
        port: 3004,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    // MiniCSS.loader,
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                            sourceMap: true
                        }
                    },
                    'scss-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: `./src/assets/`,
                    outputPath: `.src/assets/`
                }
            },
        ]
    },
    plugins: [
        new Html({
            filename: `index.html`,
            template: `./src/index.html`
        }),
        new MiniCSS({
            filename: "main.css",
        })
    ]
};