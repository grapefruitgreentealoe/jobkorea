const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
  ],
  devServer: {
    allowedHosts: "auto",
    open: true, // dev-server로 실행시 브라우저로 바로 열리도록 하는 설정
  },
};
