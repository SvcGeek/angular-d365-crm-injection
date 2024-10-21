const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
        "bundle.js": [
            path.resolve(__dirname, "./dist/angular-d365-crm-injection/browser/main.js"),
            path.resolve(__dirname, "./dist/angular-d365-crm-injection/browser/polyfills.js"),
            //load material generated file part 1
            path.resolve(__dirname, "./dist/angular-d365-crm-injection/browser/chunk-DZFT6P7K.js"),
            //load material generated file part 2
            path.resolve(__dirname, "./dist/angular-d365-crm-injection/browser/chunk-VAHUARBA.js"),
            path.resolve(__dirname, "./dist/angular-d365-crm-injection/browser/styles.css"),
            //some other paths...
        ],
    },
    output: {
        filename: 'bundle.js',        
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};