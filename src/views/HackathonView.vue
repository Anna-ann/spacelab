<template>
  <div>
    <Hero />
    <Map />
  </div>
</template>

<script>
import Hero from '/src/components/hackathon/Hero.vue';
import Map from '/src/components/hackathon/Map.vue';

export default {
  components: {
    Hero,
    Map,
  },
};
</script>
