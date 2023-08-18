<template>
  <section class="problem-solutions">
    <div class="container">
      <h1>Problems and Solutions</h1>
      <ThreeColumnSection :problems="problems" :solutions="solutions" :imageSrc="imageSrc" />
    </div>
  </section>
</template>

<script>
import ThreeColumnSection from './ThreeColumnSection.vue';

export default {
  name: 'Problems',
  components: { ThreeColumnSection },
  data() {
    return {
      problems: [
        'Production halted due to broken part and lack of technical support',
        'Limited network coverage, high costs, and data unavailability across wide distances',
        'Data unavailability across wide distances, lack of info for remote military & civil operations, and the need for constant monitoring of resources',
      ],
      solutions: [
        'In-house industrial 3D printers with rapid replacement and technical support',
        'Expanded network coverage, affordable pricing with high quality, and a comprehensive Satellite IoT service featuring regional sensors and data processing algorithms',
        'Cloud data availability with API for data processing and the launch of CIS Insurance company for risk reassurance',
      ],
      imageSrc: 'src/assets/problems.png', 
    };
  },
};
</script>

<style scoped>
.problem-solutions {
  padding: 4rem 0;
}
</style>
