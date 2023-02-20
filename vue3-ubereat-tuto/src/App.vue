<template>
  <div id="app">
    <h2 class="title">Nos restaurant</h2>
    <home-page/>

  </div>
</template>

<script>
import HomePage from "@/components/HomePage";

export default {
  name: 'App',
  components: {
    HomePage
  }
}


</script>

<style>
@import url(style/reset.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}
</style>
