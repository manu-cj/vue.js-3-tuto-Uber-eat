<template>
  <div id="app">
  <RestaurantRow/>

  </div>
</template>

<script>
import RestaurantRow from "@/components/RestaurantRow";

export default {
  name: 'App',
  components: {
    RestaurantRow
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
