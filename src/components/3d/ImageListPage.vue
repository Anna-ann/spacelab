<template>
    <div class="image-list-page">
      <div class="image-list">
        <ul>
          <li v-for="(item, index) in itemList" :key="index" @mouseover="changeImage(index)">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="image-display">
        <img :src="currentImage" alt="Displayed Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        itemList: [
          { title: "Education", image: "/src/assets/education.jpg" },
          { title: "Medicine", image: "/src/assets/medicine.jpg" },
          { title: "Industry", image: "/src/assets/industry.jpg" },
          { title: "Aerospace", image: "/src/assets/space.jpg" },
          { title: "Toy Manufacturing", image: "/src/assets/toys.jpg" },
          { title: "Prototype Development", image: "/src/assets/prototypes.jpg" },
        ],
        currentImage: "/src/assets/education.jpg",
      };
    },
    methods: {
      changeImage(index) {
        this.currentImage = this.itemList[index].image;
      },
    },
  };
  </script>
  
  <style scoped>
  .image-list-page {
    display: flex;
  }
  
  .image-list {
    width: 30%;
    padding: 20px;
  }
  
  .image-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .image-list li {
    cursor: pointer;
    padding: 5px;
  }
  
  .image-display {
    flex: 1;
    padding: 20px;
  }
  
  .image-display img {
    max-width: 100%;
  }
  </style>
  