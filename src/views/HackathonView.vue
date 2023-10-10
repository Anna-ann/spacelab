<template>
  <div>
    <Hero />
    <Map />
    <MapComponent />
    <Presentation />
  </div>
</template>

<script>
import Hero from '/src/components/hackathon/Hero.vue';
import Map from '/src/components/hackathon/Map.vue';
import MapComponent from '../components/hackathon/MapComponent.vue';
import Presentation from '/src/components/hackathon/Presentation.vue';

export default {
  components: {
    Hero,
    Map,
    MapComponent,
    Presentation,
  },
};
</script>
