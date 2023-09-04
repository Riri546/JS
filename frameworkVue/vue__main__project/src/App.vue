<template>
  <div id="app">
    <CompHeader />
    <HomePage />
    <CompFooter />
    <CompHeader />
    <BlogPage />
    <CompFooter />
    <CompHeader />
    <BlogDitailsPage />
    <CompFooter />
    <CompHeader />
    <ProjectPage />
    <CompFooter />
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import HomePage from './components/HomePage.vue';
import BlogPage from './components/BlogPage.vue';
import BlogDitailsPage from './components/BlogDitailsPage.vue';
import ProjectPage from './components/ProjectPage.vue';

export default {
  name: 'App',
  components: {
    CompHeader,
    HomePage,
    BlogPage,
    BlogDitailsPage,
    ProjectPage,
    CompFooter
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
