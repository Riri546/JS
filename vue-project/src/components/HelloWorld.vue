<template>
  <div class="hello">
    <h1>Hi</h1>
    <img :src="'../../frameworkVue/main__project/img/' + src" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      src: 'Image_blog1.svg',
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
