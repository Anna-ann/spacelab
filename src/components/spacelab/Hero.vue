<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h2>{{ $t('hero.spaceStarts') }}</h2>
          <p>{{ $t('hero.spaceStartsDescription') }}</p>
        </div>
        <div class="col-lg-8">
          <img src="/src/assets/hero-bg.png" alt="Hero Image" class="img-fluid">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    isDarkTheme: Boolean,
  },
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  text-align: center;
  background-color: var(--bg-color);
}

.card {
  background-color: var(--card-bg-color) !important;
  color: var(--text-color) !important;
  text-align: justify;
  color: #FAFAFA;
  border: none;
  display: flex;
}

.hero p {
  margin-bottom: 0;
}

.hero .icon h4 {
  font-weight: bold;
  color: #FF6B00;
}

.card:hover {
  text-align: justify;
  color: #FF6B00;
}

.card img {
  width: 50px;
}

.card-image {
  margin-right: 15px;
}

.card-title {
  font-size: 1.5em;
}

.card-text {
  margin: 10% 0;

}
</style>
