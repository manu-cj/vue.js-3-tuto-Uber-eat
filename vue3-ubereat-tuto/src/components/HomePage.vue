<template>
  <div class="home">
    <div class="header">
      <img src="../assets/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="logo Uber eat">
      <input type="text" placeholder="De quoi avez vous envie ?">
    </div>
    <div class="bannier"></div>
    <h2 class="title">Nos restaurant</h2>
    <RestaurantRow v-for="(data, index) in data_restaurant" v-bind:key="index" :three_restaurant="data"/>
  </div>
</template>

<script>
//IMPORT
import BDD from "@/BDD";
import {onMounted, ref} from "vue";
//COMPONENTS
import RestaurantRow from "@/components/RestaurantRow";

export default {
  name: "HomePage",
  components: {
    RestaurantRow
  },


  setup() {
    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.drive_time = drive_time;
      }
    }

    let data_restaurant = ref([]);

    const makeDataRestaurant = () => {
      let three_restaurant = [];

      for (const restaurant of BDD) {
        const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);

        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
    }
    console.log(data_restaurant)
    onMounted(makeDataRestaurant);

    // return
    return {
      data_restaurant,
    }

  }
}
</script>

<style scoped>
.home .header {
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.home .header img {
  width: 200px;
}

.header input {
  background-color: #f6f6f6;
  border: none;
  height: 80px;
  width: 400px;
  outline: none;
  padding-left: 20px;
}

.bannier {
  height: 200px;
  width: 100%;
  background-image: url(../assets/WelcomeToUberEats.webp);
  background-position: center center;
  background-size: cover;
}

.title {
  display: flex;
  justify-content: flex-start;
}

</style>