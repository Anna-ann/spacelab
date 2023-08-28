<template>
  <section class="application">
    <h1>Application</h1>
    <div class="image-list-page">
      <div class="image-list">
        <ul>
          <li
            v-for="(item, index) in itemList"
            :key="index"
            @mouseover="changeImage(index)"
            class="list-item"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="image-display">
        <img :src="currentImage" alt="Displayed Image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        { title: "Education", image: "src/assets/application/1.png" },
        { title: "Medicine", image: "src/assets/application/2.png" },
        { title: "Industry", image: "src/assets/application/3.png" },
        { title: "Aerospace", image: "src/assets/application/4.png" },
        { title: "Toys Manufacturing", image: "src/assets/application/5.png" },
        { title: "Protorype Development", image: "src/assets/application/6.png" },
      ],
      currentImage: "src/assets/application/1.png", 
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
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.image-list {
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
