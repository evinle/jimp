import common from "./common.webpack.config";
import { Configuration } from "webpack";
import { resolve } from "path";
import { merge } from "webpack-merge";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlWebpackPlugin from "html-webpack-plugin";

const prodConfs: Configuration = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  plugins:[
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css" }),
    new HtmlWebpackPlugin({template: "./src/template.html", minify: true})
  ],
  optimization:{
    minimizer: ['...', new CssMinimizerPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});

export default prodConfs;
