<template>
  <div class="home-view">
    <Hero />
    <About 
      :isDarkTheme="isDarkTheme"
      :bgColor="bgColor"
      :textColor="textColor"
      :cardBgColor="cardBgColor"
    />
    <Problems />
    <Services />
    <Team />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Hero from '../components/spacelab/Hero.vue';
import About from '../components/spacelab/About.vue';
import Problems from '../components/spacelab/Problems.vue'
import Services from '../components/spacelab/Services.vue';
import Team from '../components/spacelab/Team.vue';
import Contact from '../components/spacelab/Contact.vue';
import Footer from '../components/shared/Footer.vue';
</script>

<style scoped>
</style>
