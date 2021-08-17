import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
const __dirname = path.resolve();
// module.exports = {
export default {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    // devServer: { contentBase: path.join(__dirname, "src") },
    devServer: {
        port: 3004,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};
