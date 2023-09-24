<template>
    <div id="app">
      <Navbar />
      <router-view />
  </div>
  </template>
  
  <script>
import Navbar from './components/shared/Navbar.vue'

  export default {
    name: 'App',
    components: { Navbar },
};
</script>
  <style>
  @import "/src/style.css";
    
  </style>
  