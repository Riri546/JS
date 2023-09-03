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
* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: 'Jost', sans-serif;
  font-family: 'DM Serif Display', serif;
}

a {
  text-decoration: none;
}
</style>
