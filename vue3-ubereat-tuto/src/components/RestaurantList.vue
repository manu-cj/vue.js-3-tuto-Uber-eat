<template>
  <router-link to="/">
    <div id="return">Retour à l'acceuil</div>
  </router-link>
  <div>
    <img :src="restaurant.image" alt="">
  </div>
  <p>{{ restaurant.name }}</p>
  <p> Note du restaurant {{ restaurant.note }}</p>
  <p> Temps de livraison {{ restaurant.drive_time }}</p>
</template>

<script>
import BDD from '../BDD.js';
//import {onMounted} from "vue";
import {useRoute} from 'vue-router';

export default {
  name: "RestaurantList",
  setup() {
    const route = useRoute();
    const restaurant = BDD.find((restaurant) => restaurant.name === route.params.name)

    return {
      restaurant
    }
  }
}
</script>

<style scoped>
#return {
  font-weight: 400;
  margin: 24px 45px;
  text-decoration-line: none;
}

#return:hover {
  font-weight: 900;
  cursor: pointer;
  color: #000;
  text-decoration: none;
}

</style>