<template>
    <div>
      <h1>Rate the quality of our work</h1>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div
            v-for="(image, index) in imageList"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <img :src="image" class="mx-auto d-block w-50" alt="Slide {{ index + 1 }}">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageList: [
          "src/assets/3d/gallery/1.jpg",
          "src/assets/3d/gallery/2.jpg",
          "src/assets/3d/gallery/3.jpg",
          "src/assets/3d/gallery/4.jpg",
          "src/assets/3d/gallery/5.jpg",
        ],
      };
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  