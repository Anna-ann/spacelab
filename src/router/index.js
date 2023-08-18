import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Space3D from '../views/Space3DView.vue'
import SpaceIoT from '../views/SpaceIoTView.vue'
import SpaceCUBS from '../views/SpaceCUBSView.vue'

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
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
