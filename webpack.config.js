module.exports = {
    entry: {
        app: "./src/index.ts",
        polyfills: "./src/polyfills.ts"
    },
    output: {
        filename: "./dest/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    }
}