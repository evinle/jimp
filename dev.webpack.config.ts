import * as path from "path";
import * as webpack from "webpack";
import common from "./common.webpack.config";
import { merge } from "webpack-merge";
import * as wds from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const myConfs: webpack.Configuration = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins:[new HtmlWebpackPlugin({template: "./src/template.html"})],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    port: 3000,
    static: {
      directory: "dist",
    },
    open: {
      app: {
        name: "chrome",
      },
    },
  },
});

export default myConfs;
