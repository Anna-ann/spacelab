<template>
  <section class="application">
    <h1>{{ $t('applicationSection.heading') }}</h1>
    <div class="image-list-page">
      <div class="image-list">
        <ul>
          <li @mouseover="changeImage(0)" class="list-item">{{ $t('applicationSection.education') }}</li>
          <li @mouseover="changeImage(1)" class="list-item">{{ $t('applicationSection.medicine') }}</li>
          <li @mouseover="changeImage(2)" class="list-item">{{ $t('applicationSection.industry') }}</li>
          <li @mouseover="changeImage(3)" class="list-item">{{ $t('applicationSection.aerospace') }}</li>
          <li @mouseover="changeImage(4)" class="list-item">{{ $t('applicationSection.toysManufacturing') }}</li>
          <li @mouseover="changeImage(5)" class="list-item">{{ $t('applicationSection.prototypeDevelopment') }}</li>
        </ul>
      </div>
      <div class="image-display">
        <img :src="currentImage" :alt="$t('applicationSection.displayedImage')" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentImage: "/src/assets/application/1.png",
    };
  },
  methods: {
    changeImage(index) {
      const images = [
        "/src/assets/application/1.png",
        "/src/assets/application/2.png",
        "/src/assets/application/3.png",
        "/src/assets/application/4.png",
        "/src/assets/application/5.png",
        "/src/assets/application/6.png",
      ];
      this.currentImage = images[index];
    },
  },
};
</script>


<style scoped>
.image-list-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.image-list {
  text-align: center;
  width: 30%;
  justify-content: flex-start;
}

.image-list ul {
  list-style-type: none;
  padding: 0;
  margin-right: 20px; 
}

.list-item {
  text-align: center;
  cursor: pointer;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  background-color: #FF6B00;
  margin-bottom: 30px;
  transition: background-color 0.2s ease-in-out;
}

.list-item:hover {
  background-color: #ff7700; 
  box-shadow: 0px 0px 20px rgba(221, 221, 221, 0.8);
}

.image-display {
  flex: 1;
  padding: 0 20px;
  border-radius: 10px;
}

.image-display img {
  max-width: 75%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
