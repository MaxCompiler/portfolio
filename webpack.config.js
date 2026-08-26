const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].[contenthash].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[name][ext]',
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: isProduction,
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/img', to: 'img', noErrorOnMissing: true },
                ],
            }),
            ...(isProduction ? [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })] : []),
        ],
        devServer: {
            static: './dist',
            port: 3000,
            open: true,
            hot: true,
        },
    };
};