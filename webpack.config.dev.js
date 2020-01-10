const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Letting Babel know what environment we're on
process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  // provides a source map
  // source maps let us see our original code when debugging in the browser.
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    // reduces information that is written to the command line
    stats: "minimal",
    // This tells it to overlay any errors that occur in the browser
    overlay: true,
    // This means that all request will be sent to index.html
    historyApiFallback: true,

    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  // tells webpack how to handle files
  module: {
    rules: [
      {
        // this is for setting up webpack to load our images from our public directory
        test: /\.(jpg|png|jpeg)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        // Tell webpack how to handle files that end in js or jsx
        test: /\.(js|jsx)$/,
        // Exclude searching in the node_module folder
        exclude: /node_modules/,
        // Tell webpack what to run those files with
        use: ["babel-loader", "eslint-loader"]
      },
      {
        // will allow us to import css and webpack will bundle it up
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
