<template>
  <div class="home">
    <div class="header">
      <img src="../assets/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="logo Uber eat" class="logo">
      <div class="wrapper--input">
        <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez vous envie ?">
        <div class="search">
          <router-link v-for="(restaurant, i) in search_restaurant" :key="i"  :to="{name: 'Restaurant', params: {name: restaurant.name}}">
          <div class="container--restaurant--search">
            <div class="wrapper--img">
              <img :src="restaurant.image"  alt="">
            </div>
            <p>{{restaurant.name}}</p>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bannier"></div>
    <h2 class="title">Nos restaurant</h2>
    <RestaurantRow v-for="(data, index) in data_restaurant" v-bind:key="index" :three_restaurant="data"/>
  </div>
</template>

<script>
//IMPORT
import BDD from "@/BDD";
import {onMounted, ref, watch} from "vue";
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
    let all_restaurant = [];
    const makeDataRestaurant = () => {
      let three_restaurant = [];

      for (const restaurant of BDD) {
        const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);
        //make all restaurant array
        all_restaurant.push(new_restaurant);

        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
    }
    // User search restaurant
    let user_search_restaurant = ref('');
    let search_restaurant = ref([]);
    watch(user_search_restaurant, new_value => {
      let regex = RegExp(new_value.toLowerCase());
      let new_search_restaurant = all_restaurant.filter( restaurant => regex.test(restaurant.name.toLowerCase()));


      // le ternaire suivant est strictement égal à la condition suivante

      new_value == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant;
    //   if (new_value == 0) {
    //     search_restaurant.value = [];
    //   }
    //   else {
    //     search_restaurant.value = new_search_restaurant;
    //   }
     });



    //
    onMounted(makeDataRestaurant);

    // return
    return {
      data_restaurant,
      user_search_restaurant,
      search_restaurant,
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

.home .header .logo {
  width: 200px;
}

.header .wrapper--input {
  position: relative;
}

.header .wrapper--input input {
  background-color: rgba(246, 246, 246, 0.98);
  border: none;
  height: 80px;
  width: 100%;
  outline: none;
  padding-left: 20px;
}

.search {
  position: absolute;
  top: 100%;
  width: 100%;

  background-color: #fff;
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


.container--restaurant--search {
  display: flex;
  align-items: center;
  padding: 10px;
}

.container--restaurant--search:hover {
  background-color: #eeeeee;
  cursor: pointer;
}

.wrapper--img {
  width: 60px;
  height: 60px;
  margin-right: 25px;
  border-radius: 50%;
  overflow: hidden;
}

.wrapper--img img {
  height: 100%;
  width: auto;
}
</style>