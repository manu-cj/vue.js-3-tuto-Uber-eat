<template>
<div class="restaurant--row">
  <h2 class="title">Nos restaurant</h2>
  <div class="wrapped--card">
    <RestaurantCard v-for="(card, index) in 3" :key="index"/>
  </div>
</div>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard";
export default {
  name: "RestaurantRow",
  components: {
    RestaurantCard
  }
}
</script>

<style scoped>
.restaurant--row .wrapped--card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>