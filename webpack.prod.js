const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/index-server.ts",
    plugins: [new HtmlWebpackPlugin({
        template: './template/index.html',
        filename: path.resolve(__dirname,"./dist/prod/index.html"),
        publicPath:'/v2/dist',
        inject: false
    })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    resolve: {
        alias:{
            '@': path.resolve(__dirname,"./src/"),
        },
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist/prod"),
    }
}
