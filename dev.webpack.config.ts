import * as path from "path";
import * as webpack from "webpack";
import common from "./common.webpack.config"
import {merge} from "webpack-merge"
import * as wds from "webpack-dev-server"

const myConfs: webpack.Configuration = merge(common, {
  entry: {
    path: "./src/index.tsx",
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
  },
  devServer: {
    hot: true,
    port: 3000,
    open: {
      app: {
        name: 'chrome',
      }
    }
  }
});

export default myConfs;
