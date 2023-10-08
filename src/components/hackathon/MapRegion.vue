<!-- src/components/MapRegion.vue -->
<template>
    <GmapMarker :position="position" :icon="getMarkerIcon" />
  </template>
  
  <script>
  export default {
    props: {
      position: Object,
      color: String,
    },
    methods: {
      getMarkerIcon() {
        return {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: this.color,
          fillOpacity: 0.8,
          scale: 10,
          strokeWeight: 0,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Marker styling */
  .gmap-marker {
    width: 20px;
    height: 20px;
    background-color: var(--danger-color); /* Red for high temperature and dry soil */
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  /* Additional styling for the marker, adjust as needed */
  </style>
    