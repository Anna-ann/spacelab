<template>
  <div class="three-column-section">
    <div class="column">
      <div class="content">
        <p v-for="(problem, index) in problems" :key="index" class="paragraph">{{ problem }}</p>
      </div>
    </div>
    <div class="column image-column">
      <div class="content">
        <img :src="imageSrc" alt="Image" />
      </div>
    </div>
    <div class="column">
      <div class="content">
        <p v-for="(solution, index) in solutions" :key="index" class="paragraph">{{ solution }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeColumnSection',
  props: {
    problems: Array,
    solutions: Array,
    imageSrc: String,
  },
};
</script>

<style scoped>
.three-column-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.column {
  flex: 1;
  padding: 0 20px;
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}

.paragraph {
  margin-bottom: 3.5rem;
}
</style>
