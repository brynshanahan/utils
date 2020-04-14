const opts = dev => ({
  outDir: "./dist", // The out directory to put the build files in, defaults to dist

  watch: dev, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: true, // Enabled or disables caching, defaults to true
  cacheDir: ".cache", // The directory cache gets put in, defaults to .cache
  contentHash: false, // Disable content hash from being included on the filename
  global: "moduleName", // Expose modules as UMD under this name, disabled by default
  minify: !dev, // Minify files, enabled if process.env.NODE_ENV === 'production'
  scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
  target: "browser", // Browser/node/electron, defaults to browser
  bundleNodeModules: false, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
  logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors, 0 = log nothing
  hmr: false, // Enable or disable HMR while watching
  sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
  hmrHostname: "", // A hostname for hot module reload, default to ''
  autoInstall: true // Enable or disable auto install of missing dependencies found during bundling
})
module.exports = opts
