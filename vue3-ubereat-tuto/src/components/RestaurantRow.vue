<template>

<div class="restaurant--row">
  <div class="wrapped--card">
<!--    <Router-Link class="restaurant&#45;&#45;wrapper" v-for="(restaurant, index) in three_restaurant" :key="index" to="/restaurant">-->
<!--      <RestaurantCard  :info_restaurant ="restaurant" />-->
<!--    </Router-Link >-->
    <Router-Link class="restaurant--wrapper" v-for="(restaurant, index) in three_restaurant" :key="index" :to="{name: 'Restaurant', params: {name:restaurant.name } }">
      <RestaurantCard :info_restaurant = "restaurant"/>
    </Router-Link>

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
.restaurant--wrapper {
  width: 32%;
  text-decoration: none;
}

.restaurant--row .wrapped--card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>