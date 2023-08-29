<template>
  <div id="app">
    <HomePage/>
    <BlogPage/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import BlogPage from './components/BlogPage.vue'


export default {
  name: 'App',
  components: {
    HomePage,
    BlogPage
  }
}
</script>

<style>
/* #app {
} */
</style>
