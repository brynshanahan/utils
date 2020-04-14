module.exports = mode => {
  const path = require("path")
  const webpack = require("webpack")
  const relative = require("./relative")
  const FriendlyErrors = require("friendly-errors-webpack-plugin")
  const glob = require("glob")

  Error.stackTraceLimit = 2

  /* Should match webpack.dev.js */

  const __DEV__ = mode === "dev"
  const __PROD__ = mode === "prod"

  const plugins = [
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__
    })
  ]

  if (__DEV__) {
    plugins.push(new FriendlyErrors())
  }

  const files = [...glob.sync(relative(`../src/**/*.js`)), ...glob.sync(relative(`../src/**/*.ts`))]

  const entry = {}

  for (let file of files) {
    let parts = file.replace(relative("../src"), "").split(path.sep)
    const [fileName, extension] = parts.pop().split(".")
    const name = [...parts, fileName].join("/")

    entry[name] = file
  }

  /* Javascript loader */
  const JAVASCRIPT = {
    test: /\.(ts|js)x?$/,
    use: {
      loader: "babel-loader",
      options: require("../.babelrc.js")
    }
  }

  return {
    context: relative(".."),
    entry,
    plugins,
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".css"]
    },
    module: {
      rules: [JAVASCRIPT]
    }
  }
}
