import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/Lokasi.vue';
import Cuaca from '../components/Cuaca.vue';
import Stopwatch from '../components/Stopwatch.vue';
import Game from '../components/Game.vue';

const routes = [
  { path: '/', component: Game},
  { path: '/stopwatch', component: Stopwatch},
  { path: '/cuaca', component: Cuaca },
  { path: '/lokasi', component: Lokasi },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;