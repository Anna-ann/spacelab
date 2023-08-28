<template>
    <div>
        <Hero />
        <About />
        <Advantage />
        <Roadmap />
        <Partners />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Hero from '../components/iot/Hero.vue';
import About from '../components/iot/About.vue';
import Advantage from '../components/iot/Advantage.vue';
import Roadmap from '../components/iot/Roadmap.vue';
import Partners from '../components/iot/Partners.vue';
  import Contact from '../components/shared/Contact.vue';
import Footer from '../components/shared/Footer.vue';

export default {
  name: 'SpaceIoT',
  components: {
    Hero,
    About,
    Advantage,
    Roadmap,
    Partners,
    Contact,
    Footer,
    
},
};
</script>

<style>

</style>