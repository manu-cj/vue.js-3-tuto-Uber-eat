import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from "@/components/HomePage.vue";
import RestaurantList from "@/components/RestaurantList.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/restaurant', component: RestaurantList},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app')
