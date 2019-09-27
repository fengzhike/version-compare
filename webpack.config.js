const path = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',
    output: {
        // 出口重命名js
        filename: 'index.js',
        // 出口文件夹名
        path: path.resolve(__dirname, 'dist'),
        libraryExport: "default",
        globalObject: "this",
        library: "compare",
        libraryTarget: "umd"
    },
    module: {
        rules:[{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude:path.resolve(__dirname, 'node_modules')
        }]
    }
}