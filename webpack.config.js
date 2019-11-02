const path = require('path');


module.exports = {
    entry: {
      App:"./App/assets/scripts/App.js",
      Vendor: "./App/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname,"./app/temp/scripts"),
        filename: "[name].js"
    }, 
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      }
}