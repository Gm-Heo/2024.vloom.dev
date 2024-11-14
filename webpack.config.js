const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    plugins: [new HtmlWebpackPlugin({
        template: './template/index.html',
        filename: path.resolve(__dirname,"./index.html"),
        publicPath:'/dist',
        inject: false
    })],
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        client: {
            logging: 'none'
        },
        static: {
            directory: path.join(__dirname),
        },
        hot: true,
        port: 5500
    },
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
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    }
}
