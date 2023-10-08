<template>
    <div>
      <h2 class="section-title">Fire Monitoring Map</h2>
      <div class="legend">
        <div class="legend-item">
          <div class="legend-color" style="background-color: var(--danger-color)"></div>
          High Temperature & Dry Soil
        </div>
        <!-- Add more legend items as needed -->
      </div>
      <GmapMap
        :center="{ lat: 48.0196, lng: 66.9237 }"
        :zoom="5"
        style="width: 100%; height: 600px; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"
      >
        <MapRegion
          v-for="(region, index) in regions"
          :key="index"
          :position="region.position"
          :color="region.color"
        />
      </GmapMap>
    </div>
  </template>
  
  <script>
  import { GmapMap } from 'vue2-google-maps';
  import MapRegion from '/src/components/MapRegion.vue';  // Custom component for color coding
  
  export default {
    components: {
      GmapMap,
      MapRegion,
    },
    data() {
      return {
        regions: [
          { position: { lat: 48.0196, lng: 66.9237 }, color: 'red' },
          // Add more regions based on your data
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Existing styles */
  
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
  }
  
  .legend-color {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    .legend {
      flex-direction: column;
    }
  
    .legend-item {
      margin-bottom: 8px;
    }
  }
  
  </style>