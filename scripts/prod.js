const Bundler = require("parcel-bundler")
const opts = require("./opts")

// Single entrypoint file location:
const entryFiles = "src/*/*.ts"
// OR: Multiple files with globbing (can also be .js)
// const entryFiles = './src/*.js';
// OR: Multiple files in an array
// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];

// Bundler options
const options = opts(false)

const bundler = new Bundler(entryFiles, options)
bundler.on("bundled", bundle => {
  console.log(bundle)
  // bundler contains all assets and bundles, see documentation for details
})
// Call this to start bundling
bundler.bundle()
