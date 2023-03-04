import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin"

const commonConfs: webpack.Configuration = {
  entry: {
    path: "./src/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
  },
  plugins:[new HtmlWebpackPlugin.default({template: "./src/template.html"})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

export default commonConfs;
