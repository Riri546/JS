<template>
  <div id="app">
    <HomePage />
    <BlogPage />
    <BlogDitailsPage />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import BlogPage from './components/BlogPage.vue'
import BlogDitailsPage from './components/BlogDitailsPage.vue'


export default {
  name: 'App',
  components: {
    HomePage,
    BlogPage,
    BlogDitailsPage
  }
}
</script>

<style>
/* #app {
} */
</style>
