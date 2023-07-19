module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js"
  },
  target: ['web', 'es5'],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"]
    }
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
    ]
  }
};