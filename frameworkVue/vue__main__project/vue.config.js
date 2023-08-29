const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'blog': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'Blog',
      chunks: [ 'chunk-vendors', 'chunk-common', 'blog' ]
    }
  }
}