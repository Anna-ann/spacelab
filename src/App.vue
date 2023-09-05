<template>
    <div id="app">
      <Navbar />
      <router-view />
    <button class="scroll-to-top-button" @click="scrollToTop" v-if="showScrollToTopButton">
      <i class="bi bi-arrow-up-circle-fill"></i>
    </button>
  </div>
  </template>
  
  <script>
import Navbar from './components/shared/Navbar.vue';

  export default {
    name: 'App',
    components: { Navbar },
    data() {
    return {
      showScrollToTopButton: false,
    };
  },methods: {

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },

    handleScroll() {
      this.showScrollToTopButton = window.scrollY > 300;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
  <style>
  @import "/src/style.css";


    .scroll-to-top-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: none;
      background-color: #FF6B00;
      color: #fff;
      border: none;
      border-radius: 50%;
      padding: 10px;
      font-size: 24px;
      cursor: pointer;
      z-index: 1000;
    }
    
    .scroll-to-top-button i {
      vertical-align: middle;
    }
    
  </style>
  