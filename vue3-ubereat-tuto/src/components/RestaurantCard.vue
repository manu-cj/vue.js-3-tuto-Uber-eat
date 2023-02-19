<template>
  <div class="restaurant--card">
    <div class="restaurant--image">
    </div>
    <div class="restaurant--informations">
      <div class="top">
        <p class="name">
          subway
        </p>
        <p class="rating">
          4.5
        </p>
        <p class="time">9 min
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RestaurantCard.vue"
}
</script>

<style scoped>
.restaurant--card {
  width: 32%;
  height: 30vh;
}

.restaurant--image {
  background-image: url(../assets/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==.webp);
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
}

.restaurant--informations .top {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>