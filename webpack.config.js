const path = require('path');


module.exports = {
    entry: "./App/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname,"./app/temp/scripts"),
        filename: "App.js"
    }, 
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      }
}