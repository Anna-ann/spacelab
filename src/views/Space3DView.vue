<template>
    <div class="space3d-view">
      <Hero />
      <Products />
      <Gallery />
      <Application />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </template>
  
  <script>
  import Hero from '../components/3d/Hero.vue';  
  import Products from '../components/3d/Products.vue';
  import Application from '../components/3d/Application.vue'
  import Gallery from '../components/3d/Gallery.vue';
  import Testimonials from '../components/3d/Testimonials.vue';
  import Contact from '../components/3d/Contact.vue';
  import Footer from '../components/shared/Footer.vue';
  
  export default {
    components: {
    Products,
    Gallery,
    Application,
    Testimonials,
    Contact,
    Footer,
    
},
  };
  </script>
  