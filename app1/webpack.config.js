const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },
   resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "basedojot",
      library: { type: "var", name: "basedojot" },
      remotes: {
       //  guiv2: 'guiv2@http://localhost:8800/remoteEntry.js',
        guinx: 'guinx',
      },
      filename: "remoteEntry.js",
       exposes: {
          // expose each component
          "./App": "./src/App",
      },
    /* shared: {
       react: {
         singleton: true
       },
       'react-dom': {
         singleton: true
       },
       'react-router-dom': {
         singleton: true
       }
     }*/
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
