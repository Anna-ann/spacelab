import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomeView.vue'
import Space3D from '../views/Space3DView.vue'
import SpaceIoT from '../views/SpaceIoTView.vue'
import SpaceCUBS from '../views/SpaceCUBSView.vue'
import Hackathon from '../views/HackathonView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/space3d',
    name: 'Space3D',
    component: Space3D
  },

  {
    path: '/spaceiot',
    name: 'SpaceIoT',
    component: SpaceIoT
  },

  {
    path: '/spacecubs',
    name: 'SpaceCUBS',
    component: SpaceCUBS
  },
  {
    path: '/hackathon',
    name: 'Hackathon',
    component: Hackathon
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
