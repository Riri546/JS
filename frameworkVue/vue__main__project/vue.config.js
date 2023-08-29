const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    index: {
    },
    // когда использутся строковый формат точки входа, то
    // шаблон будет определяться как `public/subpage.html`,
    // а если таковой не будет найден, то `public/index.html`.
    // Выходное имя файла будет определено как `subpage.html`.
    blog: 'src/blog/main.js'
  }
}