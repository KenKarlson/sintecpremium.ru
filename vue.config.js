const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  assetsDir: "assets", // Все ссобрать в dist/assets/ надо
};
