const path = require('path')

module.exports = {
    entry:'./src/lib/index.js',
    output:{
        filename:'star-rating.js',
        path:path.join(__dirname, '/dist'),
        library: 'starRating',
        libraryTarget: 'umd'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets:['env']
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                exclude:/node_modules/,
                options:{
                    loaders:{
                        less:'style-loader!css-loader!less-loader'
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    }
}