const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// webpack 모듈 설정
module.exports = {
  mode: "development", // 개발용:development, 실제:production
  devtool: "eval", // 소스맵 관련 옵션
  resolve: {
    extensions: [".js", ".jsx"],
  }, // webpack으로 읽을 파일들의 확장자

  entry: {
    bundle: ["./src/index"],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?$/, // babel-loader로 읽을 파일 확장자 정규표현식
        exclude: "/node_modules", // 제외할 파일 경로
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // babel-loader에서 사용할 옵션
        },
      },
      {
        test: /\.(sc|c)ss$/, // scss나 css인 확장자 파일
        use: [
          MiniCssExtractPlugin.loader, // js 파일에서 css 파일들을 분리한다.

          "css-loader", //css 파일을 컴포넌트에서 import/require 하여 사용할 수 있도록 해준다.
          "sass-loader", // Sass/SCSS 파일들을 css 파일로 컴파일해준다.
        ], // 위 확장자의 파일을 읽을 loader들
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"), // __dirname: 현재 실행 중인 폴더 경로
    filename: "[name].js",
  }, // 출력
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    allowedHosts: "auto",
    open: true, // dev-server로 실행시 브라우저로 바로 열리도록 하는 설정
    hot: true, //Enable webpack's Hot Module Replacement feature:
  },
};
