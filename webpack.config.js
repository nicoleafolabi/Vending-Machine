import path from "path";
import TerserPlugin from "terser-webpack-plugin";  // minifyer

const config = {
    entry: "./src/index.ts",
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({terserOptions: { keep_classnames: true}})],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve('./', "public"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join('./', "public"),
        compress: true,
        port: 4000,
    },
};


export default config
