<template>

<div class="restaurant--row">
  <div class="wrapped--card">
    <RestaurantCard v-for="(card, index) in three_restaurant" :info_restaurant ="card" :key="index"/>
  </div>
</div>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard";
export default {
  name: "RestaurantRow",
  components: {
    RestaurantCard
  },
  props: {
    three_restaurant: Array
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