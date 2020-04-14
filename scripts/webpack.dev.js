const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common("dev"), {
  mode: "development",
  devtool: "inline-source-map",
  stats: "minimal",
  watch: true
})
