const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  devServer: {
    port: 8081  // 端口号的配置
    // open: true   // 自动打开浏览器
  }
}