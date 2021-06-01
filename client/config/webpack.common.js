const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: {
    app: path.resolve(__dirname, "../", "src", "index.tsx"),
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@assets": path.resolve(__dirname, "../", "src", "assets"),
      "@components": path.resolve(__dirname, "../", "src", "components"),
      "@constants": path.resolve(__dirname, "../", "src", "constants"),
      "@helpers": path.resolve(__dirname, "../", "src", "helpers"),
      "@hooks": path.resolve(__dirname, "../", "src", "hooks"),
      "@modules": path.resolve(__dirname, "../", "src", "modules"),
      "@pages": path.resolve(__dirname, "../", "src", "pages"),
      "@routes": path.resolve(__dirname, "../", "src", "routes"),
      "@services": path.resolve(__dirname, "../", "src", "services"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../", "public", "index.html"),
    }),
  ],
};

module.exports = commonConfig;
