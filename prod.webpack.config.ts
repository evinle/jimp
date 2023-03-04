import common from "./common.webpack.config"
import { Configuration } from "webpack";
import { resolve } from "path";
import { merge } from "webpack-merge";

const prodConfs: Configuration = merge(common,{
  output: {
    filename: "index-[contenthash].js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
});

export default prodConfs